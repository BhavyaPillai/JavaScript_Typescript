
function chkAmb(ambulanceAvail, ambC){
    if(ambulanceAvail < ambC){
        throw new Error("Ambulance not available")
    }
}


function total(total, count){
    try{
        chkAmb(total, count);
        console.log("Ambullance is available");
        
    }
    catch(e){
        console.log("Something Error :"+e);
    }
}

total(10, 11);
total(10, 9);