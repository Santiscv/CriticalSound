// let textArea = document.getElementById("commentForm");
// let textArea2 = document.getElementById("commentForm2");
// let textArea3 = document.getElementById("commentForm3");

// textArea.addEventListener('submit', (event) => {
//     event.preventDefault();
    
//     const commentField = document.getElementById("comment");
//     console.log("Your comment has been sent.");
//     commentField.value = "";
// });

// textArea2.addEventListener('submit', (event) => {
//     event.preventDefault();
    
//     const commentField = document.getElementById("comment2");
//     console.log("Your comment has been sent.");
//     commentField.value = "";
// });

// textArea3.addEventListener('submit', (event) => {
//     event.preventDefault();
    
//     const commentField = document.getElementById("comment3");
//     console.log("Your comment has been sent.");
//     commentField.value = "";
// });

// con esta funcion voy a manejar el evento submit
function handleFormSubmit(formId, textAreaId) {
    const form = document.getElementById(formId);
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const commentField = document.getElementById(textAreaId);
        console.log(commentField.value);
        commentField.value = "";  // < se limpia el textarea
        alert("Your comment has been sent!");
        
    });
}

  // le doy los id para asignar los eventos a los formularios
handleFormSubmit("commentForm", "comment");
handleFormSubmit("commentForm2", "comment2");
handleFormSubmit("commentForm3", "comment3");
