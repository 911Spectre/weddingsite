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
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Добавление маркера
  L.marker(location)
    .addTo(map)
    .bindPopup('Green Garden Restaurant')
    .openPopup();
}

// Загрузка карты после загрузки DOM
document.addEventListener('DOMContentLoaded', initMap);