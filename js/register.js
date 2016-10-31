// Script 10.7- register.js
// This script validates a form.

// Function called when the form is submitted.
// Function validates the form data.
function validateUsername(username, message) {
    //validates that a username meets
    //the following
    //1.must at least 8 characters long
    //2. first character must be A-z or a-z
    //3. must contain at least on digit (0-9)
    //function returns "true" if all criteria
    //is met, "false" if any criteria not met.

    var char1;
    var hasNumber;

    //check username lenth:
    if (username.length < 8) return false;

    //check first character:
    char1 = username.substr(0,1).toUpperCase();

    if (!(char1>= "A"&&char1<="z")) {
        return false;
    }

    // chec for at leastone digit/numeral:
    hasNumber = /\d/;
    if(!(hasNumber.test(username))){
        return false;
    }

    //alternate version
    var anyDigits = false;
    while(!(anyDigits)){
        for (i = 1; i< username.length;i++){
            char1.username.substr(i,1);
            if(char1>="0" && char <="9"){
                anyDigits = true;
                break; //exit for loop found one!
            }//end if
        }//end for

    if (!(anyDigits)){
        return false;
    }
    }//end while

}
function validateForm(e) {
    'use strict';
    if (typeof e == 'undefined')
    //This is a browser window generated event
        e = window.event;


    //Get form references:
    var firstName = U.$('firstName');
    var lastName = U.$('lastName');
    var email= U.$('email');
    var phone;
    var city;
    var state;
    var zip;
    var terms; //We'll populate these later

    //error flag:
    var error = false;

    //validate the first name using a regular expression:
    if (/^[A-Z \.\-']{2,20}$/i.test(firstName.value)) {
        //Everything between / and / is the expression
        //Any letter A-Z (case insensitive) is valid
        //Spaces, periods, and hyphens are valid
        //name must be 2-20 characters long

        //first name matches the expression
        //and is valid
        //alert("Valid first name");
        removeErrorMessage('firstName');

    } else {
        //alert("invalid first name");
        addErrorMessage('firstName','Invalid/missing first name');
        error = true;

        if (validateUsername(userName.value)){
            //the username meets requirements
            removeErrorMessage('userName');
        }
        else {
            //the username is not valid
            addErrorMessage('userName','username does nnot meet criteria');
            error = true;
        }
    }
if (/^[A-Z \.\-']{2,20}$/i.test(lastname.value)){

    removeErrorMessage('lastname');
}
else {
    addErrorMessage('lastname','Invalid/missing first name');
    error = true;
}

if (/^[A-Z0-9\@\.\,\_\-]{5,35}$/i.test(email.value)){
    removeErrorMessage('email');
}
else {
    addErrorMessage('email','Invalid/missing email');
    error = true;
}

if (error) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    else {
        e.returnValue = false;
    }

}
return false;
}// End of validateForm() function.

// Function called when the terms checkbox changes.
// Function enables and disables the submit button.
function toggleSubmit() {
    'use strict';

} // End of toggleSubmit() function.

// Establish functionality on window load:
window.onload = function() {
    'use strict';
    //addEvent requires 3 pieces of information:
    //1. The object to add the event listener to
    //2. The event to listen for
    //3. The function to call in response to the event in #2
    U.addEvent(
        U.$('theForm'),
        'submit',
        validateForm);


};