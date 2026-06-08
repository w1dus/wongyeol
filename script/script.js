

document.addEventListener("DOMContentLoaded", function(e){

    asideToggleHandler();
    scrollTopHandler();
    memberSwiperHandler();
    solveSwiperHandler();

})

const solveSwiperHandler = () => {
    if(!document.querySelector(".main .solve-section .item-wrap .swiper")) return;
    var swiper = new Swiper(".main .solve-section .item-wrap .swiper", {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        // Swiper 4.x → breakpoints는 max-width 기준 (key 이하 화면폭에 적용)
        breakpoints: {
            650: {
                slidesPerView: 1,
            },
        },
    })
}

const memberSwiperHandler = () => {
    if(!document.querySelector(".main .member-section .slide-wrap .swiper")) return;
    var swiper = new Swiper(".main .member-section .slide-wrap .swiper", {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        // centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
        // Swiper 4.x → breakpoints는 max-width 기준 (key 이하 화면폭에 적용)
        breakpoints: {
            950: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            650: {
                slidesPerView: 1.5,
            },
            480: {
                slidesPerView: 1.25,
                spaceBetween: 20,
            },
        },
    });
}

const scrollTopHandler = () => {
    $('.quick-menu-section .top-btn').click(function(){
        $('html, body').animate({ scrollTop: 0 }, 500);
    })
}

const asideToggleHandler = () => {
    $('header .menu-btn').click(function(){
        $('.aside-section').addClass('active');
    })
    $('.aside-section .close-btn').click(function(){
        $('.aside-section').removeClass('active');
    })
    $('.aside-section .close-bg').click(function(){
        $('.aside-section').removeClass('active');
    })
    // 서브 카테고리 토글 슬라이드 (업무분야 등)
    $('.aside-section .menu-list .sub-toggle').click(function(){
        $(this).closest('.has-sub').toggleClass('open');
    })
}