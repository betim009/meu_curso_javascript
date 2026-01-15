// window.addEventListener("load", () => {
//     // Seletores
//     const inputEmail = document.getElementById("email")
//     const inputPassword = document.getElementById("password")
//     const btnLogin = document.getElementById("login")

//     // Variaveis
//     const dataLogin = {
//         email: "",
//         password: "",
//     };

//     btnLogin.addEventListener("click", () => {
//         const email = inputEmail.value;
//         const password = inputPassword.value;

//         dataLogin.email = email;
//         dataLogin.password = password;

//         console.log(dataLogin)
//     });

// })

window.addEventListener("load", () => {
  const inputEmail = document.getElementById("email");
  const inputPassword = document.getElementById("password");
  const btnLogin = document.getElementById("login");

  const dataLogin = {
    email: "",
    password: "",
  };

  inputEmail.addEventListener("input", ({ target }) => {
    dataLogin.email = target.value;
  });

  inputPassword.addEventListener("input", ({ target }) => {
    dataLogin.password = target.value;
  });

  btnLogin.addEventListener("click", () => {
    if (dataLogin.email.length <= 10) {
      return alert("email invalido");
    }

    if (dataLogin.password <= 6) {
      return alert("password invalido");
    }
    console.log(dataLogin);
  });
  
});
