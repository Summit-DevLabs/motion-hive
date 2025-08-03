import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Motion Hive - Content Manager',
  description: 'Admin interface for managing content',
}

export default function AdminPage() {
  return (
    <div dangerouslySetInnerHTML={{
      __html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Motion Hive - Content Manager</title>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </head>
        <body>
          <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
          <script>
            // Handle OAuth callback
            if (window.location.search.includes('code=')) {
              // This is a GitHub OAuth callback
              console.log('OAuth callback detected');
            }
          </script>
        </body>
        </html>
      `
    }} />
  )
} 