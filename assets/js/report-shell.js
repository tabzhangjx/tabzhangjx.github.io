(function () {
  'use strict';
  var key = 'research-journal-theme';
  var root = document.documentElement;
  var button = document.getElementById('report-theme-control');
  if (!button) return;
  function preferred() {
    try { var saved = localStorage.getItem(key); if (saved === 'dark' || saved === 'light') return saved; } catch (_) {}
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  function apply(theme) {
    root.dataset.theme = theme;
    var dark = theme === 'dark';
    button.setAttribute('aria-pressed', String(dark));
    button.setAttribute('aria-label', 'Switch to ' + (dark ? 'light' : 'dark') + ' theme');
    button.querySelector('[data-theme-label]').textContent = dark ? 'Light' : 'Dark';
  }
  button.addEventListener('click', function () {
    var theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem(key, theme); } catch (_) {}
    apply(theme);
  });
  apply(preferred());
  // Apply after legacy report initializers so every report shares one preference.
  window.addEventListener('load', function () { apply(preferred()); }, { once: true });
}());
