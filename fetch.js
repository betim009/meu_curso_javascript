const credentials = { username: "johnd", password: "m38rmF$" };
fetch("https://fakestoreapi.com/auth/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(credentials),
})
  .then((response) => response.json())
  .then((data) => console.log(data));



