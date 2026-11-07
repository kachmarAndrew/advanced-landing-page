# KENT — advanced landing page

Лабораторна робота №10: інтеграція JS-бібліотек через CDN у лендінг KENT (без збірки JS, чистий Vanilla JS).

| Бібліотека | Версія | Призначення |
|---|---|---|
| [Swiper.js](https://swiperjs.com/) | 11.1.15 | Слайдер відгуків: autoplay, loop, пагінація, стрілки, breakpoints 320/768/1024 |
| [Fancybox](https://fancyapps.com/fancybox/) | 5.0.36 | Галерея колекції: fade-перехід, масштабування до x3 |
| [Typed.js](https://github.com/mattboldt/typed.js) | 2.0.12 | Ефект друку в hero |

Ініціалізація — у `js/main.js` всередині `DOMContentLoaded`. Користувачам з `prefers-reduced-motion` анімації вимкнено.

## Структура

```
index.html
css/custom-styles.css, css/tailwind.min.css
js/main.js              (Typed, Swiper, Fancybox)
js/contact-validation.js (форма контактів, ЛР9)
assets/images, assets/video
```

## Збірка Tailwind

```
npx tailwindcss@3.4.17 -i tailwind.input.css -o css/tailwind.min.css --minify
```
