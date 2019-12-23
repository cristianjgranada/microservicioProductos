const clsProductos = require('../clases/obtenerProducots')
const objProductos = {}

objProductos.obtenerProductos = async (req,res) => {
    let data = await clsProductos.obtenerProductos()
    res.json(data.docs)
}

objProductos.obtenerProducto = async (req,res) => {    
    let productoId = req.params.productoid
    if(!productoId) {
        return res.json({codigo:-98, mensaje : 'parametros insuficicentes'})
    } else {
        let data = await clsProductos.obtenerProducto(productoId)
        res.json(data)
    }
}

module.exports = objProductos