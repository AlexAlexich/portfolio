window.onload = function() {
    document.querySelector("#buttonProvera").addEventListener("click", provera);

}

function provera() {

    let Podaci = [];
    let ime = document.querySelector("#userName");
    let email = document.querySelector('#userEmail');
    let message = document.querySelector('#userMessage');
    let subject = document.querySelector('#dropdown')
    let pol = document.getElementsByName("gender");

    let checkIme = /^[A-Z][a-z]{1,14}(\s[A-Z][a-z]{1,14})*$/
    let checkEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/

    if (!checkIme.test(ime.value)) {
        document.querySelector('#greskaIme').classList.remove("hide");
        document.querySelector('#greskaIme').innerHTML = 'Name is not in correct form. Example : "Aleksandar"'
    } else {
        document.querySelector('#greskaIme').classList.add("hide");
        document.querySelector('#greskaIme').innerHTML = ''
        Podaci.push(ime.value)
    }
    if (!checkEmail.test(email.value)) {
        document.querySelector('#greskaEmail').classList.remove("hide");
        document.querySelector('#greskaEmail').innerHTML = 'Email is not in correct form. Example : "something@someProvider.(correct dommen from 2-5)"'
    } else {
        document.querySelector('#greskaEmail').classList.add("hide");
        document.querySelector('#greskaEmail').innerHTML = ''
        Podaci.push(email.value)
    }
    if (message.value.length < 10) {
        document.querySelector('#greskaMess').classList.remove("hide");
        document.querySelector('#greskaMess').innerHTML = 'Message is to short. Min number of characters is 10!'
    } else {
        document.querySelector('#greskaMess').classList.add("hide");
        document.querySelector('#greskaMess').innerHTML = ''
        Podaci.push(message.value)
    }
    if (subject.value == "choose") {
        document.querySelector('#greskaSubject').classList.remove("hide");
        document.querySelector('#greskaSubject').innerHTML = 'Subject can not be choose'
    } else {
        document.querySelector('#greskaSubject').classList.add("hide");
        document.querySelector('#greskaSubject').innerHTML = ''
        Podaci.push(subject.value)
    }

    let odabraniPol = "";
    for (let i = 0; i < pol.length; i++) {
        if (pol[i].checked) {
            odabraniPol = pol[i].value;
            break;
        }
    }

    if (odabraniPol == "") {
        document.querySelector('#polGreska').classList.remove("hide");
        document.querySelector("#polGreska").innerHTML = "You did not chose gender";
    } else {
        document.querySelector('#polGreska').classList.add("hide");
        document.querySelector("#polGreska").innerHTML = "";
        podaci.push(odabraniPol);
    }

}
var list = document.getElementById("dropdown")
var sub = ["choose|Choose", "suggestion|Suggestion", "siteorder|Site order", "donation|Donation", "question|Question"]
for (var i = 0; i < sub.length; i++) {
    var x = sub[i].split("|")
    var y = document.createElement("option")
    y.value = x[0]
    y.innerHTML = x[1];
    list.appendChild(y)
}