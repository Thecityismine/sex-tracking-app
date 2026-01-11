'use client'

import { Entry } from '@/lib/storage'
import {
  getTotalThisMonth,
  getTotalThisWeek,
  getDaysSinceLast,
  getLongestGap
} from '@/lib/calculations'

interface StatCardsProps {
  entries: Entry[]
  currentDate: Date
}

export default function StatCards({ entries, currentDate }: StatCardsProps) {
  const totalThisMonth = getTotalThisMonth(entries, currentDate)
  const totalThisWeek = getTotalThisWeek(entries, currentDate)
  const daysSinceLast = getDaysSinceLast(entries)
  const longestGap = getLongestGap(entries)
  
  return (
    <div className="grid grid-cols-2 gap-4 w-full">
      <div className="bg-card rounded-xl p-6">
        <div className="text-4xl font-bold mb-2">{totalThisMonth}</div>
        <div className="text-muted">Total this month</div>
      </div>
      
      <div className="bg-card rounded-xl p-6">
        <div className="text-4xl font-bold mb-2">{totalThisWeek}</div>
        <div className="text-muted">Total this week</div>
      </div>
      
      <div className="bg-card rounded-xl p-6">
        <div className="text-4xl font-bold mb-2">
          {daysSinceLast !== null ? daysSinceLast : '-'}
        </div>
        <div className="text-muted">Days since last</div>
      </div>
      
      <div className="bg-card rounded-xl p-6">
        <div className="text-4xl font-bold mb-2">{longestGap}</div>
        <div className="text-muted">Longest gap (days)</div>
      </div>
    </div>
  )
}
