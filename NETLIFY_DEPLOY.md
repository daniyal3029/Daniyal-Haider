# Netlify Deployment Guide

## Quick Deploy Steps

### Option 1: Deploy via Netlify CLI (Recommended)

1. **Install Netlify CLI:**
```bash
npm install -g netlify-cli
```

2. **Login to Netlify:**
```bash
netlify login
```

3. **Deploy:**
```bash
netlify deploy --prod
```

### Option 2: Deploy via Netlify Dashboard

1. Go to [Netlify](https://app.netlify.com/)
2. Click "Add new site" → "Import an existing project"
3. Choose GitHub and select `daniyal3029/Daniyal-Haider`
4. Build settings (auto-detected):
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

## Environment Variables

After deployment, add these in Netlify:

1. Go to Site settings → Environment variables
2. Add:
   - `EMAIL_USER` = `daniyalhaider2273@gmail.com`
   - `EMAIL_PASS` = `your-gmail-app-password`
3. Redeploy site

## Files Created for Netlify

- `netlify.toml` - Build configuration and redirects
- `netlify/functions/contact.js` - Serverless function for contact form

## What's Different from Vercel

- Functions in `netlify/functions/` instead of `api/`
- Uses `netlify.toml` instead of `vercel.json`
- Same functionality, different structure

Your site will be live at: `https://your-site-name.netlify.app`
