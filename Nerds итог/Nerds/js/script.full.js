﻿
    var link = document.querySelector(".button-write");
    var popup = document.querySelector(".write-us");
    var close = document.querySelector(".write-us-close");
    var login = popup.querySelector("[name=login]");
    var password = popup.querySelector("[name=e-mail]");
    var form = popup.querySelector("form");
    var storage = localStorage.getItem("login");

      link.addEventListener("click", function(event) 
      {
        event.preventDefault();
        popup.classList.add("write-us-show");
      login.focus();
      if (storage) {
        login.value = storage;
        e-mail.focus();
      } else {
        login.focus();
      }


      });
      close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("write-us-show");
        popup.classList.remove("write-error");
      });

      form.addEventListener("submit", function(event) {
      if (!(login.value && e-mail.value)) {
          event.preventDefault();
          popup.classList.remove("write-error");
          popup.offsetWidth = popup.offsetWidth;
          popup.classList.add("write-error");

        } else {
          localStorage.setItem("login", login.value);
        }

      });

      window.addEventListener("keydown", function(event) {
        if (event.keyCode == 27) {
          if (popup.classList.contains("write-us-show")) {
            popup.classList.remove("write-us-show");
            popup.classList.remove("write-error");
          }
        }
      });

        ymaps.ready(init);
    var myMap; 
    function init() {
      myMap = new ymaps.Map('yandex-map', { 
        center: [59.939045,30.318913],
        zoom: [17],
        controls: []
        }),
      myMap.behaviors.disable('scrollZoom');
      myMap.controls.add('zoomControl'); 
      myPlacemark = new ymaps.Placemark([59.938554,30.32248], { 
      hintContent: 'Большая Конюшенная улица, 19/8, Санкт-Петербург, Россия', 
      balloonContent: ''
      }, {
      iconLayout: 'default#image',
      iconImageHref: '../Nerds/img/logo-2.png',
      iconImageSize: [235, 190],
      iconImageOffset: [-50, -200]
      }); 

    myMap.geoObjects.add(myPlacemark); 
    }