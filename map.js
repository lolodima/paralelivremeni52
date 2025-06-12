let map = L.map('map').setView([53.54, 27.23], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap',
}).addTo(map);

let currentRoute = null;

// Точки
const locations = [
    [52.430845, 30.993678],
    [55.197455, 30.191167],
    [53.918243, 27.559952],
    [52.424695, 31.019291],
    [55.184583, 30.200625],
    [53.918243, 27.559952],
    [53.933512, 27.567726],
    [52.431444397845056, 30.97597858650644],
    [53.9165, 27.582439],
    [53.90747859536506, 27.555972581903227],
    [52.436035, 31.00248],
    [52.431016, 30.993592],
    [52.431444397845056, 30.975978586506442],
    [53.894389, 25.309323],
    [53.684633078054,23.836324076295],
    [53.686425, 23.841198]
];

const names = [
    "Памятник 100-летию милиции",
    "Памятник Марку Шагалу",
    "Мемориал Сынам Отечества",
    "«Лодочник» — первопоселенец и рысь",
    "Три штыка",
    "Мемориал Сынам Отечества (дубль)",
    "Памятник жертвам чернобыля",
    "Памятник Богдану Хмельницкому",
    "Памятник Якубу Коласу",
    "Памятник Язэпу Дроздовичу",
    "Памятник Павлу Сухому",
    "Памятник Франциску Скарыне",
    "Памятник Богдану Хмельницкому (дубль)",
    "Курган бессмертия",
    "Вечный огонь в гродненском парке жилибера",
    "Памятник Милицонерам Погибшим При Исполнении Служебных Обязанностей"
];

// Добавляем метки
locations.forEach((coords, i) => {
    L.marker(coords, { draggable: false }) // Запрещаем перетаскивание
        .addTo(map)
        .bindPopup(names[i]);
});

// Обработка клика по кнопке
for (let i = 0; i < locations.length; i++) {
    document.querySelector('.pp' + (i + 1)).addEventListener('click', () => {
        buildRoute(locations[i]);
        document.querySelector(".present_title").innerHTML= document.querySelector('.pp' + (i + 1)+">.tooltip-text").innerHTML
    });
}

function buildRoute(targetCoords) {
    if (!navigator.geolocation) {
        alert("Геолокация не поддерживается вашим браузером");
        return;
    }

    navigator.geolocation.getCurrentPosition(
        position => {
            const userCoords = [position.coords.latitude, position.coords.longitude];

            if (currentRoute) {
                map.removeControl(currentRoute);
            }

            currentRoute = L.Routing.control({
                waypoints: [
                    L.latLng(userCoords),
                    L.latLng(targetCoords)
                ],
                routeWhileDragging: false,
                show: false
            }).addTo(map);
        },
        error => {
            alert("Ошибка определения местоположения: " + error.message);
        }
    );
}
