function validate(){
    var email = $("#email").val();
    if ((/(.+)@(.+){2,}\.(.+){2,}/.test(email)) || email==="" || email===null) { } else {
        alert("Please enter a valid email");
    }
    var phone = $("#phone").val();
    if ((/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phone)) || phone==="" || phone===null) { } else {
        alert("Please enter a valid phone number");
    }
    return false;
}