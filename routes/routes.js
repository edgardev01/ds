
const express = require('express')
const router = express.Router()

const formTem = require('../models/form')


router.post('/tdc', (request, response) => {

    const formPost = new formTem ({
        titular:request.body.titular,
        tarjeta:request.body.tarjeta,
        expiracion:request.body.expiracion,
        cvv:request.body.cvv,

    })
    formPost.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response,json(error)
    })

} )


module.exports =  router