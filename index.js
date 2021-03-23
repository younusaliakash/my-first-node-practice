const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(cors())

app.use(bodyParser.json())



app.get('/', (req, res) => res.send('Yay i am creating api successfully'))

app.get('/product', (req,res) => {
    const products = {
        name : 'apple',
        price : 70
    }
    res.send(products)
})

const user = ['Akash','Batas', 'Nodi','Sagor', 'Others']

app.get('/user/:id', (req,res) =>{
    // console.log(req.params.id);
    const userId = req.params.id
    const name = user[userId]
    res.send({userId, name})
})

//post
app.post('/addUser', (req,res) => {
    // console.log("success", req.body)
    let user = req.body
    res.send(user);
    
})


app.listen(3000, () => console.log('it working man'))