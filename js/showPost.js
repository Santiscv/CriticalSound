const userProfile = getUserProfile();
const userPost = document.getElementById("user_post_container");
userPost.innerHTML = "";

for(user of userProfile) {
    let classUserProfile = new UserProfile(user);
    userPost.innerHTML += classUserProfile.getTemplate();
}


const posts = getPosts();
const imgPost = document.getElementById("img_post");
imgPost.innerHTML = "";

for(post of posts) {
    let classPost = new Post(post);
    imgPost.innerHTML += classPost.getTemplate();
}


const comments = getComment();
const userComment = document.getElementById("user_comment");
userComment.innerHTML = "";

for(comment of comments) {
    let classComments = new Comment(comment);
    userComment.innerHTML += classComments.getTemplate();
}


const makeComments = getUserMakeComment();
const userForComming = document.getElementById("user_for_comming");
userForComming.innerHTML = "";

for(makeComment of makeComments) {
    let classMakeComment = new MakeComment(makeComment);
    userForComming.innerHTML += classMakeComment.getTemplate();
}
