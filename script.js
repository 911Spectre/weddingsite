// Галерея
const images = document.querySelectorAll('.gallery__image');
let currentIndex = 0;

function showNextImage() {
  // Убираем класс active у текущей фотографии
  images[currentIndex].classList.remove('active');

  // Переходим к следующей фотографии
  currentIndex = (currentIndex + 1) % images.length;

  // Добавляем класс active к новой фотографии
  images[currentIndex].classList.add('active');
}

// Меняем фотографии каждые 3 секунды
setInterval(showNextImage, 3000);

// Инициализация первой активной фотографии
document.addEventListener('DOMContentLoaded', () => {
  images[0].classList.add('active');
});

// Инициализация карты с OpenStreetMap
function initMap() {
  // Координаты Central Park, New York
  const location = [40.7829, -73.9654]; // Central Park, New York

  // Создание карты
  const map = L.map('map').setView(location, 15); // Центр и масштаб

  // Добавление слоя OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Добавление маркера
  L.marker(location)
    .addTo(map)
    .bindPopup('Green Garden Restaurant')
    .openPopup();
}

// Загрузка карты после загрузки DOM
document.addEventListener('DOMContentLoaded', initMap);

// Плавная прокрутка для всех ссылок с классом scroll-link
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.scroll-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Отключаем стандартное поведение
      const targetId = this.getAttribute('href'); // Получаем ID цели (#map)
      const targetElement = document.querySelector(targetId); // Находим элемент
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset; // Позиция элемента

      // Кастомная анимация для большей плавности
      let start = null;
      const duration = 1000; // Длительность анимации в миллисекундах (можно увеличить до 2000 для ещё большей плавности)
      const startPosition = window.pageYOffset;

      function step(timestamp) {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1); // Прогресс от 0 до 1
        const ease = easeInOutQuad(progress); // Функция смягчения
        window.scrollTo(0, startPosition + (targetPosition - startPosition) * ease);
        if (progress < 1) requestAnimationFrame(step);
      }

      // Функция смягчения (квадратичная)
      function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      }

      requestAnimationFrame(step);
    });
  });
});