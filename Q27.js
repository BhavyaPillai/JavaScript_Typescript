const names = ["Bhavya", "Tina", "tom"]

const doctors = {
    name: "Bhavya",
    special: "Surgery"
}

const [name1, name2, name3] = names;
const {name, special} = doctors;

console.log(name1, name2, name3);

console.log(name, special);
