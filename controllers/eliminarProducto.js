const  clsProductos = require('../clases/obtenerProducots')
const couchdb = require('../config/couchdb')

const   objProductos = {}

objProductos.eliminarProducto = async (req,res) => {
    console.log(req.query);
    console.log(req.body);
    let productoId = req.query.productoid
    if(!productoId){
        return res.json({codigo: -99, mensaje: 'parametros insuficientes' })
    }
    let resultado = await clsProductos.obtenerProducto(productoId)
    if (resultado){
        let productos = couchdb.use ( 'productos')
        let _id = resultado._id
        let _rev = resultado._rev
        await productos.destroy(_id,_rev)
        return res.json({codigo:0, mensaje: 'Producto eliminado', data: resultado })
    }else {
        return res.json({codigo:-98, mensaje:'No existe el elemento a eliminar' })
    }
}

module.exports = objProductos