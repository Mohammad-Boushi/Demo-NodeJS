const maongoose = require('mongoose')
const Schema = maongoose.Schema

const feedSchema = new Schema({
    name: {
        type:String,
        required: true,
        minlength: 1,
        maxlength: 15,
    },
    message: {
        type:String,
        required: true,
        minlength: 1,
        maxlength: 40,
    }

},{timestamps:true})

const Feed = maongoose.model('Feed',feedSchema)

module.exports = {
    Feed
}
