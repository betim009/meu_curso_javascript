document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    if (email === 'admim@email.com' && senha === '123456') {
        alert('Login realizado com sucesso!');
    } else {
        alert('E-mail ou senha inválidos!');
    }
}); 