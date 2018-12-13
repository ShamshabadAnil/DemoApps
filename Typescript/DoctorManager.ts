import {Doctor} from './Doctor'
import {Transaction} from './transaction'

function showTransaction(txn:Transaction):void{
    console.log(txn.detail);
    console.log(txn.trxDate);
}

function showDoctors(doctorList:Doctor[]):void{
    // using Arrow funciton
    doctorList.forEach(eachDoc => {
        console.log(eachDoc.toString());
    });
}
// using  REST parameter
function displayDoctors(...doctors:Doctor[]):void{
    // using Arrow funciton
    doctors.forEach(eachDoc => {
        console.log(eachDoc.toString());
    });
}
let anil= new Doctor(101,'Anil','ENT');
let anilKumar= new Doctor(102,'Anil Kumar','EYE');
const docList=[anil,anilKumar];
showDoctors(docList);
const docList2=['jaffa','Bramanandam'];
displayDoctors(docList2);
displayDoctors('hfhsfghg');

const tx1:Transaction={id:102,detail:"sugar Test",trxDate:new Date(),value:111211};
showTransaction(tx1)