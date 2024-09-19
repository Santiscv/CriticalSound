class Post {
    constructor(posts) {
        this.criticalSoundImageUrl = posts.criticalSoundImageUrl;
        this.adminName = posts.adminName;
        // this.adminId = posts.adminId
        // this.genre = posts.genre
        // this.title = posts.title
        this.postImageUrl = posts.postImageUrl;
        this.postDescription = posts.postDescription;
        this.id = posts.id;
        this.imgUserComment = posts.imgUserComment;
        this.usernameComment = posts.usernameComment;
        this.userId = posts.userId;
        this.userComment = posts.userComment;
        this.commentId = posts.commentId;
        this.imgUserForCommenting = posts.imgUserForCommenting;
        this.id = posts.id
    }

    getTemplate = () => {
        return `
                <article class="post">
                    <article class="user-profile" id="user_post_container">
                        <img src="${this.criticalSoundImageUrl}" >
                        <h3>${this.adminName}</h3>
                    </article>
                    <article class="post-imagen" id="img_post">
                        <img src="${this.postImageUrl}">
                        <p>${this.postDescription}</p>
                    </article> 
                    <article class="post-interactions">
                        <div class="like-logo"><img src="images/like-1(icono)-min.png" alt="like" title="Like"></div>
                        <div class="comment-logo"><img src="images/comentario(icono)-min.png" alt="add-comment" title="Add-Comment"></div>
                        <div class="share-logo"><img src="images/cuota(icono)-min.png" alt="share" title="Share"></div>
                    </article>
                    <article class="comments">
                        <h3>Comments:</h3>
                        <div class="comment" id="user_comment">
                            <img src="${this.imgUserComment}">
                            <h4>${this.usernameComment}  </h4>
                            <p>${this.userComment}</p>
                        </div>
                        <form class="MakeComment" id="commentForm">
                            <div class="imgMakeComment" id="user_for_comming" >
                                <img src="${this.imgUserForCommenting}">
                            </div>
                            <textarea name="comment" id="comment" placeholder="Enter your text here"></textarea>
                            <button  type="submit">share</button>
                        </form> 
                    </article>
                </article>
            `;
    }
}
