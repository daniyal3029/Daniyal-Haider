# Contact Form Backend - Setup Guide

## Quick Start

### 1. Install Dependencies
```bash
npm install nodemailer
```

### 2. Configure Gmail App Password

**Get Gmail App Password:**
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification** (if not already enabled)
3. Search for "App Passwords" or go to [App Passwords](https://myaccount.google.com/apppasswords)
4. Select app: **Mail**
5. Select device: **Other (Custom name)** → Enter "Portfolio Contact Form"
6. Click **Generate**
7. Copy the 16-character password (format: `xxxx xxxx xxxx xxxx`)

### 3. Create Environment File

Create `.env.local` in project root:
```env
EMAIL_USER=daniyalhaider2273@gmail.com
EMAIL_PASS=your-16-character-app-password-here
```

**Replace** `your-16-character-app-password-here` with the password from step 2.

### 4. Test Locally

```bash
npm run dev
```

Navigate to Contact section and submit a test message.

## Deployment to Vercel

### 1. Push to GitHub
```bash
git add .
git commit -m "Add contact form backend"
git push
```

### 2. Deploy to Vercel
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Import your GitHub repository
3. Click **Deploy**

### 3. Add Environment Variables in Vercel
1. Go to your project in Vercel
2. Click **Settings** → **Environment Variables**
3. Add two variables:
   - `EMAIL_USER` = `daniyalhaider2273@gmail.com`
   - `EMAIL_PASS` = `your-app-password`
4. Click **Save**
5. **Redeploy** your project for changes to take effect

## Testing

### Test Contact Form
1. Visit your deployed site
2. Fill out contact form
3. Click "Send Message"
4. Check your Gmail inbox for the message

### Expected Email Format
- **From:** Your Gmail address
- **Reply-To:** Sender's email (for easy reply)
- **Subject:** Portfolio Contact: [Sender Name]
- **Body:** Formatted HTML with sender details and message

## Troubleshooting

### "Failed to send email" Error
- **Check:** Environment variables are set correctly in Vercel
- **Check:** Gmail App Password is correct (not regular password)
- **Check:** 2-Step Verification is enabled on Gmail account

### Email Not Received
- **Check:** Spam folder
- **Check:** Gmail sending limits (500 emails/day for free accounts)
- **Check:** Vercel function logs for errors

### CORS Errors
- API endpoint includes CORS headers
- Should work from any domain

## File Structure

```
aura-bloom-main/
├── api/
│   └── contact.js          # Serverless function endpoint
├── src/
│   └── components/
│       └── ContactSection.tsx  # Updated with API integration
├── .env.local              # Local environment variables (gitignored)
├── .env.example            # Template for environment variables
└── vercel.json             # Vercel configuration
```

## Security Notes

- ✅ `.env.local` is gitignored (credentials never committed)
- ✅ Environment variables stored securely in Vercel
- ✅ API validates email format and required fields
- ✅ Rate limiting handled by Vercel (prevents spam)

## Alternative Email Services

For production with higher volume, consider:
- **SendGrid** - 100 emails/day free
- **AWS SES** - $0.10 per 1,000 emails
- **Mailgun** - 5,000 emails/month free

Update `api/contact.js` transporter configuration to use these services.
