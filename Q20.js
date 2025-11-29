class InvalidInsurancePolicy extends Error{
    constructor(Error){
        super(Error);
    }
}


function chkInsurance(num){
    if(num.length != 20){
        throw new InvalidInsurancePolicy("Insurance number invalid");
    }
}


function chkInsure(name, InsuranceNum){
    try{
        chkInsurance(InsuranceNum)
    }
    catch(e){
        console.log("Something Error :"+e);
    }
}

chkInsure("harsh","12912918");