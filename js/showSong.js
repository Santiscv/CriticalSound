const songsWatchlist = getwatchlistSongs()
const songsRatings = getmusicRatingsSongs()
const watchlistContainer= document.getElementById("watchlist-container");
const musicRatingsContainer = document.getElementById("music-ratings-container")
watchlistContainer.innerHTML="";
musicRatingsContainer.innerHTML="";

for(song of songsWatchlist){
    let classSong = new Song(song);
    watchlistContainer.innerHTML += classSong.getTemplate();
}
for(song of songsRatings){
    let classSong = new Song(song);
    musicRatingsContainer.innerHTML += classSong.getTemplate();
}


const mostLikedList = getmostLikedSongs()
const mostCriticizedList = getmostCriticizedSongs()
const likedContainer= document.getElementById("liked-container");
const criticizedContainer = document.getElementById("criticized-container")
watchlistContainer.innerHTML="";
musicRatingsContainer.innerHTML="";

for(song of mostLikedList){ /*falta un let dentro del for?*/
    let classSong = new Song(song);
    likedContainer.innerHTML += classSong.getTemplate();
}
for(song of mostCriticizedList){
    let classSong = new Song(song);
    criticizedContainer.innerHTML += classSong.getTemplate();
}