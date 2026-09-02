/** Opens or closes the auth modal. */
function toggleAuthModal(show) {
  const modal = document.getElementById('auth-modal');
  if (modal) modal.style.display = show ? 'flex' : 'none';
}

/** Renders the auth widget button and modal, wires up all auth events. */
function initAuth(onLogin, onLogout) {
  const widget = document.getElementById('auth-widget');
  if (!widget) return;

  if (!document.getElementById('auth-modal')) {
    document.body.insertAdjacentHTML('beforeend', `
      <div id="auth-modal" style="display:none">
        <div class="auth-modal-box">
          <button class="auth-modal-close" id="auth-modal-close">✕</button>
          <div class="auth-tabs">
            <button class="auth-tab active" data-tab="login">Ingresar</button>
            <button class="auth-tab" data-tab="register">Registrarse</button>
          </div>

          <div class="auth-tab-content" id="auth-tab-login">
            <input class="auth-input" id="auth-login-email" type="email" placeholder="Correo electrónico">
            <input class="auth-input" id="auth-login-pass"  type="password" placeholder="Contraseña">
            <div class="auth-msg" id="auth-login-msg"></div>
            <button class="auth-submit-btn" id="auth-login-submit">Ingresar</button>
            <button class="auth-forgot-btn" id="auth-forgot">¿Olvidaste tu contraseña?</button>
            <div class="auth-divider"><span>o</span></div>
            <button class="auth-discord-btn" id="auth-discord-login">
              <svg width="16" height="16" viewBox="0 0 71 55" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M60.1 4.9A58.5 58.5 0 0 0 45.5.4a40.7 40.7 0 0 0-1.8 3.7 54 54 0 0 0-16.3 0A39 39 0 0 0 25.6.4 58.4 58.4 0 0 0 11 5C1.6 19.1-1 32.8.3 46.4a58.9 58.9 0 0 0 18 9.1 42.6 42.6 0 0 0 3.7-6 38.4 38.4 0 0 1-5.8-2.8l1.4-1.1a42 42 0 0 0 35.8 0l1.4 1.1a38.3 38.3 0 0 1-5.8 2.8 42.4 42.4 0 0 0 3.7 6 58.7 58.7 0 0 0 18-9.1C72.2 30.6 68.2 17 60.1 4.9ZM23.7 38.2c-3.5 0-6.4-3.2-6.4-7.2s2.8-7.2 6.4-7.2 6.5 3.2 6.4 7.2c0 4-2.8 7.2-6.4 7.2Zm23.6 0c-3.5 0-6.4-3.2-6.4-7.2s2.8-7.2 6.4-7.2 6.5 3.2 6.4 7.2c0 4-2.8 7.2-6.4 7.2Z"/></svg>
              Continuar con Discord
            </button>
          </div>

          <div class="auth-tab-content" id="auth-tab-register" style="display:none">
            <input class="auth-input" id="auth-reg-email" type="email"    placeholder="Correo electrónico">
            <input class="auth-input" id="auth-reg-pass"  type="password" placeholder="Contraseña">
            <div class="auth-msg" id="auth-reg-msg"></div>
            <button class="auth-submit-btn" id="auth-reg-submit">Crear cuenta</button>
            <div class="auth-divider"><span>o</span></div>
            <button class="auth-discord-btn" id="auth-discord-register">
              <svg width="16" height="16" viewBox="0 0 71 55" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M60.1 4.9A58.5 58.5 0 0 0 45.5.4a40.7 40.7 0 0 0-1.8 3.7 54 54 0 0 0-16.3 0A39 39 0 0 0 25.6.4 58.4 58.4 0 0 0 11 5C1.6 19.1-1 32.8.3 46.4a58.9 58.9 0 0 0 18 9.1 42.6 42.6 0 0 0 3.7-6 38.4 38.4 0 0 1-5.8-2.8l1.4-1.1a42 42 0 0 0 35.8 0l1.4 1.1a38.3 38.3 0 0 1-5.8 2.8 42.4 42.4 0 0 0 3.7 6 58.7 58.7 0 0 0 18-9.1C72.2 30.6 68.2 17 60.1 4.9ZM23.7 38.2c-3.5 0-6.4-3.2-6.4-7.2s2.8-7.2 6.4-7.2 6.5 3.2 6.4 7.2c0 4-2.8 7.2-6.4 7.2Zm23.6 0c-3.5 0-6.4-3.2-6.4-7.2s2.8-7.2 6.4-7.2 6.5 3.2 6.4 7.2c0 4-2.8 7.2-6.4 7.2Z"/></svg>
              Continuar con Discord
            </button>
          </div>
        </div>
      </div>
    `);
  }

  /** Switches between login and register tabs. */
  function setTab(tab) {
    document.querySelectorAll('.auth-tab').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
    document.getElementById('auth-tab-login').style.display    = tab === 'login'    ? 'flex' : 'none';
    document.getElementById('auth-tab-register').style.display = tab === 'register' ? 'flex' : 'none';
  }

  /** Shows a feedback message inside the auth form. */
  function showMsg(id, text, isError = true) {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = text;
    el.style.color = isError ? '#ff6b6b' : '#4ecdc4';
  }

  /** Triggers Discord OAuth redirect. */
  function discordLogin() {
    supabaseClient.auth.signInWithOAuth({
      provider: 'discord',
      options: { redirectTo: window.location.href, scopes: 'identify' }
    });
  }

  document.querySelectorAll('.auth-tab').forEach(btn =>
    btn.addEventListener('click', () => setTab(btn.dataset.tab))
  );

  document.getElementById('auth-modal-close').addEventListener('click', () => toggleAuthModal(false));
  document.getElementById('auth-modal').addEventListener('click', e => {
    if (e.target.id === 'auth-modal') toggleAuthModal(false);
  });

  document.getElementById('auth-forgot').addEventListener('click', async () => {
    const email = document.getElementById('auth-login-email').value.trim();
    if (!email) return showMsg('auth-login-msg', 'Ingresa tu correo primero.');
    const { error } = await supabaseClient.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin + '/auth-reset.html'
    });
    if (error) showMsg('auth-login-msg', error.message);
    else showMsg('auth-login-msg', 'Te enviamos un link para restablecer tu contraseña.', false);
  });

  document.getElementById('auth-discord-login').addEventListener('click', discordLogin);
  document.getElementById('auth-discord-register').addEventListener('click', discordLogin);

  document.getElementById('auth-login-submit').addEventListener('click', async () => {
    const email = document.getElementById('auth-login-email').value.trim();
    const pass  = document.getElementById('auth-login-pass').value;
    if (!email || !pass) return showMsg('auth-login-msg', 'Completa todos los campos.');
    const { error } = await supabaseClient.auth.signInWithPassword({ email, password: pass });
    if (error) showMsg('auth-login-msg', error.message);
    else toggleAuthModal(false);
  });

  document.getElementById('auth-reg-submit').addEventListener('click', async () => {
    const email = document.getElementById('auth-reg-email').value.trim();
    const pass  = document.getElementById('auth-reg-pass').value;
    if (!email || !pass) return showMsg('auth-reg-msg', 'Completa todos los campos.');
    const { error } = await supabaseClient.auth.signUp({ email, password: pass });
    if (error) showMsg('auth-reg-msg', error.message);
    else toggleAuthModal(false);
  });

  /** Renders the widget button based on current session state. */
  async function renderWidget() {
    const { data: { session } } = await supabaseClient.auth.getSession();
    if (session) {
      const meta   = session.user.user_metadata;
      const name   = meta.username || meta.full_name || meta.name || meta.user_name || 'Usuario';
      const avatar = meta.avatar_url || '';
      widget.innerHTML = `
        <div class="auth-user">
          ${avatar ? `<img src="${avatar}" alt="${name}" class="auth-avatar">` : ''}
          <span class="auth-name">${name}</span>
          <button class="auth-logout-btn" id="auth-logout">Salir</button>
        </div>`;
      document.getElementById('auth-logout').addEventListener('click', async () => {
        await supabaseClient.auth.signOut();
      });
      if (onLogin) onLogin(session);
    } else {
      widget.innerHTML = `<button class="auth-open-btn" id="auth-open">Iniciar sesión</button>`;
      document.getElementById('auth-open').addEventListener('click', () => toggleAuthModal(true));
      if (onLogout) onLogout();
    }
  }

  supabaseClient.auth.onAuthStateChange(() => renderWidget());
  renderWidget();
}
