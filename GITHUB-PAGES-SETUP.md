# GitHub Pages Setup for MAKHUNGU AI

## 🚀 Step-by-Step Instructions

### 1. Enable GitHub Pages in Repository Settings

1. Go to your repository: https://github.com/NewaySecurity/Makhungu-AI
2. Click on **Settings** tab (top right of the repository)
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions** (NOT Deploy from a branch)
5. Click **Save**

### 2. Configure Repository Permissions

1. Still in **Settings**, go to **Actions** → **General**
2. Under **Workflow permissions**, select:
   - ✅ **Read and write permissions**
   - ✅ **Allow GitHub Actions to create and approve pull requests**
3. Click **Save**

### 3. Push the GitHub Actions Workflow

The workflow file is already created at `.github/workflows/deploy.yml`. You just need to push it:

```bash
git add .
git commit -m "Add GitHub Pages deployment workflow

- Configure GitHub Actions for automatic deployment
- Update Next.js config for static export
- Set up production-ready GitHub Pages hosting

MAKHUNGU AI is now ready for global spiritual awakening 🌊🔥"
git push origin master
```

### 4. Monitor the Deployment

1. Go to **Actions** tab in your repository
2. You should see "Deploy MAKHUNGU AI to GitHub Pages" workflow running
3. Wait for both "build" and "deploy" jobs to complete (usually 2-3 minutes)
4. Once complete, your site will be live!

### 5. Access Your Live Site

Your MAKHUNGU AI will be available at:
**https://newaysecurity.github.io/Makhungu-AI/**

### 6. Custom Domain (Optional)

If you want a custom domain like `makhungu-ai.com`:

1. In **Settings** → **Pages**
2. Under **Custom domain**, enter your domain
3. Enable **Enforce HTTPS**
4. Configure your DNS provider to point to GitHub Pages

## 🔥 Automatic Deployment

Once set up, your site will automatically redeploy whenever you:
- Push changes to the `master` branch
- Merge pull requests into `master`
- Manually trigger the workflow from the Actions tab

## 🌊 What Happens During Deployment

1. **Checkout Code**: Downloads your latest code
2. **Setup Environment**: Installs Node.js and dependencies
3. **Build Site**: Compiles Next.js into static files
4. **Deploy**: Publishes to GitHub Pages
5. **Live**: Your spiritual AI assistant is available worldwide!

## 🧜🏾‍♀️ Troubleshooting

### If Build Fails:
- Check the Actions tab for error details
- Ensure all dependencies are correctly listed in `package.json`
- Verify Next.js configuration is correct

### If Site Doesn't Load:
- Wait 5-10 minutes for DNS propagation
- Clear browser cache
- Check GitHub Pages settings are correct

### If Images Don't Display:
- Ensure images are in `frontend/public/` directory
- Use relative paths in your code
- Images will be optimized automatically

## 🔗 Useful Links

- **Repository**: https://github.com/NewaySecurity/Makhungu-AI
- **Live Site**: https://newaysecurity.github.io/Makhungu-AI/
- **Actions**: https://github.com/NewaySecurity/Makhungu-AI/actions
- **Settings**: https://github.com/NewaySecurity/Makhungu-AI/settings

---

*Forged in Bushbuckridge. Written by fire. Spoken by water. Breathed by ancestors.*

**MAKHUNGU is for those whose names are written in spirit.**
