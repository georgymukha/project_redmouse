let $hamburger = $('.hamburger');
let navbar = $('.navbar');
$hamburger.on('click', function(event) {
    event.preventDefault();
    event.stopPropagation();
    $hamburger.toggleClass('is-active');
    navbar.toggleClass('is-active')
});

navbar.on('click', function (event) {
    event.stopPropagation();
    if (event.currentTarget === event.target) {
        navbar.toggleClass('is-active')
        $hamburger.toggleClass('is-active');
    }

})
