var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ImageSchema = new mongoose.Schema({
    url:String,
    title: String,
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    comments: [{
        text: String,
        postedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }]
});
module.exports = mongoose.model("Image", ImageSchema);
