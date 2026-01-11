# Project Structure

Complete overview of all files and their purposes.

## Root Files

```
.
ƒ"oƒ"?ƒ"? package.json              # Dependencies and scripts
ƒ"oƒ"?ƒ"? tsconfig.json             # TypeScript configuration
ƒ"oƒ"?ƒ"? next.config.js            # Next.js configuration
ƒ"oƒ"?ƒ"? tailwind.config.js        # Tailwind CSS theme
ƒ"oƒ"?ƒ"? postcss.config.js         # PostCSS configuration
ƒ"oƒ"?ƒ"? .gitignore                # Git ignore rules
ƒ"oƒ"?ƒ"? .env.local.example        # Environment variables template (unused)
ƒ"oƒ"?ƒ"? supabase-schema.sql       # Legacy schema (optional)
ƒ"oƒ"?ƒ"? README.md                 # Main documentation
ƒ"oƒ"?ƒ"? DEPLOYMENT.md             # Deployment instructions
ƒ""ƒ"?ƒ"? QUICKSTART.md             # Quick start guide
```

## App Directory (`/app`)

```
app/
ƒ"oƒ"?ƒ"? layout.tsx                # Root layout with metadata
ƒ"oƒ"?ƒ"? page.tsx                  # Main dashboard page
ƒ""ƒ"?ƒ"? globals.css               # Global styles with Tailwind
```

### `layout.tsx`
- Sets up the HTML structure
- Imports global styles
- Defines metadata (title, description)
- Applies Inter font

### `page.tsx`
- Main dashboard logic
- State management for entries
- Handles date selection
- Manages local storage operations
- Orchestrates all components

### `globals.css`
- Tailwind directives
- Base styles
- Background color
- Text color

## Components Directory (`/components`)

```
components/
ƒ"oƒ"?ƒ"? CalendarGrid.tsx          # Monthly calendar view
ƒ"oƒ"?ƒ"? StatCards.tsx             # Statistics cards
ƒ"oƒ"?ƒ"? YearSummary.tsx           # Year progress bars
ƒ""ƒ"?ƒ"? NotesPanel.tsx            # Note editor and viewer
```

### `CalendarGrid.tsx`
- Renders monthly calendar grid
- Shows red dots for logged days
- Handles day clicks
- Month navigation arrows
- Day of week headers

### `StatCards.tsx`
- Four statistics cards:
  - Total this month
  - Total this week
  - Days since last
  - Longest gap
- Auto-calculates from entries
- Updates in real-time

### `YearSummary.tsx`
- Red progress bar (logged days)
- Blue progress bar (total days)
- Year navigation
- Percentage calculation

### `NotesPanel.tsx`
- Note editor modal
- View all notes list
- Save/edit functionality
- Date formatting

## Library Directory (`/lib`)

```
lib/
ƒ"oƒ"?ƒ"? storage.ts                # Local storage helpers
ƒ""ƒ"?ƒ"? calculations.ts           # Statistics calculations
```

### `storage.ts`
- Reads/writes entries from `localStorage`
- Generates entry IDs
- Exports Entry type

### `calculations.ts`
- `getTotalThisMonth()` - Counts entries in current month
- `getTotalThisWeek()` - Counts entries in current week (Mon-Sun)
- `getDaysSinceLast()` - Calculates days since last entry
- `getLongestGap()` - Finds longest gap between consecutive entries
- `getYearSummary()` - Calculates yearly progress

## Storage Format

Entries are saved as JSON in `localStorage` under the key `tracker_entries_v1`.
