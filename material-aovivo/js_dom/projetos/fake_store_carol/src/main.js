const routes = {
  home: "home",
  login: "login",
  signup: "signup",
};

async function fetchFragment(fragment) {
  const response = await fetch(`/src/pages/${fragment}.html`);
  if (!response.ok) {
    throw new Error(`Failed to load fragment ${fragment}`);
  }
  return response.text();
}

async function showNotFound(nav, content) {
  if (nav) {
    nav.hidden = true;
  }
  const response = await fetch(`/notFound.html`);
  if (!response.ok) {
    content.innerHTML = "<p>Página não encontrada.</p>";
    return;
  }
  const html = await response.text();
  content.innerHTML = html;
}

async function loadPage() {
  const nav = document.getElementById("nav-primary");
  const content = document.getElementById("content");
  const hash = window.location.hash.replace("#", "");
  const path = window.location.pathname.replace(/^\//, "").replace(/\/$/, "");

  const route = hash || (path ? path : "home");

  if (!routes[route]) {
    await showNotFound(nav, content);
    return;
  }

  if (nav) {
    nav.hidden = false;
  }

  try {
    const html = await fetchFragment(routes[route]);
    content.innerHTML = html;
  } catch (error) {
    console.error(error);
    await showNotFound(nav, content);
  }
}

window.addEventListener("hashchange", loadPage);
window.addEventListener("load", loadPage);
