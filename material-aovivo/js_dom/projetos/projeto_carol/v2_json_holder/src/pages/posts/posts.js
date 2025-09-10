import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { createPosts } from "../../scripts/createPosts";
import { getUsersPosts } from "../../services/getUsersPosts";

window.addEventListener("load", async () => {
  const posts = await getUsersPosts()
  createPosts(posts);

  
});
