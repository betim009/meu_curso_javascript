import Navigo from "navigo";

const router = new Navigo("/", { hash: false });

const ROUTES = {
  home: "/partials/home.html",
  login: "/partials/login.html",
  signup: "/partials/signup.html",
};

const NOT_FOUND_PATH = "/partials/notFound.html";

async function fetchFragment(path) {
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`Failed to load fragment: ${path}`);
  }
  return response.text();
}

async function renderFragment(path, { hideNav = false } = {}) {
  const nav = document.getElementById("nav-primary");
  const content = document.getElementById("content");

  if (!content) {
    return;
  }

  if (nav) {
    nav.hidden = hideNav;
  }

  try {
    const html = await fetchFragment(path);
    content.innerHTML = html;
  } catch (error) {
    console.error(error);
    if (path !== NOT_FOUND_PATH) {
      await showNotFound();
      return;
    }
    content.innerHTML = "<p>Página não encontrada.</p>";
  }

  router.updatePageLinks();
}

async function showPage(pageKey) {
  const fragment = ROUTES[pageKey];

  if (!fragment) {
    await showNotFound();
    return;
  }

  await renderFragment(fragment);
}

async function showNotFound() {
  await renderFragment(NOT_FOUND_PATH, { hideNav: true });
}

router.on("/", () => showPage("home"));
router.on("/home", () => showPage("home"));
router.on("/login", () => showPage("login"));
router.on("/signup", () => showPage("signup"));
router.notFound(() => showNotFound());

router.updatePageLinks();
router.resolve();
