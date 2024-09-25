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
// ---------------Contador de Likes--------------------------
const showLikes = document.getElementById("counter");
let likeCounter = 0;
let iconLike = document.querySelector('.like-logo')

iconLike.addEventListener('click', () => {
    likeCounter++;
    showLikes.textContent = likeCounter;
});


