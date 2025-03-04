const exp = require('express');
const router = exp.Router();
const modeloProductos = require('../src/models/productos.models')



router.get('/productos', async (req, res) => {
    let resultado = await modeloProductos.find({});
    console.log(resultado);
    if (resultado) {
        res.json({ resultado });
    } else {
        res.json({ "mensaje": "hubo un error" });
    }
})


router.get('/productos/:x', async (req, res) => {
    let resultado = await modeloProductos.findOne({ "nombre": req.params.x });
    console.log(resultado);
    if (resultado) {
        res.json({ resultado });
    } else {
        res.json({ "mensaje": "hubo un error" });
    }
})



router.post('/productos', async (req, res) => {
    let nuevoProducto = new modeloProductos({
        "referencia": req.body.referencia,
        "nombre": req.body.nombre,
        "precio": req.body.precio,

    })
    res.json(await nuevoProducto.save());
})


module.exports = router;