
function bookApp(time){
    if(time > 18 || time < 8){
        throw new Error("Appointment can be between 8 am to 6pm")
    }
}


function book(time){
    try{
        bookApp(time);
        console.log("Surgery is available");
        
    }
    catch(e){
        console.log("Something Error :"+e);
    }
}

book(5);
book(13);