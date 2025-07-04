# MAKHUNGU AI - Production Deployment Guide

## 🚀 Quick Deploy to Production

### 1. Prerequisites
- Node.js 18+ installed
- Git repository (GitHub recommended)
- Vercel account (free tier available)
- Supabase account (free tier available)

### 2. Environment Setup

#### A. Clone and Install
```bash
git clone <your-repo-url>
cd Makhungu-AI
cd frontend
npm install
```

#### B. Set up Environment Variables
1. Copy `.env.example` to `.env.local`
2. Fill in your actual values:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://makhungu-ai.vercel.app
NEXT_PUBLIC_APP_NAME=MAKHUNGU AI
```

### 3. Deploy to Vercel

#### Option A: Vercel CLI (Recommended)
```bash
npm install -g vercel
vercel --prod
```

#### Option B: GitHub Integration
1. Push code to GitHub
2. Import project in Vercel dashboard
3. Connect GitHub repository
4. Add environment variables in Vercel dashboard
5. Deploy automatically

### 4. Set up Supabase Backend

#### A. Create Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Create new project
3. Copy project URL and anon key

#### B. Database Schema
```sql
-- Users table (automatically created by Supabase Auth)

-- Rituals table
CREATE TABLE rituals (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  type TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT,
  ingredients JSONB,
  instructions JSONB,
  purpose TEXT,
  timing TEXT,
  warnings TEXT,
  xitsonga_incantation TEXT,
  sacred_number INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- User profiles table
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  username TEXT UNIQUE,
  full_name TEXT,
  spiritual_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Spiritual contracts table
CREATE TABLE spiritual_contracts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  contract_type TEXT NOT NULL,
  content TEXT NOT NULL,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  expires_at TIMESTAMP WITH TIME ZONE
);

-- Row Level Security
ALTER TABLE rituals ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE spiritual_contracts ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Rituals are viewable by everyone" ON rituals FOR SELECT USING (true);
CREATE POLICY "Profiles are viewable by everyone" ON profiles FOR SELECT USING (true);
CREATE POLICY "Users can insert their own profile" ON profiles FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "Users can update their own profile" ON profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can view their own contracts" ON spiritual_contracts FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own contracts" ON spiritual_contracts FOR INSERT WITH CHECK (auth.uid() = user_id);
```

### 5. Domain Configuration (Optional)

#### A. Custom Domain
1. Add custom domain in Vercel dashboard
2. Update DNS records as instructed
3. Update environment variables with new domain

#### B. SSL Certificate
- Automatically handled by Vercel
- Force HTTPS in production

### 6. Performance Optimization

#### A. Image Optimization
- Place images in `frontend/public/` directory
- Use Next.js Image component for automatic optimization
- Compress images before upload

#### B. Caching
- Static files cached automatically by Vercel
- API routes cached based on headers
- Database queries optimized with proper indexing

### 7. Monitoring & Analytics

#### A. Vercel Analytics
- Enable in Vercel dashboard
- Track page views and performance

#### B. Google Analytics (Optional)
```javascript
// Add to layout.tsx
<Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
```

### 8. Security Checklist

- ✅ Environment variables secured
- ✅ HTTPS enforced
- ✅ Security headers configured
- ✅ Row Level Security enabled
- ✅ API rate limiting (via Vercel)
- ✅ Input validation on all forms

### 9. Backup Strategy

#### A. Database Backups
- Supabase provides automatic backups
- Export data regularly for additional security

#### B. Code Backups
- Git repository serves as code backup
- Tag releases for version control

### 10. Maintenance

#### A. Updates
```bash
# Update dependencies
npm update

# Deploy new version
vercel --prod
```

#### B. Monitoring
- Check Vercel dashboard for errors
- Monitor Supabase usage
- Review performance metrics

## 🔗 Useful Links

- **Frontend**: Your Vercel deployment URL
- **Backend**: Your Supabase project dashboard
- **Repository**: Your GitHub repository
- **Documentation**: This file

## 🆘 Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version (18+)
   - Verify all dependencies installed
   - Check TypeScript errors

2. **Environment Variables**
   - Ensure all required variables set
   - Check variable names match exactly
   - Restart deployment after changes

3. **Database Connection**
   - Verify Supabase URL and keys
   - Check Row Level Security policies
   - Ensure proper permissions

### Support

For technical support or spiritual guidance, connect with the MAKHUNGU community or consult the manifesto for deeper understanding.

---

*Forged in Bushbuckridge. Written by fire. Spoken by water. Breathed by ancestors.*
