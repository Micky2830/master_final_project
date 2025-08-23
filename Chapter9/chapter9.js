document.getElementById('registration-form').addEventListener('submit', function(event){
    // used to determine if the form passes all validation checks
    let isValid = true;

    // Email Validation
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('email-error');

    // use to validate the email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // /.../ : starting & ending of the validation format
    // ^ : Anchors the match to the start of the string
    // $ : Anchors the match to the end of the string
    // [^\s@]+ : 
    // [...] : square bracket means one set
    // ^ : means "not"
    // \s : Any whitespace
    // @ : symbol

    if(!emailRegex.test(email)){
        emailError.textContent = "Please enter a valid email address.";
        isValid = false
    }else{
        emailError.textContent="";
    }

    // Password match validation
    const password = document.getElementById('password').value;
    const confirmpassword = document.getElementById('confirm-password').value;
    const passworddError = document.getElementById('password-error');

    if (password !== confirmpassword){
        passworddError.textContent = "Passwords do not match";
        isValid = false
    }else{
        passworddError.textContent = "";
    }

    // Terms & conditions validation
    // checked
    const terms = document.getElementById('terms').checked;
    const termsError = document.getElementById('terms-error');
    if(!terms){
        termsError.textContent = "You must agree to the terms & conditions";
        isValid = false
    }else{
        termsError.textContent = "";
    }

    if(!isValid){
        event.preventDefault();
    }else{
        alert("The registration form has submitted successfully!");
    }
    
});