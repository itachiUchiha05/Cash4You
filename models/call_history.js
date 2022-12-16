var mongoose= require('mongoose');

call_hisotryschema = mongoose.Schema({
    talk:{
        type:String
    },

    yes_option:{
        type:String
    },

    service_booking_date:{
        type:String
    },

    pickup:{
        type:String
    },
    
    pickup_address:{
        type:String
    },
    
    pickup_address_value:{
        type:String
    },

    call_later_date:{
        type:String
    },

    no_service:{
        type:String
    },

    service_at:{    
        type:String
    },

    owner_name:{
        type:String
    },

    owner_address:{
        type:String
    },

    dissatisfied_reason:{
        type:String
    },  

    other_person:{
        type:String
    },

    pickup_no:{
        type:String
    },

    call_id:{
        type:String
    },
    
    date_time:{
        type:String
    },

    status:{
        type:String
    },

    other4:{
        type:String
    },

    call_remark:{
        type:String
    },

    caller_id:{
        type:String
    },

    add_on:{
        type:Date
    },
    is_active:{
        type:Boolean
    }

})
module.exports=mongoose.model('call_history',call_hisotryschema);