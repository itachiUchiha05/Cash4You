var mongoose= require('mongoose');

loginschema = mongoose.Schema({
    login_date:{
        type:String
    },

    call_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'call_list'
    },

    branch_id_fk:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'branch'
    },

    login_city:{
        type:String
    },
    
    bank_id_fk:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'bank'
    },
    
    loan_amt:{
        type:String
    },

    login_tenure:{
        type:String
    },

    login_type:{
        type:String
    },

    vkyc:{
        type:String
    },

    case_id:{
        type:String
    },

    loan:{
        type:String
    },

    loan_type:{
        type:String
    },

    remark:{
        type:String
    },

    sanction_amt:{
        type:String
    },

    agreement_status:{
        type:String
    },
    
    tenure:{
        type:String
    },

    roi:{
        type:String
    },

    pf:{
        type:String
    },

    ins:{
        type:String
    },

    finalremark:{
        type:String
    },

    reject_by:{
        type:String
    },

    status:{
        type:String
    },

    disburse_date:{
        type:String
    },

    nomiee_name:{
        type:String
    },

    nomiee_relation:{
        type:String
    },

    nomiee_bod:{
        type:String
    },

    ref_name1:{
        type:String
    },

    ref_cono1:{
        type:String
    },
    
    ref_add1:{
        type:String
    },

    ref_name2:{
        type:String
    },

    ref_cono2:{
        type:String
    },

    ref_add2:{
        type:String
    },

    cross_emp:{
        type:String
    },

    cross_sale:{
        type:String
    },

    cross_remark:{
        type:String
    },

    lan:{
        type:String
    },

    product:{
        type:String
    },


    add_on:{
        type:Date
    },
    is_active:{
        type:Boolean
    }

})
module.exports=mongoose.model('login',loginschema);