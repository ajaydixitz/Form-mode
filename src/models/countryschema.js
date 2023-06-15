const mongoose=require('mongoose')
const countryschema=new mongoose.Schema({
    countrycode:{type:Number},
    countryname:{type:String}
});
const Country=new mongoose.model("Country",countryschema);
module.exports=Country;
