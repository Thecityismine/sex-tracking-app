import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
  where,
} from 'firebase/firestore'
import { db } from './firebase'
import type { Entry } from './storage'

const entriesRef = collection(db, 'entries')

export const listEntries = async (): Promise<Entry[]> => {
  const entriesQuery = query(entriesRef, orderBy('date', 'desc'))
  const snapshot = await getDocs(entriesQuery)

  return snapshot.docs.map(docSnap => ({
    id: docSnap.id,
    ...(docSnap.data() as Omit<Entry, 'id'>),
  }))
}

export const createEntry = async (date: string): Promise<Entry> => {
  const existingQuery = query(entriesRef, where('date', '==', date))
  const existingSnapshot = await getDocs(existingQuery)

  if (!existingSnapshot.empty) {
    const docSnap = existingSnapshot.docs[0]
    return {
      id: docSnap.id,
      ...(docSnap.data() as Omit<Entry, 'id'>),
    }
  }

  const created_at = new Date().toISOString()
  const docRef = await addDoc(entriesRef, { date, created_at, note: null })

  return { id: docRef.id, date, created_at, note: null }
}

export const updateEntryNote = async (id: string, note: string | null) => {
  await updateDoc(doc(db, 'entries', id), { note })
}

export const deleteEntry = async (id: string): Promise<void> => {
  await deleteDoc(doc(db, 'entries', id))
}
