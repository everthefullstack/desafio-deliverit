const express = require('express');
const app = express();
const router = require('./routes/router');
const exhb = require('express-handlebars');
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(router);

app.engine('handlebars', exhb({defaultLayout: 'main'}))
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.listen(3000, '0.0.0.0', () => {
    
    console.log('Express está rodando.')
});