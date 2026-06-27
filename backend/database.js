import sqlite3 from 'sqlite3'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const databasePath = path.join(__dirname, '..', 'database', 'karaz.db')

const db = new sqlite3.Database(databasePath)

const schemaPath = path.join(__dirname, '..', 'database', 'schema.sql')

const schema = fs.readFileSync(schemaPath, 'utf8')

db.exec(schema, (err) => {

  if (err) {

    console.log('Database Error:', err)

  } else {

    console.log('Karaz Database Ready')

  }

})

export default db