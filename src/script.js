document.getElementById("login-button").addEventListener("click", function() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("error-message");

  if (!username || !password) {
    errorMsg.textContent = "Preencha todos os campos.";
    return;
  }

  if (username === "QA-TESTER" && password === "123456") {
    window.location.href = "dashboard.html";
  } else {
    errorMsg.textContent = "Usuário ou senha inválidos.";
  }
});
