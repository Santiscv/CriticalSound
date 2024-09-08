const songsLiked = getLikedSongs()
const songsCriticized = getCriticizedSongs()
const billboardMostLiked= document.getElementById("billboard_most_liked");
const billboardMostCriticized = document.getElementById("billboard_most_criticized")
billboardMostLiked.innerHTML="";
billboardMostCriticized.innerHTML="";

for(song of songsLiked){
    let classSong = new Song(song);
    billboardMostLiked.innerHTML += classSong.getTemplate();
}
for(song of songsCriticized){
    let classSong = new Song(song);
    billboardMostCriticized.innerHTML += classSong.getTemplate();
}