# Project Structure

Complete overview of all files and their purposes.

## Root Files

```
.
package.json              # Dependencies and scripts
tsconfig.json             # TypeScript configuration
next.config.js            # Next.js configuration
tailwind.config.js        # Tailwind CSS theme
postcss.config.js         # PostCSS configuration
.gitignore                # Git ignore rules
.env.local                # Firebase environment variables
README.md                 # Main documentation
DEPLOYMENT.md             # Deployment instructions
QUICKSTART.md             # Quick start guide
```

## App Directory (`/app`)

```
app/
  layout.tsx              # Root layout with metadata
  page.tsx                # Main dashboard page
  globals.css             # Global styles with Tailwind
```

### `page.tsx`
- Main dashboard logic
- State management for entries
- Handles date selection
- Reads/writes Firestore data
- Orchestrates all components

## Components Directory (`/components`)

```
components/
  CalendarGrid.tsx        # Monthly calendar view
  StatCards.tsx           # Statistics cards
  YearSummary.tsx         # Year progress bars
  NotesPanel.tsx          # Note editor and viewer
```

## Library Directory (`/lib`)

```
lib/
  firebase.ts             # Firebase client
  entries.ts              # Firestore CRUD helpers
  storage.ts              # Entry type and local helpers (legacy)
  calculations.ts         # Statistics calculations
```

### `firebase.ts`
- Initializes Firebase app
- Exports Firestore client

### `entries.ts`
- listEntries()
- createEntry()
- updateEntryNote()
- deleteEntry()

## Firestore Data

Collection: `entries`

Fields:
- `date` (YYYY-MM-DD)
- `created_at` (ISO timestamp)
- `note` (string or null)
