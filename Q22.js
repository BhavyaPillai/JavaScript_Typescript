calculateHealthRisk = (val) => {
    if(val > 30){
        console.log("BMI is too High");
    }
    else if(val < 20){
        console.log("BMI is too Low");
    }
    else{
        console.log("BMI is MEdium");
    }
}

calculateHealthRisk(10);
calculateHealthRisk(25);
calculateHealthRisk(40);