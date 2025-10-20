window.addEventListener("load", () => {
  const inputUsername = document.getElementById("input-username");
  const inputPassword = document.getElementById("input-password");
  const formLogin = document.getElementById("form-login");

  if (localStorage.getItem("token")) {
    window.location.href = "index.html";
  }

  formLogin.addEventListener("submit", async (event) => {
    event.preventDefault();

    const username = inputUsername.value;
    const password = inputPassword.value;

    const credentials = {
      username,
      password,
    };

    const endpoint = "https://fakestoreapi.com/auth/login";

    const req = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    const res = await req.json();

    if (res.token) {
      localStorage.setItem("token", res.token);
      localStorage.setItem("username", username);
      window.location.href = "login.html";
    }
  });
});
