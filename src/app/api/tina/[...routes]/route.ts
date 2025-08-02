import { TinaNodeBackend } from '@tinacms/datalayer'
import { config } from '../../../../tina/config'

const tinaHandler = TinaNodeBackend({
  config,
  // Add your database adapter here
  // databaseAdapter: yourDatabaseAdapter,
  // Add your auth provider here
  // authProvider: yourAuthProvider,
})

export async function GET(request: Request) {
  return tinaHandler(request)
}

export async function POST(request: Request) {
  return tinaHandler(request)
} 