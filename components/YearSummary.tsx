'use client'

import { Entry } from '@/lib/storage'
import { getYearSummary } from '@/lib/calculations'

interface YearSummaryProps {
  entries: Entry[]
  selectedYear: number
  onYearChange: (year: number) => void
}

export default function YearSummary({ entries, selectedYear, onYearChange }: YearSummaryProps) {
  const { loggedDays, totalDays, longestStreak, activeMonths } = getYearSummary(entries, selectedYear)
  const completionRate = totalDays > 0 ? ((loggedDays / totalDays) * 100).toFixed(1) : '0.0'
  const progressPct = totalDays > 0 ? Math.min(100, (loggedDays / totalDays) * 100) : 0

  return (
    <div className="w-full bg-card rounded-xl p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
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

      {/* Big count */}
      <div className="text-center mb-5">
        <div className="text-5xl font-bold">{loggedDays}</div>
        <div className="text-muted text-sm mt-1">Total Completions</div>
      </div>

      {/* Progress bar */}
      <div className="relative h-3 bg-background rounded-full overflow-hidden mb-3">
        <div
          className="absolute left-0 top-0 h-full bg-accent-red rounded-full transition-all duration-500"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      {/* Rate and day count row */}
      <div className="flex justify-between text-sm text-muted mb-5">
        <span>{completionRate}%</span>
        <span>{loggedDays} / {totalDays} Days</span>
      </div>

      {/* Streak and active months */}
      <div className="flex justify-between text-sm">
        <span>🔥 <span className="font-semibold">{longestStreak} Day Streak</span></span>
        <span>📅 <span className="font-semibold">{activeMonths} Active Month{activeMonths !== 1 ? 's' : ''}</span></span>
      </div>
    </div>
  )
}
