; (function () {
   var catalog = document.querySelector('.catalog');

   if (catalog === null) {
      return;
   }

   var changeProductModel = function (target) {
      var product = myLib.closesItemByClass(target, 'product');
      var previousBtnActive = product.querySelector('.product__model.is-active');

      previousBtnActive.classList.remove('is-active');
      target.classList.add('is-active');
   };

   var changeProductOrderInfo = function (target) {
      var product = myLib.closesItemByClass(target, 'product');
      var order = document.querySelector('.popup-order');

      var productTitle = product.querySelector('.product__title').textContent;
      var productModel = product.querySelector('.product__model.is-active').textContent;
      var productPrice = product.querySelector('.product__price-value').textContent;
      var productImgSrc = product.querySelector('.product__img').getAttribute('src');

      order.querySelector('.order-info-title').setAttribute('value', productTitle);
      order.querySelector('.order-info-model').setAttribute('value', productModel);
      order.querySelector('.order-info-price').setAttribute('value', productPrice);

      order.querySelector('.order-product-title').textContent = productTitle;
      order.querySelector('.order-product-price').textContent = productPrice;
      order.querySelector('.order__model').textContent = productModel;
      order.querySelector('.order__img').setAttribute('src', productImgSrc);
   };

   catalog.addEventListener('click', function (e) {
      var target = e.target;

      if (target.classList.contains('product__model') && !target.classList.contains('is-active')) {
         e.preventDefault();
         changeProductModel(target);
      }

      if (target.classList.contains('product__btn')) {
         e.preventDefault();
         changeProductOrderInfo(target);
      }
   });
})();
