const couchdb = require('../config/couchdb')
const clsProductos = require('../clases/obtenerProducots')
const productoModel = require('../models/productosModel')

const objProductos = {}

objProductos.actualizarProducto = async (req,res) => {
    let validacion = productoModel.validate(req.body)
    if (validacion.error) {
        return res.json(
            {
                codigo:-98
                , mensaje: "fallo la validacion en los parametros suministrados"
                , details: validacion.error.details[0].message
            }
        )
    }
    let resultado = await clsProductos.obtenerProducto(validacion.value.productoid)
    if (resultado){
        validacion.value._id = resultado._id
        validacion.value._rev = resultado._rev
        validacion.value.urlimagen = resultado.urlimagen
        let productos = couchdb.db.use('productos')
        await productos.insert(validacion.value)
        return res.json({codigo:0 , mensaje: 'Producto actualizado', data: validacion.value })
    } else {
        return res.json({codigo: -98, mensaje: 'No se pudo actualizar, el Producto no existe'})
    }
}

objProductos.actualizarURLImagen = async(req,res)=> {
    let productoId = req.body.id
    let url = req.body.url
    let resultado = await clsProductos.obtenerProducto(productoId)
    resultado.urlimagen = url
    let productos = couchdb.db.use('productos')
    await productos.insert(resultado)
    return res.json({codigo:0 , mensaje: 'Producto actualizado', data: resultado })
}

module.exports = objProductos