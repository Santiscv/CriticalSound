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