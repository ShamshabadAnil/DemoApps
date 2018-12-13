"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Doctor_1 = require("./Doctor");
function showTransaction(txn) {
    console.log(txn.detail);
    console.log(txn.trxDate);
}
function showDoctors(doctorList) {
    // using Arrow funciton
    doctorList.forEach(eachDoc => {
        console.log(eachDoc.toString());
    });
}
// using  REST parameter
function displayDoctors(...doctors) {
    // using Arrow funciton
    doctors.forEach(eachDoc => {
        console.log(eachDoc.toString());
    });
}
let anil = new Doctor_1.Doctor(101, 'Anil', 'ENT');
let anilKumar = new Doctor_1.Doctor(102, 'Anil Kumar', 'EYE');
const docList = [anil, anilKumar];
showDoctors(docList);
const docList2 = ['jaffa', 'Bramanandam'];
displayDoctors(docList2);
displayDoctors('hfhsfghg');
const tx1 = { id: 102, detail: "sugar Test", trxDate: new Date(), value: 111211 };
showTransaction(tx1);
