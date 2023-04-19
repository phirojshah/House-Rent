const connectToMongo=require('./db');
connectToMongo();
const express = require('express')
const app = express()
const port = 5000
app.use(express.json())
//Available Routes 
app.use('/api/auth',require('./routes/auth'))
app.use('/api/roomdesc',require('./routes/roomdesc'))
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`House-Rent backend running at http://localhost:${port}`)
})