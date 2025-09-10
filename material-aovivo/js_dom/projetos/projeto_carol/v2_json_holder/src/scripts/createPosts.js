export function createPosts(posts) {
  const tbodyPosts = document.getElementById("tbody-posts");

  tbodyPosts.innerHTML = "";
  posts.forEach((element) => {
    tbodyPosts.innerHTML += `
      <tr>
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.title}</td>
      </tr>
    `;
  });
}
