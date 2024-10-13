let signUp = document.getElementById("form-registration");

signUp.addEventListener('submit', (event) => {
    event.preventDefault();

    let txtUserName= document.getElementById("user");
    let txtUserBirthdate= document.getElementById("date");
    let txtUserMail= document.getElementById("email");
    let txtUserPassword= document.getElementById("password");

    let pedido={
        userName: txtUserName.value,
        birthdate: txtUserBirthdate.value,
        mail: txtUserMail.value,
        password: txtUserPassword.value
    }
    getLogin(pedido, 
        (json) => {
            if(json.success) {
                window.location.href = "/homepage.html";
            }
            // }else {
            //     let errorLabel = document.getElementById("error_label");
            //     errorLabel.style.display = "block";
            //     errorLabel.innerText = `* ${json.message}`;
            // }
            
        });
});

