/* KENT — ЛР10: ініціалізація плагінів (Typed.js, Swiper, Fancybox) після завантаження DOM */
document.addEventListener('DOMContentLoaded', () => {
  // Користувачі з reduce motion не бачать анімацій: лишається статичний текст у розмітці
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ───── Typed.js: ефект друку в hero ─────
  if (window.Typed && !reduceMotion && document.getElementById('typed-text')) {
    new Typed('#typed-text', {
      strings: ['Nike Air Jordan', 'Adidas Originals', 'Zara Man', 'New Balance', 'знижки до 60%'],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1600,
      startDelay: 400,
      loop: true,
    });
  }
});
