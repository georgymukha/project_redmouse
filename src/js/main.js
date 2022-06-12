// Анимация карточек
import {gsap} from "../../node_modules/gsap/dist/gsap.min.js";
import {ScrollTrigger} from "../../node_modules/gsap/dist/ScrollTrigger.min.js";

gsap.registerPlugin(ScrollTrigger);


let timelineEnd = '';

if ($(window).width() > 1200) {
    timelineEnd = '+=80px';
} else if ($(window).width() > 725) {
    timelineEnd = '+=200px';
} else {
    timelineEnd = '+=1200px';
}


ScrollTrigger.saveStyles('.card-1, .card-2, .card-3, .card-4')

let timeline = gsap.timeline({
    scrollTrigger: {
        trigger: '.cards',
        start: 'top center',
        end: timelineEnd,
        scrub: true,
        markers: false,
        invalidateOnRefresh: true,
        immediateRender: false
    }
});

let tlFunc = function () {
    if ($(window).width() > 1200) {
        timelineEnd = '+=80px';
    } else if ($(window).width() > 725) {
        timelineEnd = '+=200px';
    } else {
        timelineEnd = '+=1200px';
    };
    if ($(window).width() > 1200) {
        timeline
            .from('.card-1', {x: -300, opacity: 0}, 1)
            .from('.card-2', {y: 300, opacity: 0}, 2)
            .from('.card-3', {x: -300, opacity: 0}, 3)
            .from('.card-4', {x: 300, opacity: 0}, 4);
    } else if ($(window).width() > 725) {
        timeline
            .from('.card-1', {x: -300, opacity: 0}, 1)
            .from('.card-2', {y: 300, opacity: 0}, 2)
            .from('.card-3', {x: -300, opacity: 0}, 3)
            .from('.card-4', {x: 300, opacity: 0}, 4);
    } else {
        timeline
            .from('.card-1', {x: -50, opacity: 0}, 1)
            .from('.card-2', {x: 50, opacity: 0}, 2)
            .from('.card-3', {x: -50, opacity: 0}, 3)
            .from('.card-4', {x: 50, opacity: 0}, 4);
    }
}

$(document).ready(function () {
    ScrollTrigger.refresh;
    tlFunc();
    $(window).on('resize', tlFunc)
});








// Слайдер
import '../../manual_modules/OwlCarousel2-2.3.4//dist/owl.carousel.min.js';

$(document).ready(function(){
    let prevButton = `
        <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id='arrow-prev' d="M6.91875 0.24375C7.06875 0.09375 7.275 0 7.5 0C7.725 0 7.9125 0.09375 8.08125 0.24375L8.56875 0.73125C8.8875 1.05 8.8875 1.575 8.56875 1.89375L2.9625 7.5L8.56875 13.1062C8.71875 13.2562 8.8125 13.4625 8.8125 13.6875C8.8125 13.9125 8.71875 14.1188 8.56875 14.2688L8.08125 14.7562C7.93125 14.9062 7.725 15 7.5 15C7.275 15 7.06875 14.9062 6.91875 14.7562L0.243749 8.08125C0.093749 7.93125 0 7.725 0 7.5C0 7.275 0.093749 7.06875 0.243749 6.91875L6.91875 0.24375Z" fill="white"/>
        </svg>
    `;
    let nextButton = `
        <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id='arrow-next' d="M1.89375 0.24375C1.74375 0.09375 1.5375 0 1.3125 0C1.0875 0 0.9 0.09375 0.73125 0.24375L0.24375 0.73125C-0.075 1.05 -0.075 1.575 0.24375 1.89375L5.85 7.5L0.24375 13.1062C0.09375 13.2562 0 13.4625 0 13.6875C0 13.9125 0.09375 14.1188 0.24375 14.2688L0.73125 14.7562C0.88125 14.9062 1.0875 15 1.3125 15C1.5375 15 1.74375 14.9062 1.89375 14.7562L8.56875 8.08125C8.71875 7.93125 8.8125 7.725 8.8125 7.5C8.8125 7.275 8.71875 7.06875 8.56875 6.91875L1.89375 0.24375Z" fill="white"/>
        </svg>
    
    `
    $(".owl-carousel").owlCarousel({
        center: true,
        items: 1,
        loop: true,
        margin: 10,
        autoplay:true,
        autoplayTimeout:3000,
        autoplaySpeed:2000,
        nav: false,
        navText: [prevButton, nextButton],
        responsive: {
            768: {
                nav: true
            }
        }
    });
  });

  $('.owl-nav').append




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

let success = function (response) {
    for (let item in response) {
        let country = response[item]['name']['common'];
        let select = $('#destinations');

        select.append(`
        <option value='${country}'>${country}</option>
        `)
    };
};

$.ajax({
    method: 'GET',
    url: 'https://restcountries.com/v3.1/all?fields=name'
})
.done(success);

// let sortCountries = function () {
//     let selectList = $('#destinations option');

//     selectList.sort(function(a,b){
//         console.log(a.value, b.value);

//         return (a=b, b=a);
//     });

//     $('#destinations').html(selectList);
//     console.log(selectList);
// }



// Вывод суммы в виде долларов

let formatPrice = function (value) {
    let options = {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    }
    let numberFormat = new Intl.NumberFormat('en-US', options);
    return numberFormat.format(value);
}

let reverseFormatPrice = function (value){
    var group = new Intl.NumberFormat('en-US').format(1111).replace(/1/g, '');
    var decimal = new Intl.NumberFormat('en-US').format(1.1).replace(/1/g, '');
    var reversedVal = value.replace(new RegExp('\\' + group, 'g'), '');
    reversedVal = reversedVal.replace(new RegExp('\\' + decimal, 'g'), '.');
    return Number.isNaN(reversedVal)?0:reversedVal;
}

$('#price-min').on('blur', function () {
    $(this).attr('type', 'text');
    let formatedPrice = (formatPrice($(this).val()));
    $(this).val(`${formatedPrice}`)
})

$('#price-min').on('focus', function () {
    let reverseFormatedPrice = (reverseFormatPrice($(this).val()));
    let reverseNoSymbol = reverseFormatedPrice.substring(1, reverseFormatedPrice.length);
    $(this).val(`${reverseNoSymbol}`)
    $(this).attr('type', 'number');
})

$('#price-max').on('blur', function () {
    $(this).attr('type', 'text');
    let formatedPrice = (formatPrice($(this).val()));
    $(this).val(`${formatedPrice}`)
})

$('#price-max').on('focus', function () {
    let reverseFormatedPrice = (reverseFormatPrice($(this).val()));
    let reverseNoSymbol = reverseFormatedPrice.substring(1, reverseFormatedPrice.length);
    $(this).val(`${reverseNoSymbol}`);
    $(this).attr('type', 'number');
})

$('.banner__button').on('click', function (event) {
    event.preventDefault();
    $('.discover').toggleClass('is-active')
})

$('.discover').on('click', function (event) {
    event.preventDefault();
    event.stopPropagation();
    if (event.target === event.currentTarget) {
        $('.discover').toggleClass('is-active')
    }
})