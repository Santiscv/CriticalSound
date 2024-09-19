// const userProfile = getUserProfile();
// const userPost = document.getElementById("user_post_container");
// userPost.innerHTML = "";

// const userPost2 = document.getElementById("user_post_container2");
// userPost2.innerHTML = "";

// const userPost3 = document.getElementById("user_post_container3");
// userPost3.innerHTML = "";

// for(user of userProfile) {
//     let classUserProfile = new UserProfile(user);
//     userPost.innerHTML += classUserProfile.getTemplate();
//     userPost2.innerHTML += classUserProfile.getTemplate();
//     userPost3.innerHTML += classUserProfile.getTemplate();
    
// }


// const posts = getPosts();
// const imgPost = document.getElementById("img_post");
// imgPost.innerHTML = "";

// const imgPost2 = document.getElementById("img_post2");
// imgPost2.innerHTML = "";

// const imgPost3 = document.getElementById("img_post3");
// imgPost3.innerHTML = "";

// for(post of posts) {
//     let classPost = new Post(post);
//     imgPost.innerHTML += classPost.getTemplate();
//     imgPost2.innerHTML += classPost.getTemplate();
//     imgPost3.innerHTML += classPost.getTemplate();
// }


// const comments = getComment();
// const userComment = document.getElementById("user_comment");
// userComment.innerHTML = "";

// const userComment2 = document.getElementById("user_comment2");
// userComment2.innerHTML = "";

// const userComment3 = document.getElementById("user_comment3");
// userComment3.innerHTML = "";

// for(comment of comments) {
//     let classComments = new Comment(comment);
//     userComment.innerHTML += classComments.getTemplate();
//     userComment2.innerHTML += classComments.getTemplate();
//     userComment3.innerHTML += classComments.getTemplate();
// }


// const makeComments = getUserMakeComment();
// const userForComming = document.getElementById("user_for_comming");
// userForComming.innerHTML = "";

// const userForComming2 = document.getElementById("user_for_comming2");
// userForComming2.innerHTML = "";

// const userForComming3 = document.getElementById("user_for_comming3");
// userForComming3.innerHTML = "";

// for(makeComment of makeComments) {
//     let classMakeComment = new MakeComment(makeComment);
//     userForComming.innerHTML += classMakeComment.getTemplate();
//     userForComming2.innerHTML += classMakeComment.getTemplate();
//     userForComming3.innerHTML += classMakeComment.getTemplate();
// }

const feed = document.getElementById("post_container");

const posts = getPosts();

feed.innerHTML = "";

for(let post of posts)
{
    let classPost = new Post(post);
    feed.innerHTML += classPost.getTemplate();
}