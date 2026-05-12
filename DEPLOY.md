# Deployment Guide - MyPortfolio to Vercel

This guide provides step-by-step instructions to deploy your portfolio to Vercel.

## Prerequisites

- GitHub account
- Vercel account (free tier available)
- Git installed on your machine
- Code repository pushed to GitHub

## Step 1: Push Your Project to GitHub

### 1.1 Initialize Git Repository (if not already done)
```bash
cd c:\Users\akhil\Desktop\MyPortfolio
git init
```

### 1.2 Add All Files
```bash
git add .
```

### 1.3 Create Initial Commit
```bash
git commit -m "Initial portfolio commit - ready for Vercel deployment"
```

### 1.4 Add Remote Repository
```bash
git remote add origin https://github.com/YOUR_USERNAME/MyPortfolio.git
```
Replace `YOUR_USERNAME` with your actual GitHub username.

### 1.5 Push to GitHub
```bash
git branch -M main
git push -u origin main
```

## Step 2: Deploy on Vercel

### 2.1 Visit Vercel Website
- Go to [vercel.com](https://vercel.com)
- Click **"Sign Up"** or **"Sign In"** with your GitHub account

### 2.2 Create New Project
- Click **"New Project"** button
- Select **GitHub** as your source
- Authorize Vercel to access your GitHub repositories
- Search for and select **MyPortfolio** repository

### 2.3 Configure Project Settings

When prompted to configure your project:

**Framework Preset:** Vite  
**Build Command:** `cd frontend && npm run build`  
**Output Directory:** `frontend/dist`  
**Install Command:** `npm install`

These settings are already configured in your `vercel.json` file.

### 2.4 Environment Variables (Optional)

If you have backend API calls, add environment variables:

**Name:** `VITE_API_URL`  
**Value:** `https://your-api-domain.com` (or your backend URL)

Click **"Add"** to confirm.

### 2.5 Deploy
- Click **"Deploy"** button
- Wait for the deployment to complete (usually 2-5 minutes)
- You'll receive a unique Vercel URL (e.g., `https://myportfolio-xxxxx.vercel.app`)

## Step 3: Custom Domain (Optional)

### 3.1 Add Domain
- Go to your project settings on Vercel
- Click **"Domains"**
- Click **"Add"**
- Enter your domain name
- Follow DNS configuration instructions

## Step 4: Verify Deployment

### 4.1 Test Your Portfolio
- Visit your Vercel URL in a browser
- Check all pages load correctly:
  - ✅ Home page
  - ✅ About page (profile image, resume button)
  - ✅ Projects page
  - ✅ Contact page
  - ✅ Navbar links and theme toggle
  - ✅ Resume download functionality

### 4.2 Test Resume Download
- Click "Resume" in the Navbar or About page
- PDF should download or open in a new tab

### 4.3 Test Light/Dark Theme
- Click theme toggle button
- Verify all text is visible in both themes
- Check colors and contrast

## Step 5: Continuous Deployment

Your portfolio is now set up for **automatic deployment**:
- Every push to the `main` branch triggers a new deployment
- Vercel shows deployment status in real-time
- Previous deployments can be rolled back anytime

### 5.1 Make Future Updates
```bash
# Make changes locally
git add .
git commit -m "Update portfolio with new projects"
git push origin main
# Vercel automatically deploys!
```

## Troubleshooting

### Build Failed Error
**Solution:** Make sure Node.js dependencies are installed:
```bash
cd frontend
npm install
cd ..
```

### Resume PDF Not Found
**Solution:** Verify `resume.pdf` exists in:
```
frontend/public/resume.pdf
```

### Assets Not Loading
**Solution:** Check that public files are in the correct location:
```
frontend/public/
  ├── resume.pdf
  ├── profile.png
  └── ...
```

### Light Theme Text Not Visible
**Solution:** CSS theme variables are configured. Hard refresh browser:
```
Windows: Ctrl + Shift + R
Mac: Cmd + Shift + R
```

### API Calls Not Working
**Solution:** If using backend API, ensure:
1. Backend is deployed and accessible
2. CORS is properly configured on backend
3. `VITE_API_URL` environment variable is set correctly

## Project Structure for Deployment

```
MyPortfolio/
├── frontend/              # React Vite app
│   ├── src/              # Source code
│   ├── public/           # Static files (resume.pdf, profile.png)
│   ├── dist/             # Built files (created during build)
│   ├── package.json      # Dependencies
│   ├── vite.config.js    # Vite configuration
│   └── ...
├── vercel.json           # Vercel deployment config
├── .gitignore            # Git ignore patterns
├── DEPLOY.md             # This file
└── ...
```

## Performance Tips

1. **Images**: Convert profile.png to WebP for faster loading
2. **Compression**: Ensure PDF is optimized
3. **Lazy Loading**: Implement for projects/images if needed
4. **Analytics**: Add Vercel Analytics to monitor performance

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Build Guide](https://vitejs.dev/guide/build.html)
- [React Best Practices](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)

## Support

If you encounter any issues:
1. Check Vercel deployment logs
2. Review browser console errors
3. Verify all files are correctly placed
4. Ensure dependencies are installed

---

**Deployment Status:** ✅ Ready for Vercel  
**Last Updated:** May 12, 2026  
**Portfolio by:** Akhilesh Chaudhary
