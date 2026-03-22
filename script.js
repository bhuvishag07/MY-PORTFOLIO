/* ─── script.js ─── */

// ═══════════════════════════════
//  NAVBAR SCROLL
// ═══════════════════════════════
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ═══════════════════════════════
//  HAMBURGER MENU
// ═══════════════════════════════
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  hamburger.classList.toggle('active');
  if (navLinks.classList.contains('open')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity   = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity   = '';
    spans[2].style.transform = '';
  }
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity   = '';
    spans[2].style.transform = '';
  });
});

// ═══════════════════════════════
//  HERO PARTICLE CANVAS
// ═══════════════════════════════
(function initParticles() {
  const container = document.getElementById('particles');
  const canvas    = document.createElement('canvas');
  canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;';
  container.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  let W, H, particles = [];

  function resize() {
    W = canvas.width  = container.offsetWidth;
    H = canvas.height = container.offsetHeight;
  }

  function createParticles() {
    particles = [];
    const count = Math.floor((W * H) / 14000);
    for (let i = 0; i < count; i++) {
      particles.push({
        x:    Math.random() * W,
        y:    Math.random() * H,
        r:    Math.random() * 1.6 + 0.3,
        vx:   (Math.random() - 0.5) * 0.25,
        vy:   (Math.random() - 0.5) * 0.25,
        a:    Math.random() * 0.6 + 0.1,
        hue:  Math.random() > 0.5 ? 270 : 290,
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${p.hue}, 70%, 75%, ${p.a})`;
      ctx.fill();

      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;
    });
    requestAnimationFrame(draw);
  }

  resize();
  createParticles();
  draw();

  window.addEventListener('resize', () => { resize(); createParticles(); });
})();

// ═══════════════════════════════
//  INTERSECTION OBSERVER - REVEAL
// ═══════════════════════════════
function addRevealClass() {
  const targets = document.querySelectorAll(
    '.project-card, .stat-card, .skill-tag, .contact-btn, .about-text, .about-stats, .skills-wrap, .terminal-wrap'
  );
  targets.forEach(el => el.classList.add('reveal'));
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('in-view'), i * 60);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

addRevealClass();
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ═══════════════════════════════
//  TERMINAL ANIMATION
// ═══════════════════════════════
const terminalLines = [
  { type: 'cmd',   text: 'system.status'          },
  { type: 'blank'                                   },
  { type: 'out',   text: '> Initialising...'       },
  { type: 'blank'                                   },
  { type: 'kv',    key: '  Student ',  val: 'Active'                  },
  { type: 'kv',    key: '  Focus   ',  val: 'AI / Data Science'       },
  { type: 'kv',    key: '  Mode    ',  val: 'Learning & Building...'  },
  { type: 'kv',    key: '  Stack   ',  val: 'Python · C++ · JS'       },
  { type: 'kv',    key: '  Drive   ',  val: '∞ Curiosity'             },
  { type: 'blank'                                   },
  { type: 'out',   text: '> All systems nominal ✓' },
  { type: 'cursor'                                  },
];

function buildTerminal() {
  const body = document.getElementById('terminal-body');
  if (!body) return;

  terminalLines.forEach((line, idx) => {
    let el;

    if (line.type === 'blank') {
      el = document.createElement('div');
      el.className = 't-blank t-line';

    } else if (line.type === 'cmd') {
      el = document.createElement('div');
      el.className = 't-line';
      el.innerHTML = `<span class="t-prompt">bhuvisha@portfolio:~$</span><span class="t-cmd"> ${escapeHtml(line.text)}</span>`;

    } else if (line.type === 'out') {
      el = document.createElement('div');
      el.className = 't-line';
      el.innerHTML = `<span class="t-out">${escapeHtml(line.text)}</span>`;

    } else if (line.type === 'kv') {
      el = document.createElement('div');
      el.className = 't-line';
      el.innerHTML = `<span class="t-key">${escapeHtml(line.key)}</span><span class="t-out-dim">  ::  </span><span class="t-val">${escapeHtml(line.val)}</span>`;

    } else if (line.type === 'cursor') {
      el = document.createElement('div');
      el.className = 't-line';
      el.innerHTML = `<span class="t-prompt">bhuvisha@portfolio:~$</span> <span class="t-cursor"></span>`;
    }

    if (el) body.appendChild(el);
  });
}

function escapeHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

buildTerminal();

// Animate terminal lines when section scrolls into view
const terminalSection = document.getElementById('system');
let terminalPlayed = false;

const termObserver = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting && !terminalPlayed) {
    terminalPlayed = true;
    const lines = document.querySelectorAll('#terminal-body .t-line');
    lines.forEach((line, i) => {
      setTimeout(() => line.classList.add('visible'), i * 130);
    });
  }
}, { threshold: 0.3 });

if (terminalSection) termObserver.observe(terminalSection);

// ═══════════════════════════════
//  ACTIVE NAV LINK ON SCROLL
// ═══════════════════════════════
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 100;
    if (window.scrollY >= top) current = sec.id;
  });
  navAnchors.forEach(a => {
    a.style.color = '';
    if (a.getAttribute('href') === `#${current}`) {
      a.style.color = 'var(--purple-300)';
    }
  });
});

// ═══════════════════════════════
//  SMOOTH HOVER TILT ON PROJECT CARDS
// ═══════════════════════════════
document.querySelectorAll('.project-card:not(.coming-soon)').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width  / 2;
    const y = e.clientY - rect.top  - rect.height / 2;
    const tiltX = -(y / rect.height) * 5;
    const tiltY =  (x / rect.width)  * 5;
    card.style.transform = `translateY(-6px) perspective(600px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    setTimeout(() => card.style.transition = '', 500);
  });
});
