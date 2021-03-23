const express = require('express')

const app = express()

app.get('/', (req, res) => res.send('Yay i am creating api'))


app.listen(3000, () => console.log('it working man'))