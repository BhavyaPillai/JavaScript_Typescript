records = [10,20,30,40,50,60,70,80,90]

const Fahrenheit = records.map((val) =>{
    return val * 10; 
    // I dont know Fahrenheit formula;
})

const extractPat = records.filter((val)=>{
    return val > 45;
})

const totalVisit = records.reduce((total, val)=>{
    return total = total + 1;
})

console.log(Fahrenheit);
console.log(extractPat);
console.log(totalVisit);

