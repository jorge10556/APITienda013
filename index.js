const exp = require('express');
require('dotenv').config();
const enrutador = require('./routes/router')

const app = exp();

app.use(exp.json());
app.use(exp.urlencoded({ extend: false }));


app.use('/v1', enrutador)

app.listen(process.env.PORT, () => {
    console.log("servidor en linea, en el puesto " + process.env.PORT);
})
