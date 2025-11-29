health = [10,20,30,40,50,60,70,80,90]

function filterCriticalPatients(data){
    newData = data.filter((health)=>{
        return health > 50;
    })
    return newData;
}

console.log(filterCriticalPatients(health));
