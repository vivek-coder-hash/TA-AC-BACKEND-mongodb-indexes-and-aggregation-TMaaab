var mongoose = require("mongoose")

var Schema  = mongoose.Schema

var userSchema  = new Schema({
    name:String , 
    username:{type:String , unique:true} , //Define unique indexes on username and email.
    email:{type:String , unique:true} ,
    address: {
        city:String , 
        state:String ,
        country:String ,
        pin:Number
    }

})



//define compound indexes on state and country field inside address document. Each country must have states which are unique.

userSchema.index({"address.country": 1 , "address.state": 1})


let articleSchema = new Schema({
    title: String,
    description: String,
    tags: [String],
  });
  
  articleSchema.index({ tags: 1 }); //Add multikey indexes on tags which is an array of strings
  articleSchema.index({ $text: { title: 1 } }); //Add text indexes on title as users will search for texts present in an article's title.
  
  let Article = mongoose.model('Article', articleSchema);
  
  module.exports = Article;

