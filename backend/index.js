
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

console.log(process.env.NODE_ENV);

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const app = express();

require('./database');

app.set('port', process.env.PORT || 4000);

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

app.use(require('./routes/proyects.js'));
app.use(require('./routes/proyectsApproved.js'));


app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log('Sever On ' + app.get('port'));
});