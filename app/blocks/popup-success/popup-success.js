$(function() {
    $('.popup-callback__form').on('submit', function(e) {
        $('.popup-callback').hide();
        $('.popup-success').css('display', 'flex');
        e.preventDefault();
    });
    $('.popup-success')
        .on('click', function() {
            $(this).hide();
        })
        .on('click', '.popup-success__container', function(e) {
            e.stopPropagation();
        });

    $('.popup-success__close').on('click', function() {
        $('.popup-success').hide();
    });
});