$(document).ready(function () {
    const allLi = $('.nav-links li');
    const submenuDiv = $('.submenu');
    const customDivs = $('.custom-div, .submenu');
    const lastLi = $('.nav-links li:last');

    let timer;
    let isMouseOnDiv = false;

    allLi.not(lastLi).on('mouseenter', function () {
        clearTimeout(timer);
        submenuDiv.addClass('show');
        customDivs.not(submenuDiv).removeClass('show');
    });

    allLi.not(lastLi).on('mouseleave', function () {
        timer = setTimeout(() => {
            submenuDiv.removeClass('show');
        }, 100);
    });

    lastLi.on('mouseenter', function () {
        clearTimeout(timer);
        submenuDiv.removeClass('show');
        customDivs.not(submenuDiv).addClass('show');
    });

    lastLi.on('mouseleave', function () {
        timer = setTimeout(() => {
            if (!isMouseOnDiv) {
                customDivs.removeClass('show');
            }
        }, 100);
    });

    customDivs.on('mouseenter', function () {
        clearTimeout(timer);
        isMouseOnDiv = true;
        $(this).addClass('show');
    });

    customDivs.on('mouseleave', function () {
        isMouseOnDiv = false;
        $(this).removeClass('show');
    });
    const disabledItems = $("ul.nav-links li:gt(4)").not(":last-child");

    disabledItems.off();
    disabledItems.find("a").css({
        "opacity": "0.5",
        "pointer-events": "auto",
        "cursor": "pointer"
    }).on("click", function (e) {
        e.preventDefault();
    });
    $('li').eq(1).mouseenter(function () {
        $('.nav1').attr('src', "./images/laptop1.png").css({ width: '150px', height: 'auto' });
        $('.nav1').text('HONOR MagicBook Art 14 Snapdragon');

    });
    $('li').eq(1).mouseenter(function () {
        $('.nav2').attr('src', "./images/laptop2.png").css({ width: '150px', height: 'auto' });
        $('.del').attr('src', "");
        $('.nav2').text('HONOR MagicBook Art 14');
    });
    $('li').eq(1).mouseenter(function () {
        $('.nav3').attr('src', "./images/laptop2.png").css({ width: '150px', height: 'auto' });
        $('.del').attr('src', "");
        $('.nav3').text('HONOR MagicBook X16 Plus 2024');
    });
    $('li').eq(1).mouseenter(function () {
        $('.nav4').attr('src', "./images/laptop3.png").css({ width: '150px', height: 'auto' });
        $('.del').attr('src', "");
        $('.nav4').text('HONOR MagicBook X16 AMD 2024');
    });
    $('li').eq(1).mouseenter(function () {
        $('.nav5').attr('src', "./images/laptop4.png").css({ width: '150px', height: 'auto' });
        $('.del').attr('src', "");
        $('.nav5').text('HONOR MagicBook X14 AMD 2024');
    });
    $('li').eq(2).mouseenter(function () {
        $('.nav1').attr('src', "./images/tablet1.png").css({ width: '100px', height: 'auto' });
        $('.nav1').text('HONOR Pad X8a Kids Edition');
    });
    $('li').eq(2).mouseenter(function () {
        $('.nav2').attr('src', "./images/tablet2.png").css({ width: '100px', height: 'auto' });
        $('.nav2').text('HONOR MagicPad2');
        $('.del').attr('src', "");
    });
    $('li').eq(2).mouseenter(function () {
        $('.nav3').attr('src', "./images/tablet3.png").css({ width: '100px', height: 'auto' });
        $('.nav3').text('HONOR Pad X8a');
        $('.del').attr('src', "");
    });
    $('li').eq(2).mouseenter(function () {
        $('.nav4').attr('src', "./images/tablet4.png").css({ width: '100px', height: 'auto' });
        $('.nav4').text('HONOR Pad 9');
        $('.del').attr('src', "");
    });
    $('li').eq(2).mouseenter(function () {
        $('.nav5').attr('src', "./images/tablet5.png").css({ width: '100px', height: 'auto' });
        $('.nav5').text('HONOR Pad X9');
        $('.del').attr('src', "");
    });
    $('li').eq(3).mouseenter(function () {
        $('.nav1').attr('src', "./images/watch1.png");
        $('.nav5').text('HONOR Pad X9');
    });
    $('li').eq(3).mouseenter(function () {
        $('.nav2').attr('src', "./images/watch2.png");
        $('.nav5').text('HONOR Watch 5');
        $('.del').attr('src', "");
    });
    $('li').eq(3).mouseenter(function () {
        $('.nav3').attr('src', "./images/watch3.png");
        $('.nav5').text('HONOR BAND 4');
        $('.del').attr('src', "");
    });
    $('li').eq(3).mouseenter(function () {
        $('.nav4').attr('src', "./images/watch4.png");
        $('.nav5').text('HONOR Watch 4');
        $('.del').attr('src', "");
    });
    $('li').eq(3).mouseenter(function () {
        $('.nav5').attr('src', "./images/watch5.png");
        $('.nav5').text('HONOR Watch 6');
        $('.del').attr('src', "");
    });
    $('li').eq(4).mouseenter(function () {
        $('.nav1').attr('src', "./images/buds1.png");
        $('.nav5').text('HONOR Earbuds X6');
    });
    $('li').eq(4).mouseenter(function () {
        $('.nav2').attr('src', "./images/buds2.png");
        $('.nav5').text('HONOR Earbuds X5');
        $('.del').attr('src', "");
    });
    $('li').eq(4).mouseenter(function () {
        $('.nav3').attr('src', "./images/buds3.png");
        $('.nav5').text('HONOR Earbuds 3 Pro');
        $('.del').attr('src', "");
    });
    $('li').eq(4).mouseenter(function () {
        $('.nav4').attr('src', "./images/buds4.png");
        $('.nav5').text('HONOR Earbuds 2 Lite');
        $('.del').attr('src', "");
    });
    $('li').eq(4).mouseenter(function () {
        $('.nav5').attr('src', "./images/buds5.png");
        $('.nav5').text('HONOR Magick Earbuds');
        $('.del').attr('src', "");
    });
});
window.onload = function () {
    const ICON = document.querySelector(".icon");
    const LINE1 = document.querySelector(".line-1");
    const LINE2 = document.querySelector(".line-2");
    const LINE3 = document.querySelector(".line-3");
    const NAV = document.querySelector(".mobile-nav");

    ICON.addEventListener("click", function () {
        LINE2.classList.toggle("hide-line-2");
        LINE1.classList.toggle("change-line-1");
        LINE3.classList.toggle("change-line-3");
        NAV.classList.toggle("show-navigation");
    });
};

const BTN = document.querySelector(".bi-search");
const BOX = document.querySelector(".boxs");
const ICON2 = document.querySelector(".icons");

BTN.addEventListener("click", function () {
    BOX.classList.toggle("hiden");
    BOX.classList.toggle("flex");
});

ICON2.addEventListener("click", function () {
    BOX.classList.add("hiden"); 
    BOX.classList.remove("flex");
});

document.addEventListener("click", function (event) {
    if (!BOX.contains(event.target) && !BTN.contains(event.target)) {
        BOX.classList.add("hiden");
        BOX.classList.remove("flex");
    }
});

