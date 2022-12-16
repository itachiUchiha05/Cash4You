var monngose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();

module.exports= monngose.connect(process.env.DATABASE,
{useNewUrlParser:true,useUnifiedTopology: true}).then(()=>{
    console.log("connected");
})
