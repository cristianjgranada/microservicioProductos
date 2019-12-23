const clsProductos = require('../clases/obtenerProducots')
const couchdb = require('../config/couchdb')
const productoModel = require('../models/productosModel')

const objProductos = {}

objProductos.registrarProducto = async(req,res) => {
       
    const validacion = productoModel.validate(req.body)
    if(validacion.error){
        return res.json({
            codigo: -98
            , mensaje: "fallo de validacion en los parametros suministrados"
            , data: validacion.error
        })
    }
    let resultado = await clsProductos.obtenerProducto(validacion.value.productoid)
    if (resultado && resultado._id){
        return res.json({codigo: -97, mensaje: 'Producto ya existe', data: validacion.value})
    }else {
        let clientes = couchdb.db.use('productos')
        clientes.insert(validacion.value)
        return res.json({codigo:0 , mensaje: 'Producto Creado', data: validacion.value })
    }
}

module.exports  = objProductos