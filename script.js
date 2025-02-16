// Галерея
const images = document.querySelectorAll('.gallery__image');
let currentIndex = 0;

function showNextImage() {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add('active');
}

setInterval(showNextImage, 3000);

// Форма регистрации
document.getElementById('registrationForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const phone = document.getElementById('phone').value;

  const message = `Hello! This is ${firstName} ${lastName}, my number: ${phone}. I confirm my attendance at the wedding.`;
  const whatsappUrl = `https://wa.me/79991234567?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
});

// Инициализация карты
function initMap() {
  const mapElement = document.getElementById('map');
  if (!mapElement) return;

  const location = { lat: 55.755826, lng: 37.617635 }; // Координаты ресторана
  const map = new google.maps.Map(mapElement, {
    center: location,
    zoom: 15,
    styles: [
      {
        featureType: 'all',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#ffffff' }],
      },
      {
        featureType: 'all',
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#000000' }, { lightness: 13 }],
      },
    ],
  });

  new google.maps.Marker({
    position: location,
    map: map,
    title: 'Green Garden Restaurant',
  });
}

// Перерисовка карты при обновлении страницы
window.addEventListener('load', function () {
  initMap();
  setTimeout(() => {
    google.maps.event.trigger(map, 'resize');
  }, 100);
});