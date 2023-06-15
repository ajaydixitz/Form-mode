const mongoose=require('mongoose')
const cityschema=new mongoose.Schema({
    statename:{type:String},
    cityname:{type:String}
});
const City=new mongoose.model("City",cityschema);
module.exports=City;
