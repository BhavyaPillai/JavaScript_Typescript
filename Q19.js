
function chkHealth(health){
    console.log("Patient Health :"+health);
}


function check(health){
    try{
        chkHealth(health)
        
    }
    catch(e){
        console.log("Something Error :"+e);
    }
    finally{
        console.log("Patient is ready to discharge");
        
    }
}

check("good");