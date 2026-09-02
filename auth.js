/** Initializes the auth widget and injects it into #auth-widget. Call once per page after DOM ready. */
function initAuth(onLogin, onLogout) {
  const container = document.getElementById('auth-widget');
  if (!container) return;

  /** Renders the widget based on current session state. */
  async function render() {
    const { data: { session } } = await supabaseClient.auth.getSession();

    if (session) {
      const meta     = session.user.user_metadata;
      const name     = meta.full_name || meta.name || meta.user_name || 'Usuario';
      const avatar   = meta.avatar_url || '';
      container.innerHTML = `
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
      container.innerHTML = `
        <button class="auth-login-btn" id="auth-login">
          <svg width="16" height="16" viewBox="0 0 71 55" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style="margin-right:6px;vertical-align:middle"><path d="M60.1 4.9A58.5 58.5 0 0 0 45.5.4a40.7 40.7 0 0 0-1.8 3.7 54 54 0 0 0-16.3 0A39 39 0 0 0 25.6.4 58.4 58.4 0 0 0 11 5C1.6 19.1-1 32.8.3 46.4a58.9 58.9 0 0 0 18 9.1 42.6 42.6 0 0 0 3.7-6 38.4 38.4 0 0 1-5.8-2.8l1.4-1.1a42 42 0 0 0 35.8 0l1.4 1.1a38.3 38.3 0 0 1-5.8 2.8 42.4 42.4 0 0 0 3.7 6 58.7 58.7 0 0 0 18-9.1C72.2 30.6 68.2 17 60.1 4.9ZM23.7 38.2c-3.5 0-6.4-3.2-6.4-7.2s2.8-7.2 6.4-7.2 6.5 3.2 6.4 7.2c0 4-2.8 7.2-6.4 7.2Zm23.6 0c-3.5 0-6.4-3.2-6.4-7.2s2.8-7.2 6.4-7.2 6.5 3.2 6.4 7.2c0 4-2.8 7.2-6.4 7.2Z"/></svg>
          Login con Discord
        </button>`;
      document.getElementById('auth-login').addEventListener('click', () => {
        supabaseClient.auth.signInWithOAuth({
          provider: 'discord',
          options: { redirectTo: window.location.href, scopes: 'identify' }
        });
      });
      if (onLogout) onLogout();
    }
  }

  supabaseClient.auth.onAuthStateChange(() => render());
  render();
}
