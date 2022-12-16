var mongoose= require('mongoose');

current_loanschema = mongoose.Schema({
    call_id:{
        type:String
    },

    bank_id_fk:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'bank'
    },

    loan_type:{
        type:String
    },

    emi:{
        type:String
    },
    
    pending_emi:{
        type:String
    },
    
    outstanding:{
        type:String
    },

    remark:{
        type:String

    },

   
    add_on:{
        type:Date
    },
    is_active:{
        type:Boolean
    }

})
module.exports=mongoose.model('current_loan',current_loanschema);