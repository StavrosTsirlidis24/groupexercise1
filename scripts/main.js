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
var courseP = document.getElementsByClassName('course-p')[0];

// buttons and links
var courseLinks = document.getElementsByClassName('course-link');
var link1 = document.getElementById('link-1');
var link2 = document.getElementById('link-2');
var link3 = document.getElementById('link-3');
var link4 = document.getElementById('link-4');
var btn1 = document.getElementById('btn-1');
var btn2 = document.getElementById('btn-2');
var btn3 = document.getElementById('btn-3');
var btn4 = document.getElementById('btn-4');
var btnBack = document.getElementById('back-btn');
var btnAdd = document.getElementsByClassName('btn-add')[0];

var satText = "Satellit-reparatör har sedan länge varit en av våra populäraste utbildningar. Efterfrågan på kvalificerade reparatörer bedöms vara fortsatt hög under många decennier framöver. \n\nSom del i utbildningen ingår rymdfärder, gymnastik i rymddräkt samt inlärning av teknik-orienterade språkkunskaper inom ryska och mandarin. Se till att bli en av dessa kvalificerade reparatörer. ";
var marioText = "Efterfrågan på Mario-look-a-like:s har ökat lavinartat de senaste åren Tyvärr har \"marknaden\" översvämmats med oseriösa aktörer som saknar rätt kunskaper och hjärta för uppdraget. KYH har därför tagit på sig uppgiften att rätta till det här kulturella underskottet som hela samhället lider av! \n\nSom del av utbildningen ingår att dagligen vara utklädd till Mario alternativt en av hans vänner samt LIA där man är verksam ute på fångvårds-anstalter och äldreboenden för att på plats lära sig yrket.";
var svampText = "Svampplockning är idag mycket mera än enbart en hobbyverksamhet för naturmänniskor. Efterfrågan på professionella svampplockare bedöms öka kraftigt de kommande åren speciellt gäller detta efterfrågan från utlandet, t ex Norge som till följd av bristande framförhållning lider stor brist på kunnigt folk inom området. \n\nFörutom avancerade svampkunskaper ingår även realistiska överlevnadsövningar i rovdjursrika vildmarker som del av utbildningen.";
var beerText = "De flesta känner till Baarista yrket men få vet att Beerrista är framtidens yrke! KYH har därför startat upp en helt ny utbildning med syfte att utbilda professionella ölkännare som kan arbeta i de mest krävande miljöer.  \n\nSom del av utbildningen ingår rutinmässiga krogbesök och ölprovning. Då intresset för kursen bedöms bli enormt har KYH bestämt att enbart de som kan certifiera att de dricker minst 14 liter öl i veckan ska anses vara tillräckligt kvalificerade för att bli antagna.";


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


// image carousel        
function changeImage() {
    if (i >= 1) {
        imgSing[i - 1].style.color = "";
        imgSing[i - 1].style.fontSize = "0.93em";
    }
    else {
        imgSing[imgArr.length - 1].style.color = "";
        imgSing[imgArr.length - 1].style.fontSize = "0.93em";
    }

    imgCar.src = imgArr[i];

    if (i < imgArr.length - 1) {
        imgSing[i].style.color = "rgb(255, 255, 255)";
        imgSing[i].style.color = "rgb(255, 165, 0)";
        imgSing[i].style.textShadow = "none";
        imgSing[i].style.textShadow = "0.5px 0.5px 0.5px rgb(100,100,100)";
        ;
        imgSing[i].style.fontSize = "0.95em";
        i++;
    } else {
        imgSing[imgArr.length - 1].style.color = "rgb(255, 255,255)";
        imgSing[i].style.color = "rgb(255, 165, 0)";
        imgSing[i].style.textShadow = "none";
        imgSing[i].style.textShadow = "0.5px 0.5px 0.5px rgb(100,100,100)";
        imgSing[imgArr.length - 1].style.fontSize = "0.95em";
        i = 0;
    }
    addBtnListener();
    setTimeout("changeImage()", dur);
}

// add handlers to links
function addBtnListener() {
    for (var i = 0; i < imgSing.length; i++) {
        imgSing[i].addEventListener('click', clickLink);
    }
    /*
    for ( var i = 0; i < courseLinks.length; i++ ) {
        courseLinks[i].addEventListener('click', clickLink);       
    } */
    for (var i = 0; i < courseLinks.length; i++) {
        courseLinks[i].addEventListener('click', clickLink);
    }
}

// show selected course field
function clickLink(event) {
    var linkTarget = event.target.id;
    var showTitle = event.target.innerText;

    rowCar.classList.remove('row-car')
    rowCar.classList.add('row-car-hd')
    rowCourseHd.classList.add('row-course');
    rowCourseHd.classList.remove('row-course-hd');

    switch (linkTarget) {
        case "btn-1":
            courseImg.src = imgArr[0];
            courseTitle.innerText = showTitle;
            courseP.innerText = satText;
            break;
        case "link-1":
            courseImg.src = imgArr[0];
            courseTitle.innerText = showTitle;
            courseP.innerText = satText;
            break;
        case "btn-2":
            courseImg.src = imgArr[1];
            courseTitle.innerText = showTitle;
            courseP.innerText = marioText;
            break;
        case "link-2":
            courseImg.src = imgArr[1];
            courseTitle.innerText = showTitle;
            courseP.innerText = marioText;
            break;
        case "btn-3":
            courseImg.src = imgArr[2];
            courseTitle.innerText = showTitle;
            courseP.innerText = svampText;
            break;
        case "link-3":
            courseImg.src = imgArr[2];
            courseTitle.innerText = showTitle;
            courseP.innerText = marioText;
            break;
        case "btn-4":
            courseImg.src = imgArr[3];
            courseTitle.innerText = showTitle;
            courseP.innerText = beerText;
            break;
        case "link-4":
            courseImg.src = imgArr[3];
            courseTitle.innerText = showTitle;
            courseP.innerText = marioText;
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

