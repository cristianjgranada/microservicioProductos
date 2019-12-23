const {Router } = require('express')
const router = Router()

const objRegistrarProducto = require('../controllers/registrarProducto')
const objObtenerCliente = require('../controllers/obtenerProductos')
const objActualizarProducto = require('../controllers/actualizarProducto')
const objEliminarProducto = require('../controllers/eliminarProducto')

router.get ('/productos',objObtenerCliente.obtenerProductos )

router.get('/productos/:productoid', objObtenerCliente.obtenerProducto)

router.post('/productos', objRegistrarProducto.registrarProducto)

router.put('/productos' ,  objActualizarProducto.actualizarProducto)

router.put('/productos/actualizarurl' ,  objActualizarProducto.actualizarURLImagen )

router.delete('/productos', objEliminarProducto.eliminarProducto)

module.exports = router