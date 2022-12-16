var mongoose= require('mongoose');

employeeschema = mongoose.Schema({
    branch_id_fk:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'branch'
    },

    login_id_fk:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'login'
    },

    login_pass:{
        type:String
    },

    first_name:{
        type:String
    },
    
    last_name:{
        type:String
    },
    
    display_name:{
        type:String
    },

    contact_no:{
        type:String
    },

    contact_no_2:{
        type:String
    },

    email:{
        type:String
    },

    profile_image:{
        type:String
    },

    address:{
        type:String
    },

    last_login_ip:{
        type:String
    },

    last_login_time:{
        type:String
    },

    emp_type:{
        type:String
    },

    parent_emp:{
        type:String
    },
    
    dob:{
        type:String
    },

 

    add_on:{
        type:Date
    },
    is_active:{
        type:Boolean
    }

})
module.exports=mongoose.model('employee',employeeschema);