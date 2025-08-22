export function createUsers(users) {
  const tbodyUsers = document.getElementById("tbody-users");

  users.forEach((element) => {
    tbodyUsers.innerHTML += `
      <tr>
        <td>${element.name}</td>
        <td>${element.username}</td>
      </tr>
    `;
  });
}
