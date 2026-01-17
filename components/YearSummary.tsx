'use client'

import { Entry } from '@/lib/storage'
import { getYearSummary } from '@/lib/calculations'

interface YearSummaryProps {
  entries: Entry[]
  selectedYear: number
  onYearChange: (year: number) => void
}

export default function YearSummary({ entries, selectedYear, onYearChange }: YearSummaryProps) {
  const { loggedDays } = getYearSummary(entries, selectedYear)
  const baseDays = 365
  const progressPercentage = Math.min(100, (loggedDays / baseDays) * 100)
  
  return (
    <div className="w-full bg-card rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => onYearChange(selectedYear - 1)}
          className="p-2 hover:bg-background rounded-lg transition-colors"
          aria-label="Previous year"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <h3 className="text-lg font-semibold">Year Summary {selectedYear}</h3>
        
        <button
          onClick={() => onYearChange(selectedYear + 1)}
          className="p-2 hover:bg-background rounded-lg transition-colors"
          aria-label="Next year"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      {/* Progress bars */}
      <div className="space-y-3">
        {/* Red bar for logged days */}
        <div className="relative h-8 bg-background rounded-lg overflow-hidden">
          <div 
            className="absolute left-0 top-0 h-full bg-accent-red transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-semibold">
            {loggedDays}
          </div>
        </div>
        
        {/* Blue bar for total days */}
        <div className="relative h-8 bg-background rounded-lg overflow-hidden">
          <div 
            className="absolute left-0 top-0 h-full bg-accent-blue"
            style={{ width: '100%' }}
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-semibold">
            {baseDays}
          </div>
        </div>
      </div>
    </div>
  )
}
