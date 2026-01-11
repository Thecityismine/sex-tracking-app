# Deployment Guide

## Quick Deploy to CodeSandbox

1. Go to [https://codesandbox.io](https://codesandbox.io)
2. Import your GitHub repo or upload the project folder
3. Run `npm install` and `npm run dev`
4. Share the preview URL

---

## Notes About Storage

- This build stores data in your browser via `localStorage`.
- Data will not sync across devices unless you add a backend later.
- Clearing site data or using a different browser will reset entries.

---

## Optional: Deploy Elsewhere

This is a standard Next.js app. You can deploy it to any Next.js host (Vercel, Netlify, etc.).
No environment variables are required.

---

## Troubleshooting

### Issue: Entries disappear after refresh

**Cause:** The browser cleared site data or you opened the app in another browser/device.

**Solution:** Avoid clearing site data, or add a backend if you need sync.

---

## Need Help?

Common resources:
- [Next.js Docs](https://nextjs.org/docs)
- [CodeSandbox Docs](https://codesandbox.io/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
