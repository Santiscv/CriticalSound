class UserProfile{
    constructor(user){
        this.imageURL= user.imageURL;
        this.description= user.description;
        this.id=user.id;
    }
    getTemplate(){
        return `
            <img class="profile-icono" 
            src="${this.imageURL}" 
            alt="${this.description}"
            />
        `;
    }
}
class UserFriends{
    constructor(friends){
        this.imageURL= friends.imageURL;
        this.description= friends.description;
        this.id=friends.id;
    }
    getTemplate(){
        return `
            <img class="friends-icono" 
            src="${this.imageURL}" 
            alt="${this.description}"
            />
        `;
    }
}
class UserCommunities{
    constructor(communities){
        this.imageURL= communities.imageURL;
        this.description= communities.description;
        this.id=communities.id;
    }
    getTemplate(){
        return `
            <img class="friends-icono" 
            src="${this.imageURL}" 
            alt="${this.description}"
            />
        `;
    }
}