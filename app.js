const PRODUCTS = [
  {
    id: 'lut-pack',
    number: '01',
    name: 'NARAZAS LUT PACK',
    category: 'COLOR',
    price: '29 €',
    description: 'El color que utilizo para darle personalidad a mis vídeos, listo para llevarlo a los tuyos.',
    image: '/images/narazas-lut-pack.svg',
    includes: ['12 LUTs para transformar tu color', 'Guía rápida de instalación', 'Uso en CapCut y editores compatibles'],
  },
  {
    id: 'creator-templates',
    number: '02',
    name: 'CREATOR TEMPLATES',
    category: 'CREACIÓN',
    price: '24 €',
    description: 'Plantillas pensadas para crear más rápido sin empezar siempre desde cero.',
    image: '/images/narazas-templates.svg',
    includes: ['Plantillas editables', 'Sistema de organización visual', 'Guía de uso para creadores'],
  },
  {
    id: 'resource-pack',
    number: '03',
    name: 'CREATOR RESOURCE PACK',
    category: 'RECURSOS',
    price: '19 €',
    description: 'Una selección de recursos para darle intención a cada pieza de contenido.',
    image: '/images/narazas-resource-pack.svg',
    includes: ['Recursos digitales seleccionados', 'Archivo de referencias', 'Actualizaciones futuras — demo'],
  },
];

const app = document.querySelector('#app');
const toast = document.querySelector('[data-toast]');
const nav = document.querySelector('.main-nav');
const menuToggle = document.querySelector('.menu-toggle');

function imageBlock(src, alt, className = '') {
  return `<div class="image-frame ${className}"><img src="${src}" alt="${alt}" loading="lazy" /></div>`;
}

function productCard(product, index) {
  return `<article class="product-row product-row--${index % 2 ? 'reverse' : 'standard'} reveal">
    <div class="product-visual">
      <span class="product-index">${product.number}</span>
      ${imageBlock(product.image, `${product.name} — imagen demo`)}
      <span class="corner-note">NARAZAS / ${product.category}</span>
    </div>
    <div class="product-copy">
      <p class="eyebrow">${product.category} <span>— ${product.number}</span></p>
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <div class="product-meta"><span>${product.price}</span><span>Descargable / demo</span></div>
      <a class="text-link" href="${product.id === 'lut-pack' ? '/productos/lut-pack/' : '#demo'}" data-product="${product.id}">Descubrir <span>↗</span></a>
    </div>
  </article>`;
}

function homeTemplate() {
  return `<section class="hero section-pad" id="inicio">
    <div class="hero-copy reveal">
      <p class="kicker">CREATOR STUDIO / 2026</p>
      <h1>Crea contenido<br /><em>que se sienta</em> tuyo.</h1>
      <p class="hero-lede">Recursos digitales y formación para creadores que quieren editar mejor, crear más rápido y encontrar su estilo.</p>
      <div class="hero-actions"><a class="button button--dark" href="#recursos">Explorar recursos <span>↗</span></a><a class="button button--line" href="#masterclass">Ver masterclass <span>↗</span></a></div>
    </div>
    <div class="hero-art reveal reveal-delay">
      ${imageBlock('/images/narazas-hero.jpg', 'Nathalie Narazas creando contenido', 'hero-image')}
      <div class="hero-sticker">N<br /><span>—</span><br />N</div>
      <div class="editor-chip"><span class="record-dot"></span> REC <strong>00:14:27</strong><span>9:16</span></div>
      <div class="hero-caption">PLACEHOLDER /<br />FOTOGRAFÍA NARAZAS</div>
    </div>
    <div class="scroll-cue"><span></span> Scroll para explorar</div>
  </section>

  <div class="marquee" aria-label="LUTs, plantillas, edición, CapCut, recursos y masterclass"><div class="marquee-track">LUTS <i>✦</i> PLANTILLAS <i>✦</i> EDICIÓN <i>✦</i> CAPCUT <i>✦</i> RECURSOS <i>✦</i> MASTERCLASS <i>✦</i> LUTS <i>✦</i> PLANTILLAS <i>✦</i> EDICIÓN <i>✦</i> CAPCUT <i>✦</i> RECURSOS <i>✦</i> MASTERCLASS <i>✦</i></div></div>

  <section class="intro section-pad reveal"><p class="section-label">01 / UNA FORMA DE CREAR</p><div class="intro-grid"><h2>Tu contenido,<br /><em>con intención.</em></h2><p>Crear no debería sentirse como repetir fórmulas. Aquí encontrarás las herramientas que hacen mi proceso más sencillo, más rápido y mucho más mío.</p></div></section>

  <section class="resources section-pad" id="recursos"><div class="section-heading reveal"><p class="section-label">02 / RECURSOS DIGITALES</p><h2>Recursos para<br /><em>crear mejor.</em></h2><p>Pequeñas herramientas. Mucha personalidad.</p></div><div class="product-list">${PRODUCTS.map(productCard).join('')}</div></section>

  <section class="compare-section section-pad reveal"><div class="compare-heading"><p class="section-label">COLOR / NARAZAS LUT PACK</p><h2>El mood<br /><em>empieza aquí.</em></h2><p>Una misma imagen. Otra forma de sentirla.</p></div><div class="compare-wrap"><div class="compare" data-comparison><div class="compare-after">${imageBlock('/images/narazas-after.svg', 'Imagen demo con color Narazas')}</div><div class="compare-before">${imageBlock('/images/narazas-before.svg', 'Imagen demo antes del color')}</div><div class="compare-label compare-label--before">ANTES</div><div class="compare-label compare-label--after">DESPUÉS</div><div class="compare-handle"><span>←</span><i></i><span>→</span></div><input type="range" min="0" max="100" value="52" aria-label="Comparar antes y después del color" /></div></div></section>

  <section class="masterclass" id="masterclass"><div class="masterclass-inner section-pad"><div class="masterclass-copy reveal"><p class="section-label section-label--light">03 / NARAZAS PRESENTA</p><h2>Edita<br /><em>conmigo.</em></h2><p class="masterclass-title">MASTERCLASS DE CAPCUT</p><p class="masterclass-lede">Del material en bruto<br />al vídeo terminado.</p><button class="button button--cream" type="button" data-demo="masterclass">Quiero mi plaza <span>↗</span></button></div><div class="masterclass-art reveal reveal-delay">${imageBlock('/images/narazas-hero.jpg', 'Nathalie Narazas creando contenido', 'masterclass-image')}<span class="class-note class-note--top">REC ●</span><span class="class-note class-note--side">CUT<br />COLOR<br />SOUND<br />EXPORT</span><span class="class-note class-note--bottom">6 HORAS / 2 DÍAS</span></div></div></section>

  <section class="about section-pad" id="sobre-mi"><div class="about-art reveal">${imageBlock('/images/narazas-hero.jpg', 'Nathalie Narazas creando contenido', 'about-image')}<span>NOTA PERSONAL / 01</span></div><div class="about-copy reveal"><p class="section-label">04 / SOBRE NATHALIE</p><h2>Hola,<br /><em>soy Nathalie.</em></h2><p>Creo contenido para vivir. Y estos son algunos de los recursos que forman parte de mi proceso creativo.</p><a class="text-link" href="#final">Conocer el universo <span>↗</span></a></div></section>

  <section class="final-cta section-pad reveal" id="final"><p class="section-label">05 / TU PRÓXIMO PROYECTO</p><h2>¿Lista para<br /><em>crear?</em></h2><a class="button button--dark" href="#recursos">Explorar recursos <span>↗</span></a></section>
  <footer class="footer section-pad"><a class="wordmark" href="#inicio">NARAZAS<sup>®</sup></a><div class="footer-links"><button type="button" data-demo="instagram">Instagram ↗</button><button type="button" data-demo="contact">Contacto ↗</button></div><span>© NARAZAS / DEMO</span></footer>`;
}

function productTemplate(product) {
  return `<section class="product-hero section-pad"><a class="back-link" href="/#recursos">← Volver a recursos</a><div class="product-detail-grid"><div class="product-detail-art reveal">${imageBlock(product.image, `${product.name} — imagen demo`, 'detail-image')}<span class="detail-stamp">COLOR<br />STUDY / 01</span></div><div class="product-detail-copy reveal reveal-delay"><p class="section-label">${product.category} / PRODUCTO ${product.number}</p><h1>${product.name}</h1><p class="detail-price">${product.price} <small>precio demo</small></p><p class="detail-description">${product.description}</p><button class="button button--dark" type="button" data-demo="buy">Comprar demo <span>↗</span></button><p class="fine-print">En esta demo no se procesa ningún pago ni se inicia ninguna descarga.</p></div></div></section><section class="detail-includes section-pad"><div><p class="section-label">DENTRO DEL PACK</p><h2>Todo lo que<br /><em>necesitas.</em></h2></div><ul>${product.includes.map(item => `<li><span>✦</span>${item}</li>`).join('')}</ul></section><section class="detail-compare section-pad"><div class="compare-heading"><p class="section-label">UNA IDEA DE COLOR</p><h2>Antes.<br /><em>Después.</em></h2></div><div class="compare-wrap"><div class="compare" data-comparison><div class="compare-after">${imageBlock('/images/narazas-after.svg', 'Imagen demo con color Narazas')}</div><div class="compare-before">${imageBlock('/images/narazas-before.svg', 'Imagen demo antes del color')}</div><div class="compare-label compare-label--before">ANTES</div><div class="compare-label compare-label--after">DESPUÉS</div><div class="compare-handle"><span>←</span><i></i><span>→</span></div><input type="range" min="0" max="100" value="52" aria-label="Comparar antes y después del color" /></div></div></section><section class="faq section-pad"><p class="section-label">PREGUNTAS RÁPIDAS</p><details><summary>¿Con qué programas es compatible?</summary><p>Demo de compatibilidad: CapCut y editores que acepten LUTs. Se confirmará la lista final antes de publicar.</p></details><details><summary>¿Cuándo recibiría el pack?</summary><p>En la tienda real, la compra activaría una descarga automática. Aquí el proceso es únicamente visual.</p></details><details><summary>¿Puedo usarlo en mis vídeos?</summary><p>La licencia de uso y sus condiciones son datos provisionales que se definirán con el producto final.</p></details></section><section class="final-cta final-cta--product section-pad"><h2>¿Lista para<br /><em>darle color?</em></h2><a class="button button--dark" href="/#recursos">Ver más recursos <span>↗</span></a></section><footer class="footer section-pad"><a class="wordmark" href="/">NARAZAS<sup>®</sup></a><div class="footer-links"><button type="button" data-demo="instagram">Instagram ↗</button><button type="button" data-demo="contact">Contacto ↗</button></div><span>© NARAZAS / DEMO</span></footer>`;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('is-visible');
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove('is-visible'), 3200);
}

function setupComparison() {
  document.querySelectorAll('[data-comparison]').forEach((comparison) => {
    const range = comparison.querySelector('input');
    const before = comparison.querySelector('.compare-before');
    const handle = comparison.querySelector('.compare-handle');
    const update = () => { before.style.width = `${range.value}%`; handle.style.left = `${range.value}%`; };
    range.addEventListener('input', update);
    update();
  });
}

function setupInteractions() {
  setupComparison();
  document.querySelectorAll('[data-demo]').forEach((button) => button.addEventListener('click', () => {
    const messages = { buy: 'Compra demo preparada. El checkout real llegará en la siguiente fase.', masterclass: 'Masterclass próximamente. Aquí se mostrarán fechas y plazas cuando estén confirmadas.', cart: 'La bolsa es solo una muestra visual en esta demo.', instagram: 'Enlace de Instagram pendiente de confirmar.', contact: 'Contacto pendiente de confirmar.' };
    showToast(messages[button.dataset.demo]);
  }));
  document.querySelectorAll('.main-nav a').forEach((link) => link.addEventListener('click', () => { nav.classList.remove('is-open'); menuToggle.setAttribute('aria-expanded', 'false'); }));
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
}

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: 0.12 });

const productId = new URLSearchParams(window.location.search).get('producto');
const product = PRODUCTS.find((item) => item.id === productId);
app.innerHTML = product ? productTemplate(product) : homeTemplate();
setupInteractions();

menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
