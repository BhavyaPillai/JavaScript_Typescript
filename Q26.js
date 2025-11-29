records = [10,20,30,40,50,60,70,80,90]

function findMostVisitedDoctor(data){
    let maxi = 0;
    let indexer = 0;
    for (let index = 0; index < data.length; index++) {
       if(data[index] > maxi){
        maxi = data[index];
        indexer = index+1;
       }
    }

    console.log("Docter no."+indexer +" had maximum visits i.e "+maxi);  
}

findMostVisitedDoctor(records);