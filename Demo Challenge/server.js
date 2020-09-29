const express = require('express')
const app = express()
const router = require('./configuration/router')
require('./configuration/mongoose')

app.use(express.urlencoded({extended:true}))

app.use(express.static('public'))
app.set('view engine','ejs')
app.use(router)
app.listen(5000)