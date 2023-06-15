const express=require('express')
const app=express();
const port=process.env.PORT||3000;
require("./db/conn");
const Country=require('./models/countryschema');
const State=require('./models/stateschema');
const City=require("./models/cityschema");
const User=require("./models/userschema");
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set('view engine','ejs')

app.get('/',async(req,res)=>{
try{
const country= await Country.find();
const states=await State.find();
const city=await City.find();
res.render('home',{country:country,states: JSON.stringify(states), city: JSON.stringify(city)});
}catch(e){
res.send(e);
}
})

app.post("/post",(req,res)=>{
   // console.log(req.body);
    const user=new User({
        Firstname:req.body.fname,
        Lastname:req.body.lname,
        email:req.body.email,
        country:req.body.country,
        state:req.body.state,
        city:req.body.city,
        gender:req.body.gender,
        dob:req.body.date,
        age:req.body.age
    });
    user.save();
   // console.log(user);
    res.render("imfo",{user:user});
})
app.listen(port,()=>{
    console.log(`your app running on ${port} `);
})