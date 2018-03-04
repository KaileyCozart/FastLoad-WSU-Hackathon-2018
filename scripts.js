window.onload = function() {

    var PW1 = document.getElementById("pw1");
    var PW2 = document.getElementById("pw2");
    var warning = document.getElementById("passwordWarning");
    var button = document.getElementById("submitButton");

    button.onclick = function() {
        if (PW1.value !== PW2.value) {
            warning.className = "displayWarning";
        }
        else if (PW1.value === PW2.value) {
            warning.className = "disappearWarning";
        }
    } 

};