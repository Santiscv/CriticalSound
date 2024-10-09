document.addEventListener("DOMContentLoaded", (event) => {
    const songsWatchlist = getwatchlistSongs();
    const songsRatings = getmusicRatingsSongs();
    const watchlistContainer = document.getElementById("watchlist-container");
    const musicRatingsContainer = document.getElementById("music-ratings-container");
    
    if (watchlistContainer && musicRatingsContainer) {
        watchlistContainer.innerHTML = "";
        musicRatingsContainer.innerHTML = "";

        for (song of songsWatchlist) { 
            let classSong = new Song(song);
            watchlistContainer.innerHTML += classSong.getTemplate();
        }

        for (song of songsRatings) {
            let classSong = new Song(song);
            musicRatingsContainer.innerHTML += classSong.getTemplate();
        }
    }else{
        const songsLiked = getmostLikedSongs()
        const songsCriticized = getmostCriticizedSongs()
        const billboardMostLiked= document.getElementById("billboard_most_liked");
        const billboardMostCriticized = document.getElementById("billboard_most_criticized")
        billboardMostLiked.innerHTML="";
        billboardMostCriticized.innerHTML="";


        //cargaa el css del homepage dinamicamente
        function loadHomePageCss() {
            if (!document.getElementById('homepage-css')) {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = 'css/homepage.css';
                link.id = 'homepage-css';
                document.head.appendChild(link);
            }
        }

        //remover el css del homepage
        function removeHomePageCss() {
            const homePageCSS = document.getElementById('homepage-css');
            if (homePageCSS) {
                document.head.removeChild(homePageCSS);
            }
        }

        function showPostModal(postId) {
            const posts = getPosts(); //cargo todos los posts del homepage
            const post = posts.find(p => p.id === postId);  //busco el post por su id

            if (!post) {
                console.error(`post with id: ${postId} not found.`);
                return;
            }

            loadHomePageCss(); //cargo el css del homepage antes de mostrar el modal

            const mainBillboard = document.querySelector('main'); //selec el main del billboard
            mainBillboard.classList.add('hidden');//oculta el contenido del main añadiendo la clase hidden en billboard.css (opacidad 0)

            let postInstance = new Post(post);

            Swal.fire({
                html: postInstance.getTemplate(),//obtengo template del post en el modal 
                showCloseButton: true,
                width: '690px',
                padding: '3em',
                showConfirmButton: false,
                didClose: () => {
                    removeHomePageCss();
                    mainBillboard.classList.remove('hidden'); //quito la clase hidden para volver a mostrar el contenido
                }
            });
        }

        //función que asocia una canción con un post
        function getPostBySongId(songId) {
            const posts = getPosts();//cargo todos los posts del homepage
            return posts.find(post => post.id === songId); //busca el id de post que coincida con el songId
        }

        for (let song of songsLiked) {
            let classSong = new Song(song);
            const template = classSong.getTemplate();

            const tempContainer = document.createElement('div');
            tempContainer.innerHTML = template;

            const imageElement = tempContainer.querySelector('.billboard-image');
            imageElement.addEventListener('click', () => showPostModal(song));

            //asocia la canción y el post por medio del id
            imageElement.addEventListener('click', () => {
                const relatedPost = getPostBySongId(song.id); //busca el post relacionado
                showPostModal(relatedPost.id);//abre el modal con el post.id
            });

            billboardMostLiked.appendChild(imageElement);
        }


        for (let song of songsCriticized) {
            let classSong = new Song(song);
            const template = classSong.getTemplate();

            const tempContainer = document.createElement('div');
            tempContainer.innerHTML = template;

            const imageElement = tempContainer.querySelector('.billboard-image');
            imageElement.addEventListener('click', () => showPostModal(song));

            imageElement.addEventListener('click', () => {
                const relatedPost = getPostBySongId(song.id);
                showPostModal(relatedPost.id);
            });

            billboardMostCriticized.appendChild(imageElement);
        }

    }
});