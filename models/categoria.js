const { Schema, model } = require('mongoose');

const CategoriaSchema = Schema({
    tipo: {
        type: String,
        required: [true, 'El tipo es obligatorio']
    },
    precio: {
        type: String,
        required: [true, 'El precio es obligatorio' ]
    },
    cantidad: {
        type: String,
        required: [true, 'La cantidad es obligatorio' ]
    },
    img: {
        type: String
    }
});


module.exports = model('Categoria', CategoriaSchema);