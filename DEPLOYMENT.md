# Deployment Guide

## Quick Deploy to CodeSandbox

1. Go to [https://codesandbox.io](https://codesandbox.io)
2. Import your GitHub repo or upload the project folder
3. Add Firebase env vars in sandbox settings
4. Run `npm install` and `npm run dev`
5. Share the preview URL

---

## Firebase Setup Notes

- Firestore requires rules to allow reads/writes.
- For personal use with no auth, you can use open rules during testing.
- Tighten rules later if you want privacy.

---

## Optional: Deploy Elsewhere

This is a standard Next.js app. You can deploy it to any Next.js host (Vercel, Netlify, etc.).
Remember to add Firebase env vars in your host settings.

---

## Troubleshooting

### Issue: "Missing Firebase config"

**Solution:** Verify all `NEXT_PUBLIC_FIREBASE_*` variables are set.

### Issue: "Missing or insufficient permissions"

**Solution:** Update Firestore Rules to allow reads/writes.

---

## Need Help?

Common resources:
- [Next.js Docs](https://nextjs.org/docs)
- [Firebase Docs](https://firebase.google.com/docs)
- [CodeSandbox Docs](https://codesandbox.io/docs)
