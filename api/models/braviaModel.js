'use-strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BraviaSchema = new Schema({
    ligada : {
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

});
module.exports = mongoose.model('Bravia', BraviaSchema);