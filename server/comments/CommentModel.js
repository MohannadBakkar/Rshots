var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var commentSchema = new Schema({  
         comment: type:String,  
         user_id:{
            type:Schema.Types.ObjectId, ref:'User'
         },
         imageId:{
            type:Schema.Types.ObjectId, ref:'Image'
         }  
});
module.exports = mongoose.model("comment", commentSchema);
