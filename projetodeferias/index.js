const express = require('express');
const routes = require('./routes/routes')
const bodyParser = require('body-parser')
var cors = require('cors')


const app = express();
app.use(cors())
const porta = 3000

const  {receitas}  = require('./app/models/')
app.use(bodyParser.json())
app.use(express.urlencoded({extended:false}));
app.set('json spaces', 4)



// console.log(receitas)

routes(app)

// receitas.create({
//         nome: 'Bolo',
//         descricao: 'dasd',
//         ingredientes: 'ovos',
//         mododepreparo: 'bata tudo',
//         redimento: '4 porções'
// })

app.listen(porta, ()=>{
    console.log("Server Run in port:" + porta)
})