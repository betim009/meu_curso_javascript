function registerAccount(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const accounts = JSON.parse(localStorage.getItem('deezerCloneAccounts')) || [];
  accounts.push({ name, email, password });
  localStorage.setItem('deezerCloneAccounts', JSON.stringify(accounts));
  alert('Conta criada com sucesso!');
  window.location.href = 'index.html';
}
