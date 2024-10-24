// const feed = document.getElementById("post_container");

// const posts = getPosts();

// feed.innerHTML = "";

// for(let post of posts)
// {
//     let classPost = new Post(post);
//     feed.innerHTML += classPost.getTemplate();
// }

const feed = document.getElementById("post_container");

getPosts((data) => {
    feed.innerHTML = "";
    let posts = data.songs; 
    
    for (let post of posts) {
        let classPost = new Post(post);
        feed.innerHTML += classPost.getTemplate();
    }
});