function signup() {
    if
        (document.getElementById("name").value == "") {
        alert("User name may not be blank");
        return true;
    }

    if (document.getElementById("email").value == "") {
        alert("Email can not be blank");
        return true;
    }

    if (document.getElementById("password1").value == "") {
        alert("Password may not be blank");
        return true;
    }

    var regex = "^[a-zA-Z]*$";
    var value1 = document.getElementById("name").value;
    if (value1.match(regex) && value1 !== "") {
        // alert("Letter Validation: Successful.");
    }
    else {
        alert("User name needs to have only letters without spaces");

    }

    var val2 = document.getElementById("email").value;
    if (val2.includes('@') && val2.includes('.') && val2 !== "") {
        // alert("Email Validation: Successful.");
    }
    else {
        alert("Please provide a valid email");
    }

    var regex2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    var value3 = document.getElementById("password1").value;
    if (value3.match(regex2) && value3 !== "") {
        // alert("Letter Validation: Successful.");
    }
    else {
        alert("Password should be alphanumeric including an uppercase,special character and minimum of 8 digits");

    }

    var pwd1= document.getElementById("password2").value;
    console.log(value3);
    console.log(pwd1);
    if(value3 === pwd1){

    }
    else{
        alert("Please check the paswords!")
    }

    document.getElementById("info").innerHTML="Username:"+value1;
    document.getElementById("us").innerHTML="Email Id:"+val2;

    document.getElementById("name").value="";
    document.getElementById("email").value = "";
    document.getElementById("password1").value = "";
    document.getElementById("password2").value="";
//  17@Thumsup1234$
}
