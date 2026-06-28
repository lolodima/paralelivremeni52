document.addEventListener("DOMContentLoaded", function() {

    let map = L.map('map').setView([53.54, 27.23], 6);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap',
    }).addTo(map);
    
    let currentRoute = null;
    
    // Исправленные координаты памятников в Беларуси
    const locations = [
        [53.9165, 27.582439],  // Памятник 100-летию милиции (Минск, ул. Городской Вал)
        [55.197455, 30.191167], // Памятник Марку Шагалу (Витебск)
        [53.90747859536506, 27.555972581903227], // Мемориал Сынам Отечества (Минск)
        [52.424695, 31.019291], // Лодочник — первопоселенец и рысь (Гомель)
        [55.184583, 30.200625], // Три штыка (Витебск)
        [53.90747859536506, 27.555972581903227], // Мемориал Сынам Отечества (дубль)
        [53.933512, 27.567726], // Памятник жертвам чернобыля (Минск)
        [52.430845, 30.993678], // Памятник Богдану Хмельницкому (Гомель)
        [53.9165, 27.582439],   // Памятник Якубу Коласу (Минск, пл. Якуба Коласа)
        [53.90747859536506, 27.555972581903227], // Памятник Язэпу Дроздовичу (Минск)
        [52.436035, 31.00248],  // Памятник Павлу Сухому (Гомель)
        [53.918243, 27.559952], // Памятник Франциску Скарыне (Минск)
        [52.430845, 30.993678], // Памятник Богдану Хмельницкому (дубль)
        [55.486992, 28.770256], // Курган бессмертия (Полоцк)
        [53.684633078054, 23.836324076295], // Вечный огонь (Гродно)
        [53.9165, 27.582439]    // Памятник милиционерам (Минск)
    ];
    
    const names = [ 
      "Памятник 100-летию милиции", 
      "Памятник Марку Шагалу", 
      "Мемориал Сынам Отечества", 
      "Лодочник — первопоселенец и рысь", 
      "Три штыка", 
      "Мемориал жертвам на Немиге", 
      "Памятник жертвам Чернобыля", 
      "Памятник Богдану Хмельницкому", 
      "Памятник Якубу Коласу", 
      "Памятник Язэпу Дроздовичу", 
      "Памятник Павлу Сухому", 
      "Памятник Франциску Скарыне", 
      "Памятник Богдану Хмельницкому (дубль)", 
      "Курган бессмертия", 
      "Вечный огонь в гродненском парке Жилибера", 
      "Памятник милиционерам, погибшим при исполнении служебных обязанностей" 
    ];
    
    // Белорусские названия (исправленные)
    const namesBY = [ 
      "Помнік 100-годдзю міліцыі", 
      "Помнік Марку Шагалу", 
      "Мемарыял Сынам Айчыны", 
      "Лодачнік — першапасяленец і рысь", 
      "Тры штыкі", 
      "Мемарыял ахвярам на Немізе", 
      "Помнік ахвярам Чарнобыля", 
      "Помнік Багдану Хмяльніцкаму", 
      "Помнік Якубу Коласу", 
      "Помнік Язэпу Драздовічу", 
      "Помнік Паўлу Сухому", 
      "Помнік Францыску Скарыну", 
      "Помнік Багдану Хмяльніцкаму (дубль)", 
      "Курган бессмяротнасці", 
      "Вечны агонь у Гродзенскім парку Жылібера", 
      "Помнік міліцыянерам, якія загінулі пры выкананні службовых абавязкаў" 
    ];
    
    const addresses = [
      "г. Минск, ул. Городской Вал, 4",                                     
      "г. Витебск, ул. Покровская, 11",                                  
      "г. Минск, пр-т Победителей, 7",       
      "г. Гомель, ул. Набережная",                                       
      "г. Витебск, площадь Победы",                                      
      "г. Минск, пр-т Победителей, 7",       
      "г. Минск, ул. М. Богдановича, 7 (парк Дружбы народов)",           
      "г. Гомель, ул. Б. Хмельницкого",                                  
      "г. Минск, пр-т Независимости, 50 (площадь Якуба Коласа)",         
      "г. Минск, ул. Старовиленская (Троицкое предместье)",              
      "г. Гомель, ул. Сухого, 1",                                        
      "г. Минск, пр-т Независимости, 116 (возле Национальной библиотеки)",
      "г. Гомель, ул. Б. Хмельницкого",                                  
      "г. Полоцк, ул. Курган Бессмертия",                                
      "г. Гродно, ул. Э. Ожешко, 2 (парк Жилибера)",                     
      "г. Минск, ул. К. Маркса, 19"                                     
    ];
    
    // Белорусские адреса (исправленные)
    const addressesBY = [
      "г. Мінск, вул. Гарадскі Вал, 4",
      "г. Віцебск, вул. Пакроўская, 11",
      "г. Мінск, пр-т Пераможцаў, 7",
      "г. Гомель, вул. Набярэжная",
      "г. Віцебск, пл. Перамогі",
      "г. Мінск, пр-т Пераможцаў, 7",
      "г. Мінск, вул. М. Багдановіча, 7 (парк Дружбы народаў)",
      "г. Гомель, вул. Б. Хмяльніцкага",
      "г. Мінск, пр-т Незалежнасці, 50 (пл. Якуба Коласа)",
      "г. Мінск, вул. Старавіленская (Траецкае прадмесце)",
      "г. Гомель, вул. Сухога, 1",
      "г. Мінск, пр-т Незалежнасці, 116 (каля Нацыянальнай бібліятэкі)",
      "г. Гомель, вул. Б. Хмяльніцкага",
      "г. Полацк, вул. Курган Бессмяротнасці",
      "г. Гродна, вул. Э. Ажэшкі, 2 (парк Жылібера)",
      "г. Мінск, вул. К. Маркса, 19"
    ];
    
    // Глобальная переменная для определения текущего языка
    window.langChange = false;
    
    // Функция для получения названия и адреса в зависимости от языка
    function getLocalizedName(index) {
        const lang = window.langChange ? 'by' : 'ru';
        const name = lang === 'by' ? namesBY[index] : names[index];
        const address = lang === 'by' ? addressesBY[index] : addresses[index];
        return { name, address };
    }
    
    // Сохраняем текущий выбранный памятник
    let currentSelectedIndex = -1;
    
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
    
    // Обновить текущий заголовок при смене языка
    function updateCurrentTitle() {
        if (currentSelectedIndex >= 0 && currentSelectedIndex < locations.length) {
            const localized = getLocalizedName(currentSelectedIndex);
            showPresentTitle(localized.name, localized.address);
        }
    }
    
    // Обработка клика по кнопкам памятников
    for (let i = 0; i < locations.length; i++) {
        const btn = document.querySelector('.pp' + (i + 1));
        if (!btn) continue;
        btn.addEventListener('click', function() {
            currentSelectedIndex = i;
            buildRoute(locations[i]);
            const localized = getLocalizedName(i);
            showPresentTitle(localized.name, localized.address);
        });
    }
    
    // Функция для обновления всех подписей при смене языка
    window.updatePresentTitles = function(newLang) {
        window.langChange = newLang;
        // Обновляем заголовок, если памятник выбран
        updateCurrentTitle();
        // Обновляем подписи под картинками памятников
        for (let i = 0; i < locations.length; i++) {
            const btn = document.querySelector('.pp' + (i + 1));
            if (!btn) continue;
            const localized = getLocalizedName(i);
            btn.setAttribute('data-name', localized.name);
            btn.setAttribute('data-address', localized.address);
        }
    };
    
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