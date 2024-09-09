class UserProfile {
    constructor(userProfile) {
        this.userImageUrl = userProfile.userImageUrl;
        this.username = userProfile.username;
        this.userId = userProfile.userId
    }

    getTemplate = () => {
        return `
                <img 
                src="${this.userImageUrl}" 
                alt="user-profile-image" 
                title="User-Profile"
                >
                <h3>${this.username}</h3>
            `;
    }  
}

class Post {
    constructor(posts) {
        this.postImageUrl = posts.postImageUrl;
        this.postDescription = posts.postDescription;
        this.id = posts.id;
    }

    getTemplate = () => {
        return `
                <img
                src="${this.postImageUrl}" 
                alt="friend image"
                >
                <p>
                    ${this.postDescription}
                </p>
            `;
    }
}

class Comment { 
    constructor(comments) {
        this.imgUserComment = comments.imgUserComment;
        this.usernameComment = comments.usernameComment;
        this.userId = comments.userId;
        this.userComment = comments.userComment;
        this.commentId = comments.commentId;
    }

    getTemplate = () => {
        return `
            <div class="comment">
                <img 
                src="${this.imgUserComment}" 
                alt="profile-image">
                <h4>${this.usernameComment}</h4>
                <p>${this.userComment}</p>
            </div>
            `;
    }
}

class MakeComment {
    constructor(makeComments) {
        this.imgUserForCommenting = makeComments.imgUserForCommenting;
        this.id = makeComments.id
    }

    getTemplate = () => {
        return `
            <img 
            src="${this.imgUserForCommenting}" 
            alt="profile-image"
            >
            `;
    }
}
