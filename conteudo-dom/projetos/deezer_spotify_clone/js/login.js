function validateLogin(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const accounts = JSON.parse(localStorage.getItem('deezerCloneAccounts')) || [];
  const found = accounts.find(acc => acc.email === email && acc.password === password);
  if (found) {
    window.location.href = 'home.html';
  } else {
    alert('Login inválido');
  }
}
