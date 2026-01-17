'use client'

import { Entry } from '@/lib/storage'
import { format, parseISO } from 'date-fns'
import { useEffect, useState } from 'react'

interface NotesPanelProps {
  entries: Entry[]
  selectedDate: Date | null
  selectedEntry: Entry | null
  onSaveNote: (note: string) => void
  onDeleteEntry: () => void
  onClose: () => void
}

export default function NotesPanel({ 
  entries, 
  selectedDate, 
  selectedEntry,
  onSaveNote,
  onDeleteEntry,
  onClose 
}: NotesPanelProps) {
  const [noteText, setNoteText] = useState(selectedEntry?.note || '')
  const [showAllNotes, setShowAllNotes] = useState(false)

  useEffect(() => {
    setNoteText(selectedEntry?.note || '')
  }, [selectedEntry])
  
  const entriesWithNotes = entries.filter(e => e.note && e.note.trim() !== '')
  
  const handleSave = () => {
    onSaveNote(noteText)
  }
  
  if (showAllNotes) {
    return (
      <div className="fixed inset-0 bg-background bg-opacity-95 z-50 overflow-y-auto">
        <div className="min-h-screen p-6">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">All Notes</h2>
              <button
                onClick={() => setShowAllNotes(false)}
                className="p-2 hover:bg-card rounded-lg transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-4">
              {entriesWithNotes.length === 0 ? (
                <div className="text-center text-muted py-12">
                  No notes yet
                </div>
              ) : (
                entriesWithNotes
                  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                  .map(entry => (
                    <div key={entry.id} className="bg-card rounded-xl p-4">
                      <div className="text-sm text-muted mb-2">
                        {format(parseISO(entry.date), 'MMM d, yyyy')}
                      </div>
                      <div className="text-text">{entry.note}</div>
                    </div>
                  ))
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  if (!selectedDate) {
    return (
      <div className="w-full bg-card rounded-xl p-6">
        <button
          onClick={() => setShowAllNotes(true)}
          className="w-full py-3 bg-background hover:bg-opacity-80 rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span>View All Notes</span>
        </button>
      </div>
    )
  }
  
  return (
    <div className="fixed inset-0 bg-background bg-opacity-95 z-50 flex items-center justify-center p-6">
      <div className="bg-card rounded-xl p-6 max-w-md w-full">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">
            {format(selectedDate, 'MMM d, yyyy')}
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-background rounded-lg transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <textarea
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          placeholder="Add a note (optional)"
          className="w-full h-32 bg-background rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-accent-red mb-4"
        />
        
        <div className="flex items-center justify-between gap-3">
          <button
            onClick={onDeleteEntry}
            className="flex-1 py-3 bg-accent-red hover:bg-opacity-80 rounded-lg transition-colors font-semibold"
          >
            Delete
          </button>
          <button
            onClick={handleSave}
            className="flex-1 py-3 bg-accent-green hover:bg-opacity-80 rounded-lg transition-colors font-semibold"
          >
            Save Note
          </button>
        </div>
      </div>
    </div>
  )
}
