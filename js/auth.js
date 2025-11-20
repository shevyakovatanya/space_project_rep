document.addEventListener('DOMContentLoaded', async () => {
  // Проверка авторизации при загрузке страницы
  try {
    const res = await fetch('api/me.php');
    const data = await res.json();

    if (data.user) {
      // Пользователь залогинен
      document.getElementById('auth-modal').style.display = 'none';

      // Показываем имя в углу
      const userBox = document.getElementById('user-box');
      if (userBox) userBox.textContent = `👨‍🚀 ${data.user.username}`;
    }
  } catch (e) {
    console.error('Auth check error:', e);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('auth-modal');
  const registerSection = document.getElementById('register-section');
  const loginSection = document.getElementById('login-section');
  const showLogin = document.getElementById('show-login');
  const showRegister = document.getElementById('show-register');
  const authTitle = document.getElementById('auth-title');

  // Переключение на логин
  showLogin.onclick = e => {
    e.preventDefault();
    registerSection.style.display = 'none';
    loginSection.style.display = 'block';
    authTitle.textContent = "Login";
  };

  // Переключение на регистрацию
  showRegister.onclick = e => {
    e.preventDefault();
    loginSection.style.display = 'none';
    registerSection.style.display = 'block';
    authTitle.textContent = "Register";
  };

  // Проверяем сессию
  async function checkSession() {
    const res = await fetch('api/me.php');
    const data = await res.json();
    if (!data.user) {
      modal.style.display = 'flex';     // показываем окно
    }
  }
  checkSession();

  // Регистрация
  document.getElementById('register-form').addEventListener('submit', async e => {
    e.preventDefault();
    const username = document.getElementById('register-username').value.trim();
    const password = document.getElementById('register-password').value;
    const role = document.getElementById('register-role').value;

    const res = await fetch('api/register.php', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({username, password, role})
    });
    const data = await res.json();

    if (data.success) {
      alert('Registered! Now login.');
      showLogin.click();
    } else {
      alert(data.error);
    }
  });

  // Логин
  document.getElementById('login-form').addEventListener('submit', async e => {
    e.preventDefault();
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value;
    const role = document.getElementById('login-role').value;

    const res = await fetch('api/login.php', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({username, password, role})
    });
    const data = await res.json();

    if (data.success) {
      modal.style.display = 'none';
  
      // ОБНОВЛЯЕМ ОТОБРАЖЕНИЕ ЛОГИНА В УГЛУ
      const userBox = document.getElementById('user-box');
      if (userBox) userBox.textContent = `👨‍🚀 ${data.username}`;
  
        alert(`Welcome, ${data.username}!`);
      } else {
      alert(data.error);
    }
  });
});

// --- LOGOUT ---
document.addEventListener('DOMContentLoaded', () => {
  const logoutBtn = document.getElementById('logout-btn');
  if (!logoutBtn) return;

  logoutBtn.addEventListener('click', async () => {
    try {
      const res = await fetch('api/logout.php', { method: 'POST' });
      const data = await res.json();

      if (data.success) {
        // очищаем отображение пользователя
        const userBox = document.getElementById('user-box');
        if (userBox) userBox.textContent = '';

        // показываем модальное окно авторизации
        document.getElementById('auth-modal').style.display = 'block';

        alert("Logged out successfully.");
      }
    } catch (err) {
      console.error("Logout error:", err);
    }
  });
});
