const SITE_ROOT = window.location.hostname.endsWith('github.io') ? '/narazas.demo' : '';
const asset = (file) => `${SITE_ROOT}/public/images/${file}`;
const page = (path) => `${SITE_ROOT}${path}`;

// Catálogo centralizado: nombre, precio, texto e imagen se editan aquí.
const PRODUCTS = [
  {
    id: 'lut-pack',
    number: '01',
    name: 'NARAZAS LUT PACK',
    category: 'COLOR',
    price: '49,00 €',
    description: 'El color que utilizo para darle personalidad a mis vídeos, listo para llevarlo a los tuyos.',
    image: asset('lut-after-final.jpg'),
    before: asset('lut-before-final.jpg'),
    after: asset('lut-after-final.jpg'),
    includes: ['12 LUTs para transformar tu color', 'Guía rápida de instalación', 'Uso en CapCut y editores compatibles'],
  },
  {
    id: 'creator-templates',
    number: '02',
    name: 'CREATOR TEMPLATES',
    category: 'CREACIÓN',
    price: '39,00 €',
    description: 'Plantillas pensadas para crear más rápido sin empezar siempre desde cero.',
    image: asset('creator-templates-final.jpg'),
    includes: ['Plantillas editables', 'Sistema de organización visual', 'Guía de uso para creadores'],
  },
  {
    id: 'resource-pack',
    number: '03',
    name: 'CREATOR RESOURCE PACK',
    category: 'RECURSOS',
    price: '29,00 €',
    description: 'Recursos, overlays, sonidos y más para llevar tu contenido al siguiente nivel.',
    image: asset('resource-pack-final.jpg'),
    includes: ['Overlays y elementos visuales', 'Recursos de sonido', 'Referencias para crear con intención'],
  },
];

const app = document.querySelector('#app');
const toast = document.querySelector('[data-toast]');
const nav = document.querySelector('.main-nav');
const menuToggle = document.querySelector('.menu-toggle');

function imageBlock(src, alt, className = '', eager = false) {
  return `<figure class="image-frame ${className}"><img src="${src}" alt="${alt}" loading="${eager ? 'eager' : 'lazy'}" decoding="async"${eager ? ' fetchpriority="high"' : ''} /></figure>`;
}

function comparison(before, after, label = 'Comparar antes y después del color') {
  return `<div class="compare" data-comparison>
    <div class="compare-after">${imageBlock(after, 'Paisaje con el color NARAZAS aplicado')}</div>
    <div class="compare-before">${imageBlock(before, 'Paisaje antes de aplicar el color')}</div>
    <span class="compare-label compare-label--before">ANTES</span>
    <span class="compare-label compare-label--after">DESPUÉS</span>
    <span class="compare-handle" aria-hidden="true"><b>‹</b><i></i><b>›</b></span>
    <input type="range" min="0" max="100" value="50" aria-label="${label}" />
  </div>`;
}

function productCard(product) {
  const visual = product.id === 'lut-pack'
    ? comparison(product.before, product.after, 'Ver el resultado del NARAZAS LUT PACK')
    : imageBlock(product.image, product.name, 'product-photo');

  return `<article class="product-card product-card--${product.id} reveal" data-tilt-card>
    <div class="product-topline"><span>${product.number}</span><span>${product.category}</span></div>
    <div class="product-media">${visual}<span class="product-mark">N</span></div>
    <div class="product-body">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <div class="product-bottom"><strong>${product.price}</strong><a href="${product.id === 'lut-pack' ? page('/productos/lut-pack/') : '#'}" data-product="${product.id}">DESCUBRIR <span>→</span></a></div>
    </div>
  </article>`;
}

function benefits() {
  const items = [
    ['✦', 'TENDENCIAS', 'Lo más popular ahora'],
    ['☆', 'FAVORITOS', 'Selección de la comunidad'],
    ['◇', 'RECURSOS DIGITALES', 'Descarga inmediata'],
    ['↗', 'ACCESO AL INSTANTE', 'Sin esperas'],
    ['◉', 'DESDE CUALQUIER LUGAR', 'Crea a tu ritmo'],
  ];
  return `<section class="benefits" aria-label="Ventajas">${items.map(([symbol, title, text]) => `<div><span aria-hidden="true">${symbol}</span><p><strong>${title}</strong><small>${text}</small></p></div>`).join('')}</section>`;
}

function footer() {
  return `<footer class="footer section-pad" id="contacto">
    <div class="footer-brand"><a class="wordmark wordmark--large" href="${page('/#inicio')}">NARAZAS<sup>®</sup></a><p>Crea.<br />Edita.<br />Comparte.</p></div>
    <nav aria-label="Navegación del pie"><a href="${page('/#recursos')}">Recursos</a><a href="${page('/#masterclass')}">Masterclass</a><a href="${page('/#sobre-mi')}">Sobre mí</a><button type="button" data-demo="contact">Contacto</button></nav>
    <div class="footer-social"><button type="button" data-demo="instagram">Instagram ↗</button><button type="button" data-demo="tiktok">TikTok ↗</button><button type="button" data-demo="youtube">YouTube ↗</button><button type="button" data-demo="email">Email ↗</button></div>
    <div class="footer-legal"><span>© ${new Date().getFullYear()} NARAZAS</span><span>DEMO DE PROPUESTA VISUAL</span></div>
  </footer>`;
}

function homeTemplate() {
  return `<section class="hero" id="inicio">
    <div class="hero-copy section-pad reveal">
      <p class="kicker">CREATOR TOOLS<br />FOR REAL PEOPLE</p>
      <h1>Crea<br />contenido<br /><em>que se sienta tuyo.</em></h1>
      <p class="hero-lede">Recursos digitales y formación para creadores que quieren editar mejor, crear más rápido y encontrar su estilo.</p>
      <div class="hero-actions"><a class="button button--red" href="#recursos">Explorar recursos <span>→</span></a><a class="button button--line" href="#masterclass">Ver masterclass <span>↗</span></a></div>
    </div>
    <div class="hero-art reveal reveal-delay">
      ${imageBlock(asset('hero-final.jpg'), 'Nathalie Narazas en su espacio creativo', 'hero-image', true)}
      <span class="hero-script">Ideas<br />Edición<br />Resultados</span>
      <div class="editor-note"><span>REC&nbsp; <b>●</b>&nbsp; 00:14:27</span><span>4K</span><span>9:16</span><span>CUT</span><span>COLOR</span><span>SOUND</span><span>EXPORT&nbsp; ↙</span></div>
      <div class="film-strip" aria-hidden="true"><span></span><span></span><span></span></div>
      <span class="hero-signoff">SAME GIRL<br />BIGGER IDEAS ◡</span>
    </div>
  </section>

  ${benefits()}

  <section class="resources section-pad" id="recursos">
    <div class="resources-heading reveal"><div><p class="section-label">MIS RECURSOS</p><h2>Herramientas<br />para crear mejor.</h2></div><p>Plantillas, LUTs, recursos y más.<br />Todo lo que utilizo en mi día a día,<br />ahora disponible para ti.</p></div>
    <div class="product-grid">${PRODUCTS.map(productCard).join('')}</div>
  </section>

  <section class="masterclass section-pad" id="masterclass">
    <div class="masterclass-copy reveal"><p class="section-label section-label--light">NARAZAS PRESENTA</p><h2>Edita<br />conmigo.</h2><p class="masterclass-name">MASTERCLASS DE CAPCUT</p><p class="masterclass-duration">6 HORAS / 2 DÍAS</p><p>Del material en bruto al vídeo terminado.</p><button class="button button--cream" type="button" data-demo="masterclass">Quiero mi plaza <span>→</span></button><span class="coming-soon">Próximamente<br />muy pronto!</span></div>
    <div class="masterclass-media reveal reveal-delay">${imageBlock(asset('masterclass-final.jpg'), 'Nathalie editando contenido para la masterclass', 'masterclass-image')}<span class="play-badge" aria-hidden="true">▶</span><span class="timecode">00:00:14:22</span></div>
    <ul class="masterclass-tags" aria-label="Contenido de la masterclass"><li>IDEAS</li><li>CORTE</li><li>RITMO</li><li>EFECTOS</li><li>COLOR</li><li>SONIDO</li><li>EXPORT</li></ul>
  </section>

  <section class="about section-pad" id="sobre-mi">
    <div class="about-photo reveal">${imageBlock(asset('about-final.jpg'), 'Retrato de Nathalie Narazas', 'about-image')}</div>
    <div class="about-copy reveal"><p class="section-label">HOLA,</p><h2>Soy Nathalie.</h2><p>Creo contenido para vivir.<br />Y estos son algunos de los recursos que forman parte de mi proceso creativo.</p><button class="button button--red button--compact" type="button" data-demo="about">Conóceme <span>→</span></button></div>
    <div class="about-note reveal"><span class="polaroid">N</span><p>MIS HERRAMIENTAS<br />MI ESTILO<br /><u>TU TURNO</u> ♡</p></div>
  </section>

  <section class="final-cta section-pad reveal"><p class="section-label">TU PRÓXIMA IDEA EMPIEZA AQUÍ</p><h2>Ready<br />to<br /><em>create?</em></h2><a class="button button--red" href="#recursos">Explorar recursos <span>→</span></a></section>
  ${footer()}`;
}

function productTemplate(product) {
  return `<section class="product-hero section-pad">
    <a class="back-link" href="${page('/#recursos')}">← VOLVER A RECURSOS</a>
    <div class="product-detail-grid">
      <div class="product-detail-art reveal">${comparison(product.before, product.after)}<span class="detail-stamp">COLOR<br />STUDY / 01</span></div>
      <div class="product-detail-copy reveal reveal-delay"><p class="section-label">${product.category} / PRODUCTO ${product.number}</p><h1>${product.name}</h1><p class="detail-price">${product.price} <small>PRECIO DEMO</small></p><p class="detail-description">${product.description}</p><button class="button button--red" type="button" data-demo="buy">Comprar demo <span>→</span></button><p class="fine-print">Esta propuesta no procesa pagos ni inicia descargas.</p></div>
    </div>
  </section>
  <section class="detail-includes section-pad"><div><p class="section-label section-label--light">DENTRO DEL PACK</p><h2>Todo lo que<br /><em>necesitas.</em></h2></div><ul>${product.includes.map((item) => `<li><span>✦</span>${item}</li>`).join('')}<li><span>✦</span>Compatibilidad provisional: CapCut y editores que acepten LUTs</li></ul></section>
  <section class="detail-compare section-pad"><div class="compare-heading"><p class="section-label">UNA IDEA DE COLOR</p><h2>Antes.<br /><em>Después.</em></h2><p>Arrastra el control y descubre cómo cambia la intención de una misma imagen.</p></div>${comparison(product.before, product.after)}</section>
  <section class="faq section-pad"><p class="section-label">PREGUNTAS RÁPIDAS</p><details><summary>¿Con qué programas es compatible?</summary><p>Esta demo contempla CapCut y editores compatibles con LUTs. La lista definitiva se confirmará antes de publicar el producto.</p></details><details><summary>¿Cuándo recibiría el pack?</summary><p>En el e-commerce real, la compra activaría una descarga automática. Aquí el proceso es únicamente visual.</p></details><details><summary>¿Puedo usarlo en mis vídeos?</summary><p>La licencia y sus condiciones se definirán en la fase de implementación comercial.</p></details></section>
  <section class="final-cta final-cta--product section-pad reveal"><p class="section-label">COLOR QUE SE SIENTE TUYO</p><h2>¿Lista para<br /><em>darle color?</em></h2><a class="button button--red" href="${page('/#recursos')}">Ver más recursos <span>→</span></a></section>
  ${footer()}`;
}

function showToast(message) {
  if (!message) return;
  toast.textContent = message;
  toast.classList.add('is-visible');
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove('is-visible'), 3200);
}

function setupComparison() {
  document.querySelectorAll('[data-comparison]').forEach((comparisonElement) => {
    const range = comparisonElement.querySelector('input');
    const before = comparisonElement.querySelector('.compare-before');
    const handle = comparisonElement.querySelector('.compare-handle');
    const update = () => {
      const value = Number(range.value);
      before.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
      handle.style.left = `${value}%`;
    };
    range.addEventListener('input', update);
    update();
  });
}

function setupTilt() {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  document.querySelectorAll('[data-tilt-card]').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      const rotateX = ((event.clientY - rect.top) / rect.height - 0.5) * -2.2;
      const rotateY = ((event.clientX - rect.left) / rect.width - 0.5) * 2.2;
      card.style.setProperty('--rx', `${rotateX}deg`);
      card.style.setProperty('--ry', `${rotateY}deg`);
    });
    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--rx', '0deg');
      card.style.setProperty('--ry', '0deg');
    });
  });
}

const messages = {
  buy: 'Compra demo preparada. El checkout real se conectará en la siguiente fase.',
  masterclass: 'Masterclass próximamente. Las fechas y plazas se añadirán cuando estén confirmadas.',
  cart: 'La bolsa es una muestra visual; todavía no hay checkout.',
  search: 'La búsqueda se activará cuando el catálogo tenga más productos.',
  account: 'El área de usuario se incorporará con el e-commerce real.',
  about: 'La página completa de Nathalie se definirá en la siguiente fase.',
  contact: 'El canal de contacto está pendiente de confirmar.',
  instagram: 'Instagram pendiente de enlazar.',
  tiktok: 'TikTok pendiente de enlazar.',
  youtube: 'YouTube pendiente de enlazar.',
  email: 'Email pendiente de confirmar.',
};

function closeMenu() {
  nav.classList.remove('is-open');
  document.body.classList.remove('menu-open');
  menuToggle.setAttribute('aria-expanded', 'false');
}

function setupInteractions() {
  setupComparison();
  setupTilt();
  document.querySelectorAll('[data-demo]').forEach((button) => button.addEventListener('click', () => showToast(messages[button.dataset.demo])));
  document.querySelectorAll('[data-product]').forEach((link) => link.addEventListener('click', (event) => {
    if (link.dataset.product === 'lut-pack') return;
    event.preventDefault();
    showToast('Esta ficha está preparada visualmente y se completará cuando el producto esté definido.');
  }));
  document.querySelectorAll('.main-nav a').forEach((link) => link.addEventListener('click', closeMenu));
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
}

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) {
    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
  }
}), { threshold: 0.1, rootMargin: '0px 0px -4% 0px' });

const productId = new URLSearchParams(window.location.search).get('producto');
const product = PRODUCTS.find((item) => item.id === productId);
app.innerHTML = product ? productTemplate(product) : homeTemplate();

if (product) {
  document.querySelectorAll('.main-nav a[href^="#"]').forEach((link) => link.setAttribute('href', page(`/${link.getAttribute('href')}`)));
}

setupInteractions();

menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  document.body.classList.toggle('menu-open', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

window.setTimeout(() => document.body.classList.add('intro-complete'), 1100);
