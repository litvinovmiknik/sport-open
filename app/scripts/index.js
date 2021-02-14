import '../blocks/nav/nav.js';
import '../blocks/ticker/ticker.js';
import '../blocks/banner-slider/banner-slider.js';
import '../blocks/product-list-slider/product-list-slider.js';
import '../blocks/popup-callback/popup-callback.js';
import '../blocks/popup-success/popup-success.js';
import '../blocks/page-up/page-up.js';

$(function() {
    $('a[href^="#"]').on('click', function() {
        const href = $(this).attr('href');
        $('html, body').animate( {scrollTop: $(href).offset().top}, 300 );
    });

    $('input[name="phone"]').mask("+7 (999) 999-9999");

    let hash = $(location).attr('hash');
    if (hash.indexOf('popup') === 1) {
        const popupClassName = hash.replace(/^#/, '.');
        $(popupClassName).css('display', 'flex');
    }
});