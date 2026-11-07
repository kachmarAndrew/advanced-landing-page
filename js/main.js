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

  // ───── Swiper.js: слайдер відгуків ─────
  if (window.Swiper) {
    new Swiper('.reviews-swiper', {
      loop: true,
      spaceBetween: 24,
      grabCursor: true,
      keyboard: { enabled: true },
      autoplay: reduceMotion ? false : { delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true },
      pagination: { el: '.reviews-swiper .swiper-pagination', clickable: true },
      navigation: { nextEl: '.reviews-next', prevEl: '.reviews-prev' },
      a11y: { prevSlideMessage: 'Попередній відгук', nextSlideMessage: 'Наступний відгук', paginationBulletMessage: 'Перейти до відгуку {{index}}' },
      breakpoints: {
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    });
  }

  // ───── Fancybox v5: галерея з масштабуванням ─────
  if (window.Fancybox) {
    Fancybox.bind("[data-fancybox='kent-gallery']", {
      Carousel: { Transition: 'fade' },
      Images: { Panzoom: { maxScale: 3 } },
      l10n: {
        CLOSE: 'Закрити', NEXT: 'Наступне', PREV: 'Попереднє', MODAL: 'Закрити вікно можна клавішею Esc',
        ERROR: 'Сталася помилка, спробуйте пізніше', IMAGE_ERROR: 'Зображення не знайдено',
        TOGGLE_ZOOM: 'Змінити масштаб', TOGGLE_THUMBS: 'Мініатюри', TOGGLE_SLIDESHOW: 'Слайдшоу',
        TOGGLE_FULLSCREEN: 'На весь екран', DOWNLOAD: 'Завантажити',
      },
    });
  }
});
