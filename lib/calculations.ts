import { 
  startOfWeek, 
  endOfWeek, 
  startOfMonth, 
  endOfMonth, 
  differenceInDays,
  parseISO,
  startOfYear,
  endOfYear,
  isWithinInterval
} from 'date-fns'
import { Entry } from './storage'

export function getTotalThisMonth(entries: Entry[], date: Date): number {
  const monthStart = startOfMonth(date)
  const monthEnd = endOfMonth(date)
  
  return entries.filter(entry => {
    const entryDate = parseISO(entry.date)
    return isWithinInterval(entryDate, { start: monthStart, end: monthEnd })
  }).length
}

export function getTotalThisWeek(entries: Entry[], date: Date): number {
  const weekStart = startOfWeek(date, { weekStartsOn: 1 }) // Monday
  const weekEnd = endOfWeek(date, { weekStartsOn: 1 })
  
  return entries.filter(entry => {
    const entryDate = parseISO(entry.date)
    return isWithinInterval(entryDate, { start: weekStart, end: weekEnd })
  }).length
}

export function getDaysSinceLast(entries: Entry[]): number | null {
  if (entries.length === 0) return null
  
  const sortedEntries = [...entries].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )
  
  const lastEntry = sortedEntries[0]
  const daysSince = differenceInDays(new Date(), parseISO(lastEntry.date))
  
  return daysSince
}

export function getLongestGap(entries: Entry[]): number {
  if (entries.length < 2) return 0
  
  const sortedDates = [...entries]
    .map(e => parseISO(e.date))
    .sort((a, b) => a.getTime() - b.getTime())
  
  let maxGap = 0
  
  for (let i = 1; i < sortedDates.length; i++) {
    const gap = differenceInDays(sortedDates[i], sortedDates[i - 1]) - 1
    if (gap > maxGap) {
      maxGap = gap
    }
  }
  
  return maxGap
}

export function getYearSummary(entries: Entry[], year: number): {
  loggedDays: number
  totalDays: number
} {
  const yearStart = startOfYear(new Date(year, 0, 1))
  const yearEnd = endOfYear(new Date(year, 0, 1))
  const today = new Date()
  
  const loggedDays = entries.filter(entry => {
    const entryDate = parseISO(entry.date)
    return isWithinInterval(entryDate, { start: yearStart, end: yearEnd })
  }).length
  
  // Total days is either days elapsed in current year, or 365/366 for past years
  const totalDays = year === today.getFullYear() 
    ? differenceInDays(today, yearStart) + 1
    : differenceInDays(yearEnd, yearStart) + 1
  
  return { loggedDays, totalDays }
}
