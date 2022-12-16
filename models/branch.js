var mongoose= require('mongoose');

branchschema = mongoose.Schema({
    branch_admin:{
        type:String
    },

    email:{
        type:String
    },

    co_no:{
        type:String
    },

    branch_login_id:{
        type:String
    },
    
    branch_password:{
        type:String
    },
    
    branch_code:{
        type:String
    },

    branch_display_name:{
        type:String
    },

    branch_city:{
        type:String
    },

    join_date:{
        type:String
    },

    branch_type:{
        type:String
    },

    current_status:{
        type:String
    },

    parent:{
        type:String
    },

    address:{
        type:String
    },

    zipcode:{
        type:String
    },

    notes:{
        type:String
    },

    add_on:{
        type:Date
    },
    is_active:{
        type:Boolean
    }

})
module.exports=mongoose.model('branch',branchschema);