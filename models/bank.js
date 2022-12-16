var mongoose= require('mongoose');

bankschema = mongoose.Schema({
    
    bank_name :{
        type:String
    },

    add_on:{
        type:Date
    },
    is_active:{
        type:Boolean
    }

})
module.exports=mongoose.model('bank',bankschema);