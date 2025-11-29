data = [10, 15, 20, 25, 49];

increaseMedicineStock = function(data) {
    for (let x = 0; x < data.length; x++) {
        data[x] += 5;
    }
    return data;
}

console.log(increaseMedicineStock(data));