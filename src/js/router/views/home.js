import { accessToken } from "../../api/constants";
import { readMyPosts, readPosts } from "../../api/post/read";
import { setLogoutListener } from "../../ui/global/logout";
import { authGuard } from "../../utilities/authGuard";

let myUserData = JSON.parse(localStorage.getItem("myUserData"));

if (accessToken) {
  document.getElementById("loginButton").style.display = "none";
  document.getElementById("registerButton").style.display = "none";
  document.getElementById("profilePicture").setAttribute("src", myUserData.data.avatar.url);
}

//Reads data and builds the home page accordingly

setLogoutListener();
readMyPosts();
readPosts();
authGuard();
