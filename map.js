let myMap;
let currentRoute = null;

let ppButtons = [];
for (let i = 1; i <= 13; i++) {
    ppButtons.push(document.querySelector(".pp" + i));
}

ymaps.ready(init);

function init() {
    myMap = new ymaps.Map("map", {
        center: [53.54, 27.23],
        zoom: 5,
        type: "yandex#map"
    });

    function makePlacemark(x, y, hint) {
        const placemark = new ymaps.Placemark([x, y], {
            hintContent: hint
        }, {
            balloonMaxWidth: 300,
            balloonMaxHeight: 200,
            hasBalloon: true,
            openBalloonOnClick: true
        });
        myMap.geoObjects.add(placemark);
    }

    function setLocation(x, y, zoom = 15) {
        myMap.setCenter([x, y]);
        myMap.setZoom(zoom);
    }

    function buildRouteFromUserTo(targetCoords) {
        if (!navigator.geolocation) {
            alert("Геолокация не поддерживается вашим браузером");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            function (position) {
                const userCoords = [position.coords.latitude, position.coords.longitude];

                if (currentRoute) {
                    myMap.geoObjects.remove(currentRoute);
                }

                ymaps.route([userCoords, targetCoords])
                    .then(function (route) {
                        currentRoute = route;
                        myMap.geoObjects.add(route);
                        myMap.setBounds(route.getBounds(), { checkZoomRange: true });
                    })
                    .catch(function (error) {
                        alert("Ошибка построения маршрута: " + error.message);
                    });
            },
            function (error) {
                alert("Не удалось определить ваше местоположение: " + error.message);
            }
        );
    }

    // Обработчики кнопок
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
        [52.431444397845056, 30.975978586506442]
    ];

    ppButtons.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            const coords = locations[i];
            setLocation(...coords);
            buildRouteFromUserTo(coords);
        });
    });

    // Метки
    makePlacemark(55.184902, 30.200523, "Три штыка");
    makePlacemark(53.913525, 27.558791, "Памятник Максиму Богдановичу");
    makePlacemark(53.918243, 27.559952, "Мемориал Сынам Отечества");
    makePlacemark(53.933512, 27.567726, "Памятник жертвам чернобыля");
    makePlacemark(52.436035, 31.002480, "Памятник Павлу Сухому");
    makePlacemark(53.90747859536506, 27.555972581903227, "Памятник Язэпу Дроздовичу");
    makePlacemark(52.431444397845056, 30.97597858650644, "Памятник Богдану Хмельницкому");
    makePlacemark(53.90568408213155, 27.553791657670594, "Памятник жертвам трагедии на Немиге");
    makePlacemark(53.9165, 27.582439, "Памятник Якубу Коласу");
    makePlacemark(52.431016, 30.993592, "Памятник Франциску Скарыне");
    makePlacemark(55.197455, 30.191167, "Памятник Марку Шагалу");
    makePlacemark(52.430845, 30.993678, "Памятник 100-летию милиции");
    makePlacemark(52.424695, 31.019291, "\"Лодочник\" — первопоселенец и рысь");
}
