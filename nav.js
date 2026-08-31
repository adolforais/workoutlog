// Shared hamburger navigation, injected into every page.
(function () {
  const links = [
    { href: 'index.html', label: 'Log Workout', icon: '01' },
    { href: 'editor.html', label: 'Edit Sessions', icon: '02' },
    { href: 'analysis.html', label: 'Performance Analysis', icon: '03' },
    { href: 'onerepmax.html', label: 'One-Rep Max Calculator', icon: '04' },
    { href: 'guide.html', label: 'Training Guide', icon: '05' },
  ];

  function currentFile() {
    const path = window.location.pathname.split('/').pop();
    return path === '' ? 'index.html' : path;
  }

  function buildNav() {
    const current = currentFile();

    const topbar = document.createElement('div');
    topbar.className = 'topbar';
    topbar.innerHTML = `
      <a href="index.html" class="brand">Adolfo's <span>Training</span></a>
      <button class="menu-toggle" id="navMenuToggle" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    `;

    const overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    overlay.id = 'navOverlay';

    const panel = document.createElement('nav');
    panel.className = 'nav-panel';
    panel.id = 'navPanel';
    panel.innerHTML = `<div class="nav-title">Menu</div>` + links.map(l => {
      const active = l.href === current ? ' active' : '';
      return `<a href="${l.href}" class="${active.trim()}"><span class="icon">${l.icon}</span>${l.label}</a>`;
    }).join('');

    const mount = document.getElementById('siteNav') || document.body.insertBefore(document.createElement('div'), document.body.firstChild);
    mount.appendChild(topbar);
    mount.appendChild(overlay);
    mount.appendChild(panel);

    const toggle = topbar.querySelector('#navMenuToggle');
    function openNav() {
      panel.classList.add('open');
      overlay.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
    }
    function closeNav() {
      panel.classList.remove('open');
      overlay.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
    toggle.addEventListener('click', () => {
      panel.classList.contains('open') ? closeNav() : openNav();
    });
    overlay.addEventListener('click', closeNav);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeNav();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildNav);
  } else {
    buildNav();
  }
})();
