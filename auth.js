const ADMIN_EMAIL = "123456";
const ADMIN_SENHA = "123456";

function login(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if(email === ADMIN_EMAIL && senha === ADMIN_SENHA) {
    localStorage.setItem("admin", "true");
    window.location.href = "admin.html";
  } else {
    alert("Login inválido");
  }
}

function proteger() {
  if(localStorage.getItem("admin") !== "true") {
    window.location.href = "login.html";
  }
}