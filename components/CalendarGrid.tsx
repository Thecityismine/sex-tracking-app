'use client'

import { 
  startOfMonth, 
  endOfMonth, 
  eachDayOfInterval, 
  format, 
  isSameMonth,
  getDay,
  addMonths,
  subMonths
} from 'date-fns'
import { Entry } from '@/lib/storage'

interface CalendarGridProps {
  currentDate: Date
  entries: Entry[]
  onDateClick: (date: Date) => void
  onMonthChange: (date: Date) => void
}

export default function CalendarGrid({ 
  currentDate, 
  entries, 
  onDateClick,
  onMonthChange 
}: CalendarGridProps) {
  const monthStart = startOfMonth(currentDate)
  const monthEnd = endOfMonth(currentDate)
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd })
  
  // Get the starting day of the week (0 = Sunday, 1 = Monday, etc.)
  const startingDayOfWeek = getDay(monthStart)
  
  // Create array of empty slots for days before month starts
  const emptySlots = Array(startingDayOfWeek).fill(null)
  
  const hasEntry = (date: Date) => {
    const dateStr = format(date, 'yyyy-MM-dd')
    return entries.some(entry => entry.date === dateStr)
  }
  
  const goToPreviousMonth = () => {
    onMonthChange(subMonths(currentDate, 1))
  }
  
  const goToNextMonth = () => {
    onMonthChange(addMonths(currentDate, 1))
  }
  
  return (
    <div className="w-full">
      {/* Month Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={goToPreviousMonth}
          className="p-2 hover:bg-card rounded-lg transition-colors"
          aria-label="Previous month"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <h2 className="text-2xl font-semibold">
          {format(currentDate, 'MMMM yyyy')}
        </h2>
        
        <button
          onClick={goToNextMonth}
          className="p-2 hover:bg-card rounded-lg transition-colors"
          aria-label="Next month"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      {/* Day of Week Headers */}
      <div className="grid grid-cols-7 gap-2 mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center text-muted text-sm font-medium py-2">
            {day}
          </div>
        ))}
      </div>
      
      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2">
        {emptySlots.map((_, index) => (
          <div key={`empty-${index}`} className="aspect-square" />
        ))}
        
        {daysInMonth.map(day => (
          <button
            key={day.toISOString()}
            onClick={() => onDateClick(day)}
            className="aspect-square bg-card rounded-lg hover:bg-opacity-80 transition-all relative flex items-center justify-center"
          >
            <span className="text-lg">{format(day, 'd')}</span>
            {hasEntry(day) && (
              <div className="absolute top-1 right-1 w-2 h-2 bg-accent-red rounded-full" />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
