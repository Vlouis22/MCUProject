import { pool } from './database.js'
import './dotenv.js'
import giftData from '../data/gifts.js'

const createGiftsTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS gifts;

        CREATE TABLE IF NOT EXISTS gifts (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            rating VARCHAR(10) NOT NULL,
            actor VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL,
            description TEXT NOT NULL
        )
    `

    try {
        const res = await pool.query(createTableQuery)
        console.log('🎉 gifts table created successfully')
    } catch (err) {
        console.error('⚠️ error creating gifts table', err)
    }
}

const seedGiftsTable = async () => {
    await createGiftsTable()

    giftData.forEach((gift) => {
        const insertQuery = {
            text: 'INSERT INTO gifts (name, rating, actor, image, description) VALUES ($1, $2, $3, $4, $5)'
        }

        const values = [
            gift.name,
            gift.rating,
            gift.actor,
            gift.image,
            gift.description
        ]

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting gift', err)
                return
            }

            console.log(`✅ ${gift.name} added successfully`)
        })
    })
}

seedGiftsTable()