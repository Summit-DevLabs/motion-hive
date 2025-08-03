# Decap CMS Setup Guide

This project has been migrated from Tina CMS to Decap CMS. Here's how to set it up:

## What's Changed

- Removed all Tina CMS dependencies and configuration
- Added Decap CMS configuration
- Updated blog components to use markdown files directly
- Configured GitHub OAuth authentication with Netlify Identity

## Setup Instructions

### 1. Local Development

For local development, Decap CMS uses a local backend. You can start the development server with:

```bash
npm run dev
```

Then visit `/admin` to access the CMS interface.

To start the local backend server:
```bash
npx decap-server
```

### 2. Production Setup

For production deployment on Vercel, you need to set up Netlify Identity for GitHub authentication:

#### Step 1: Create Netlify Site (for authentication only)

1. **Go to [netlify.com](https://netlify.com)** and sign up/login
2. **Click "New site from Git"** or "Add new site" → "Import an existing project"
3. **Connect your GitHub account** (if not already connected)
4. **Select your repository**: `davidcerniglia/motion-hive`
5. **Configure the build settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. **Click "Deploy site"**

**Note**: You don't need to actually use Netlify for hosting - this is just for authentication.

#### Step 2: Configure Netlify Identity

1. **In your Netlify dashboard**, go to **Site Settings > Identity**
2. **Click "Enable Identity"**
3. **Go to Registration** and set it to **Invite only** (recommended)
4. **Go to Services > Git Gateway** and click **Enable Git Gateway**
5. **Add your Vercel domain** (`motion-hive.vercel.app`) to the allowed domains in Identity settings
6. **Configure OAuth providers**:
   - Go to **Services > OAuth**
   - Click **Install provider** and select **GitHub**
   - Configure the GitHub OAuth app settings

#### Step 3: Deploy to Vercel

```bash
vercel --prod
```

### 3. Authentication Configuration

The current configuration uses:

- **Backend**: GitHub with Netlify Identity proxy
- **Repository**: `davidcerniglia/motion-hive`
- **Branch**: `main`
- **Authentication**: Netlify Identity handles GitHub OAuth

**Files configured**:
- `public/admin/config.yml` - Decap CMS configuration
- `public/admin/cms.html` - Admin interface with Netlify Identity widget
- `src/app/admin/page.tsx` - Admin page wrapper that redirects to CMS
- `vercel.json` - Vercel configuration for serving static admin files

### 4. Content Structure

Blog posts are stored in `content/posts/` as markdown files with frontmatter:

```markdown
---
title: "Your Post Title"
date: "2024-01-01T00:00:00.000Z"
description: "Post description"
heroImage: "/uploads/hero-image.jpg"
tags: ["tag1", "tag2"]
author: "Author Name"
---

Your post content here...
```

### 5. Media Files

Media files are stored in `public/uploads/` and are accessible at `/uploads/` in your site.

### 6. Admin Access

- Visit `/admin` to access the CMS interface
- Click "Login with GitHub" to authenticate
- You'll be redirected to GitHub for authorization
- After authorization, you'll have access to create, edit, and delete blog posts

## Benefits of Decap CMS

- **Open Source**: Completely free and open source
- **Git-based**: All content is stored in your Git repository
- **Platform Agnostic**: Works with any static site generator
- **Extensible**: Create custom widgets and previews
- **User-friendly**: Non-technical users can easily manage content

## Migration Notes

- Existing blog posts in `content/posts/` should continue to work
- The frontmatter structure remains the same
- Images and media files are preserved in `public/uploads/`

## Troubleshooting

### Authentication Issues

1. **"Not found" error when clicking GitHub login**:
   - Make sure Netlify Identity is properly configured
   - Check that your Vercel domain is added to Netlify Identity allowed domains
   - Verify the Netlify Identity widget is loaded in `public/admin/cms.html`
   - Ensure GitHub OAuth provider is configured in Netlify Identity

2. **Malformed URL errors**:
   - This was fixed by using the working configuration from commit b52a7b75b8f1b3dbbf34a96c4b6ecad40ef9883b
   - Using static file approach with proper Vercel rewrites

3. **Organization access prompts**:
   - The current setup should only request access to your personal repositories
   - Make sure you're logging in with your personal GitHub account

### Other Issues

1. **Local backend not working**: Make sure you're running `npx decap-server` and visiting `/admin`
2. **Media uploads failing**: Ensure the `public/uploads/` directory exists and is writable
3. **Vercel deployment issues**: Make sure your `vercel.json` is properly configured

## Recent Fixes Applied

- **Restored working configuration** from commit b52a7b75b8f1b3dbbf34a96c4b6ecad40ef9883b
- **Using static file approach** with `public/admin/cms.html` and `public/admin/config.yml`
- **Simple Vercel rewrites** to serve admin files correctly
- **Netlify Identity integration** for GitHub OAuth authentication

For more information, visit the [Decap CMS documentation](https://decapcms.org/docs/intro/). 