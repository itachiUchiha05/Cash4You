var express = require('express');
var router = express.Router();
var multer = require('multer');
var bodyParser = require("body-parser");
var bank = require('../models/bank');
var call_list = require('../models/call_list');
var loan_type = require('../models/loan_type');
var company = require('../models/companies');
var call_history = require('../models/call_history');
var branch = require('../models/branch');
var token = require('../models/token_master');
var current_loan = require('../models/current_loan');
var login = require('../models/login');
const { model, default: mongoose } = require('mongoose');
const employee = require('../models/employee');
const e = require('express');
const { count } = require('../models/call_history');
const { response } = require('express');
const { json } = require('body-parser');

var urlEncodedParser = bodyParser.urlencoded({ extended: false });
//var call_status = "";
//var call_title = "";
var designation = "";

var storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, './public/upload/')
    },

    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});


var upload = multer(
    {
        storage: storage,


    });

///////////////////////////////////////
router.post('/addbank', async (req, res) => {
    var bankmodel = new bank();
    bankmodel.bank_name = req.body.bank_name;

    bankmodel.add_on = new Date();
    bankmodel.is_active = req.body.is_active;

    const intserted = await bankmodel.save();
    //// console.log("inserted");

    if (intserted != null) {
        res.json({
            result: "success",
            msg: "bank add successfully",
            data: 1
        });

    }
    else {
        res.json({
            result: "fail",
            msg: "not inserted",
            data: 0
        });
    }
});

router.post('/updatebank', async (req, res) => {
    const objbank = await bank.updateOne({ _id: req.body.id }, {
        bank_name: req.body.bank_name

    });

    if (objuser != null) {
        res.json({ result: "success", msg: "Bank updated successfully", data: 1 });
    }
    else {
        res.json({ result: "failure", msg: "unsuccessful", data: 0 });
    }
})

router.get('/deletebank/:id', async (req, res) => {
    const obj = await bank.updateOne({ _id: req.params.id }, {
        is_active: false
    });
    res.send(obj);
})

router.post('/getbybankid', async (req, res) => {
    const objbank = await bank.findOne()

    if (objbank != null) {
        res.json({ result: "success", msg: "bank List Found", data: objbank });

    } else {
        res.json({ result: "failure", msg: "bank List Not Found", data: 0 });

    }
});

router.get('/getallbank', async (req, res) => {
    const objbank = await bank.find();
    if (objbank != null) {
        res.json({ result: "success", msg: "bank List Found", data: objbank });

    } else {
        res.json({ result: "failure", msg: "bank List Not Found", data: 0 });

    }
})

////////////////call list///////////////////////

router.post('/addcall_list1', async (req, res) => {
    var call_listmodel = new call_list();
    call_listmodel.customer_name = req.body.customer_name;
    call_listmodel.mobile = req.body.mobile;
    call_listmodel.mobile2 = req.body.mobile2;
    call_listmodel.dob = req.body.dob;
    call_listmodel.doa = req.body.doa;
    call_listmodel.email = req.body.email;
    call_listmodel.company_id = req.body.company_id;
    call_listmodel.company_name = req.body.company_name;
    call_listmodel.company_cat = req.body.company_cat;
    call_listmodel.source_ref = req.body.source_ref;
    call_listmodel.bussiness_source = req.body.bussiness_source;
    call_listmodel.salary = req.body.salary;
    call_listmodel.current_address = req.body.current_address;
    call_listmodel.current_city = req.body.current_city;
    call_listmodel.current_state = req.body.current_state;
    call_listmodel.parmanent_address = req.body.parmanent_address;
    call_listmodel.parmanent_state = req.body.parmanent_state;
    call_listmodel.pan_no = req.body.pan_no;

    call_listmodel.remark = req.body.remark;
    call_listmodel.assign_date = req.body.assign_date;
    call_listmodel.branch_id_fk = req.body.branch_id_fk;
    call_listmodel.caller_id = req.body.caller_id;
    call_listmodel.reminder_date = req.body.reminder_date;
    call_listmodel.status = req.body.status;
    call_listmodel.last_history_id = req.body.last_history_id;

    call_listmodel.last_date_time = req.body.last_date_time;
    call_listmodel.lead_source = req.body.lead_source;
    call_listmodel.coordinator = req.body.passcoordinatorword;
    call_listmodel.parent_coordinator = req.body.parent_coordinator;
    call_listmodel.team_leader = req.body.team_leader;
    call_listmodel.executive = req.body.executive;
    call_listmodel.doc_boy = req.body.doc_boy;

    call_listmodel.idc = req.body.idc;
    call_listmodel.doc_collected = req.body.doc_collected;
    call_listmodel.bank_id_fk = req.body.bank_id_fk;
    call_listmodel.req_loan_amount = req.body.req_loan_amount;
    call_listmodel.add_on = new Date();
    call_listmodel.is_active = req.body.is_active;

    const intserted = await call_listmodel.save();

    if (intserted != null) {
        res.json({
            result: "success",
            msg: "call-list add successfully",
            data: intserted
        });

    }
    else {
        res.json({
            result: "fail",
            msg: "not inserted",
            data: 0
        });
    }
});

router.post('/updatecall_list1', async (req, res) => {
    const objuser = await call_list.updateOne({ _id: req.body.id }, {
        customer_name: req.body.customer_name,
        mobile: req.body.mobile,
        mobile2: req.body.mobile2,
        dob: req.body.dob,
        doa: req.body.doa,
        email: req.body.email,
        company_id: req.body.company_id,
        company_name: req.body.company_name,
        company_cat: req.body.company_cat,
        source_ref: req.body.source_ref,
        bussiness_source: req.body.bussiness_source,
        salary: req.body.salary,
        current_address: req.body.current_address,
        current_city: req.body.current_city,
        current_state: req.body.current_state,
        parmanent_address: req.body.parmanent_address,
        parmanent_state: req.body.parmanent_state,
        pan_no: req.body.pan_no,

        remark: req.body.remark,
        assign_date: req.body.assign_date,
        branch_id_fk: req.body.branch_id_fk,
        caller_id: req.body.caller_id,
        reminder_date: req.body.reminder_date,
        status: req.body.status,
        last_history_id: req.body.last_history_id,

        last_date_time: req.body.last_date_time,
        lead_source: req.body.lead_source,
        coordinator: req.body.passcoordinatorword,
        parent_coordinator: req.body.parent_coordinator,
        team_leader: req.body.team_leader,
        executive: req.body.executive,
        doc_boy: req.body.doc_boy,

        idc: req.body.idc,
        doc_collected: req.body.doc_collected,
        bank_id_fk: req.body.bank_id_fk,
        req_loan_amount: req.body.req_loan_amount,
    });

    if (objuser != null) {
        res.json({ result: "success", msg: "call_list updated successfully", data: 1 });
    }
    else {
        res.json({ result: "failure", msg: "unsuccessful", data: 0 });
    }
})

router.get('/deletecall_list/:id', async (req, res) => {
    const obj = await this.call_list.updateOne({ _id: req.params.id }, {
        is_active: false
    });
    res.send(obj);
})

router.post('/getbycall_listid', async (req, res) => {
    const objcall_list = await call_list.findOne({ _id: req.body.id })

    if (objcall_list != null) {
        res.json({ result: "success", msg: "call-list List Found", data: 1 });

    } else {
        res.json({ result: "failure", msg: "call-list List Not Found", data: 0 });

    }
});

router.get('/getallcall_list', async (req, res) => {
    const objcall_list = await call_list.find();
    res.send(objcall_list);
})


///// call _history///////////////////////////////////////////////////////


router.post('/addcall_history', async (req, res) => {
    const call_his = await call_history.findOne({ _id: req.body.id })


    if (call_his == null) {

        var call_historymodel = new call_history();
        call_historymodel.talk = req.body.talk;
        call_historymodel.yes_option = req.body.yes_option;
        call_historymodel.service_booking_date = req.body.service_booking_date;
        call_historymodel.pickup = req.body.pickup;
        call_historymodel.pickup_address = req.body.pickup_address;
        call_historymodel.pickup_address_value = req.body.pickup_address_value;
        call_historymodel.call_later_date = req.body.call_later_date;
        call_historymodel.no_service = req.body.no_service;
        call_historymodel.service_at = req.body.service_at;
        call_historymodel.owner_name = req.body.owner_name;
        call_historymodel.owner_address = req.body.owner_address;
        call_historymodel.dissatisfied_reason = req.body.dissatisfied_reason;
        call_historymodel.other_person = req.body.other_person;
        call_historymodel.pickup_no = req.body.pickup_no;
        call_historymodel.call_id = req.body.call_id;
        call_historymodel.date_time = req.body.date_time;
        call_historymodel.status = req.body.status;
        call_historymodel.other4 = req.body.other4;

        call_historymodel.call_remark = req.body.call_remark;
        call_historymodel.caller_id = req.body.caller_id;

        call_historymodel.add_on = new Date();
        call_historymodel.is_active = req.body.is_active;

        const intserted = await call_historymodel.save();

        if (intserted != null) {
            res.json({
                result: "success",
                msg: "call-history add successfully",
                data: 1
            });

        }
        else {
            res.json({
                result: "fail",
                msg: "not inserted",
                data: 0
            });
        }
    }
    else {

        const callobj = await call_history.updateOne({ _id: req.params.id }, {
            bank_name: req.body.bank_name,
            req_loan_amt: req.body.req_loan_amount,
            status: req.body.status,
            coordinator: req.body.coordinator,
            last_history_id: req.body.last_history_id,
            reminder_dt: req.body.reminder_dt,
            date_time: req.body.date_time
        });

        if (callobj != null) {
            res.json({
                result: "success",
                msg: "call-history update successfully",
                data: 1
            });

        }
        else {
            res.json({
                result: "fail",
                msg: "not inserted",
                data: 0
            });
        }

    }





});

////branch_list//////////////////////////////////////////////////////////

router.post('/addbranch', async (req, res) => {
    var branchmodel = new branch();
    branchmodel.branch_admin = req.body.branch_admin;
    branchmodel.email = req.body.email;
    branchmodel.co_no = req.body.co_no;
    branchmodel.branch_login_id = req.body.branch_login_id;
    branchmodel.branch_password = req.body.branch_password;
    branchmodel.branch_code = req.body.branch_code;
    branchmodel.branch_display_name = req.body.branch_display_name;
    branchmodel.branch_city = req.body.branch_city;
    branchmodel.join_date = req.body.join_date;
    branchmodel.branch_type = req.body.branch_type;
    branchmodel.current_status = req.body.current_status;
    branchmodel.parent = req.body.parent;
    branchmodel.address = req.body.address;
    branchmodel.zipcode = req.body.zipcode;
    branchmodel.notes = req.body.notes;


    branchmodel.add_on = new Date();
    branchmodel.is_active = req.body.is_active;

    const intserted = await branchmodel.save();

    if (intserted != null) {
        res.json({
            result: "success",
            msg: "branch add successfully",
            data: 1
        });

    }
    else {
        res.json({
            result: "fail",
            msg: "not inserted",
            data: 0
        });
    }
});



////loan_type/////////////////////////////////////////////////////////


router.post('/addloan_type', async (req, res) => {
    var loan_typemodel = new loan_type();

    loan_typemodel.loan_type = req.body.loan_type;
    loan_typemodel.add_on = new Date();
    loan_typemodel.is_active = req.body.is_active;

    const intserted = await loan_typemodel.save();

    if (intserted != null) {
        res.json({
            result: "success",
            msg: "loan_type add successfully",
            data: 1
        });

    }
    else {
        res.json({
            result: "fail",
            msg: "not inserted",
            data: 0
        });
    }
});

router.post('/updateloan_type', async (req, res) => {
    const objloan_type = await loan_type.updateOne({ _id: req.body.id }, {
        loan_type: req.body.loan_type
    });

    if (objuser != null) {
        res.json({ result: "success", msg: "loan_type updated successfully", data: 1 });
    }
    else {
        res.json({ result: "failure", msg: "unsuccessful", data: 0 });
    }
})

router.get('/deleteloan_type/:id', async (req, res) => {
    const obj = await loan_type.updateOne({ _id: req.params.id }, {
        is_active: false
    });
    res.send(obj);
})

router.post('/getbyloan_type', async (req, res) => {
    const objloan_type = await loan_type.findOne({ _id: req.body.id })

    if (objloan_type != null) {
        res.json({ result: "success", msg: "loan-type List Found", data: 1 });

    } else {
        res.json({ result: "failure", msg: "loan-type List Not Found", data: 0 });

    }
});

router.get('/getallloan_type', async (req, res) => {
    const objloan_type = await loan_type.find();
    res.send(objloan_type);
})

////company////////////////////////////////////////////////////////////////////



router.post('/addcompany', async (req, res) => {
    var companymodel = new company();

    companymodel.com_name = req.body.com_name;
    companymodel.branch_id_fk = req.body.branch_id_fk;
    companymodel.industry = req.body.industry;
    companymodel.nature = req.body.nature;
    companymodel.status = req.body.status;
    companymodel.com_cat = req.body.com_cat;
    companymodel.bank_id_fk = req.body.bank_id_fk;
    companymodel.add_on = new Date();
    companymodel.is_active = req.body.is_active;

    const intserted = await companymodel.save();

    if (intserted != null) {
        res.json({
            result: "success",
            msg: "companies add successfully",
            data: 1
        });

    }
    else {
        res.json({
            result: "fail",
            msg: "not inserted",
            data: 0
        });
    }
});

router.post('/updatecompany', async (req, res) => {
    const obejcompany = await company.updateOne({ _id: req.body.id }, {
        com_name: req.body.com_name,
        branch_id_fk: req.body.branch_id_fk,
        industry: req.body.industry,
        nature: req.body.nature,
        status: req.body.status,
        com_cat: req.body.com_cat,
        bank_id_fk: req.body.bank_id_fk
    });

    if (objuser != null) {
        res.json({ result: "success", msg: "company updated successfully", data: 1 });
    }
    else {
        res.json({ result: "failure", msg: "unsuccessful", data: 0 });
    }
})

router.get('/deletecompany/:id', async (req, res) => {
    const obj = await obj.updateOne({ _id: req.params.id }, {
        is_active: false
    });
    res.send(obj);
})

router.post('/getbycompany', async (req, res) => {
    const objcompany = await company.findOne({ _id: req.body.id })

    if (objcompany != null) {
        res.json({ result: "success", msg: "objcompany List Found", data: 1 });

    } else {
        res.json({ result: "failure", msg: "objcompany List Not Found", data: 0 });

    }
});

router.get('/getallcompany', async (req, res) => {
    const objcompany = await objcompany.find();
    res.send(objcompany);
})

////call_list  old//////////////////////////////////////////////////////////////

router.post('/getbycall_detail', async (req, res) => {
    const objcall_detail = await call_list.findOne({ _id: req.body.id })
        .populate("employee_id", "empolyee")

    if (objcompany != null) {
        res.json({ result: "success", msg: "call_list List Found", data: objcall_detail });

    } else {
        res.json({ result: "failure", msg: "call_list List Not Found", data: 0 });

    }

    res.send(objcall_detail)
});

////call_history ////////////////////////////////////////////////////////////////////

router.post('/getbycall_history', async (req, res) => {
    const objcall_history = await call_history.findOne({ _id: req.body.id })
        .populate("call_list_id", "call_list")
        .populate("calll_history_id", "call_history")


    if (objcall_history != null) {
        res.json({ result: "success", msg: "call_list List Found", data: 1 });

    } else {
        res.json({ result: "failure", msg: "call_list List Not Found", data: 0 });

    }
});
/////////call_history//////////////////////////////////////////


router.post('/getbycall_history1', async (req, res) => {
    const objcall_history = await call_history.find({})



    if (objcall_history != null) {
        res.json({ result: "success", msg: "call_history List Found", data: objcall_history });

    } else {
        res.json({ result: "failure", msg: "call_history List Not Found", data: 0 });

    }
});


//// logout token_master////////////////////////////////

router.post('/addtoken', async (req, res) => {
    var tokenmodel = new token();

    tokenmodel.device_token = req.body.device_token;
    tokenmodel.device_type = req.body.device_type;
    tokenmodel.userid = req.body.userid;
    tokenmodel.user_type = req.body.user_type;

    tokenmodel.add_on = new Date();
    tokenmodel.is_active = req.body.is_active;

    const intserted = await tokenmodel.save();

    if (intserted != null) {
        res.json({
            result: "success",
            msg: "token add successfully",
            data: 1
        });

    }
    else {
        res.json({
            result: "fail",
            msg: "not inserted",
            data: 0
        });
    }
});

router.get('/deletetoken/:id', async (req, res) => {
    const objtoken = await token.updateOne({ _id: req.params.id }, {
        is_active: false
    });
    // res.send(objtoken);
})

//// add-existing loan ( current -loan ) /////////////////////////////////////////////////////

router.post('/addcurrent_loan', async (req, res) => {
    var current_loanmodel = new current_loan();
    current_loanmodel.call_id = req.body.call_id;
    current_loanmodel.bank_id = req.body.bank_id_fk;
    current_loanmodel.loan_type = req.body.loan_type;
    current_loanmodel.emi = req.body.emi;
    current_loanmodel.pending_emi = req.body.pending_emi;
    current_loanmodel.outstanding = req.body.outstanding;
    current_loanmodel.remark = req.body.remark;



    current_loanmodel.add_on = new Date();
    current_loanmodel.is_active = req.body.is_active;

    const intserted = await current_loanmodel.save();

    if (intserted != null) {
        res.json({
            result: "success",
            msg: "current_loan add successfully",
            data: 1
        });

    }
    else {
        res.json({
            result: "fail",
            msg: "not inserted",
            data: 0
        });
    }
});



router.post('/getaddexistingloan', async (req, res) => {
    const objcall_detail = await current_loan.find({})
        .populate("bank_id_fk", "bank_name")

    if (objcall_detail != null) {
        res.json({ result: "success", msg: "existing-loan List Found", data: objcall_detail });

    } else {
        res.json({ result: "failure", msg: "existing-loan Not Found", data: 0 });

    }

    //  res.send(objcall_detail)
});


/////add_login_files///////////////////////////////////////

router.post('/loginadd', async (req, res) => {
    const objemp = await login.findOne({ _id: req.body.id })

    // var id = req.body._id
    if (objemp != null) {
        const objlogin = await login.updateOne({ _id: req.body.id }, {

            status: 20,


        });
        if (objlogin != null) {
            res.json({ result: "success", msg: "loginadd updated successfully", data: 1 });
        }
        else {
            res.json({ result: "failure", msg: "unsuccessful", data: 0 });
        }
    }

    else {
        var loginmodel = new login();
        loginmodel.login_date = req.body.login_date;
        loginmodel.call_id = req.body.call_id;
        loginmodel.branch_id_fk = req.body.branch_id_fk;
        loginmodel.login_city = req.body.login_city;
        loginmodel.bank_id_fk = req.body.bank_id_fk;
        loginmodel.loan_amt = req.body.loan_amt;


        loginmodel.loan_type = req.body.loan_type;
        loginmodel.remark = req.body.remark;

        loginmodel.status = req.body.status;


        loginmodel.add_on = new Date();
        loginmodel.is_active = req.body.is_active;

        const intserted = await loginmodel.save();

        if (intserted != null) {
            res.json({ result: "success", msg: "login-add insert successfully", data: 1 });
        }
        else {
            res.json({ result: "failure", msg: "unsuccessful", data: 0 });
        }
    }





});











////  update call-coordinaator //////////////////////////////////////

// router.post('/updatecall_list23', async(req,res) => {
//     // console.log(req.body);
//     const objcall = await call_list.updateOne({ _id: req.body.id},{

//         status : req.body.status,
//         doc_collected : req.body.doc_collected

//     });
//     // console.log(objcall);
//     if(objcall != null){
//         res.json({result: "success", msg:"call_list updated successfully",data:1});
//     }
//     else
//     {
//         res.json({result:"failure",msg:"unsuccessful",data: 0});
//     }
// })

///// forgot password ///////////////////////////////////////////

router.post('/forgotpass', async (req, res) => {
    const forgetpass = await employee.find({})


    if (forgetpass != null) {
        res.json({ result: "success", msg: "forgetpass List Found", data: 1 });

    } else {
        res.json({ result: "failure", msg: "forgetpass List Not Found", data: 0 });

    }
});

////  update_call_coordinator //////////////////////////////////////////////

router.post('/updatecall_coordinator', async (req, res) => {
    //  // console.log(req.body);
    var branch_id = req.body.branch_id

    if (req.body.branch_id == 4) {
        const objcoordinator = await call_list.updateOne({ _id: req.body.id }, {
            parent_coordinator: 18,
            status: 19
        });
        if (objcoordinator != null) {
            res.json({ result: "success", msg: "call_coordinator updated successfully", data: 1 });
        }
        else {
            res.json({ result: "failure", msg: "unsuccessful", data: 0 });
        }

    }

    if (req.body.branch_id == 5) {
        const objcoordinator = await call_list.updateOne({ _id: req.body.id }, {
            parent_coordinator: 14,
            status: 19
        });
        if (objcoordinator != null) {
            res.json({ result: "success", msg: "call_coordinator updated successfully", data: 1 });
        }
        else {
            res.json({ result: "failure", msg: "unsuccessful", data: 0 });
        }
    }

    //// console.log(objcoordinator);

})
///////////////////////insertcall///////////////////////////////////////////////////////

router.post('/addcall_list', async (req, res) => {
    const insertcall1 = await call_list.findOne({ _id: req.body.call_list_id })

    var pickup_address_value = ""
    var service_at = ""
    var dissatisfied_reason = ""
    var service_booking_date = ""
    var pickup = ""
    var pickup_address = ""
    var bank_name = ""
    var req_loan_amt = ""
    var call_later_date = ""
    var owner_name = ""
    var owner_number = ""
    var owner_address = ""
    var other_reason1 = ""
    var no_service = ""
    var status = ""
    var reminder_time = ""
    var coordinator = ""
    var current = new Date();
    var date_time = Date('d-M-y H:i:s');


    if (req.body.talk == "yes") {
        if (req.body.yes_option == 1) {
            reminder_time = req.body.meeting_time
            service_booking_date = req.body.meeting_date + "" + req.body.meeting_time
            pickup = "yes"
            pickup_address = req.body.meeting_address
            bank_name = req.body.bank_name
            req_loan_amt = req.body.req_loan_amount
            coordinator = req.body.coordinator
            reminder_dt = Date('d-M-y', Date.parse('-1 day', Date.parse(req.body.meeting_date)));
            status = 3
        }

        if (req.body.yes_option == 2) {
            call_later_date = req.body.next_date + "-" + req.body.next_time
            status = 4
            reminder_dt = Date('d-M-y', Date.parse(req.body.next_date));
            reminder_time = req.body.next_time
        }

        if (req.body.yes_option == 3) {
            no_service = req.body.service

            if (no_service == 1) {
                no_service = "not_interset"
                status = 6
            }

            if (no_service == 2) {
                owner_name = req.body.loan_bank
                owner_number = req.body.req_loan_amount
                owner_address = req.body.description
                no_service = "sold"
                status = 5
            }
            else if (no_service == 3) {
                other_reason1 = req.body.other_reason1
                no_service = req.body.other
                status = 7
            }
            reminder_dt = Date('d-M-y', Date.parse(' +1 day'));
            reminder_time = Date('H:i:s a')
        }

        if (req.body.yes_option == 4) {
            status = 8
            reminder_dt = Date('d-M-y', Date.parse(' +1 day'));
            reminder_time = Date('H:i:s a')
        }
    }
    else {
        if (req.body.pickup_no == "ringing") {
            status = 9
        }
        if (req.body.pickup_no == "busy") {
            status = 15
        }
        if (req.body.pickup_no == "switchedoff") {
            status = 16
        }
        if (req.body.pickup_no == "invalid") {
            status = 17
        }
        if (req.body.pickup_no == "other") {
            status = 18
        }

        reminder_dt = new Date(current.getTime() + 86400000);


        reminder_time = Date('H:i:s a')
    }

    
    var call_historymodel = new call_history();
    call_historymodel.talk = req.body.talk;
    call_historymodel.yes_option = req.body.yes_option;
    call_historymodel.service_booking_date = service_booking_date;
    call_historymodel.pickup = req.body.pickup;
    call_historymodel.pickup_address = pickup_address;
    call_historymodel.pickup_address_value = pickup_address_value;
    call_historymodel.call_later_date = call_later_date;
    call_historymodel.no_service = no_service;
    call_historymodel.service_at = service_at;
    call_historymodel.owner_name = owner_name;
    call_historymodel.owner_address = owner_address;
    call_historymodel.dissatisfied_reason = dissatisfied_reason;
    call_historymodel.other_person = req.body.other_person;
    call_historymodel.pickup_no = req.body.pickup_no;
    call_historymodel.call_id = req.body.call_list_id;
    call_historymodel.date_time = date_time;
    call_historymodel.status = req.body.status;
    call_historymodel.other4 = req.body.other4;

    call_historymodel.call_remark = req.body.call_remark;
    call_historymodel.caller_id = req.body.caller_id;

    call_historymodel.add_on = new Date();
    call_historymodel.is_active = req.body.is_active;

    // // console.log(call_history);
    const intserted = await call_historymodel.save();


    const objhis = await call_list.updateOne({ _id: insertcall1._id }, {
        status: status,last_history_id:intserted._id
    });

    if (insertcall1.user_type == 4) {
        const objhis = await call_list.updateOne({ _id: insertcall1._id }, {
            parent_coordinator: 25,
            idc: insertcall1.idc,
            status: 19,last_history_id:intserted._id
        });
       
    }
    if (insertcall1.user_type == 5) {
        const objhis = await call_list.updateOne({ _id: insertcall1._id }, {
            parent_coordinator: 14,
            idc: insertcall1.idc,
            status: 19,last_history_id:intserted._id
        });
       
    }


    if (intserted != null) {
        res.json({
            result: "success",
            msg: "call-history add successfully",
            data: 1
        });

    }
    else {
        res.json({
            result: "fail",
            msg: "not inserted",
            data: 0
        });
    }



});



//// update doc_collection /////////////////////////////////////////////////////////////////

router.post('/updatedoc_collection1', async (req, res) => {
    //// console.log(req.body);

    const objupdoc = await call_list.updateOne({ _id: req.body.id }, {

        doc_collected: req.body.doc_collected,
        status: 19,

    });

    // res.send(objupdoc);
    if (req.body.branch_id_fk == 4) {
        const objupdoc = await call_list.updateOne({ _id: req.body.id }, {

            parent_coordinator: 25
        });

        if (objupdoc != null) {
            res.json({ result: "success", msg: "doc_collection updated successfully", data: 1 });
        }
        else {
            res.json({ result: "failure", msg: "unsuccessful", data: 0 });
        }

    }

    if (req.body.branch_id_fk == 5) {
        const objupdoc = await call_list.updateOne({ _id: req.body.id }, {

            parent_coordinator: 14
        });

        if (objupdoc != null) {
            res.json({ result: "success", msg: "doc_collection updated successfully", data: 1 });
        }
        else {
            res.json({ result: "failure", msg: "unsuccessful", data: 0 });
        }

    }


})


///////////////////////////////////////////////

router.post('/updatedoc_collection', async (req, res) => {
    //// console.log(req.body);

    const objdoc_collection = await call_list.updateOne({ _id: req.body.id }, {

        doc_collected: req.body.doc_collected,
        status: 19,




    });
    // // console.log(objdoc_collection);
    if (objdoc_collection != null) {
        res.json({ result: "success", msg: "doc_collection updated successfully", data: objdoc_collection });
    }
    else {
        res.json({ result: "failure", msg: "unsuccessful", data: 0 });
    }
})


//////////////if branch = 4 //////////////////////////

router.post('/updatedoc_collection', async (req, res) => {
    //  // console.log(req.body);
    if (objdoc_collection.branch_id_fk = 4) {
        const objdoc_collection = await call_list.updateOne({ _id: req.body.id }, {

            parent_coordinator: 25


        });
    }
    //// console.log(objdoc_collection);
    if (objdoc_collection != null) {
        res.json({ result: "success", msg: "doc_collection updated successfully", data: objdoc_collection });
    }
    else {
        res.json({ result: "failure", msg: "unsuccessful", data: 0 });
    }
})


///// if barnch = 5 ////////////////////////////////////////

router.post('/updatedoc_collection', async (req, res) => {
    // // console.log(req.body);
    if (branch_id_fk = 5) {
        const objdoc_collection = await call_list.updateOne({ _id: req.body.id }, {

            parent_coordinator: 14


        });
    }
    //  // console.log(objdoc_collection);
    if (objdoc_collection != null) {
        res.json({ result: "success", msg: "doc_collection updated successfully", data: objdoc_collection });
    }
    else {
        res.json({ result: "failure", msg: "unsuccessful", data: 0 });
    }
})


/////// login addd ///////////////////////////////////////////////

router.post('/loginadd', async (req, res) => {
    var loginmodel = new login();
    loginmodel.login_date = req.body.login_date;
    loginmodel.call_id = req.body.call_id;
    loginmodel.branch_id_fk = req.body.branch_id_fk;
    loginmodel.login_city = req.body.login_city;
    loginmodel.bank_id_fk = req.body.bank_id_fk;
    loginmodel.loan_amt = req.body.loan_amt;
    loginmodel.login_tenure = req.body.login_tenure;
    loginmodel.login_type = req.body.login_type;
    loginmodel.vkyc = req.body.vkyc;
    loginmodel.case_id = req.body.case_id;
    loginmodel.loan = req.body.loan;
    loginmodel.loan_type = req.body.loan_type;
    loginmodel.remark = req.body.remark;
    loginmodel.sanction_amt = req.body.sanction_amt;
    loginmodel.agreement_status = req.body.agreement_status;
    loginmodel.tenure = req.body.tenure;
    loginmodel.roi = req.body.roi;
    loginmodel.pf = req.body.pf;
    loginmodel.ins = req.body.ins;
    loginmodel.finalremark = req.body.finalremark;
    loginmodel.reject_by = req.body.reject_by;
    loginmodel.status = req.body.status;
    loginmodel.disburse_date = req.body.disburse_date;
    loginmodel.nomiee_name = req.body.nomiee_name;
    loginmodel.nomiee_relation = req.body.nomiee_relation;
    loginmodel.nomiee_bod = req.body.nomiee_bod;
    loginmodel.ref_name1 = req.body.ref_name1;
    loginmodel.ref_cono1 = req.body.ref_cono1;
    loginmodel.ref_add1 = req.body.ref_add1;
    loginmodel.ref_name2 = req.body.ref_name2;
    loginmodel.ref_cono2 = req.body.ref_cono2;
    loginmodel.ref_add2 = req.body.ref_add2;
    loginmodel.cross_emp = req.body.cross_emp;
    loginmodel.cross_sale = req.body.cross_sale;
    loginmodel.cross_remark = req.body.cross_remark;
    loginmodel.lan = req.body.lan;

    loginmodel.add_on = new Date();
    loginmodel.is_active = req.body.is_active;

    const intserted = await loginmodel.save();

    if (intserted != null) {
        const objlogin = await login.updateOne({ _id: req.body.id }, {

            status: 20

        });

        if (objlogin != null) {
            res.json({ result: "success", msg: "doc_collection updated successfully", data: objlogin });
        }
        else {
            res.json({ result: "failure", msg: "unsuccessful", data: 0 });
        }
    }
});



///// update_login_status///////////////////////////////


router.post('/updatelogin_status', async (req, res) => {
    //var login_status = '';

    if (req.body.login_status == 2) {
        const update_res = await login.updateOne({ _id: req.body.id }, {

            status: 1,
            sanction_amt: req.body.sanction_amt,
            tenure: req.body.tenure,
            roi: req.body.roi,
            pf: req.body.pf,
            ins: req.body.ins,
            finalremark: req.body.finalremark


        });
        if (update_res != null) {
            res.json({ result: "success", msg: "updatelogin_status updated successfully", data: 1 });
        }
        else {
            res.json({ result: "failure", msg: "unsuccessful", data: 0 });
        }
        //res.send(update_res);
    }

    if (req.body.login_status == 3) {
        const update_res1 = await login.updateOne({ _id: req.body.id }, {

            status: 3,
            sanction_amt: req.body.sanction_amt,
            tenure: req.body.tenure,
            roi: req.body.roi,
            pf: req.body.pf,
            ins: req.body.ins,
            finalremark: req.body.finalremark

        });
        if (update_res != null) {
            res.json({ result: "success", msg: "updatelogin_status updated successfully", data: 1 });
        }
        else {
            res.json({ result: "failure", msg: "unsuccessful", data: 0 });
        }
    }

    if (req.body.login_status == 2) {
        const update_res2 = await login.updateOne({ _id: req.body.id }, {

            status: 2,
            reject_by: req.body.reject_by,
            finalremark: req.body.finalremark

        });
    }
    if (update_res != null) {
        res.json({ result: "success", msg: "updatelogin_status updated successfully", data: 1 });
    }
    else {
        res.json({ result: "failure", msg: "unsuccessful", data: 0 });
    }


})


router.post('/updatelogin_status1', async (req, res) => {
    const update_res2 = await login.find({ _id: req.body.id }, {
    })
    if (update_res2 != null) {
        res.json({ result: "success", msg: "updatelogin_status updated successfully", data: update_res2 });
    }
    else {
        res.json({ result: "failure", msg: "unsuccessful", data: 0 });
    }
})
//// emp_list /////////////////////////////////////////////////////////////////

router.post('/getbyemp_list', async (req, res) => {
    const objemp_list = await employee.find({ emp_type: req.body.emp_type })

    //  res.send(objemp_list);

    if (objemp_list != null) {
        res.json({ result: "success", msg: "emp_list inserted successfully", data: objemp_list });
    }
    else {
        res.json({ result: "failure", msg: "unsuccessful", data: 0 });
    }
});



/////////  insert-calll //////////////////////////////////////////////////////////////

////// user-type = 4 /////////////////////////////////////////
router.post('/insertcall', async (req, res) => {
    const icallobj = await call_list.findOne({ _id: req.body.id })
    console.log(req.body);
    if (icallobj == null) {

        var call_listmodel = new call_list();

        call_listmodel.branch_id_fk = req.body.branch_id_fk ? req.body.branch_id_fk : "";
        call_listmodel.assign_date = req.body.assign_date ? req.body.assign_date : "";
        call_listmodel.remark = req.body.remark ? req.body.remark : "";
        call_listmodel.parmanent_city = req.body.parmanent_city ? req.body.parmanent_city : "";
        call_listmodel.aadhar_no = req.body.aadhar_no ? req.body.aadhar_no : "";
        call_listmodel.pan_no = req.body.pan_no ? req.body.pan_no : "";
        call_listmodel.parmanent_address = req.body.parmanent_address ? req.body.parmanent_address : "";
        call_listmodel.parmanent_state = req.body.parmanent_state ? req.body.parmanent_state : "";
        call_listmodel.parmanent_city = req.body.parmanent_city ? req.body.parmanent_city : "";
        call_listmodel.current_state = req.body.current_state ? req.body.current_state : "";
        call_listmodel.current_city = req.body.current_city ? req.body.current_city : "";
        call_listmodel.current_address = req.body.current_address ? req.body.current_address : "";

        call_listmodel.company_id = req.body.company_id ? req.body.company_id : "";
        call_listmodel.company_cat = req.body.company_cat ? req.body.company_cat : "";
        call_listmodel.source_ref = req.body.source_ref ? req.body.source_ref : "";
        call_listmodel.bussiness_source = req.body.bussiness_source ? req.body.bussiness_source : "";

        call_listmodel.salary = req.body.salary ? req.body.salary : "";
        call_listmodel.company_name = req.body.company_name ? req.body.company_name : "";
        call_listmodel.email = req.body.email ? req.body.email : "";
        call_listmodel.dob = req.body.dob ? req.body.dob : "";
        call_listmodel.mobile2 = req.body.mobile2 ? req.body.mobile2 : "";

        call_listmodel.mobile = req.body.mobile ? req.body.mobile : "";
        call_listmodel.customer_name = req.body.customer_name ? req.body.customer_name : "";

        call_listmodel.status = 0;
        call_listmodel.last_history_id = mongoose.Types.ObjectId();
        call_listmodel.reminder_date = req.body.reminder_date ? req.body.reminder_date : "";
        call_listmodel.last_date_time = req.body.last_date_time ? req.body.last_date_time : "";
        call_listmodel.doc_collected = req.body.doc_collected ? req.body.doc_collected : "";
        call_listmodel.bank_id_fk = req.body.bank_id_fk ? req.body.bank_id_fk : "";
        call_listmodel.req_loan_amount = req.body.req_loan_amount ? req.body.req_loan_amount : "";

        call_listmodel.add_on = new Date();
        call_listmodel.is_active = true;



        if (req.body.user_type === "4") {
            call_listmodel.caller_id = req.body.lead_source
        }
        else {
            call_listmodel.caller_id = ""
        }
        if (req.body.user_type === 8) {
            call_listmodel.parent_coordinator = req.body.lead_source
        }
        else {
            call_listmodel.parent_coordinator = ""
        }
        if (req.body.user_type === 6) {
            call_listmodel.coordinator = req.body.lead_source
        }
        else {
            call_listmodel.coordinator = ""
        }
        if (req.body.user_type === 7) {
            call_listmodel.team_leader = req.body.lead_source
        }
        else {
            call_listmodel.team_leader = ""
        }
        if (req.body.user_type === 2) {
            call_listmodel.executive = req.body.lead_source
        }
        else {
            call_listmodel.executive = ""
        }
        if (req.body.user_type === 5) {
            call_listmodel.idc = req.body.lead_source
        }
        else {
            call_listmodel.idc = ""
        }
        const intserted = await call_listmodel.save();

        if (intserted != null) {
            res.json({ result: "success", msg: "call_list insert successfully", data: 1 });
        }
        else {
            res.json({ result: "failure", msg: "unsuccessful", data: 0 });
        }
    }
    else {


        if (req.body.user_type == "4") {
            const icallobj = await call_list.updateOne({ _id: req.body.id }, {

                caller_id: req.body.caller_id,


            });
            if (icallobj != null) {
                res.json({ result: "success", msg: "insertcall updated successfully", data: 1 });
            }
            else {
                res.json({ result: "failure", msg: "unsuccessful", data: 0 });
            }
        }



        if (req.body.user_type == 5) {
            if (req.body.branch_id_fk == 4) {
                const icallobj = await call_list.updateOne({ _id: req.body.id }, {

                    status: 19,
                    idc: req.body.idc,
                    parent_coordinator: 25

                });
                if (icallobj != null) {
                    res.json({ result: "success", msg: "insertcall updated successfully", data: intserted });
                }
                else {
                    res.json({ result: "failure", msg: "unsuccessful", data: 0 });
                }
            }

            if (req.body.branch_id_fk == "5") {
                const icallobj = await call_list.updateOne({ _id: req.body.id }, {

                    status: 19,
                    idc: req.body.idc,
                    parent_coordinator: 14

                });
                if (icallobj != null) {
                    res.json({ result: "success", msg: "insertcall updated successfully", data: 1 });
                }
                else {
                    res.json({ result: "failure", msg: "unsuccessful", data: 0 });
                }
            }
        }


    }
})

////// login_file_detail ////////////////////////////////////////////////////////////

router.post('/getbylogin_file_detail', async (req, res) => {
    const loginobj = await login.findOne({ _id: req.body.id })
        .populate("branch_id_fk", "branch_display_name")
        .populate("bank_id_fk", "bank_name")
        .populate("call_id", ["customer_name", "executive", "mobile"])

    if (loginobj != null) {
        res.json({ result: "success", msg: "login_file List Found", data: loginobj });

    } else {
        res.json({ result: "failure", msg: "login_file List Not Found", data: 0 });

    }
});

//// change password ////////////////////////////////////////////////////////////


router.post('/change_password', async (req, res) => {

    const objempl = await employee.updateOne({ _id: req.body.login_id }, {

        login_pass: req.body.login_pass


    });

    if (objempl != null) {
        res.json({ result: "success", msg: "password updated successfully", data: 1 });
    }
    else {
        res.json({ result: "failure", msg: "unsuccessful", data: 0 });
    }
})


///////////// call_list //////////////////////////////////////////////////////////

router.post('/getcalllist2', async (req, res) => {
    const objemplist = await employee.findOne({ _id: req.body.id })
    var call_status = req.body.call_status
    var user_type = req.body.user_type
    //var user_type = ""; 
    //var call_status= "";  
    // var callobj = [];
    //  JSON.stringify(callobj);


    if (req.body.call_status == "not_interested") {

        if (req.body.user_type == "emp") {
            if (objemplist.emp_type == "4") {
                const callobj = await call_list.find({ status: { $in: [5, 7, 17, 6] }, caller_id: objemplist._id })
                    .populate("last_history_id", ["talk", "service_booking_date", "pickup", "pickup_address", "call_later_date", "service_at", "owner_name", "owner_address", "dissatisfied_reason", "date_time"])




                if (callobj != null) {
                    res.json({ result: "success", msg: "call-list found successfully", data: callobj });
                }
                else {
                    res.json({ result: "failure", msg: "unsuccessful", data: 0 });
                }
            }
            if (objemplist.emp_type == "7") {
                const callobj = await call_list.find({ status: { $in: [5, 7, 17, 6] }, team_leader: objemplist._id })
                    .populate("last_history_id", ["talk", "service_booking_date", "pickup", "pickup_address", "call_later_date", "service_at", "owner_name", "owner_address", "dissatisfied_reason", "date_time"])



                if (callobj != null) {
                    res.json({ result: "success", msg: "call-list found successfully", data: callobj });
                }
                else {
                    res.json({ result: "failure", msg: "unsuccessful", data: 0 });
                }
            }

            if (objemplist.emp_type == "2") {
                const callobj = await call_list.find({ status: { $in: [5, 7, 17, 6] }, executive: objemplist._id })
                    .populate("last_history_id", ["talk", "service_booking_date", "pickup", "pickup_address", "call_later_date", "service_at", "owner_name", "owner_address", "dissatisfied_reason", "date_time"])



                if (callobj != null) {
                    res.json({ result: "success", msg: "call-list found successfully", data: callobj });
                }
                else {
                    res.json({ result: "failure", msg: "unsuccessful", data: 0 });
                }
            }
            if (objemplist.emp_type == "6") {
                const callobj = await call_list.find({ status: { $in: [5, 7, 17, 6] }, coordinator: objemplist._id })
                    .populate("last_history_id", ["talk", "service_booking_date", "pickup", "pickup_address", "call_later_date", "service_at", "owner_name", "owner_address", "dissatisfied_reason", "date_time"])



                if (callobj != null) {
                    res.json({ result: "success", msg: "call-list found successfully", data: callobj });
                }
                else {
                    res.json({ result: "failure", msg: "unsuccessful", data: 0 });
                }
            }
        }
        else {
            const callobj = await call_list.find({ status: { $in: [5, 7, 17, 6] }, branch_id_fk: objemplist._id })
                .populate("last_history_id", ["talk", "service_booking_date", "pickup", "pickup_address", "call_later_date", "service_at", "owner_name", "owner_address", "dissatisfied_reason", "date_time"])



            if (callobj != null) {
                res.json({ result: "success", msg: "call-list found successfully", data: callobj });
            }
            else {
                res.json({ result: "failure", msg: "unsuccessful", data: 0 });
            }
        }



    }
    else if (req.body.call_status == "follow_up") {
        if (req.body.user_type == "emp") {
            if (objemplist.emp_type == 4) {
                const callobj = await call_list.find({ status: 4, caller_id: objemplist._id })
                    .populate("last_history_id", ["talk", "service_booking_date", "pickup", "pickup_address", "call_later_date", "service_at", "owner_name", "owner_address", "dissatisfied_reason", "date_time"])



                if (callobj != null) {
                    res.json({ result: "success", msg: "call-list found successfully", data: callobj });
                }
                else {
                    res.json({ result: "failure", msg: "unsuccessful", data: 0 });
                }
            }

            if (objemplist.emp_type == "7") {
                const callobj = await call_list.find({ status: 4, team_leader: objemplist._id })
                    .populate("last_history_id", ["talk", "service_booking_date", "pickup", "pickup_address", "call_later_date", "service_at", "owner_name", "owner_address", "dissatisfied_reason", "date_time"])



                if (callobj != null) {
                    res.json({ result: "success", msg: "call-list found successfully", data: callobj });
                }
                else {
                    res.json({ result: "failure", msg: "unsuccessful", data: 0 });
                }
            }
            if (objemplist.emp_type == "2") {
                const callobj = await call_list.find({ status: 4, executive: objemplist._id })
                    .populate("last_history_id", ["talk", "service_booking_date", "pickup", "pickup_address", "call_later_date", "service_at", "owner_name", "owner_address", "dissatisfied_reason", "date_time"])



                if (callobj != null) {
                    res.json({ result: "success", msg: "call-list found successfully", data: callobj });
                }
                else {
                    res.json({ result: "failure", msg: "unsuccessful", data: 0 });
                }
            }
            if (objemplist.emp_type == "6") {
                const callobj = await call_list.find({ status: 4, coordinator: objemplist._id })
                    .populate("last_history_id", ["talk", "service_booking_date", "pickup", "pickup_address", "call_later_date", "service_at", "owner_name", "owner_address", "dissatisfied_reason", "date_time"])



                if (callobj != null) {
                    res.json({ result: "success", msg: "call-list found successfully", data: callobj });
                }
                else {
                    res.json({ result: "failure", msg: "unsuccessful", data: 0 });
                }
            }
        }
        else {
            const callobj = await call_list.find({ status: { $in: [4, 18] }, branch_id_fk: objemplist._id })
                .populate("last_history_id", ["talk", "service_booking_date", "pickup", "pickup_address", "call_later_date", "service_at", "owner_name", "owner_address", "dissatisfied_reason", "date_time"])



            if (callobj != null) {
                res.json({ result: "success", msg: "call-list found successfully", data: callobj });
            }
            else {
                res.json({ result: "failure", msg: "unsuccessful", data: 0 });
            }
        }


    }
    else {

        if (objemplist.emp_type == 5) {
            const callobj = await call_list.find({ status: req.body.call_status, idc: req.body.id })
                .populate("last_history_id", ["talk", "service_booking_date", "pickup", "pickup_address", "call_later_date", "service_at", "owner_name", "owner_address", "dissatisfied_reason", "date_time"])


            if (callobj != null) {
                res.json({ result: "success", msg: "call-list found successfully", data: callobj });
            }
            else {
                res.json({ result: "failure", msg: "unsuccessful", data: 0 });
            }
        }

        if (objemplist.emp_type == 4) {
            const callobj = await call_list.find({ status: req.body.call_status, caller_id: req.body.id })
                .populate("last_history_id", ["talk", "service_booking_date", "pickup", "pickup_address", "call_later_date", "service_at", "owner_name", "owner_address", "dissatisfied_reason", "date_time"])



            if (callobj != null) {
                res.json({ result: "success", msg: "call-list found successfully", data: callobj });
            }
            else {
                res.json({ result: "failure", msg: "unsuccessful", data: 0 });
            }
        }


        if (objemplist.emp_type == 7) {
            if (req.body.call_title == "Ready to meet Leads") {
                const callobj = await call_list.find({ status: req.body.call_status })
                    .populate("last_history_id", ["talk", "service_booking_date", "pickup", "pickup_address", "call_later_date", "service_at", "owner_name", "owner_address", "dissatisfied_reason", "date_time"])



                if (callobj != null) {
                    res.json({ result: "success", msg: "call-list found successfully", data: callobj });
                }
                else {
                    res.json({ result: "failure", msg: "unsuccessful", data: 0 });
                }
            }
            else if (req.body.call_title == "Assigned to Executive") {
                const callobj = await call_list.find({ status: req.body.call_status })
                    .populate("last_history_id", ["talk", "service_booking_date", "pickup", "pickup_address", "call_later_date", "service_at", "owner_name", "owner_address", "dissatisfied_reason", "date_time"])



                if (callobj != null) {
                    res.json({ result: "success", msg: "call-list found successfully", data: callobj });
                }
                else {
                    res.json({ result: "failure", msg: "unsuccessful", data: 0 });
                }
            }
            else {
                const callobj = await call_list.find({ status: req.body.call_status })
                    .populate("last_history_id", ["talk", "service_booking_date", "pickup", "pickup_address", "call_later_date", "service_at", "owner_name", "owner_address", "dissatisfied_reason", "date_time"])



                if (callobj != null) {
                    res.json({ result: "success", msg: "call-list found successfully", data: callobj });
                }
                else {
                    res.json({ result: "failure", msg: "unsuccessful", data: 0 });
                }
            }
        }

        if (objemplist.emp_type == 8) {
            if (req.body.call_title == "Un-Assigned Ready to meet Leads") {
                const callobj = await call_list.find({ status: req.body.call_status })
                    .populate("last_history_id", ["talk", "service_booking_date", "pickup", "pickup_address", "call_later_date", "service_at", "owner_name", "owner_address", "dissatisfied_reason", "date_time"])



                if (callobj != null) {
                    res.json({ result: "success", msg: "call-list found successfully", data: callobj });
                }
                else {
                    res.json({ result: "failure", msg: "unsuccessful", data: 0 });
                }
            }
            else {
                const callobj = await call_list.find({ status: req.body.call_status })
                    .populate("last_history_id", ["talk", "service_booking_date", "pickup", "pickup_address", "call_later_date", "service_at", "owner_name", "owner_address", "dissatisfied_reason", "date_time"])



                if (callobj != null) {
                    res.json({ result: "success", msg: "call-list found successfully", data: callobj });
                }
                else {
                    res.json({ result: "failure", msg: "unsuccessful", data: 0 });
                }
            }
        }

        if (objemplist.emp_type == 2) {
            const callobj = await call_list.find({ status: req.body.call_status, executive: req.body.id })
                .populate("last_history_id", ["talk", "service_booking_date", "pickup", "pickup_address", "call_later_date", "service_at", "owner_name", "owner_address", "dissatisfied_reason", "date_time"])


            if (callobj != null) {
                res.json({ result: "success", msg: "call-list found successfully", data: callobj });
            }
            else {
                res.json({ result: "failure", msg: "unsuccessful", data: 0 });
            }
        }

        if (objemplist.emp_type == 6) {
            const callobj = await call_list.find({ status: req.body.call_status })
                .populate("last_history_id", ["talk", "service_booking_date", "pickup", "pickup_address", "call_later_date", "service_at", "owner_name", "owner_address", "dissatisfied_reason", "date_time"])


            if (callobj != null) {
                res.json({ result: "success", msg: "call-list found successfully", data: callobj });
            }
            else {
                res.json({ result: "failure", msg: "unsuccessful", data: 0 });
            }
        }
    }


    // const result = JSON.stringify(callobj, callobj1);
    // if (callobj != null) {
    //     res.json({ result: "success", msg: "call-list updated successfully", data: callobj });
    // }
    // else {
    //     res.json({ result: "failure", msg: "unsuccessful", data: 0 });
    // }
});

////  login_files_list/////////////////////////////////////////////////////////


router.post('/getbylogin_file_list', async (req, res) => {
    // console.log(req.body.user_id);

    const empobj = await employee.findOne({ _id: req.body.user_id })
    var user_type = req.body.user_type;

    if (empobj.emp_type == 7) {

        pipeline1 = [[
            {
                '$lookup': {
                    'from': 'call_lists',
                    'localField': 'call_id',
                    'foreignField': '_id',
                    'as': 'call'
                }
            }, {
                '$addFields': {
                    'call': {
                        '$arrayElemAt': [
                            '$call', 0
                        ]
                    }
                }
            }, {
                '$match': {
                    'status': req.body.login_status,
                    'call.team_leader': empobj._id
                }
            }
        ]]
        const callobj = await login.aggregate(pipeline1)
        console.log(callobj);
        if (callobj != null) {
            res.json({ result: "success", msg: "login_file_list  Found", data: callobj });

        } else {
            res.json({ result: "failure", msg: "login_file_list  Not Found", data: 0 });

        }

    }

    if (empobj.emp_type == 8) {

        pipeline2 = [[
            {
                '$lookup': {
                    'from': 'call_lists',
                    'localField': 'call_id',
                    'foreignField': '_id',
                    'as': 'call'
                }
            }, {
                '$addFields': {
                    'call': {
                        '$arrayElemAt': [
                            '$call', 0
                        ]
                    }
                }
            }, {
                '$match': {
                    'status': req.body.login_status,
                    'call.parent_coordinator': empobj._id
                }
            }
        ]]
        const callobj = await login.aggregate(pipeline2)


        if (callobj != null) {
            res.json({ result: "success", msg: "login_file_list  Found", data: callobj });

        } else {
            res.json({ result: "failure", msg: "login_file_list  Not Found", data: 0 });

        }
    }
    if (empobj.emp_type == 2) {

        pipeline3 = [[
            {
                '$lookup': {
                    'from': 'call_lists',
                    'localField': 'call_id',
                    'foreignField': '_id',
                    'as': 'call'
                }
            }, {
                '$addFields': {
                    'call': {
                        '$arrayElemAt': [
                            '$call', 0
                        ]
                    }
                }
            }, {
                '$match': {
                    'status': req.body.login_status,
                    'call.executive': req.body.user_id
                }
            }
        ]]
        const callobj = await login.aggregate(pipeline3)


        if (callobj != null) {
            res.json({ result: "success", msg: "login_file_list  Found", data: callobj });

        } else {
            res.json({ result: "failure", msg: "login_file_list  Not Found", data: 0 });

        }
    }

    if (empobj.emp_type == 6) {

        pipeline3 = [[
            {
                '$lookup': {
                    'from': 'call_lists',
                    'localField': 'call_id',
                    'foreignField': '_id',
                    'as': 'call'
                }
            }, {
                '$addFields': {
                    'call': {
                        '$arrayElemAt': [
                            '$call', 0
                        ]
                    }
                }
            }, {
                '$match': {
                    'status': req.body.login_status,
                    'call.coordinator': req.body.user_id
                }
            }
        ]]
        const callobj = await login.aggregate(pipeline3)


        if (callobj != null) {
            res.json({ result: "success", msg: "login_file_list  Found", data: callobj });

        } else {
            res.json({ result: "failure", msg: "login_file_list  Not Found", data: 0 });

        }
    }

    if (empobj.emp_type == 4) {

        pipeline4 = [[
            {
                '$lookup': {
                    'from': 'call_lists',
                    'localField': 'call_id',
                    'foreignField': '_id',
                    'as': 'call'
                }
            }, {
                '$addFields': {
                    'call': {
                        '$arrayElemAt': [
                            '$call', 0
                        ]
                    }
                }
            }, {
                '$match': {
                    'status': req.body.login_status,
                    'call.caller_id': req.body.user_id
                }
            }
        ]]
        const callobj = await login.aggregate(pipeline4)


        if (callobj != null) {
            res.json({ result: "success", msg: "login_file_list  Found", data: callobj });

        } else {
            res.json({ result: "failure", msg: "login_file_list  Not Found", data: 0 });

        }

    }
    if (empobj.emp_type == 5) {

        pipeline5 = [[
            {
                '$lookup': {
                    'from': 'call_lists',
                    'localField': 'call_id',
                    'foreignField': '_id',
                    'as': 'call'
                }
            }, {
                '$addFields': {
                    'call': {
                        '$arrayElemAt': [
                            '$call', 0
                        ]
                    }
                }
            }, {
                '$match': {
                    'status': req.body.login_status,
                    'call.idc': req.body.user_id
                }
            }
        ]]
        const callobj = await login.aggregate(pipeline5)


        if (callobj != null) {
            res.json({ result: "success", msg: "login_file_list  Found", data: callobj });

        } else {
            res.json({ result: "failure", msg: "login_file_list  Not Found", data: 0 });

        }
    }

});




/////emp_profile /////////////////////////////////////////////////////////


router.post('/getemp_profile1', async (req, res) => {
    const empobj1 = await employee.find({ _id: req.body.id })

    var empID = empobj1._id;

    if (empobj1.emp_type == 4) {
        empobj1.designation == "TCO";
    }
    else if (empobj1.emp_type == 5) {
        empobj1.designation == "Bussiness Partner"
    }
    else if (empobj1.emp_type == 7) {
        empobj1.designation == "BSM"
    }
    else if (empobj1.emp_type == 2) {
        empobj1.designation == "DPA"
    }
    else if (empobj1.emp_type == 6) {
        empobj1.designation == "BOA"
    }
    else if (empobj1.emp_type == 8) {
        empobj1.designation == "BOM"
    }
    else {
        empobj1.designation == "User"
    }

    //const objbranch = await branch.findOne({ _id: req.body.id })

    var count1 = new Array();
    if (empobj1.emp_type == "5") {

        const ready_login = await call_list.find({ status: 19, idc: empID })
            .populate("branch_id_fk", "branch_display_name")
        if (ready_login[0] != 0) {
            var element = {};
            element.title = "ready to meet";
            element.type = "call";
            element.status = "19";
            element.count = ready_login;
            count1.push({ element });

        }
        // // console.log(ready_login);
        if (ready_login != null) {
            res.json({ result: "success", msg: "emp_profile List Found", data: ready_login });

        } else {
            res.json({ result: "failure", msg: "emp_profile List Not Found", data: 0 });

        }
        // // console.log(ready_login);

        const login_files = await login.find({ status: 0 }, { "$lookup": { "from": "call_list", "localField": "_id", "foreignField": "call_id", "as": "call_doc" }, "$match": { "call_doc.idc": empID } })
            .populate("branch_id_fk", "branch_display_name").count()



        if (login_files[0] != 0) {
            var element = {};
            element.title = "Login files";
            element.type = "login";
            element.status = "0";
            element.count = login_files;
            count1.push({ element });

        }

        const approved_files = await login.find({ status: 1 }, { "$lookup": { "from": "call_list", "localField": "_id", "foreignField": "call_id", "as": "call_doc" }, "$match": { "call_doc.idc": empID } })
            .populate("branch_id_fk", "branch_display_name").count()

        if (approved_files[0] != 0) {
            var element = {};
            element.title = "Approved files";
            element.type = "login";
            element.status = "1";
            element.count = approved_files;
            count1.push({ element });

        }

        const rejected_files = await login.find({ status: 2 }, { "$lookup": { "from": "call_list", "localField": "_id", "foreignField": "call_id", "as": "call_doc" }, "$match": { "call_doc.idc": empID } })
            .populate("branch_id_fk", "branch_display_name").count()

        if (rejected_files[0] != 0) {
            var element = {};
            element.title = "Rejected files";
            element.type = "login";
            element.status = "2";
            element.count = rejected_files;
            count1.push({ element });

        }

        const disbursed_files = await login.find({ status: 3 }, { "$lookup": { "from": "call_list", "localField": "_id", "foreignField": "call_id", "as": "call_doc" }, "$match": { "call_doc.idc": empID } })
            .populate("branch_id_fk", "branch_display_name").count()

        if (disbursed_files[0] != 0) {
            var element = {};
            element.title = "Disbursed files";
            element.type = "login";
            element.status = "3";
            element.count = disbursed_files;
            count1.push({ element });

        }

    }
    if (empobj1.emp_type == 2) {
        const ready_meet = await call_list.find({ status: 3, executive: empobj1._id }).count()
        if (ready_meet[0] != 0) {
            var element = {};
            element.title = "Ready to meet";
            element.type = "call";
            element.status = "3";
            element.count = ready_meet.toString();;
            count1.push({ element });

        }

        const ready_login = await call_list.find({ status: 19, executive: empobj1._id }).count()
        if (ready_login[0] != 0) {
            var element = {};
            element.title = "Login";
            element.type = "call";
            element.status = "19";
            element.count = ready_login.toString();;
            count1.push({ element });

        }

        const login_files = await login.find({ status: 0 }, { "$lookup": { "from": "call_list", "localField": "_id", "foreignField": "executive", "as": "ex_doc" }, "$match": { "ex_doc.executive": empobj2.executive } }).count()
        if (login_files[0] != 0) {
            var element = {};
            element.title = "Ready for Login";
            element.type = "login";
            element.status = "19";
            element.count = login_files.toString();;
            count1.push({ element });

        }

        const approved_files = await login.find({ status: 1 }, { "$lookup": { "from": "call_list", "localField": "_id", "foreignField": "executive", "as": "ex_doc" }, "$match": { "ex_doc.executive": empobj2.executive } }).count()

        if (approved_files[0] != 0) {
            var element = {};
            element.title = "Ready for Login";
            element.type = "login";
            element.status = "1";
            element.count = approved_files.toString();;
            count1.push({ element });

        }

        const rejected_files = await login.find({ status: 2 }, { "$lookup": { "from": "call_list", "localField": "_id", "foreignField": "executive", "as": "ex_doc" }, "$match": { "ex_doc.executive": empobj2.executive } }).count()

        if (rejected_files[0] != 0) {
            var element = {};
            element.title = "Ready for Login";
            element.type = "login";
            element.status = "2";
            element.count = rejected_files.toString();;
            count1.push({ element });

        }

        const disbursed_files = await login.find({ status: 3 }, { "$lookup": { "from": "call_list", "localField": "_id", "foreignField": "executive", "as": "ex_doc" }, "$match": { "ex_doc.executive": empobj2.executive } }).count()

        if (disbursed_files[0] != 0) {
            var element = {};
            element.title = "Disbursed Files";
            element.type = "login";
            element.status = "3";
            element.count = disbursed_files.toString();;
            count1.push({ element });

        }



    }

    if (empobj1.emp_type == 4) {
        const fresh_call = await call_list.find({ status: 0, caller_id: empobj1._id }).count()
        if (fresh_call[0] != 0) {
            var element = {};
            element.title = "Fresh Calls";
            element.type = "call";
            element.status = "0";
            element.count = fresh_call;
            count1.push({ element });

        }

        const followup = await call_list.find({ status: 4, caller_id: empobj1._id }).count()
        if (followup[0] != 0) {
            var element = {};
            element.title = "Followup Calls";
            element.type = "call";
            element.status = "follow_up";
            element.count = followup;
            count1.push({ element });

        }

        const ready_meet = await call_list.find({ status: 3, caller_id: empobj1._id }).count()
        if (ready_meet[0] != 0) {
            var element = {};
            element.title = "Ready To Meet Calls";
            element.type = "login";
            element.status = "3";
            element.count = ready_meet;
            count1.push({ element });

        }



        const followup1 = await call_list.find({ status: { $nin: [5, 7, 17, 6] } }, { caller_id: empobj1._id }).count()
        if (followup1[0] != 0) {
            var element = {};
            element.title = "Not Interested Calls";
            element.type = "call";
            element.status = "not_interested";
            element.count = followup1;
            count1.push({ element });

        }

        const ringing = await call_list.find({ status: 3 }, { caller_id: empobj1._id }).count()
        if (ringing[0] != 0) {
            var element = {};
            element.title = "Ringing No Response Calls";
            element.type = "call";
            element.status = "9";
            element.count = ringing;
            count1.push({ element });

        }

        const busy = await call_list.find({ status: 15 }, { caller_id: empobj1._id }).count()
        if (busy[0] != 0) {
            var element = {};
            element.title = "Busy Calls";
            element.type = "call";
            element.status = "15";
            element.count = busy;
            count1.push({ element });

        }

        const switched_off = await call_list.find({ status: 16 }, { caller_id: empobj1._id }).count()
        if (switched_off[0] != 0) {
            var element = {};
            element.title = "Switched Off / Unavailable Calls";
            element.type = "call";
            element.status = "16";
            element.count = switched_off;
            count1.push({ element });

        }

        const invalid = await call_list.find({ status: 17 }, { caller_id: empobj1._id }).count()
        if (invalid[0] != 0) {
            var element = {};
            element.title = "Invalid Number Calls";
            element.type = "call";
            element.status = "17";
            element.count = invalid;
            count1.push({ element });

        }

        const ready_login = await call_list.find({ status: 19 }, { caller_id: empobj1._id }).count()
        if (ready_login[0] != 0) {
            var element = {};
            element.title = "Ready for Login";
            element.type = "call";
            element.status = "19";
            element.count = ready_login;
            count1.push({ element });

        }

        const login_files = await login.find({ status: 0 }, { "$lookup": { "from": "call_list", "localField": "_id", "foreignField": "call_id", "as": "c_doc" }, "$match": { "c_doc.caller_id": empobj2._id } }).count()

        if (login_files[0] != 0) {
            var element = {};
            element.title = "Login files";
            element.type = "login";
            element.status = "19";
            element.count = login_files;
            count1.push({ element });

        }

        const approved_files = await login.find({ status: 1 }, { "$lookup": { "from": "call_list", "localField": "_id", "foreignField": "call_id", "as": "c_doc" }, "$match": { "c_doc.caller_id": empobj2._id } }).count()

        if (approved_files[0] != 0) {
            var element = {};
            element.title = "Login files";
            element.type = "login";
            element.status = "19";
            element.count = approved_files;
            count1.push({ element });

        }

        const rejected_files = await login.find({ status: 2 }, { "$lookup": { "from": "call_list", "localField": "_id", "foreignField": "call_id", "as": "c_doc" }, "$match": { "c_doc.caller_id": empobj2._id } }).count()
        if (rejected_files[0] != 0) {
            var element = {};
            element.title = "Rejected Files";
            element.type = "login";
            element.status = "2";
            element.count = rejected_files;
            count1.push({ element });

        }

        const disbursed_files = await login.find({ status: 3 }, { "$lookup": { "from": "call_list", "localField": "_id", "foreignField": "call_id", "as": "c_doc" }, "$match": { "c_doc.caller_id": empobj2._id } }).count()

        if (disbursed_files[0] != 0) {
            var element = {};
            element.title = "Disbursed Files";
            element.type = "login";
            element.status = "3";
            element.count = disbursed_files;
            count1.push({ element });

        }

    }
    //////////////////////////////
    if (empobj1.emp_type == 6) {

        const ready_login = await call_list.find({ status: 19 }, { coordinator: empobj1._id }).count()
        if (ready_login[0] != 0) {
            var element = {};
            element.title = "Disbursed Files";
            element.type = "login";
            element.status = "19";
            element.count = ready_login;
            count1.push({ element });

        }

        const login_files = await login.find({ status: 0 }, { "$lookup": { "from": "call_list", "localField": "_id", "foreignField": "coordinator", "as": "cor_doc" }, "$match": { "cor_doc.coordinaator": empobj2._id } }).count()
        if (login_files[0] != 0) {
            var element = {};
            element.title = "Disbursed Files";
            element.type = "login";
            element.status = "19";
            element.count = login_files;
            count1.push({ element });

        }
        const approved_files = await login.find({ status: 1 }, { "$lookup": { "from": "call_list", "localField": "_id", "foreignField": "coordinator", "as": "cor_doc" }, "$match": { "cor_doc.coordinaator": empobj2._id } }).count()
        if (approved_files[0] != 0) {
            var element = {};
            element.title = "Approved Files";
            element.type = "login";
            element.status = "1";
            element.count = approved_files;
            count1.push({ element });

        }

        const rejected_files = await login.find({ status: 2 }, { "$lookup": { "from": "call_list", "localField": "_id", "foreignField": "coordinator", "as": "cor_doc" }, "$match": { "cor_doc.coordinaator": empobj2._id } }).count()
        if (rejected_files[0] != 0) {
            var element = {};
            element.title = "Approved Files";
            element.type = "login";
            element.status = "2";
            element.count = rejected_files;
            count1.push({ element });

        }

        const disbursed_files = await login.find({ status: 3 }, { "$lookup": { "from": "call_list", "localField": "_id", "foreignField": "coordinator", "as": "cor_doc" }, "$match": { "cor_doc.coordinaator": empobj2._id } }).count()
        if (disbursed_files[0] != 0) {
            var element = {};
            element.title = "Approved Files";
            element.type = "login";
            element.status = "3";
            element.count = disbursed_files;
            count1.push({ element });

        }
    }
    //////////////////////////////////////////////////////////

    if (empobj1.emp_type == 7) {
        const unAssign_ready_meet = await call_list.find({ status: 3 }, { team_leader: empobj1._id }, { parent_coordinator: 0 }, { executive: 0 }).count()
        if (unAssign_ready_meet[0] != 0) {
            var element = {};
            element.title = "Ready to meet Leads";
            element.type = "call";
            element.status = "3";
            element.count = unAssign_ready_meet;
            count1.push({ element });

        }

        const ready_meet = await call_list.find({ status: 3 }, { team_leader: empobj1._id }).count()
        if (ready_meet[0] != 0) {
            var element = {};
            element.title = "Assigned to Executive";
            element.type = "call";
            element.status = "3";
            element.count = ready_meet;
            count1.push({ element });

        }

        const ready_login = await call_list.find({ status: 19 }, { team_leader: empobj1._id }).count()
        if (ready_login[0] != 0) {
            var element = {};
            element.title = "Ready for Login";
            element.type = "call";
            element.status = "19";
            element.count = ready_login;
            count1.push({ element });

        }

        const login_files = await login.find({ status: 0 }, { "$lookup": { "from": "call_list", "localField": "_id", "foreignField": "team_leader", "as": "cor_doc" }, "$match": { "cor_doc.team_leader": empobj2._id } }).count()
        if (login_files[0] != 0) {
            var element = {};
            element.title = "Login Files";
            element.type = "login";
            element.status = "19";
            element.count = login_files;
            count1.push({ element });

        }

        const approved_files = await login.find({ status: 1 }, { "$lookup": { "from": "call_list", "localField": "_id", "foreignField": "team_leader", "as": "cor_doc" }, "$match": { "cor_doc.team_leader": empobj2._id } }).count()
        if (approved_files[0] != 0) {
            var element = {};
            element.title = "Approved Files";
            element.type = "login";
            element.status = "1";
            element.count = approved_files;
            count1.push({ element });

        }

        const rejected_files = await login.find({ status: 2 }, { "$lookup": { "from": "call_list", "localField": "_id", "foreignField": "team_leader", "as": "cor_doc" }, "$match": { "cor_doc.team_leader": empobj2._id } }).count()
        if (rejected_files[0] != 0) {
            var element = {};
            element.title = "Rejected Files";
            element.type = "login";
            element.status = "2";
            element.count = rejected_files;
            count1.push({ element });

        }

        const disbursed_files = await login.find({ status: 3 }, { "$lookup": { "from": "call_list", "localField": "_id", "foreignField": "team_leader", "as": "cor_doc" }, "$match": { "cor_doc.team_leader": empobj2._id } }).count()
        if (disbursed_files[0] != 0) {
            var element = {};
            element.title = "Disbursed Files";
            element.type = "login";
            element.status = "3";
            element.count = disbursed_files;
            count1.push({ element });

        }

    }

    //////////////////////////////////////////////////////////

    if (empobj1.emp_type == 8) {
        const ready_login = await call_list.find({ status: 19 }).count()
        if (ready_login[0] != 0) {
            var element = {};
            element.title = "Ready for Login";
            element.type = "call";
            element.status = "19";
            element.count = ready_login;
            count1.push({ element });

        }

        const login_files = await login.find({ status: 0 }, { "$lookup": { "from": "call_list", "localField": "_id", "foreignField": "parent_coordinator", "as": "cor_doc" }, "$match": { "cor_doc.parent_coordinator": empobj2._id } }).count()
        if (login_files[0] != 0) {
            var element = {};
            element.title = "Login Files";
            element.type = "login";
            element.status = "19";
            element.count = login_files;
            count1.push({ element });

        }

        const approved_files = await login.find({ status: 1 }, { "$lookup": { "from": "call_list", "localField": "_id", "foreignField": "parent_coordinator", "as": "cor_doc" }, "$match": { "cor_doc.parent_coordinator": empobj2._id } }).count()
        if (approved_files[0] != 0) {
            var element = {};
            element.title = "Approved Files";
            element.type = "login";
            element.status = "1";
            element.count = approved_files;
            count1.push({ element });

        }

        const rejected_files = await login.find({ status: 2 }, { "$lookup": { "from": "call_list", "localField": "_id", "foreignField": "parent_coordinator", "as": "cor_doc" }, "$match": { "cor_doc.parent_coordinator": empobj2._id } }).count()
        if (rejected_files[0] != 0) {
            var element = {};
            element.title = "Rejected Files";
            element.type = "login";
            element.status = "2";
            element.count = rejected_files;
            count1.push({ element });

        }

        const disbursed_files = await login.find({ status: 3 }, { "$lookup": { "from": "call_list", "localField": "_id", "foreignField": "parent_coordinator", "as": "cor_doc" }, "$match": { "cor_doc.parent_coordinator": empobj2._id } }).count()
        if (disbursed_files[0] != 0) {
            var element = {};
            element.title = "Disbursed Files";
            element.type = "login";
            element.status = "3";
            element.count = disbursed_files;
            count1.push({ element });

            // // console.log(disbursed_files);

        }

    }
    // if (empobj1 != null) {
    //     res.json({ result: "success", msg: "call_list List Found", data: empobj1 });

    // } else {
    //     res.json({ result: "failure", msg: "call_list List Not Found", data: 0 });

    // }
    // res.send(empobj1);
});

router.post('/getemp_profileofbussiness', async (req, res) => {
    const empobj1 = await employee.findOne({ _id: req.body.id })
    //    // console.log(empobj1);
    var empID = empobj1._id;


    // var designation = req.body.designation;

    var count1 = new Array();
    const pipeline1 = [
        [
            {
                '$lookup': {
                    'from': 'call_lists',
                    'localField': 'call_id',
                    'foreignField': '_id',
                    'as': 'call'
                }
            }, {
                '$addFields': {
                    'call': {
                        '$arrayElemAt': [
                            '$call', 0
                        ]
                    }
                }
            }, {
                '$match': {
                    'status': '0',
                    'call.idc': req.body.id
                }
            }
        ]
    ]
    const login_files = await login.aggregate(pipeline1)

    var objdata = 0;
    for (const doc of login_files) {
        // // console.log(doc);
        objdata++;
    }

    // // console.log(objdata);
    if (objdata != null) {
        var element = {};
        element.title = "Login files";
        element.type = "login";
        element.status = "0";
        element.count = objdata.toString();;
        count1.push({ element });

        // // console.log(objdata);

    }
    const pipeline2 = [
        [
            {
                '$lookup': {
                    'from': 'call_lists',
                    'localField': 'call_id',
                    'foreignField': '_id',
                    'as': 'call'
                }
            }, {
                '$addFields': {
                    'call': {
                        '$arrayElemAt': [
                            '$call', 0
                        ]
                    }
                }
            }, {
                '$match': {
                    'status': '1',
                    'call.idc': req.body.id
                }
            }
        ]
    ]
    const approved_files = await login.aggregate(pipeline2)

    var objdata = 0;
    for (const doc of approved_files) {
        // // console.log(doc);
        objdata++;
    }

    // // console.log(objdata);
    if (objdata != null) {
        var element = {};
        element.title = "approved files";
        element.type = "login";
        element.status = "1";
        element.count = objdata.toString();;
        count1.push({ element });

        // // console.log(objdata);

    }
    const pipeline3 = [
        [
            {
                '$lookup': {
                    'from': 'call_lists',
                    'localField': 'call_id',
                    'foreignField': '_id',
                    'as': 'call'
                }
            }, {
                '$addFields': {
                    'call': {
                        '$arrayElemAt': [
                            '$call', 0
                        ]
                    }
                }
            }, {
                '$match': {
                    'status': '2',
                    'call.idc': req.body.id
                }
            }
        ]
    ]
    const rejected_files = await login.aggregate(pipeline3)

    var objdata = 0;
    for (const doc of rejected_files) {
        // // console.log(doc);
        objdata++;
    }

    // // console.log(objdata);
    if (objdata != null) {
        var element = {};
        element.title = "rejected files";
        element.type = "login";
        element.status = "2";
        element.count = objdata.toString();;
        count1.push({ element });

        // // console.log(objdata);

    }
    const pipeline4 = [
        [
            {
                '$lookup': {
                    'from': 'call_lists',
                    'localField': 'call_id',
                    'foreignField': '_id',
                    'as': 'call'
                }
            }, {
                '$addFields': {
                    'call': {
                        '$arrayElemAt': [
                            '$call', 0
                        ]
                    }
                }
            }, {
                '$match': {
                    'status': '3',
                    'call.idc': req.body.id
                }
            }
        ]
    ]
    const disbursed_files = await login.aggregate(pipeline4)

    var objdata = 0;
    for (const doc of disbursed_files) {
        // // console.log(doc);
        objdata++;
    }

    // // console.log(objdata);
    if (objdata != null) {
        var element = {};
        element.title = "disbursed files";
        element.type = "login";
        element.status = "3";
        element.count = objdata.toString();;
        count1.push({ element });

        // // console.log(objdata);

    }//  JSON.stringify(empobj1);
    var data1 = JSON.parse(JSON.stringify(empobj1));

    data1.count = count1;
    //  // console.log(data1);

    //count1.push(empobj1);


    if (data1 != null) {
        res.json({ result: "success", msg: "emp_profile List Found", data: data1 });

    } else {
        res.json({ result: "failure", msg: "emp_profile List Not Found", data: 0 });

    }

})


router.post('/getemp_profileofdpa', async (req, res) => {
    const empobj1 = await employee.findOne({ _id: req.body.id })
    var count1 = new Array();
    var empID = empobj1._id;
    var objdata = new Array();

    const ready_meet = await call_list.find({ status: 3, executive: req.body.id }).count()

    // for await (const doc of ready_meet) {
    //  objdata.push(doc);
    // }
    // // console.log(objdata);

    if (ready_meet != null) {
        var element = {};
        element.title = "Ready to meet";
        element.type = "call";
        element.status = "3";
        element.count = ready_meet.toString();;
        count1.push({ element });
    }

    const ready_login = await call_list.find({ status: 19, executive: req.body.id }).count()

    // for await (const doc of ready_meet) {
    //  objdata.push(doc);
    // }
    // // console.log(objdata);

    if (ready_login != null) {
        var element = {};
        element.title = "ready to login";
        element.type = "call";
        element.status = "19";
        element.count = ready_login.toString();;
        count1.push({ element });
    }


    const pipeline3 = [
        [
            {
                '$lookup': {
                    'from': 'call_lists',
                    'localField': 'call_id',
                    'foreignField': '_id',
                    'as': 'call'
                }
            }, {
                '$addFields': {
                    'call': {
                        '$arrayElemAt': [
                            '$call', 0
                        ]
                    }
                }
            }, {
                '$match': {
                    'status': '0',
                    'call.executive': req.body.id
                }
            }
        ]
    ]
    const login_files = await login.aggregate(pipeline3)

    var objdata = 0;
    for (const doc of login_files) {
        // console.log(doc);
        objdata++;
    }

    // console.log(objdata);
    if (objdata != null) {
        var element = {};
        element.title = "login files";
        element.type = "login";
        element.status = "0";
        element.count = objdata.toString();;
        count1.push({ element });
    }
    const pipeline4 = [
        [
            {
                '$lookup': {
                    'from': 'call_lists',
                    'localField': 'call_id',
                    'foreignField': '_id',
                    'as': 'call'
                }
            }, {
                '$addFields': {
                    'call': {
                        '$arrayElemAt': [
                            '$call', 0
                        ]
                    }
                }
            }, {
                '$match': {
                    'status': '1',
                    'call.executive': req.body.id
                }
            }
        ]
    ]
    const approved_files = await login.aggregate(pipeline4)

    var objdata = 0;
    for (const doc of approved_files) {
        // console.log(doc);
        objdata++;
    }

    // console.log(objdata);
    if (objdata != null) {
        var element = {};
        element.title = "approved files";
        element.type = "login";
        element.status = "1";
        element.count = objdata.toString();;
        count1.push({ element });
    }

    const pipeline5 = [
        [
            {
                '$lookup': {
                    'from': 'call_lists',
                    'localField': 'call_id',
                    'foreignField': '_id',
                    'as': 'call'
                }
            }, {
                '$addFields': {
                    'call': {
                        '$arrayElemAt': [
                            '$call', 0
                        ]
                    }
                }
            }, {
                '$match': {
                    'status': '2',
                    'call.executive': req.body.id
                }
            }
        ]
    ]
    const rejected_files = await login.aggregate(pipeline5)

    var objdata = 0;
    for (const doc of rejected_files) {
        // console.log(doc);
        objdata++;
    }

    // console.log(objdata);
    if (objdata != null) {
        var element = {};
        element.title = "rejected files";
        element.type = "login";
        element.status = "2";
        element.count = objdata.toString();;
        count1.push({ element });
    }

    const pipeline6 = [
        [
            {
                '$lookup': {
                    'from': 'call_lists',
                    'localField': 'call_id',
                    'foreignField': '_id',
                    'as': 'call'
                }
            }, {
                '$addFields': {
                    'call': {
                        '$arrayElemAt': [
                            '$call', 0
                        ]
                    }
                }
            }, {
                '$match': {
                    'status': '3',
                    'call.executive': req.body.id
                }
            }
        ]
    ]
    const disbursed_files = await login.aggregate(pipeline6)

    var objdata = 0;
    for (const doc of disbursed_files) {
        // console.log(doc);
        objdata++;
    }

    // console.log(objdata);
    if (objdata != null) {
        var element = {};
        element.title = "disbursed files";
        element.type = "login";
        element.status = "3";
        element.count = objdata.toString();;
        count1.push({ element });
    }



    var data1 = JSON.parse(JSON.stringify(empobj1));

    data1.count = count1;




    if (data1 != null) {
        res.json({ result: "success", msg: "emp_profile List Found", data: data1 });

    } else {
        res.json({ result: "failure", msg: "emp_profile List Not Found", data: 0 });

    }






})



router.post('/getemp_profileoftco', async (req, res) => {
    const empobj1 = await employee.findOne({ _id: req.body.id })
    var count1 = new Array();
    var empID = empobj1._id;
    var objdata = new Array();


    const fresh_calls = await call_list.find({ status: 0, caller_id: req.body.id }).count()


    if (fresh_calls != null) {
        var element = {};
        element.title = "fresh_calls";
        element.type = "call";
        element.status = "0";
        element.count = fresh_calls.toString();
        count1.push({ element });
    }

    const followup = await call_list.find({ status: 4, caller_id: req.body.id }).count()



    if (followup != null) {
        var element = {};
        element.title = "followup";
        element.type = "call";
        element.status = "4";
        element.count = followup.toString();
        count1.push({ element });
    }

    const ready_meet = await call_list.find({ status: 3, caller_id: req.body.id }).count()


    if (ready_meet != null) {
        var element = {};
        element.title = "ready_meet";
        element.type = "call";
        element.status = "3";
        element.count = ready_meet.toString();
        count1.push({ element });
    }
    const followup1 = await call_list.find({ status: { $in: [5, 7, 17, 6] }, caller_id: req.body.id }).count()


    if (followup1 != null) {
        var element = {};
        element.title = "not_interested";
        element.type = "call";
        element.status = "not_interested";
        element.count = followup1.toString();
        count1.push({ element });
    }

    const ringing = await call_list.find({ status: 9, caller_id: req.body.id }).count()


    if (ringing != null) {
        var element = {};
        element.title = "ringing";
        element.type = "call";
        element.status = "9";
        element.count = ringing.toString();
        count1.push({ element });
    }

    const busy = await call_list.find({ status: 15, caller_id: req.body.id }).count()


    if (busy != null) {
        var element = {};
        element.title = "busy";
        element.type = "call";
        element.status = "15";
        element.count = busy.toString();
        count1.push({ element });
    }

    const switched_off = await call_list.find({ status: 16, caller_id: req.body.id }).count()


    if (switched_off != null) {
        var element = {};
        element.title = "switched_off";
        element.type = "call";
        element.status = "16";
        element.count = switched_off.toString();
        count1.push({ element });
    }

    const invalid = await call_list.find({ status: 17, caller_id: req.body.id }).count()


    if (invalid != null) {
        var element = {};
        element.title = "invalid";
        element.type = "call";
        element.status = "17";
        element.count = invalid.toString();
        count1.push({ element });
    }
    const ready_login = await call_list.find({ status: 19, caller_id: req.body.id }).count()


    if (ready_login != null) {
        var element = {};
        element.title = "ready_login";
        element.type = "call";
        element.status = "19";
        element.count = ready_login.toString();
        count1.push({ element });
    }

    const pipeline1 = [
        [
            {
                '$lookup': {
                    'from': 'call_lists',
                    'localField': 'call_id',
                    'foreignField': '_id',
                    'as': 'call'
                }
            }, {
                '$addFields': {
                    'call': {
                        '$arrayElemAt': [
                            '$call', 0
                        ]
                    }
                }
            }, {
                '$match': {
                    'status': '0',
                    'call.caller_id': req.body.id
                }
            }
        ]
    ]
    const login_files = await login.aggregate(pipeline1)

    var loginCount = 0;
    for (const doc of login_files) {
        // console.log(doc);
        loginCount = loginCount + 1;
    }
    //console.log(loginCount);
    if (loginCount != null) {
        var element = {};
        element.title = "login files";
        element.type = "login";
        element.status = "0";
        element.count = loginCount.toString();
        count1.push({ element });



    }

    const pipeline2 = [
        [
            {
                '$lookup': {
                    'from': 'call_lists',
                    'localField': 'call_id',
                    'foreignField': '_id',
                    'as': 'call'
                }
            }, {
                '$addFields': {
                    'call': {
                        '$arrayElemAt': [
                            '$call', 0
                        ]
                    }
                }
            }, {
                '$match': {
                    'status': '1',
                    'call.caller_id': req.body.id
                }
            }
        ]
    ]
    const approved_files = await login.aggregate(pipeline2)

    var objdata = 0;
    for (const doc of approved_files) {
        // console.log(doc);
        objdata++;
    }

    // console.log(objdata);
    if (objdata != null) {
        var element = {};
        element.title = "approved files";
        element.type = "login";
        element.status = "1";
        element.count = objdata.toString();
        count1.push({ element });


    }
    const pipeline3 = [
        [
            {
                '$lookup': {
                    'from': 'call_lists',
                    'localField': 'call_id',
                    'foreignField': '_id',
                    'as': 'call'
                }
            }, {
                '$addFields': {
                    'call': {
                        '$arrayElemAt': [
                            '$call', 0
                        ]
                    }
                }
            }, {
                '$match': {
                    'status': '2',
                    'call.caller_id': req.body.id
                }
            }
        ]
    ]
    const rejected_files = await login.aggregate(pipeline3)

    var objdata = 0;
    for (const doc of rejected_files) {

        objdata++;
    }

    if (objdata != null) {
        var element = {};
        element.title = "rejected files";
        element.type = "login";
        element.status = "2";
        element.count = objdata.toString();
        count1.push({ element });



    }

    const pipeline4 = [
        [
            {
                '$lookup': {
                    'from': 'call_lists',
                    'localField': 'call_id',
                    'foreignField': '_id',
                    'as': 'call'
                }
            }, {
                '$addFields': {
                    'call': {
                        '$arrayElemAt': [
                            '$call', 0
                        ]
                    }
                }
            }, {
                '$match': {
                    'status': '3',
                    'call.caller_id': req.body.id
                }
            }
        ]
    ]
    const disbursed_files = await login.aggregate(pipeline4)

    var objdata = 0;
    for (const doc of disbursed_files) {

        objdata++;
    }

    if (objdata != null) {
        var element = {};
        element.title = "disbursed files";
        element.type = "login";
        element.status = "3";
        element.count = objdata.toString();
        count1.push({ element });

    }


    var data1 = JSON.parse(JSON.stringify(empobj1));

    data1.count = count1;

    if (data1 != null) {
        res.json({ result: "success", msg: "emp_profile List Found", data: data1 });

    } else {
        res.json({ result: "failure", msg: "emp_profile List Not Found", data: 0 });

    }


})



router.post('/getemp_profileofboa', async (req, res) => {
    const empobj1 = await employee.findOne({ _id: req.body.id })

    var count1 = new Array();
    var empID = empobj1._id;
    var objdata = new Array();


    const ready_login = await call_list.find({ status: 19 }).count()

    // for await (const doc of ready_meet) {
    //  objdata.push(doc);
    // }
    // // console.log(objdata);

    if (ready_login != null) {
        var element = {};
        element.title = "ready_login";
        element.type = "call";
        element.status = "19";
        element.count = ready_login.toString();;
        count1.push({ element });
    }

    const pipeline1 = [
        [
            {
                '$lookup': {
                    'from': 'call_lists',
                    'localField': 'call_id',
                    'foreignField': '_id',
                    'as': 'call'
                }
            }, {
                '$addFields': {
                    'call': {
                        '$arrayElemAt': [
                            '$call', 0
                        ]
                    }
                }
            }, {
                '$match': {
                    'status': '0',
                }
            }
        ]
    ]
    const login_files = await login.aggregate(pipeline1)

    var objdata = 0;
    for (const doc of login_files) {
        // console.log(doc);
        objdata++;
    }

    // console.log(objdata);
    if (objdata != null) {
        var element = {};
        element.title = "login files";
        element.type = "login";
        element.status = "0";
        element.count = objdata.toString();;
        count1.push({ element });

        // // console.log(objdata);

    }

    const pipeline2 = [
        [
            {
                '$lookup': {
                    'from': 'call_lists',
                    'localField': 'call_id',
                    'foreignField': '_id',
                    'as': 'call'
                }
            }, {
                '$addFields': {
                    'call': {
                        '$arrayElemAt': [
                            '$call', 0
                        ]
                    }
                }
            }, {
                '$match': {
                    'status': '1',
                    'call.coordinator': req.body.id
                }
            }
        ]
    ]
    const approved_files = await login.aggregate(pipeline2)

    var objdata = 0;
    for (const doc of approved_files) {
        // console.log(doc);
        objdata++;
    }

    // console.log(objdata);
    if (objdata != null) {
        var element = {};
        element.title = "approved files";
        element.type = "login";
        element.status = "1";
        element.count = objdata.toString();;
        count1.push({ element });

        // // console.log(objdata);

    }

    const pipeline3 = [
        [
            {
                '$lookup': {
                    'from': 'call_lists',
                    'localField': 'call_id',
                    'foreignField': '_id',
                    'as': 'call'
                }
            }, {
                '$addFields': {
                    'call': {
                        '$arrayElemAt': [
                            '$call', 0
                        ]
                    }
                }
            }, {
                '$match': {
                    'status': '2',
                    'call.coordinator': req.body.id
                }
            }
        ]
    ]
    const rejected_files = await login.aggregate(pipeline3)

    var objdata = 0;
    for (const doc of rejected_files) {
        // console.log(doc);
        objdata++;
    }

    // console.log(objdata);
    if (objdata != null) {
        var element = {};
        element.title = "rejected files";
        element.type = "login";
        element.status = "2";
        element.count = objdata.toString();;
        count1.push({ element });

        // // console.log(objdata);

    }

    const pipeline4 = [
        [
            {
                '$lookup': {
                    'from': 'call_lists',
                    'localField': 'call_id',
                    'foreignField': '_id',
                    'as': 'call'
                }
            }, {
                '$addFields': {
                    'call': {
                        '$arrayElemAt': [
                            '$call', 0
                        ]
                    }
                }
            }, {
                '$match': {
                    'status': '3',
                    'call.coordinator': req.body.id
                }
            }
        ]
    ]
    const disbursed_files = await login.aggregate(pipeline4)

    var objdata = 0;
    for (const doc of disbursed_files) {
        // console.log(doc);
        objdata++;
    }

    // console.log(objdata);
    if (objdata != null) {
        var element = {};
        element.title = "disbursed files";
        element.type = "login";
        element.status = "3";
        element.count = objdata.toString();;
        count1.push({ element });

        // // console.log(objdata);

    }

    var data1 = JSON.parse(JSON.stringify(empobj1));

    data1.count = count1;

    //// console.log(data1);

    // var data1 = JSON.parse(JSON.stringify(empobj1));
    // data1.count = count1
    if (data1 != null) {
        res.json({ result: "success", msg: "emp_profile List Found", data: data1 });

    } else {
        res.json({ result: "failure", msg: "emp_profile List Not Found", data: 0 });

    }
})


router.post('/getemp_profileofbsm', async (req, res) => {
    const empobj1 = await employee.findOne({ _id: req.body.id })

    var count1 = new Array();
    var empID = empobj1._id;
    var objdata = new Array();


    const unAssign_ready_meet = await call_list.find({ status: 3 }).count()

    // for await (const doc of ready_meet) {
    //  objdata.push(doc);
    // }
    // // console.log(objdata);

    if (unAssign_ready_meet != null) {
        var element = {};
        element.title = "Ready to meet Leads";
        element.type = "call";
        element.status = "3";
        element.count = unAssign_ready_meet.toString();;
        count1.push({ element });
    }

    const ready_meet = await call_list.find({ status: 3 }).count()


    if (ready_meet != null) {
        var element = {};
        element.title = "Assigned to Executive";
        element.type = "call";
        element.status = "3";
        element.count = ready_meet.toString();;
        count1.push({ element });
    }

    const ready_login = await call_list.find({ status: 19 }).count()


    if (ready_login != null) {
        var element = {};
        element.title = "Ready for Login";
        element.type = "call";
        element.status = "19";
        element.count = ready_login.toString();;
        count1.push({ element });
    }

    const pipeline1 = [
        [
            {
                '$lookup': {
                    'from': 'call_lists',
                    'localField': 'call_id',
                    'foreignField': '_id',
                    'as': 'call'
                }
            }, {
                '$addFields': {
                    'call': {
                        '$arrayElemAt': [
                            '$call', 0
                        ]
                    }
                }
            }, {
                '$match': {
                    'status': '0',
                    'call.team_leader': req.body.id
                }
            }
        ]
    ]
    const login_files = await login.aggregate(pipeline1)

    var objdata = 0;
    for (const doc of login_files) {
        // console.log(doc);
        objdata++;
    }

    // console.log(objdata);
    if (objdata != null) {
        var element = {};
        element.title = "login files";
        element.type = "login";
        element.status = "0";
        element.count = objdata.toString();;
        count1.push({ element });

        // // console.log(objdata);

    }

    const pipeline2 = [
        [
            {
                '$lookup': {
                    'from': 'call_lists',
                    'localField': 'call_id',
                    'foreignField': '_id',
                    'as': 'call'
                }
            }, {
                '$addFields': {
                    'call': {
                        '$arrayElemAt': [
                            '$call', 0
                        ]
                    }
                }
            }, {
                '$match': {
                    'status': '1',
                    'call.team_leader': req.body.id
                }
            }
        ]
    ]
    const approved_files = await login.aggregate(pipeline2)

    var objdata = 0;
    for (const doc of approved_files) {
        // console.log(doc);
        objdata++;
    }

    // console.log(objdata);
    if (objdata != null) {
        var element = {};
        element.title = "approved files";
        element.type = "login";
        element.status = "1";
        element.count = objdata.toString();;
        count1.push({ element });

        // // console.log(objdata);

    }

    const pipeline3 = [
        [
            {
                '$lookup': {
                    'from': 'call_lists',
                    'localField': 'call_id',
                    'foreignField': '_id',
                    'as': 'call'
                }
            }, {
                '$addFields': {
                    'call': {
                        '$arrayElemAt': [
                            '$call', 0
                        ]
                    }
                }
            }, {
                '$match': {
                    'status': '2',
                    'call.team_leader': req.body.id
                }
            }
        ]
    ]
    const rejected_files = await login.aggregate(pipeline3)

    var objdata = 0;
    for (const doc of rejected_files) {
        // console.log(doc);
        objdata++;
    }

    // console.log(objdata);
    if (objdata != null) {
        var element = {};
        element.title = "rejected files";
        element.type = "login";
        element.status = "2";
        element.count = objdata.toString();;
        count1.push({ element });

        // // console.log(objdata);

    }

    const pipeline4 = [
        [
            {
                '$lookup': {
                    'from': 'call_lists',
                    'localField': 'call_id',
                    'foreignField': '_id',
                    'as': 'call'
                }
            }, {
                '$addFields': {
                    'call': {
                        '$arrayElemAt': [
                            '$call', 0
                        ]
                    }
                }
            }, {
                '$match': {
                    'status': '3',
                    'call.team_leader': req.body.id
                }
            }
        ]
    ]
    const disbursed_files = await login.aggregate(pipeline4)

    var objdata = 0;
    for (const doc of disbursed_files) {
        // console.log(doc);
        objdata++;
    }

    // console.log(objdata);
    if (objdata != null) {
        var element = {};
        element.title = "disbursed files";
        element.type = "login";
        element.status = "3";
        element.count = objdata.toString();;
        count1.push({ element });

        // // console.log(objdata);

    }



    var data1 = JSON.parse(JSON.stringify(empobj1));

    data1.count = count1;

    //// console.log(data1);

    // var data1 = JSON.parse(JSON.stringify(empobj1));
    // data1.count = count1
    if (data1 != null) {
        res.json({ result: "success", msg: "emp_profile List Found", data: data1 });

    } else {
        res.json({ result: "failure", msg: "emp_profile List Not Found", data: 0 });

    }

})


router.post('/getemp_profileofbom', async (req, res) => {
    const empobj1 = await employee.findOne({ _id: req.body.id })

    var count1 = new Array();
    var empID = empobj1._id;
    var objdata = new Array();


    const ready_login = await call_list.find({ status: 19 }).count()

    // for await (const doc of ready_meet) {
    //  objdata.push(doc);
    // }
    // // console.log(objdata);

    if (ready_login != null) {
        var element = {};
        element.title = "Ready for Login";
        element.type = "call";
        element.status = "19";
        element.count = ready_login.toString();;
        count1.push({ element });
    }

    const pipeline1 = [
        [
            {
                '$lookup': {
                    'from': 'call_lists',
                    'localField': 'call_id',
                    'foreignField': '_id',
                    'as': 'call'
                }
            }, {
                '$addFields': {
                    'call': {
                        '$arrayElemAt': [
                            '$call', 0
                        ]
                    }
                }
            }, {
                '$match': {
                    'status': '0'
                }
            }
        ]
    ]
    const login_files = await login.aggregate(pipeline1)

    var objdata = 0;
    for (const doc of login_files) {
        // console.log(doc);
        objdata++;
    }

    // console.log(objdata);
    if (objdata != null) {
        var element = {};
        element.title = "login files";
        element.type = "login";
        element.status = "0";
        element.count = objdata.toString();;
        count1.push({ element });

        // // console.log(objdata);

    }

    const pipeline2 = [
        [
            {
                '$lookup': {
                    'from': 'call_lists',
                    'localField': 'call_id',
                    'foreignField': '_id',
                    'as': 'call'
                }
            }, {
                '$addFields': {
                    'call': {
                        '$arrayElemAt': [
                            '$call', 0
                        ]
                    }
                }
            }, {
                '$match': {
                    'status': '1',
                    'call.parent_coordinator': req.body.id
                }
            }
        ]
    ]
    const approved_files = await login.aggregate(pipeline2)

    var objdata = 0;
    for (const doc of approved_files) {
        // console.log(doc);
        objdata++;
    }

    // console.log(objdata);
    if (objdata != null) {
        var element = {};
        element.title = "approved files";
        element.type = "login";
        element.status = "1";
        element.count = objdata.toString();;
        count1.push({ element });

        // // console.log(objdata);

    }

    const pipeline3 = [
        [
            {
                '$lookup': {
                    'from': 'call_lists',
                    'localField': 'call_id',
                    'foreignField': '_id',
                    'as': 'call'
                }
            }, {
                '$addFields': {
                    'call': {
                        '$arrayElemAt': [
                            '$call', 0
                        ]
                    }
                }
            }, {
                '$match': {
                    'status': '2',
                    'call.parent_coordinator': req.body.id
                }
            }
        ]
    ]
    const rejected_files = await login.aggregate(pipeline3)

    var objdata = 0;
    for (const doc of rejected_files) {
        // console.log(doc);
        objdata++;
    }

    // console.log(objdata);
    if (objdata != null) {
        var element = {};
        element.title = "rejected files";
        element.type = "login";
        element.status = "2";
        element.count = objdata.toString();;
        count1.push({ element });

        // // console.log(objdata);

    }

    const pipeline4 = [
        [
            {
                '$lookup': {
                    'from': 'call_lists',
                    'localField': 'call_id',
                    'foreignField': '_id',
                    'as': 'call'
                }
            }, {
                '$addFields': {
                    'call': {
                        '$arrayElemAt': [
                            '$call', 0
                        ]
                    }
                }
            }, {
                '$match': {
                    'status': '3',
                    'call.parent_coordinator': req.body.id
                }
            }
        ]
    ]
    const disbursed_files = await login.aggregate(pipeline4)

    var objdata = 0;
    for (const doc of disbursed_files) {
        // console.log(doc);
        objdata++;
    }

    // console.log(objdata);
    if (objdata != null) {
        var element = {};
        element.title = "disbursed files";
        element.type = "login";
        element.status = "3";
        element.count = objdata.toString();;
        count1.push({ element });

        // // console.log(objdata);

    }

    var data1 = JSON.parse(JSON.stringify(empobj1));

    data1.count = count1;

    //// console.log(data1);

    // var data1 = JSON.parse(JSON.stringify(empobj1));
    // data1.count = count1
    if (data1 != null) {
        res.json({ result: "success", msg: "emp_profile List Found", data: data1 });

    } else {
        res.json({ result: "failure", msg: "emp_profile List Not Found", data: 0 });

    }

})

///////////// assign-user//////////////////////////////////////////////


router.post('/assign_user', async (req, res) => {
    // const data = await call_list.findOne({_id:req.body.id})

    console.log(req.body);

    const update_call = await call_list.updateOne({ _id: req.body.callListId }, {

        coordinator: req.body.coordinator,
        doc_boy: req.body.doc_boy,
        executive: req.body.executive,


    });
    console.log(update_call);
    //res.send(update_call);
    if (update_call != null) {
        res.json({ result: "success", msg: "call_list List Found", data: 1 });

    } else {
        res.json({ result: "failure", msg: "call_list List Not Found", data: 0 });

    }
})

////////////////company_name (list)//////////////////////////////
router.post('/getbycompany_name', async (req, res) => {
    const objcompany_name = await company.find()
        .populate("bank_id", ["bank_name"]);

    if (objcompany_name != null) {
        res.json({ result: "success", msg: "company_list List Found", data: objcompany_name });

    } else {
        res.json({ result: "failure", msg: "company_list List Not Found", data: 0 });

    }

    //res.send(objcall_detail)
});



// router.post('/test123', async (req, res) => {
//     const empobj = await employee.findOne({ _id: req.body.id })
//     // // console.log(empobj2);
//     var empID = empobj._id.toString();
//     // console.log(empID);
//     // let idToSearch = employee.Types.ObjectId(req.params.id)
//    // const disbursed_files = await login.find({ "$lookup": { "from": "call_list", "localField": "_id", "foreignField": "team_leader", "as": "cor_doc" },
//     // "$match": { "cor_doc.team_leader": empID } })

//      const callobj = await login.find({"lookup" : {"from" : "call_list", "localField":"_id","foreignField":"team_leader","as":"call_doc"},
//      "match" : {"call_doc.team_leader":empobj._id}})

//    res.send(callobj);
//     //// console.log(callobj);

//})


router.post('/getcalllist3', async (req, res) => {
    const objemplist = await employee.findOne({ _id: req.body.id })
    //var call_status = req.body.call_status
    //var user_type = req.body.user_type
    //var user_type = ""; 
    //var call_status= "";  
    // var callobj = [];
    //  JSON.stringify(callobj);


    // if (req.body.call_status == "not_interested") {

    //if (req.body.user_type == "emp") {
    //  if (objemplist.emp_type == "4") {
    const callobj = await call_list.find({ status: { $nin: [5, 7, 17, 6] } }, { caller_id: objemplist._id })


    if (callobj != null) {
        res.json({ result: "success", msg: "call-list updated successfully", data: callobj });
    }
    else {
        res.json({ result: "failure", msg: "unsuccessful", data: 0 });
    }
    //  }
    //}

})



// login ///////////////////////////////////////////////



router.post('/login', async (req, res) => {
    const loginemp = await employee.findOne({ first_name: req.body.first_name, login_pass: req.body.login_pass });


    if (loginemp != null) {
        res.json({ result: "success", msg: "login successfully", data: loginemp });
    }
    else {
        res.json({ result: "failure", msg: "unsuccessful", data: loginemp });
    }
    //  }
    //}

})



////////////forward lead////////////////////////////////////////


router.post('/forward_lead', async (req, res) => {
    const flead = await call_list.findOne();


    if (flead.executive != " ") {
        const fexe = await call_list.updateOne({ _id: req.body.callListId }, {

            parent_coordinator: req.body.parent_coordinator,
            status: 19,

        });

    }

    if (flead.coordinator != "") {
        const fexe = await call_list.updateOne({ _id: req.body.callListId }, {

            coordinator: req.body.coordinator,
            status: 19,
        })
    }

    if (flead.executive != "") {
        if (req.body.branch_id == 4) {

            const fexe = await call_list.updateOne({ _id: req.body.callListId }, {

                parent_coordinator: 23,
                executive: req.body.executive,
            })
        }
        if (req.body.branch_id == 5) {

            const fexe = await call_list.updateOne({ _id: req.body.callListId }, {

                parent_coordinator: 14,
                executive: req.body.executive,
            })
        }
    }


    if (flead != null) {
        res.json({ result: "success", msg: "forward lead successfully", data: 1 });
    }
    else {
        res.json({ result: "failure", msg: "unsuccessful", data: 0 });
    }
})

////////// call_deatail/////////////////////////////////////////


router.post('/call_detail', async (req, res) => {
    // const pipeline1 = [
    //     [
    //         {
    //           '$lookup': {
    //             'from': 'call_lists', 
    //             'localField': 'call_id', 
    //             'foreignField': '_id', 
    //             'as': 'call'
    //           }
    //         }, {
    //           '$addFields': {
    //             'call': {
    //               '$arrayElemAt': [
    //                 '$call', 0
    //               ]
    //             }
    //           }
    //         }, {
    //           '$match': {
    //             'call_id': req.body.id
    //           }
    //         }
    //       ]
    // ]

    var arr = Array();
    const call_data = await call_list.findOne({ _id: req.body.id })
        .populate("last_history_id", ["talk", "service_booking_date", "pickup", "pickup_address", "call_later_date", "service_at", "owner_name", "owner_address", "dissatisfied_reason", "date_time"])
    const call_history_data = await call_history.find({ call_id: req.body.id });

    const current_loan_res = await current_loan.find({ call_id: req.body.id });

    const login_files_res = await login.find({ call_id: req.body.id });


    var data1 = JSON.parse(JSON.stringify(call_data));
    if (call_history_data.length != null) {
        data1.callHistory = call_history_data;
    } else {
        data1.callHistory = [];
    }



    if (current_loan_res != null) {
        data1.existingLoan = current_loan_res;
    } else {
        data1.existingLoan = [];
    }



    if (login_files_res.length > 0) {
        data1.loginFiles = login_files_res;
    } else {
        data1.loginFiles = [];
    }


    if (data1 != null) {
        res.json({ result: "success", msg: "call_detail successfully", data: data1 });
    }
    else {
        res.json({ result: "failure", msg: "unsuccessful", data: data1 });
    }

})



module.exports = router;




///const login_files = await login.find({status:0},{"lookup" : {"from" : "call_list", "localField":"_id","foreignField":"call_id","as":"call_doc"}},
//{"match" : {"call_doc.idc":empobj1._id}})