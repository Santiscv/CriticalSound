let showLikes = document.getElementById("counter");
let likeCounter = 0;
let iconLike = document.querySelector('.like-logo')

iconLike.addEventListener('click', () => {
    likeCounter++;
    showLikes.textContent = likeCounter;
});

