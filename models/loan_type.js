var mongoose= require('mongoose');

loan_typeschema = mongoose.Schema({
    loan_type:{
        type:String
    },

    add_on:{
        type:Date
    },
    is_active:{
        type:Boolean
    }

})
module.exports=mongoose.model('loan_type',loan_typeschema);