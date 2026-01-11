'use client'

import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import { createEntry, listEntries, updateEntryNote, Entry } from '@/lib/storage'
import CalendarGrid from '@/components/CalendarGrid'
import StatCards from '@/components/StatCards'
import YearSummary from '@/components/YearSummary'
import NotesPanel from '@/components/NotesPanel'

export default function DashboardPage() {
  const [entries, setEntries] = useState<Entry[]>([])
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedEntry, setSelectedEntry] = useState<Entry | null>(null)
  const [loading, setLoading] = useState(true)

  // Fetch entries from local storage
  useEffect(() => {
    fetchEntries()
  }, [])

  const fetchEntries = async () => {
    try {
      const data = await listEntries()
      setEntries(data)
    } catch (error) {
      console.error('Error fetching entries:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDateClick = async (date: Date) => {
    const dateStr = format(date, 'yyyy-MM-dd')
    const existingEntry = entries.find(e => e.date === dateStr)

    if (existingEntry) {
      // Show note editor
      setSelectedDate(date)
      setSelectedEntry(existingEntry)
    } else {
      // Create new entry
      try {
        await createEntry(dateStr)
        const data = await listEntries()
        setEntries(data)
      } catch (error) {
        console.error('Error creating entry:', error)
      }
    }
  }

  const handleSaveNote = async (note: string) => {
    if (!selectedDate || !selectedEntry) return

    try {
      const updated = await updateEntryNote(selectedEntry.id, note)
      if (!updated) return

      // Update local state
      setEntries(entries.map(e => 
        e.id === selectedEntry.id ? { ...e, note } : e
      ))

      // Close modal
      setSelectedDate(null)
      setSelectedEntry(null)
    } catch (error) {
      console.error('Error saving note:', error)
    }
  }

  const handleCloseNote = () => {
    setSelectedDate(null)
    setSelectedEntry(null)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    )
  }

  return (
    <main className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold mb-8">Tracker</h1>
        
        <CalendarGrid
          currentDate={currentDate}
          entries={entries}
          onDateClick={handleDateClick}
          onMonthChange={setCurrentDate}
        />

        <StatCards entries={entries} currentDate={currentDate} />

        <YearSummary
          entries={entries}
          selectedYear={selectedYear}
          onYearChange={setSelectedYear}
        />

        <NotesPanel
          entries={entries}
          selectedDate={selectedDate}
          selectedEntry={selectedEntry}
          onSaveNote={handleSaveNote}
          onClose={handleCloseNote}
        />
      </div>
    </main>
  )
}
