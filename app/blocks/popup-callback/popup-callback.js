$(function() {
    $('.callback__link, .callback__icon, .ticker__link').on('click', function() {
        $('.popup-callback').css('display', 'flex');
    });

    $('.popup-callback')
        .on('click', function() {
            $(this).hide();
        })
        .on('click', '.popup-callback__container', function(e) {
            e.stopPropagation();
        });

    $('.popup-callback__close').on('click', function() {
        $('.popup-callback').hide();
    });
});