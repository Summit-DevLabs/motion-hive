# Decap CMS Setup Guide

This project has been migrated from Tina CMS to Decap CMS. Here's how to set it up:

## What's Changed

- Removed all Tina CMS dependencies and configuration
- Added Decap CMS configuration
- Updated blog components to use markdown files directly
- Added Netlify Identity for authentication

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

For production deployment, you have two options:

#### Option A: Netlify Git Gateway (Recommended)

1. **Deploy to Netlify**:
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

2. **Configure Netlify**:
   - Go to Site Settings > Identity
   - Enable Identity
   - Enable Git Gateway
   - Configure registration (invite-only recommended)
   - Set up email templates

3. **Update your Vercel site** to use the Netlify CMS URL

#### Option B: GitHub OAuth (Vercel-only)

1. **Update the config** in `public/admin/config.yml`:
   ```yaml
   backend:
     name: github
     repo: your-username/your-repo-name
     branch: main
   ```

2. **Deploy to Vercel**:
   ```bash
   vercel --prod
   ```

### 3. Content Structure

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

### 4. Media Files

Media files are stored in `public/uploads/` and are accessible at `/uploads/` in your site.

### 5. Admin Access

- Visit `/admin` to access the CMS interface
- You'll need to authenticate with your Git provider or Netlify Identity
- Create, edit, and delete blog posts through the friendly interface

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

1. **Local backend not working**: Make sure you're running `npx decap-server` and visiting `/admin`
2. **Authentication issues**: Check your Git provider settings or Netlify Identity configuration
3. **Media uploads failing**: Ensure the `public/uploads/` directory exists and is writable
4. **Vercel deployment issues**: Make sure your `vercel.json` is properly configured

For more information, visit the [Decap CMS documentation](https://decapcms.org/docs/intro/). 