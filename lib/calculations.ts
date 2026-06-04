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

  const uniqueDates = new Set(
    entries
      .filter(entry => isWithinInterval(parseISO(entry.date), { start: monthStart, end: monthEnd }))
      .map(entry => entry.date)
  )

  return uniqueDates.size
}

export function getTotalThisWeek(entries: Entry[], date: Date): number {
  const weekStart = startOfWeek(date, { weekStartsOn: 1 }) // Monday
  const weekEnd = endOfWeek(date, { weekStartsOn: 1 })

  const uniqueDates = new Set(
    entries
      .filter(entry => isWithinInterval(parseISO(entry.date), { start: weekStart, end: weekEnd }))
      .map(entry => entry.date)
  )

  return uniqueDates.size
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
  const uniqueDates = [...new Set(entries.map(e => e.date))]
    .map(d => parseISO(d))
    .sort((a, b) => a.getTime() - b.getTime())

  if (uniqueDates.length < 2) return 0

  let maxGap = 0

  for (let i = 1; i < uniqueDates.length; i++) {
    const gap = differenceInDays(uniqueDates[i], uniqueDates[i - 1]) - 1
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
  
  const loggedDays = new Set(
    entries
      .filter(entry => isWithinInterval(parseISO(entry.date), { start: yearStart, end: yearEnd }))
      .map(entry => entry.date)
  ).size
  
  // Total days is either days elapsed in current year, or 365/366 for past years
  const totalDays = year === today.getFullYear() 
    ? differenceInDays(today, yearStart) + 1
    : differenceInDays(yearEnd, yearStart) + 1
  
  return { loggedDays, totalDays }
}
