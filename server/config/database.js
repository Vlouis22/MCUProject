import pg from 'pg'

const config = {
    user: process.env.PGUSER || 'postgres',
    password: process.env.PGPASSWORD || 'moXzVDAKmLhcAyHWkUIvGXiFbQHuuYIm',
    host: process.env.PGHOST || 'junction.proxy.rlwy.net',
    port: process.env.PGPORT || 41390,
    database: process.env.PGDATABASE || 'railway'
}

export const pool = new pg.Pool(config)
