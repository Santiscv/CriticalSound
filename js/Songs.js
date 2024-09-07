class Song{
    constructor(song){
        this.imageURL= song.imageURL;
        this.description= song.description;
        this.id=song.id;
    }
    getTemplate(){
        return `
            <img class="billboard-image" 
            src="${this.imageURL}" 
            alt="${this.description}"
            />
        `;
    }
}