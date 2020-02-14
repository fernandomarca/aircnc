const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

//get,post,put,delete

//req.query = acessar query params para filtros

//req.params = acessar route params (para edição, delete)
//req.body = acessar corpo da requisição para criação, edição
mongoose.connect('mongodb+srv://fernandomarca:navegacaoespacial11@cluster0-8flmn.gcp.mongodb.net/acnc?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

app.use(cors({})); //origin:'http://localhost:3333'
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname,'..','uploads')));
app.use(routes);

app.listen(3333);

//sequelize post sql.