; (function () {

   if (typeof ymaps === 'undefined') {
      return;
   }
   ymaps.ready(function () {
      var myMap = new ymaps.Map('ymap', {
         center: [45.043381, 38.976104],
         zoom: 16
      }, {
         searchControlProvider: 'yandex#search'
      }),

         // Создаём макет содержимого.
         myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            balloonContent: 'ReactPC, г. Краснодар, ул. Красная 135'
         }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/marker.svg',
            iconImageSize: [37, 48],
            iconImageOffset: [-5, -38]
         });

      myMap.geoObjects.add(myPlacemark);
      myMap.behaviors.disable('scrollZoom');
   });
})();