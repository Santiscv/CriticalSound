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
        const mostLikedList = getmostLikedSongs();
        const mostCriticizedList = getmostCriticizedSongs();
        const likedContainer = document.getElementById("liked-container");
        const criticizedContainer = document.getElementById("criticized-container");
        if (likedContainer && criticizedContainer) {
            likedContainer.innerHTML = "";
            criticizedContainer.innerHTML = "";
    
            for (song of mostLikedList) {
                let classSong = new Song(song);
                likedContainer.innerHTML += classSong.getTemplate();
            }
    
            for (song of mostCriticizedList) {
                let classSong = new Song(song);
                criticizedContainer.innerHTML += classSong.getTemplate();
            }
        }
    }
});