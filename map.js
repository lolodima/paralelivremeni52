document.addEventListener("DOMContentLoaded", function() {

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

const addresses = [
    "г. Гомель, ул. Привакзальная",
    "г. Витебск, ул. Покровская, 11",
    "г. Минск, ул. Старовиленская (возле Троицкого предместья)",
    "г. Гомель, Набережная улица",
    "г. Витебск, площадь Победы",
    "г. Минск, ул. Немига, 2",
    "г. Минск, пр-т Победителей, 10",
    "г. Минск, ул. М. Богдановича, 7",
    "г. Минск, пр-т Независимости, 50",
    "г. Минск, ул. Я. Коласа, 25",
    "г. Гомель, ул. Сухого, 1",
    "г. Минск, пр-т Независимости, 26",
    "г. Гомель, ул. Б. Хмельницкого, 2",
    "г. Полоцк, ул. Курган Бессмертия",
    "г. Гродно, ул. Э. Ожешко, 2",
    "г. Минск, ул. К. Маркса, 19"
];

// Добавляем метки
locations.forEach((coords, i) => {
    L.marker(coords, { draggable: false })
        .addTo(map)
        .bindPopup(names[i]);
});

// Функция для показа названия и адреса над картой
function showPresentTitle(name, address) {
    const titleEl = document.querySelector(".present_title");
    if (!titleEl) return;
    titleEl.innerHTML = '<span class="present_address_label">' + name + '</span><br><span class="present_address_text">' + address + '</span>';
    titleEl.setAttribute("style", "display: block !important; visibility: visible !important; opacity: 1 !important;");
}

// Обработка клика по кнопкам памятников
for (let i = 0; i < locations.length; i++) {
    const btn = document.querySelector('.pp' + (i + 1));
    if (!btn) continue;
    btn.addEventListener('click', function() {
        buildRoute(locations[i]);
        // Берём название из .address, адрес из data-address
        const name = btn.querySelector('.address') ? btn.querySelector('.address').innerHTML : names[i];
        const address = btn.getAttribute('data-address') || addresses[i];
        showPresentTitle(name, address);
    });
}

// Default fallback coordinates (Minsk, Belarus) used if geolocation is unavailable
const DEFAULT_COORDS = [53.9006, 27.5590];

// Cached user position so we don't ask for permission on every click
let cachedUserCoords = null;
let geolocationAttempted = false;

function buildRoute(targetCoords) {
    if (typeof navigator === "undefined" || !navigator.geolocation) {
        drawRoute(DEFAULT_COORDS, targetCoords);
        return;
    }

    if (cachedUserCoords) {
        drawRoute(cachedUserCoords, targetCoords);
        return;
    }

    if (geolocationAttempted) {
        drawRoute(DEFAULT_COORDS, targetCoords);
        return;
    }
    geolocationAttempted = true;

    let timedOut = false;
    const timer = setTimeout(function () {
        timedOut = true;
        drawRoute(DEFAULT_COORDS, targetCoords);
    }, 4000);

    try {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                if (timedOut) return;
                clearTimeout(timer);
                cachedUserCoords = [position.coords.latitude, position.coords.longitude];
                drawRoute(cachedUserCoords, targetCoords);
            },
            function () {
                if (timedOut) return;
                clearTimeout(timer);
                drawRoute(DEFAULT_COORDS, targetCoords);
            },
            { enableHighAccuracy: false, maximumAge: 60000, timeout: 3500 }
        );
    } catch (e) {
        clearTimeout(timer);
        drawRoute(DEFAULT_COORDS, targetCoords);
    }
}

function drawRoute(userCoords, targetCoords) {
    try {
        if (currentRoute) {
            try { map.removeControl(currentRoute); } catch (_) {}
            currentRoute = null;
        }

        if (typeof L === "undefined" || typeof L.Routing === "undefined") {
            console.warn("Leaflet Routing Machine не загружен");
            return;
        }

        currentRoute = L.Routing.control({
            waypoints: [
                L.latLng(userCoords[0], userCoords[1]),
                L.latLng(targetCoords[0], targetCoords[1])
            ],
            routeWhileDragging: false,
            show: false,
            addWaypoints: false,
            fitSelectedRoutes: true
        }).addTo(map);
    } catch (e) {
        console.warn("Не удалось построить маршрут:", e && e.message);
    }
}

});