
const mysql = require("mysql");

// MySQL Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "", 
    database: "hospital"
});

db.connect((err) => {
    if (err) throw err;
    console.log("MySQL Connected!");
});


// 1. CREATE 

function addPatient(name, age, disease) {
    const sql = "INSERT INTO patients (name, age, disease) VALUES (?, ?, ?)";
    db.query(sql, [name, age, disease], (err, result) => {
        if (err) throw err;
        console.log("Patient Added! ID:", result.insertId);
    });
}


// 2. READ 

function getPatients() {
    const sql = "SELECT * FROM patients";
    db.query(sql, (err, results) => {
        if (err) throw err;
        console.log("Patient Records:");
        console.log(results);
    });
}


// 3. UPDATE

function updatePatient(id, name, age, disease) {
    const sql = "UPDATE patients SET name=?, age=?, disease=? WHERE id=?";
    db.query(sql, [name, age, disease, id], (err) => {
        if (err) throw err;
        console.log("Patient Updated!");
    });
}


// 4. DELETE

function deletePatient(id) {
    const sql = "DELETE FROM patients WHERE id=?";
    db.query(sql, [id], (err) => {
        if (err) throw err;
        console.log("Patient Deleted!");
    });
}


addPatient("John Doe", 45, "Fever");
getPatients();
// updatePatient(1, "John Updated", 50, "Cold");
// deletePatient(1);
