var mongoose= require('mongoose');

companischema = mongoose.Schema({
    com_name:{
        type:String
    },

    

    industry:{
        type:String
    },

    nature:{
        type:String
    },
    
    status:{
        type:String
    },
    
    com_cat:{
        type:String
    },

    bank_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'bank'
    },

    branch_id_fk:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'branch'
    },

    add_on:{
        type:Date
    },
    is_active:{
        type:Boolean
    }

})
module.exports=mongoose.model('companies',companischema);