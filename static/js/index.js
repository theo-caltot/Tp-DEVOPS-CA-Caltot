let currentColorIndex = 0;
const colors = ["#1C395D", "#232323", "#AAC4C7", "#D1D1D0", "#DAAAAA"];
let isBottleMoving = false;
let translation1 = "translateX(calc(50vw + 50%))";
let translation2 = "translateX(calc(-50vw + -50%))";
let translation3 = "translateX(0)";

let interval = setInterval(switchColor, 5000);

function switchColor() {
    if (isBottleMoving) { return }

    currentColorIndex++;

    if (currentColorIndex == colors.length) {
        currentColorIndex = 0;
    }

    animateRadio();
    updateColors();
    updateBottle();
}

function handleRadioSelect(radio) {
    if (currentColorIndex != radio.value) {
        clearInterval(interval)
        currentColorIndex = radio.value;
        animateRadio();
        updateColors();
        updateBottle();
        interval = setInterval(switchColor, 3000);
    }
}

function animateRadio() {
    const radio = document.getElementById("color-" + currentColorIndex)
    radio.checked = true;

    radio.style.transitionDuration = "0.2s";
    radio.style.transform = "translateY(-10px)";

    setTimeout(function () {
        radio.style.transform = "translateY(0)";
    }, 200);
}

function updateColors() {
    // Update logo
    const logo = document.getElementById("logo").getSVGDocument().getElementById("logo-fill");
    logo.setAttribute("fill", colors[currentColorIndex]);

    // Update overlay
    const overlay = document.getElementById("overlay");
    overlay.style.backgroundColor = colors[currentColorIndex];

    // Update mark
    const mainSectionMark = document.getElementById("main-section-mark");
    mainSectionMark.setAttribute("style", "color: " + colors[currentColorIndex] + " !important");
}

function updateBottle() {
    const animationDuration = "0.6s";
    // Update bottle image
    const bottleImage = document.getElementById("bottle");

    isBottleMoving = true;

    bottleImage.style.transitionDuration = animationDuration;
    bottleImage.style.transform = translation1;

    setTimeout(function () {
        bottleImage.setAttribute("src", "static/img/bottle_" + currentColorIndex + ".png");
        bottleImage.style.transitionDuration = "0s";
        bottleImage.style.transform = translation2;
    }, 400);

    setTimeout(function () {
        bottleImage.style.transitionDuration = animationDuration;
        bottleImage.style.transform = translation3;
    }, 800);

    setTimeout(function () {
        isBottleMoving = false;
    }, 400);
}

// Fade appear
$(document).ready(function () {
    $(window).scroll(function () {
        $('.fade-in').each(function (i) {
            var objectBottom = $(this).offset().top + $(this).outerHeight();
            var windowBottom = $(window).scrollTop() + $(window).height();

            if (objectBottom < windowBottom) {
                $(this).animate({
                    'opacity': '1'
                }, 500);
            }
        });
    });
});

function openShop() {
    document.activeElement.blur();
    window.open('https://www.livelarq.com/shop', '_blank');
}

/* Media queries */
function mediaQueries(mediaQuery) {
    if (mediaQuery.matches) {
        translation1 = "translateY(calc(50vh + 50%))";
        translation2 = "translateY(calc(-50vh - 50%))";
    } else {
        translation1 = "translateX(calc(50vw + 50%))";
        translation2 = "translateX(calc(-50vw - 50%))";
    }
}

mediaQuery992 = window.matchMedia("(max-width: 768px)")
mediaQueries(mediaQuery992)
mediaQuery992.addListener(mediaQueries)