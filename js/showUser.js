const userProfile = getuserProfile();
const userFriends = getuserFriends();
const userCommunities = getuserCommunities();

const profileContainer= document.getElementById("profile-icon");
const friendsContainer = document.getElementById("friends-icon")
const communitiesContainer = document.getElementById("communities-icon")


profileContainer.innerHTML="";
friendsContainer.innerHTML="";
communitiesContainer.innerHTML="";


for(user of userProfile){
    let classUserProfile = new UserProfile(user);
    profileContainer.innerHTML += classUserProfile.getTemplate();
}
for(friend of userFriends){
    let classFriends = new UserFriends(friend);
    friendsContainer.innerHTML += classFriends.getTemplate();
}

for(communities of userCommunities){
    let classCommunities = new UserCommunities(communities);
    communitiesContainer.innerHTML += classCommunities.getTemplate();
}