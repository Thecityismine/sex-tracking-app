# Quick Start Guide

Get your tracker app running in 5 minutes.

## 1. Install Dependencies

```bash
npm install
```

## 2. Firebase Setup

1. Create a Firebase project
2. Enable Firestore Database
3. Add these environment variables in `.env.local`:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

## 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 4. Test It Out

- Click any day to log activity
- Click again to add a note
- See stats update in real-time

---

## Deploy to Production

See [DEPLOYMENT.md](./DEPLOYMENT.md) for full instructions.

**TL;DR (CodeSandbox):**
1. Go to [codesandbox.io](https://codesandbox.io)
2. Import your GitHub repo or upload the folder
3. Add Firebase env vars in sandbox settings
4. Run `npm install` and `npm run dev`

---

## What You Get

- Monthly calendar with activity dots
- Weekly and monthly statistics
- Days since last activity
- Longest gap tracking
- Year progress summary
- Optional notes per entry
- Cloud persistence (Firestore)
- Dark theme

---

## Need Help?

Check [README.md](./README.md) for full documentation.
