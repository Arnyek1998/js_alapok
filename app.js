/*jslint devel: true */
/*global $, jQuery, alert*/
/*jslint indent: 2 */


(function () {
  'use strict';
  console.log("hello world");
  $('.image-popup').magnificPopup({
    type: 'image',
    gallery: {enabled: true}
  });
}());

[].forEach.call(document.querySelectorAll('.image-popup'),
   function (el) { 
    el.style.display = 'none';
});

$('.image-popup').css('display', 'none');