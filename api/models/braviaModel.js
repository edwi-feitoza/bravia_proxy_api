'use-strict';

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BraviaSchema = new Schema({
    ligada: {
        type: Boolean,
        required: 'Verifique se a informação de televisão ligada foi fornecida corretamente'
    },
    data: {
        type: Date,
        default: Date.now
    },
    funcao: {
        type: String,
        required: 'Verifique se a funcao que foi invocada na API foi fornecida corretamente'
    }

})

// se não me engano a convenção sugere lowercase para nome de collections
module.exports = mongoose.model('Bravia', BraviaSchema)