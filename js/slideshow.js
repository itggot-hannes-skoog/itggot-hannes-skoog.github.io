$(function () {
    $(".mn_slideshow").vegas({
        slides: [
            { src: "img/tshirt.jpg", text: "TSHIRT" },
            { src: "img/wswshirt.jpg", text: "SWEATSHIRT" },
            { src: "img/jacket.jpg", text: "JACKET" },
            { src: "img/wshoes.jpg", text: "SHOES" }
        ],
        delay: 10000,
        txttarget: '.title',
        transitionDuration: 1000,
        transition: 'flash2'
    });
});
$(function () {
    $(".insp_slideshow").vegas({
        slides: [
            { src: "img/subway.jpg" },
            { src: "img/city.jpg" },
            { src: "img/antenna.jpg" },
            { src: "img/grafitti.jpg" }
        ],
        delay: 10000,
        transitionDuration: 1000,
        transition: 'flash2'
    });
});
$(document).ready(function () {
    $('.slick-next').click(function () {
        $(".insp_slideshow").vegas('next');
    });
    $('.slick-prev').click(function () {
        $(".insp_slideshow").vegas('previous');
    });
})