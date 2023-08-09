const express = require('express')

const app = express()

const PORT = process.env.PORT || 7700

app.get('/', (req, res)=>{
    res.send('Called match box fire API')
})

app.get('/fire', (req, res)=>{
    res.send('Called match box fire API')
})

app.listen(PORT, ()=>{
    console.log('Listening at port ', PORT)
})