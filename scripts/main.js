"use strict"

// DOM ANCHORS
var rowCar = document.getElementsByClassName('row-car')[0];
var rowCourseHd = document.getElementsByClassName('row-course-hd')[0];
var imgCar = document.getElementById('img-car');
var imgSing = document.getElementsByClassName('img-singles');
var courseInfo = document.getElementById('course-info');
var courseImg = document.getElementById('course-img');
var courseTitle = document.getElementById('course-title');
var imgTest = document.getElementById('test-img');
// buttons and links
var link1 =document.getElementById('link-1');
var link1 =document.getElementById('link-2');
var link1 =document.getElementById('link-3');
var link1 =document.getElementById('link-4');
var btn1 = document.getElementById('btn-1');
var btn2 = document.getElementById('btn-2');
var btn3 = document.getElementById('btn-3');
var btn4 = document.getElementById('btn-4');
var btnBack = document.getElementById('back-btn');
var btnTest = document.getElementsByClassName('btn-carousel')[0];
var btnAdd = document.getElementsByClassName('btn-add')[0];



// variables
var i = 0;
var imgArr = [];
var carousel = [];
var dur = 3500;

// image array
imgArr[0] = "images/astronaut_430_290.jpg";
imgArr[1] = "images/marioDino_430_290.jpg";
imgArr[2] = "images/mushroom_430_290.jpg";
imgArr[3] = "images/beer_430_290.jpg";


// HANDLERS 
window.onload = changeImage;
btnBack.addEventListener('click', retRow);
btnTest.addEventListener('click', testCarousel);


// image carousel        
function changeImage() {
    if (i >= 1) {
        imgSing[i - 1].style.color = "";
        imgSing[i - 1].style.fontSize = "0.91em";
    }
    else {
        imgSing[imgArr.length - 1].style.color = "";
        imgSing[imgArr.length - 1].style.fontSize = "0.91em";
    }

    imgCar.src = imgArr[i];

    if (i < imgArr.length - 1) {
        imgSing[i].style.color = "rgb(255, 255, 255)";
        imgSing[i].style.fontSize = "0.93em";
        i++;
    } else {
        imgSing[imgArr.length - 1].style.color = "rgb(255, 255,255)";
        imgSing[imgArr.length - 1].style.fontSize = "0.93em";
        i = 0;
    }
    addBtnListener();
    setTimeout("changeImage()", dur);
}

// add handlers to links
function addBtnListener() {
    for (var i = 0; i < imgSing.length; i++) {
        imgSing[i].addEventListener('click', clickImg);
    }
}

// show selected course field
function clickImg(event) {
    var imgTarget = event.target.id;
    var showTitle = event.target.innerText;

    rowCar.classList.remove('row-car')
    rowCar.classList.add('row-car-hd')
    rowCourseHd.classList.add('row-course');
    rowCourseHd.classList.remove('row-course-hd');

    switch (imgTarget) {
        case "btn-1 || link1":
            courseImg.src = imgArr[0];
            courseTitle.innerText = showTitle;
            break;
        case "btn-2":
            courseImg.src = imgArr[1];
            courseTitle.innerText = showTitle;
            break;
        case "btn-3":
            courseImg.src = imgArr[2];
            courseTitle.innerText = showTitle;
            break;
        case "btn-4":
            courseImg.src = imgArr[3];
            courseTitle.innerText = showTitle;
            break;
        default:
            break;
    }
}

function retRow() {
    rowCar.classList.add('row-car')
    rowCar.classList.remove('row-car-hd')
    rowCourseHd.classList.remove('row-course');
    rowCourseHd.classList.add('row-course-hd');
}

