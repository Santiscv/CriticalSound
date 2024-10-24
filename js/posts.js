class Post {
    constructor(posts) {
        // this.criticalSoundImageUrl = posts.criticalSoundImageUrl;
        this.criticalSoundImageUrl = "images/logotipo-de-pagina-responsive-min.png";
        // this.adminName = posts.adminName;
        this.adminId = posts.adminId;
        this.genre = posts.genre;
        this.title = posts.title;
        this.urlImage = posts.urlImage;
        this.description = posts.description;
        this.id = posts.id;
        this.imgUserComment = posts.imgUserComment;
        this.usernameComment = posts.usernameComment;
        this.userId = posts.userId;
        this.userComment = posts.userComment;
        this.commentDate = posts.commentDate;
        this.commentId = posts.commentId;
        this.imgUserForCommenting = posts.imgUserForCommenting;
        this.id = posts.id;
    }

    getTemplate = () => {
        return `
                <article class="post">
                    <span class="post-genre">${this.genre}</span>
                    <article class="user-profile" id="user_post_container">
                        <img src="${this.criticalSoundImageUrl}" >
                        <h2 class="post-title">${this.title}</h2>
                    </article>
                    <article class="post-imagen" id="img_post">
                        <img src="${this.urlImage}">
                        <p>${this.description}</p>
                    </article> 
                    <article class="post-interactions">
                        <div class="like-logo"><img src="images/like-1(icono)-min.png" alt="like" title="Like"></div>
                        <div class="like-counter" id="counter">0</div>
                        <div class="comment-logo"><img src="images/comentario(icono)-min.png" alt="add-comment" title="Add-Comment"></div>
                        <div class="share-logo"><img src="images/cuota(icono)-min.png" alt="share" title="Share"></div>
                    </article>
                    <article class="comments">
                        <h4>Comments:</h4>
                        <div class="comment" id="user_comment">
                            <img src="${this.imgUserComment}">
                            <h5>${this.usernameComment}  </h5>
                            <p>${this.userComment}</p>
                            <span class="comment-date">${this.commentDate}</span>
                        </div>
                        <form class="MakeComment" id="commentForm">
                            <div class="imgMakeComment" id="user_for_comming" >
                                <img src="${this.imgUserForCommenting}">
                            </div>
                            <textarea name="comment" id="comment" placeholder="Enter your text here"></textarea>
                            <button  type="submit" class="share-comment">share</button>
                        </form> 
                    </article>
                </article>
            `;
    }
}
