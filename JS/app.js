let carouselStart = [1];
active(carouselStart);

function plusSlides(n) {
    active((carouselStart += n));
}

function active(n) {
    let i;
    let carousel = document.getElementsByClassName("img");
    if (n > carousel.length) {
        carouselStart = 1;
    }
    if (n < 1) {
        carouselStart = carousel.length;
    }
    for (i = 0; i < carousel.length; i++) {
        carousel[i].style.display = "none"
    }
    carousel[carouselStart - 1].style.display = "block"
}

var carouselPosition = 0;
moveCarousel();

function moveCarousel() {
    var i;
    var carousel = document.getElementsByClassName("img");
    for (i = 0; i < carousel.length; i++) {
        carousel[i].style.display = "none";
    }
    carouselPosition++;
    if (carouselPosition > carousel.length) {
        carouselPosition = 1;
    }
    carousel[carouselPosition - 1].style.display = "block";
    setTimeout(moveCarousel, 3000);
}

//----------------------------------------------------

let phrase = [1];
let city = [1];
let btn = [1];

function startWeather(m, b, h) {
    var ii;
    var iii;
    var iiii;
    var sentence = document.getElementsByClassName("sentenceClass2");
    var input = document.getElementsByClassName("input2");
    var showbutton = document.getElementsByClassName("buttonClass2");
    if (m > sentence.length) {
        phrase = 1
    }
    if (m < 1) {
        phrase = sentence.length
    }
    for (ii = 0; ii < sentence.length; ii++) {
        sentence[ii].style.display = "none";
    }
    sentence[phrase - 1].style.display = "block";

    if (b > input.length) {
        city = 1
    }
    if (b < 1) {
        city = input.length
    }
    for (iii = 0; iii < input.length; iii++) {
        input[iii].style.display = "none"
    }
    input[city - 1].style.display = "block";

    if (h > showbutton.length) {
        btn = 1
    }
    if (h < 1) {
        btn = showbutton.length
    }
    for (iiii = 0; iiii < showbutton.length; iiii++) {
        showbutton[iiii].style.display = "none"
    }
    showbutton[btn - 1].style.display = "block";
}

document.getElementById("button").addEventListener("click", startWeather)



var button = document.querySelector('.button');
var inputValue = document.querySelector('.input2');
var namee = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
const toclick = document.getElementById("button2");


function getWeather() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&appid=f0b2f33a3c8630929f4a871f76a2b05f')
        .then(response => response.json())
        .then(data => {
            var nameValue = data['name'];
            var tempValue = data['main']['temp'];
            //kelvin - 273.15;
            var descValue = data['weather'][0]['description'];
            var result = 273.15



            namee.innerHTML = nameValue;
            temp.innerHTML = (tempValue - result).toFixed(2) + 'ºC';
            desc.innerHTML = descValue;
        })

        .catch(err => alert("You need to inform a city OR use no accent!"))
}

document.getElementById("button2").addEventListener("click", getWeather)
