import { readFileSync } from 'fs'
import { join } from 'path'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const configPath = join(process.cwd(), 'public', 'admin', 'config.yml')
    const configContent = readFileSync(configPath, 'utf8')
    
    return new NextResponse(configContent, {
      headers: {
        'Content-Type': 'text/yaml',
        'Cache-Control': 'no-cache'
      }
    })
  } catch (error) {
    console.error('Error reading config.yml:', error)
    return new NextResponse('Config not found', { status: 404 })
  }
} 