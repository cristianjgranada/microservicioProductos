const couchdb = require('../config/couchdb')
const clsProducto = {}

clsProducto.obtenerProducto = async(productoId) => {
    console.log(`Producto a buscar ${productoId}`)
    if (productoId){
        
        let producto = couchdb.db.use('productos')
        let result = await producto.find({
            "selector": {
                "productoid": {
                    "$eq": productoId
                }
            }
        })
        if (!result.docs[0]){
            return {codigo: -95, mensaje: "No se encontraron productos"} 
        }else {
            return result.docs[0]
        }
        
    }else {
        return {}
    }
}

clsProducto.obtenerProductos = async() => {
    let productos = couchdb.db.use('productos')
    let result = await productos.find({
        "selector": {
            "productoid": {
                "$gt" : null
            }
        }
    })
    return result
}

module.exports = clsProducto