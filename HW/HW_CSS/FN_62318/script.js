function validateUserName() { 
    var user = document.getElementById("name").value;
    var x = document.getElementById("invalidName");

    if(user.length <= 6)
    {
        x.style.display = 'block';
        color = "#B0706D";
        document.getElementById("name").style.borderColor = color;
    }
    else 
    {
        x.style.display = 'none';
        color = "#BBC9BA";
        document.getElementById("name").style.borderColor = color;
    }
} 

function validatePassword(){
    var passwrd = document.getElementById("pass").value;
    var y = document.getElementById("invalidPass");

    if(passwrd.length <= 6 || passwrd.length > 40)
    {
        y.style.display = 'block';
        color = "#B0706D";
        document.getElementById("pass").style.borderColor = color;
    }
    else 
    {
        y.style.display = 'none';
        color = "#BBC9BA";
        document.getElementById("pass").style.borderColor = color;
    }
}

function validatePhone(){
    var number = document.getElementById("phone").value;
    var z = document.getElementById("invalidPhone");

    if(!/[0-9]+/.test(number))
    {
        z.style.display = 'block';
        color = "#B0706D";
        document.getElementById("phone").style.borderColor = color;
    }
    else 
    {
        z.style.display = 'none';
        color = "#BBC9BA";
        document.getElementById("phone").style.borderColor = color;
    }
}

function validateEmail(){
    var mail = document.getElementById("email").value;
    var w = document.getElementById("invalidEmail");

    if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
    {
        w.style.display = 'block';
        color = "#B0706D";
        document.getElementById("email").style.borderColor = color;
    }
    else 
    {
        w.style.display = 'none';
        color = "#BBC9BA";
        document.getElementById("email").style.borderColor = color;
    }
}