
const mongoose = require('mongoose')



const formTem = new mongoose.Schema({

    titular: {
        type:String,
        required: true
    },
    tarjeta :{
        type:String,
        required: true
    },
    expiracion: {
        type:String,
        required: true
    },
    cvv: {
        type:String,
        required: true
    }
    
     

});

module.exports = mongoose.model('mytable', formTem)