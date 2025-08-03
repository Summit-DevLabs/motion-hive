import { readFileSync, existsSync } from 'fs'
import { join } from 'path'
import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { path: string[] } }
) {
  try {
    const filePath = params.path.join('/')
    const fullPath = join(process.cwd(), 'public', 'admin', filePath)
    
    if (!existsSync(fullPath)) {
      return new NextResponse('File not found', { status: 404 })
    }
    
    const fileContent = readFileSync(fullPath)
    const ext = filePath.split('.').pop()?.toLowerCase()
    
    let contentType = 'text/plain'
    switch (ext) {
      case 'js':
        contentType = 'application/javascript'
        break
      case 'css':
        contentType = 'text/css'
        break
      case 'json':
        contentType = 'application/json'
        break
      case 'png':
        contentType = 'image/png'
        break
      case 'jpg':
      case 'jpeg':
        contentType = 'image/jpeg'
        break
      case 'svg':
        contentType = 'image/svg+xml'
        break
    }
    
    return new NextResponse(fileContent, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000'
      }
    })
  } catch (error) {
    console.error('Error serving admin file:', error)
    return new NextResponse('File not found', { status: 404 })
  }
} 