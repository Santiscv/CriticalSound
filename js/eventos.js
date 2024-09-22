const formularioDatosUsuario = document.getElementById("frm_user_data");

document.addEventListener("submit", (e) => {
    e.preventDefault();
    
    console.log("FORMULARIO ENVIADO");

    const data = {
        nombre: data.getElementById("txt_nombre").value,
        password: data.getElementById("txt_password").value
    };
    alert(JSON.stringify(data));

})

