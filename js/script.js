$(document).ready(function() {
    $('#desbox').click(function() {
        $('#desbox').addClass('active');
        $('.desbox').toggleClass('active');
        $('#design').toggle();
        $('#desbox').removeClass('active');
    });

    $('#devbox').on('click', function () {
        $('#devbox').addClass('active');
        $('.devbox').toggleClass('active');
        $('#dev').toggle();
        $('#devbox').removeClass('active');
    });

    $('#prodbox').on('click', function () {
        $('#prodbox').addClass('active');
        $('.prodbox').toggleClass('active');
        $('#product').toggle();
        $('#prodbox').removeClass('active');
    });
});