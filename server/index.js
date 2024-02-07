import mysql from 'mysql'

const connection = await mysql.createConnection({
  host: '10.11.0.92',
  port: 3306,
  user: 'mlluser',
  password: 'M!!U$#&@',
  database: 'payment_system'
})

await connection.connect(error => {
  if (error) {
    console.error('Error connecting to MySQL database:', error)
  } else {
    console.log('Connected to MySQL database!')
  }
})
