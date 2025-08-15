import './style.css'

window.addEventListener("load", async () => {
  const tbodyUsers = document.getElementById("tbody-users")

  const urlUsers = "https://jsonplaceholder.typicode.com/users"; 

  const req = await fetch(urlUsers)
  const res = await req.json();

  res.forEach(element => {
    tbodyUsers.innerHTML += `
      <tr>
        <td>${element.name}</td>
        <td>${element.username}</td>
      </tr>
    `
  });
});