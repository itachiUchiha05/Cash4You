var mongoose= require('mongoose');

call_listschema = mongoose.Schema({
    customer_name:{
        type:String
    },

    mobile:{
        type:String 
    },

    mobile2:{
        type:String
    },

    dob:{
        type:String
    },
    
    doa:{
        type:String
    },
    
    email:{
        type:String
    },

    company_id:{
        type:String
    },

    company_name:{
        type:String
    },

    company_cat:{
        type:String
    },

    source_ref:{
        type:String
    },

    bussiness_source:{
        type:String
    },

    salary:{
        type:String
    },

    current_address:{
        type:String
    },

    current_city:{
        type:String
    },

    current_state:{
        type:String
    },
    
    parmanent_address:{
        type:String
    },

    parmanent_city:{
        type:String
    },

    parmanent_state:{
        type:String
    },

    aadhar_no:{
        type:String
    },

    pan_no:{
        type:String
    },

    remark:{
        type:String
    },

    assign_date:{
        type:String
    },

    branch_id_fk:{
        type:String,
    },

    caller_id:{
        type:String
    },

    reminder_date:{
        type:String
    },

    reminder_time:{
        type:String
    },

    status:{
        type:String
    },

    last_history_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'call_history'  
    },

    last_date_time:{
        type:String
    },
    
    lead_source:{
        type:String
    },

    coordinator:{
        type:String
    },

    parent_coordinator:{
        type:String
    },

    team_leader:{
        type:String
    },

    executive:{
        type:String
    },

    doc_boy:{
        type:String
    },

    idc:{
        type:String
    },

    doc_collected:{
        type:String
    },

    bank_id_fk:{
        type:String,
    },

    req_loan_amount:{
        type:String
    },

    add_on:{
        type:Date
    },
    is_active:{
        type:Boolean
    }

})
module.exports=mongoose.model('call_list',call_listschema);