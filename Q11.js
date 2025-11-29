class Nurse{
    name;
    nurseId;
    department;
    experience;
    constructor(name, id, dep, exp){
        this.name = name;
        this.nurseId = id;
        this.department = dep;
        this.experience = exp;
    }
    displayInfo(){
        console.log("Name :"+this.name);
        console.log("Id :"+this.nurseId);
        console.log("Department :"+this.department);
        console.log("Experience :"+this.experience);
    }
}

const Nurse1 = new Nurse("Bhavya",10,"Pathology",20);
const Nurse2 = new Nurse("Raj",20,"Cancer",10);

Nurse1.displayInfo();
Nurse2.displayInfo();