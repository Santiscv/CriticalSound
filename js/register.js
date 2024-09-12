let signUp = document.getElementById("form-registration");

signUp.addEventListener('submit', (event) => {
    event.preventDefault();

    signUp.reset();
    document.querySelector('input[type="checkbox"]').checked = false;
    
    alert("Your account has been successfully registered!")
});