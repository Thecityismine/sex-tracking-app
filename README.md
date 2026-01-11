# Tracker App

A minimal, dark-themed personal tracking web app built with Next.js, Tailwind CSS, and local browser storage.

## Features

- ƒo. Monthly calendar view with activity tracking
- ƒo. Tap days to toggle entries on/off
- ƒo. Red dots indicate logged days
- ƒo. Monthly and weekly statistics
- ƒo. Days since last activity
- ƒo. Longest gap tracking
- ƒo. Year summary progress bars
- ƒo. Optional notes per entry
- ƒo. Local persistence (per browser)
- ƒo. Dark theme only
- ƒo. Mobile responsive

## Tech Stack

- **Frontend**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Storage**: Browser `localStorage`
- **Hosting**: CodeSandbox (or any Next.js host)
- **Date Library**: date-fns

## Setup Instructions

### 1. Clone or Download

```bash
cd sex-tracker-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Storage Setup

No backend or environment variables are required. Data is stored in your browser.

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to CodeSandbox

1. Go to [codesandbox.io](https://codesandbox.io)
2. Import your GitHub repository or upload the folder
3. Run `npm install` and `npm run dev`
4. Share the preview URL

## Usage

### Logging Activity

- Click any day in the calendar to log activity
- A red dot appears on logged days
- Click again to open the note editor

### Adding Notes

- Click a logged day to open the note editor
- Type your note (optional)
- Click "Save Note"

### Viewing All Notes

- Click "View All Notes" button at the bottom
- See all entries with notes in chronological order

### Navigation

- Use arrow buttons to navigate between months
- Year summary arrows to view different years
- Statistics update automatically

## File Structure

```
sex-tracker-app/
ƒ"oƒ"?ƒ"? app/
ƒ",   ƒ"oƒ"?ƒ"? globals.css
ƒ",   ƒ"oƒ"?ƒ"? layout.tsx
ƒ",   ƒ""ƒ"?ƒ"? page.tsx
ƒ"oƒ"?ƒ"? components/
ƒ",   ƒ"oƒ"?ƒ"? CalendarGrid.tsx
ƒ",   ƒ"oƒ"?ƒ"? StatCards.tsx
ƒ",   ƒ"oƒ"?ƒ"? YearSummary.tsx
ƒ",   ƒ""ƒ"?ƒ"? NotesPanel.tsx
ƒ"oƒ"?ƒ"? lib/
ƒ",   ƒ"oƒ"?ƒ"? storage.ts
ƒ",   ƒ""ƒ"?ƒ"? calculations.ts
ƒ"oƒ"?ƒ"? package.json
ƒ"oƒ"?ƒ"? tsconfig.json
ƒ"oƒ"?ƒ"? tailwind.config.js
ƒ"oƒ"?ƒ"? postcss.config.js
ƒ""ƒ"?ƒ"? next.config.js
```

## Color Theme

- Background: `#0b0b0f`
- Cards: `#15151c`
- Text: `#eaeaf0`
- Muted: `#9a9aa3`
- Accent Red: `#ff3b3b`
- Accent Blue: `#3b82f6`

## Storage Format

Entries are saved as JSON in `localStorage` under the key `tracker_entries_v1`:

```json
{
  "id": "uuid",
  "date": "YYYY-MM-DD",
  "created_at": "ISO timestamp",
  "note": "optional note"
}
```

## Future Enhancements

Potential features to add:

- PWA support for mobile installation
- Face ID / biometric lock
- Export data to CSV
- Custom app icon and name
- Data backup/restore
- Dark/light theme toggle
- Streak tracking
- Custom statistics

## License

MIT
