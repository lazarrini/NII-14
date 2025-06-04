const form = document.getElementById('loginForm');
const output = document.getElementById('output');

// Пример правильных данных
const correctCode = "a-771";
const correctPassword = "horizon13";

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const code = document.getElementById('code').value.trim();
  const password = document.getElementById('password').value.trim();
  
  if (code === correctCode && password === correctPassword) {
    output.style.color = "#00ff00";
    output.textContent = "Доступ разрешён. Загружаю систему...";
    localStorage.setItem("username", code);
    window.location.href = "MainPage.html";
  } else {
    output.style.color = "#ff4444";
    output.textContent = "Ошибка. Неверный код или пароль.";
  }
});