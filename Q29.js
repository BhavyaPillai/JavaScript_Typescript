
async function appointConfirm(val){
    return await new Promise((resolve, reject)=>{
        if(val){
            resolve("Its done");
        }
        else{
            reject("It failed");
        }
    });
}
appointConfirm(true)
    .then(result => console.log(result))
    .catch(error => console.log(error));

appointConfirm(false)
    .then(result => console.log(result))
    .catch(error => console.log(error));

