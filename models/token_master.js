var mongoose= require('mongoose');

token_masterschema = mongoose.Schema({
    device_token:{
        type:String
    },

    device_type:{
        type:String
    },

    userid:{
        type:String
    },

    user_type:{
        type:String
    },

    add_on:{
        type:Date
    },
    is_active:{
        type:Boolean
    }

})
module.exports=mongoose.model('token_master',token_masterschema);