const swiper = new Swiper('.achive-swiper', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    slidesPerView: 1,
    thumbs: {
        swiper: {
            el: '.achive-swiper_mini',
            slidesPerView: 3,
            spaceBetween: 17,
        }
    }
});

const projectsSwiper = new Swiper('.projects__swiper', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // slideToClickedSlide: true,
    thumbs: {
        swiper: {
            el: '.projects__swiper_mini',
            slidesPerView: 3,
            spaceBetween: 14,
            autoHeight: true
        }
    },
    breakpoints: {
        769: {
            slidesPerView: 3,
            spaceBetween: 17,
            autoHeight: true,
            centeredSlides: true,

        }
    }

});

const reviewsLeftSwiper = new Swiper('.reviews-swiper', {
    loop: true,

    freeMode: true,
    spaceBetween: 15,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    breakpoints: {
        768: {
            slidesPerView: 1.6,
            direction: 'vertical',
        },

    }
})