$(document).ready(function() {
    // What we do box toggle effect
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

    // Portfolio hover effect
    const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper')
        portfolioItems.forEach(portfolioItem => {
            portfolioItem.addEventListener('mouseover', () => {
                portfolioItem.childNodes[1].classList.add('img-lighter');
            });

            portfolioItem.addEventListener('mouseout', () => {
                portfolioItem.childNodes[1].classList.remove('img-lighter');
            });
    });

    $('submit').on('click', function(){
        const name = $('#txtname').val();
        var strLength = $.trim(name).length;
        alert('Dear ' + name + ', We have received your message. Thank you for reaching out!');
    });
    
});