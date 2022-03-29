/*

const login = document.getElementById("login");
const row = document.createElement("div");
row.setAttribute("class", "row g-3");
cardCont.append(row);

*/



const mailingList = ["boolean@careers.it", "lorem@careers.it", "ipsum@careers.it"];

 let yourMail = prompt("inserire indirizzo e-mail");

let trovata = false;

for (let m = 0; m < mailingList.length; m++) {
    console.log(mailingList[m],m);
    if (mailingList[m] == yourMail) {
        trovata = true;
    }
}

if (trovata) {
    alert("email valida, benvenuto!");
    
    
} else {
    alert("email non registrata, accesso negato.")
}
