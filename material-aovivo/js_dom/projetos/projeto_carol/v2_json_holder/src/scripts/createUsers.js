export function createUsers(users) {
  const tbodyUsers = document.getElementById("tbody-users");
  
  tbodyUsers.innerHTML = "";
  users.forEach((element) => {
    tbodyUsers.innerHTML += `
      <tr>
        <td>${element.name}</td>
        <td>${element.username}</td>
      </tr>
    `;
  });
}
