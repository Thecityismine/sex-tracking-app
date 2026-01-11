export type Entry = {
  id: string
  date: string
  created_at: string
  note: string | null
}

const STORAGE_KEY = 'tracker_entries_v1'

const canUseStorage = () => typeof window !== 'undefined' && !!window.localStorage

const sortEntries = (entries: Entry[]) =>
  [...entries].sort((a, b) => b.date.localeCompare(a.date))

const readEntries = (): Entry[] => {
  if (!canUseStorage()) return []
  const raw = window.localStorage.getItem(STORAGE_KEY)
  if (!raw) return []

  try {
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed as Entry[]
  } catch {
    return []
  }
}

const writeEntries = (entries: Entry[]) => {
  if (!canUseStorage()) return
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entries))
}

const generateId = () => {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID()
  }
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`
}

export const listEntries = async (): Promise<Entry[]> => {
  return sortEntries(readEntries())
}

export const createEntry = async (date: string): Promise<Entry> => {
  const entries = readEntries()
  const existing = entries.find(entry => entry.date === date)
  if (existing) return existing

  const entry: Entry = {
    id: generateId(),
    date,
    created_at: new Date().toISOString(),
    note: null,
  }

  const nextEntries = sortEntries([entry, ...entries])
  writeEntries(nextEntries)
  return entry
}

export const updateEntryNote = async (
  id: string,
  note: string | null
): Promise<Entry | null> => {
  const entries = readEntries()
  let updated: Entry | null = null

  const nextEntries = entries.map(entry => {
    if (entry.id !== id) return entry
    updated = { ...entry, note }
    return updated
  })

  if (updated) {
    writeEntries(sortEntries(nextEntries))
  }

  return updated
}
