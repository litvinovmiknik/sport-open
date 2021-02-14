$(function() {
    $(window).on('scroll', function() {
        500 < $(this).scrollTop() ? $('.page-up').show() : $('.page-up').hide();
    });
});