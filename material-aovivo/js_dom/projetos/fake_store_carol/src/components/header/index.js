import './header.css'

export function header(routes) {
  return `
  <header> 
    <h2>Logo</h2>

    <nav>
        <a href="${routes.home}">Home</a>
        <a href="${routes.login}">Login</a>
    </nav>
  </header>`;
}
