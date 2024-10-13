let formLogin = document.getElementById("frm_user_data");

formLogin.addEventListener('submit', (event) => {
    event.preventDefault();

    let txtName = document.getElementById("txt_name");
    let txtPassword = document.getElementById("txt_password");

    let pedido = {
        userName: txtName.value,
        password: txtPassword.value
    };

    getLogin(pedido, 
        (json) => {
            if(json.success) {
                window.location.href = "/homepage.html";
            }else {
                let errorLabel = document.getElementById("error_label");
                errorLabel.style.display = "block";
                errorLabel.innerText = `* ${json.message}`;
            }
            
        });
});