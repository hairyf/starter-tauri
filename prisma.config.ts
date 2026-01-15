import { defineConfig } from 'prisma/config'
import 'dotenv/config'

export default defineConfig({
  schema: 'tauri/prisma/schema.prisma',
  migrations: {
    path: 'tauri/prisma/migrations',
  },
  datasource: {
    url: 'file:.tauri/prisma/database/data.db',
  },
})
