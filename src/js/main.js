// Анимация карточек
import {gsap} from "../../node_modules/gsap/dist/gsap.min.js";
import {ScrollTrigger} from "../../node_modules/gsap/dist/ScrollTrigger.min.js";

gsap.registerPlugin(ScrollTrigger);


let tlCardsEnd = '';
let tlDestinationsEnd = '';
let tlToursEnd = '';
let tlChooseEnd = '';

if ($(window).width() >= 1900) {
    tlCardsEnd = '+=1300px';
    tlDestinationsEnd = '+=1300px';
    tlToursEnd = '+=1050px';
    tlChooseEnd ='+=1600px';
} else if ($(window).width() >= 1660) {
    tlCardsEnd = '+=1000px';
    tlDestinationsEnd = '+=1000px';
    tlToursEnd = '+=1300px';
    tlChooseEnd ='+=1400px';
} else if ($(window).width() >= 1024) {
    tlCardsEnd = '+=1000px';
    tlDestinationsEnd = '+=1000px';
    tlToursEnd = '+=1100px';
    tlChooseEnd ='+=1400px';
} else if ($(window).width() >= 768) {
    tlCardsEnd = '+=800px';
    tlDestinationsEnd = '+=1000px';
    tlToursEnd = '+=1100px';
    tlChooseEnd ='+=1400px';
} else {
    tlCardsEnd = '+=1200px';
    tlDestinationsEnd = '+=1200px';
    tlToursEnd = '+=800px';
    tlChooseEnd ='+=1500px';
}

let tlFunc = function () {
    if ($(window).width() >= 1900) {
        tlCardsEnd = '+=1300px';
        tlDestinationsEnd = '+=1300px';
        tlToursEnd = '+=1050px';
        tlChooseEnd ='+=1600px';
    } else if ($(window).width() >= 1660) {
        tlCardsEnd = '+=1000px';
        tlDestinationsEnd = '+=1000px';
        tlToursEnd = '+=1300px';
        tlChooseEnd ='+=1400px';
    } else if ($(window).width() >= 1024) {
        tlCardsEnd = '+=1000px';
        tlDestinationsEnd = '+=1000px';
        tlToursEnd = '+=1100px';
        tlChooseEnd ='+=1400px';
    } else if ($(window).width() >= 768) {
        tlCardsEnd = '+=800px';
        tlDestinationsEnd = '+=1000px';
        tlToursEnd = '+=1100px';
        tlChooseEnd ='+=1400px';
    } else {
        tlCardsEnd = '+=1200px';
        tlDestinationsEnd = '+=1200px';
        tlToursEnd = '+=800px';
        tlChooseEnd ='+=1500px';
    }

    if ($(window).width() >= 1660) {
        tlCards
            .from('.card-1', {x: -500, opacity: 0}, 4)
            .from('.card-2', {x: -500, opacity: 0}, 3)
            .from('.card-3', {x: -500, opacity: 0}, 2)
            .from('.card-4', {x: -500, opacity: 0}, 1);
        tlDestinations
            .from('.destinations__cities_cuba', {x: 1000, opacity: 0}, 1)
            .from('.destinations__cities_paris', {x: 1500, opacity: 0}, 2)
            .from('.destinations__cities_japan', {x: 2000, opacity: 0}, 3);
        tlTours
            .from('.tours__tip-1', {x: 500, opacity: 0}, 1)
            .from('.tours__tip-2', {x: 500, opacity: 0}, 2)
            .from('.tours__tip-3', {x: 500, opacity: 0}, 3);
        tlChoose
            .from('.choose__card_1', {y: 500, opacity: 0}, 2)
            .from('.choose__card_2', {y: 500, opacity: 0}, 1)
            .from('.choose__card_3', {y: 500, opacity: 0}, 2);
    } else if ($(window).width() >= 1024) {
        tlCards
            .from('.card-1', {x: -500, opacity: 0}, 1)
            .from('.card-2', {x: 500, opacity: 0}, 1)
            .from('.card-3', {x: -500, opacity: 0}, 2)
            .from('.card-4', {x: 500, opacity: 0}, 2);
        tlDestinations
            .from('.destinations__cities_cuba', {x: -500, opacity: 0}, 1)
            .from('.destinations__cities_paris', {x: 500, opacity: 0}, 1)
            .from('.destinations__cities_japan', {y: 500, opacity: 0}, 2);
        tlTours
            .from('.tours__tip-1', {x: -500, opacity: 0}, 1)
            .from('.tours__tip-2', {x: 500, opacity: 0}, 2)
            .from('.tours__tip-3', {x: -500, opacity: 0}, 3);
        tlChoose
            .from('.choose__card_1', {x: -500, opacity: 0}, 1)
            .from('.choose__card_2', {x: 500, opacity: 0}, 1)
            .from('.choose__card_3', {y: 500, opacity: 0}, 2)
            .from('.choose__button', {y: 500, opacity: 0}, 2);
    } else if ($(window).width() >= 768) {
        tlCards
            .from('.card-1', {x: -500, opacity: 0}, 1)
            .from('.card-2', {x: 500, opacity: 0}, 1)
            .from('.card-3', {x: -500, opacity: 0}, 2)
            .from('.card-4', {x: 500, opacity: 0}, 2);
        tlDestinations
            .from('.destinations__cities_cuba', {x: -500, opacity: 0}, 1)
            .from('.destinations__cities_paris', {x: 500, opacity: 0}, 1)
            .from('.destinations__cities_japan', {y: 500, opacity: 0}, 2);
        tlTours
            .from('.tours__tip-1', {x: -500, opacity: 0}, 1)
            .from('.tours__tip-2', {x: 500, opacity: 0}, 2)
            .from('.tours__tip-3', {x: -500, opacity: 0}, 3);
        tlChoose
            .from('.choose__card_1', {x: -500, opacity: 0}, 1)
            .from('.choose__card_2', {x: 500, opacity: 0}, 1)
            .from('.choose__card_3', {y: 500, opacity: 0}, 2)
            .from('.choose__button', {y: 500, opacity: 0}, 2);
    } else {
        tlCards
            .from('.card-1', {x: -500, opacity: 0}, 1)
            .from('.card-2', {x: 500, opacity: 0}, 2)
            .from('.card-3', {x: -500, opacity: 0}, 3)
            .from('.card-4', {x: 500, opacity: 0}, 4);
        tlDestinations
            .from('.destinations__cities_cuba', {x: -500, opacity: 0}, 1)
            .from('.destinations__cities_paris', {x: 500, opacity: 0}, 2)
            .from('.destinations__cities_japan', {x: -500, opacity: 0}, 3);
        tlTours
            .from('.tours__tip-1', {x: -500, opacity: 0}, 1)
            .from('.tours__tip-2', {x: 500, opacity: 0}, 2)
            .from('.tours__tip-3', {x: -500, opacity: 0}, 3);
        tlChoose
            .from('.choose__card_1', {x: -500, opacity: 0}, 1)
            .from('.choose__card_2', {x: 500, opacity: 0}, 2)
            .from('.choose__card_3', {x: -500, opacity: 0}, 3);

    }
}


ScrollTrigger.saveStyles(`
    .card-1, .card-2, .card-3, .card-4,
    .destinations__cities_cuba, .destinations__cities_paris, .destinations__cities_japan,
    .choose__card_1, .choose__card_2, .choose__card_3`)

let tlCards = gsap.timeline({
    scrollTrigger: {
        trigger: '.cards',
        start: 'top center',
        end: tlCardsEnd,
        scrub: true,
        markers: false,
        invalidateOnRefresh: true,
        immediateRender: false
    }
});

let tlDestinations = gsap.timeline({
    scrollTrigger: {
        trigger: '.destinations__cities',
        start: 'top center',
        end: tlDestinationsEnd,
        scrub: true,
        markers: false,
        invalidateOnRefresh: true,
        immediateRender: false
    }
});

let tlTours = gsap.timeline({
    scrollTrigger: {
        trigger: '.tours__tips',
        start: 'top 30%',
        end: tlToursEnd,
        scrub: true,
        markers: false,
        invalidateOnRefresh: true,
        immediateRender: false
    }
});

let tlChoose = gsap.timeline({
    scrollTrigger: {
        trigger: '.choose__cards',
        start: 'top 70%',
        end: tlChooseEnd,
        scrub: true,
        markers: false,
        invalidateOnRefresh: true,
        immediateRender: false
    }
});


$(document).ready(function () {
    ScrollTrigger.refresh;
    tlFunc();
    $(window).on('resize', tlFunc);
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
    $("#owl1").owlCarousel({
        center: true,
        items: 1,
        loop: true,
        margin: 10,
        autoplay:true,
        autoplayTimeout:5000,
        autoplaySpeed:3000,
        nav: false,
        onInitialized  : counter,
        onTranslated : counter,
        navText: [prevButton, nextButton],
        responsive: {
            0: {
                nav: false
            },
            768: {
                nav: true
            }
        }
    });
});

function counter(event) {
  let elem = $('.owl-stage').find('.active').children('.banner-slider__slide').attr('data-index');

  if (!$('.counter__counter').length) {
    $('.owl-nav').append(`
    <div class="counter">
        <div class="counter__sep"></div>
        <div class="counter__counter"></div>
    </div>`);
  }

  $('.counter__counter').html(elem)
};

// навигация по отзывам
let reviews = {
    1: {
        photo: './img/reviews/person-1.png',
        name: 'Md Shamim Hossain',
        speciality: 'UI/UX designer',
        text: 'Jetrips Hotel is an excellent choice for anybody for considering hosting their events there. Top levela facilities and excellent staff make for a brillianted environment within which to operate. The hotel is meticulous in its planning.'
    },
    2: {
        photo: './img/reviews/person-2.png',
        name: 'Albert Jackson',
        speciality: 'FrontEnd Developer',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In quidem iste veritatis minima consectetur, suscipit blanditiis deserunt sequi sapiente dolorem!'
    },
    3: {
        photo: './img/reviews/person-3.png',
        name: 'Mike Lebowski',
        speciality: 'BackEnd Developer',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ab, sapiente excepturi eos sint quam quaerat exercitationem maxime itaque ea, unde beatae sunt quidem! Itaque?'
    },
    4: {
        photo: './img/reviews/person-4.png',
        name: 'Md Shamim Hossain',
        speciality: 'Motion Designer',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ratione cumque sapiente molestiae, error dolores est at nihil provident aspernatur animi praesentium modi dolor fugit maxime accusamus!'
    }
}

let activeBtn = 1;

$('.reviews__buttons-btn').on('click', function (event) {
    activeBtn = parseInt($(this).attr('data-review'));
    changeReview(activeBtn);

})






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



// нижний свайпер
let touchstartX = 0
let touchendX = 0

let changeReview = function (btn) {
    $('.reviews__wrapper').css({opacity: 0})
    setTimeout(() => {
        $('.reviews__buttons-btn').siblings('.reviews__buttons-btn').removeClass('is-active');
        $(`.reviews__buttons-btn[data-review=${btn}]`).addClass('is-active');

        $('.reviews__client-img').attr('src', reviews[btn]['photo']);
        $('.reviews__client-name').text(reviews[btn]['name']);
        $('.reviews__client-speciality').text(reviews[btn]['speciality']);
        $('.reviews__review-text').text(reviews[btn]['text']);
        setTimeout(() => {
            $('.reviews__wrapper').css({opacity: 1})
        }, 200);
    }, 200);
}
    
function checkDirection() {

    if (touchendX < touchstartX)  {
        if (activeBtn <= 3) {
            activeBtn++; 
        } else activeBtn = 1;
        changeReview(activeBtn);
    }
    if (touchendX > touchstartX) {
        if (activeBtn > 1) {
            activeBtn--;
        } else activeBtn = 4;
        changeReview(activeBtn);
    }
}
$('.reviews-slider__wrapper').on('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX
})

$('.reviews-slider__wrapper').on('touchend', e => {
  touchendX = e.changedTouches[0].screenX
  checkDirection()
})
