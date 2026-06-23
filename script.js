$(document).ready(function () {
    // sticky navbar + scroll-up button
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // scroll to top
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
    });

    // menu mobile
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // click menu item thì đóng menu mobile
    $('.navbar .menu li a').click(function () {
        $('.navbar .menu').removeClass("active");
        $('.menu-btn i').removeClass("active");
    });

var typed = new Typed(".typing", {
    strings: [
        "ITエンジニアです。",
        "Webアプリケーション開発を学んでいます。",
        "チェスが得意です。"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed2 = new Typed(".typing-2", {
    strings: [
    "ITエンジニアを目指しています。",
    "システム開発について学んでいます。"
],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

    // 趣味 carousel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 }
        }
    });

    // 「もっと読む」故郷
    $('.read-more').click(function (e) {
        e.preventDefault();
        $('.more-content').slideToggle();

        if ($(this).text() === "もっと読む") {
            $(this).text("閉じる");
        } else {
            $(this).text("もっと読む");
        }
    });

    // 「もっと読む」将来の夢
    $('.read-more-2').click(function (e) {
        e.preventDefault();
        $('.more-content-2').slideToggle();

        if ($(this).text() === "もっと読む") {
            $(this).text("閉じる");
        } else {
            $(this).text("もっと読む");
        }
    });
});