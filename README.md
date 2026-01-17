# Tracker App

A minimal, dark-themed personal tracking web app built with Next.js, Tailwind CSS, and Firebase Firestore.

## Features

- Monthly calendar view with activity tracking
- Tap days to toggle entries on/off
- Red dots indicate logged days
- Monthly and weekly statistics
- Days since last activity
- Longest gap tracking
- Year summary progress bars
- Optional notes per entry
- Cloud persistence (Firestore)
- Dark theme only
- Mobile responsive

## Tech Stack

- Frontend: Next.js 14 (App Router)
- Styling: Tailwind CSS
- Storage: Firebase Firestore
- Hosting: CodeSandbox (or any Next.js host)
- Date Library: date-fns

## Setup Instructions

### 1. Clone or Download

```bash
cd sex-tracker-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Firebase Setup

Create a Firebase project, enable Firestore, and set these environment variables:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to CodeSandbox

1. Go to [codesandbox.io](https://codesandbox.io)
2. Import your GitHub repository or upload the folder
3. Add the Firebase env vars in the sandbox settings
4. Run `npm install` and `npm run dev`
5. Share the preview URL

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
app/
  globals.css
  layout.tsx
  page.tsx
components/
  CalendarGrid.tsx
  StatCards.tsx
  YearSummary.tsx
  NotesPanel.tsx
lib/
  firebase.ts
  entries.ts
  storage.ts
  calculations.ts
package.json
```

## Color Theme

- Background: #0b0b0f
- Cards: #15151c
- Text: #eaeaf0
- Muted: #9a9aa3
- Accent Red: #ff3b3b
- Accent Blue: #3b82f6

## Storage Format

Entries are stored in Firestore under the `entries` collection with:

- date (YYYY-MM-DD)
- created_at (ISO timestamp)
- note (string or null)

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
