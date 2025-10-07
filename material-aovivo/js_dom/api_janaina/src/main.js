import "./style.css";

window.addEventListener("load", () => {
  const formLogin = document.getElementById("form-login");

  const data = {
    username: "",
    password: "",
  };

  formLogin.addEventListener("change", (event) => {
    const nameInput = event.target.name;
    const valueInput = event.target.value;

    data[nameInput] = valueInput;
  });

  formLogin.addEventListener("submit", async (event) => {
    event.preventDefault();

    const request = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const response = await request.json();

    if (response.token) {
      localStorage.setItem("token", response.token);
      localStorage.setItem("username", data.username);
      window.location.href = "home.html";
    }
  });
});
