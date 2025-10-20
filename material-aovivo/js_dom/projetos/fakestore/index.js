window.addEventListener("load", () => {
  const headerUsername = document.getElementById("header-username");
  const linkLogin = document.getElementById("link-login");

  if (localStorage.getItem("token")) {
    headerUsername.textContent = `Bem vindo ${localStorage.getItem(
      "username"
    )}`;
    linkLogin.hidden = true;
  }
});
