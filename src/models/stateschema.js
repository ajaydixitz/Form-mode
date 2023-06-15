const mongoose=require('mongoose')
const stateschema=new mongoose.Schema({
    countryname:{type:String},
    statename:{type:String}
});
const State=new mongoose.model("State",stateschema);
module.exports=State;
