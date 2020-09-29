const mongoose = require('mongoose')
// const db = 'mongodb+srv://Mohammad:mmm123456789@mohammad.ajc86.mongodb.net/node-tuts?retryWrites=true&w=majority'
const db = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false'
mongoose.connect(db,{ useNewUrlParser: true , useUnifiedTopology: true })
.then((res)=> console.log('connected with db'))
.catch((err)=> console.log(err))