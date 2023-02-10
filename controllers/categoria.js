const { response, request } = require('express');
//Importación del modelo
const Categoria = require('../models/categoria');


const getCategoria = async (req = request, res = response) => {

    //condiciones del get
    const query = { estado: true };

    const listaCategoria = await Promise.all([
        Categoria.countDocuments(query),
        Categoria.find(query)
    ]);

    res.json({
        msg: 'get Api - Controlador Categoria',
        listaCategoria
    });

}

const postCategoria = async (req = request, res = response) => {

    //Desestructuración
    const { nombre, descripcion } = req.body;
    const categoriaGuardadoDB = new Categoria({ nombre, descripcion });

    //Guardar en BD
    await categoriaGuardadoDB.save();

    res.json({
        msg: 'Post Api - Post Categoria',
        categoriaGuardadoDB
    });

}


const putCategoria = async (req = request, res = response) => {

    //Req.params sirve para traer parametros de las rutas
    const { id } = req.params;
    const { _id, img, estado, ...resto } = req.body;
    //Los parametros img, rol, estado y google no se modifican, el resto de valores si (nombre, correo y password)

    //Editar al usuario por el id
    const categoriaEditado = await Categoria.findByIdAndUpdate(id, resto);

    //Guardar en BD
    

    res.json({
        msg: 'PUT editar category',
        categoriaEditado
    });

}

const deleteCategoria = async(req = request, res = response) => {
    //Req.params sirve para traer parametros de las rutas
    const { id } = req.params;

    //Eliminar fisicamente de la DB
    const categoriaEliminado = await Categoria.findByIdAndDelete( id);

    //Eliminar cambiando el estado a false
    //const usuarioEliminado = await Usuario.findByIdAndUpdate(id, { estado: false });

    res.json({
        msg: 'DELETE eliminar category',
        categoriaEliminado
    });
}

module.exports = {
    getCategoria,
    postCategoria,
    putCategoria,
    deleteCategoria
}


// CONTROLADOR