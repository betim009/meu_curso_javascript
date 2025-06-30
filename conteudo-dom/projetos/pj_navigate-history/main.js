const routes = {
  "/": "",
  "/login": "login.html",
};

const app = document.getElementById("app");

async function handleLocation() {
  const path = window.location.pathname;

  if (routes[path].endsWith(".html")) {
    const html = await fetch(routes[path]).then(res => res.text());
    app.innerHTML = html;
  } else {
    app.innerHTML = routes[path]; // texto direto, tipo Home
  }
}

function route(event) {
  event.preventDefault();
  const href = event.target.getAttribute("href");
  history.pushState(null, null, href);
  handleLocation();
}

document.addEventListener("click", (e) => {
  if (e.target.matches("[data-link]")) {
    route(e);
  }
});

window.onpopstate = handleLocation;

handleLocation();
