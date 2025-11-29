function chkPhone(phoneNum){
    if(phoneNum.length != 10){
        throw new Error("Phone Number not Valid")
    }
}
function chkInsurance(num){
    if(phoneNum.length != 20){
        throw new Error("Insurance Number not Valid")
    }
}


function register(name, phoneNum, InsuranceNum){
    try{
        chkPhone(phoneNum);
        chkInsurance(InsuranceNum)
    }
    catch(e){
        console.log("Something Error :"+e);
    }
}

register("harsh","1021020","12912918");