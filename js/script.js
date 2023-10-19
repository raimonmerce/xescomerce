import Translate from './translate.js';

let sections = ["home", "about", "newsletter", "gallery", "contact"]
let translator;
let gallery = [];
let selectedGallery = [];
let unselectedGallery = [];
let gridId = {};
let modal;
let slideIndex = 1;

function GoTo(section) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("sectioncontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" nav_active", "");
    }
    document.getElementById(section).style.display = "block";
    document.getElementById(section+"_nav").className += " nav_active";

    if (section == "gallery"){
        var acc = document.getElementsByClassName("accordion");

        for (i = 0; i < acc.length; i++) {
            var panel = acc[i].nextElementSibling;
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }
}

function copyEmail(){
    var Url = document.getElementById("hidden_email");
    Url.value = "xescomb@gmail.com";
    Url.focus();
    Url.select();
    document.getElementById("custom-tooltip").style.display = "inline";
    document.execCommand("copy");
    setTimeout( function() {
        document.getElementById("custom-tooltip").style.display = "none";
    }, 1000);

};

function plusSlides(n) {
    showSlides(slideIndex += n);
}
  
function currentSlide(n) {
    showSlides(slideIndex = n);
}
  
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

function toggleAccordion(elem){
    elem.classList.toggle("accordion_active");
    var panel = elem.nextElementSibling;
    let val = parseInt(panel.style.maxHeight.replace("px", ""));

    if (!panel.style.maxHeight || val > 0) {
        panel.style.maxHeight = 0;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
}

function initializeGallery(){
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            toggleAccordion(this)
        });
    }

    var xrhFile = new XMLHttpRequest();
    //load content data 
    xrhFile.open("GET", "./js/gallery.json", false);
    xrhFile.onreadystatechange = function ()
    {
        if(xrhFile.readyState === 4)
        {
            if(xrhFile.status === 200 || xrhFile.status == 0)
            {
                gallery = JSON.parse(xrhFile.responseText);
                for (const key in gallery) {
                    if (gallery.hasOwnProperty(key)) {
                        let val = gallery[key];
                        let cuadricula = document.getElementById(val["type"]);
                        if (cuadricula){
                            let elementoDiv = createGridElement(val)
                            cuadricula.appendChild(elementoDiv);
                        }
                    }
                }
            }
        }
    }
    xrhFile.send();
}

function getRandomGallery(){
    let randomIndex = Math.floor(Math.random() * unselectedGallery.length);
    let randomKey = unselectedGallery[randomIndex];
    unselectedGallery.splice(randomIndex, 1);
    selectedGallery.push = randomKey;
    return randomKey;
}

function createGridElement(element){
    let elementoDiv = document.createElement("div");
    
    elementoDiv.className = "container";

    let image = document.createElement("img");
    image.src = element["thumbnail"];
    image.className = "image";
    //image.classList.add('fade');

    let imageName = document.createElement("div");
    imageName.textContent = element["name"];
    imageName.className = "overlay";

    elementoDiv.appendChild(imageName);
    elementoDiv.appendChild(image);

    elementoDiv.addEventListener('click', () => {
        modal.style.display = "block";
        document.getElementById("modal-title").textContent = element["name"];
        document.getElementById("modal-text").textContent = element["description"];
        let slideshow_div = document.getElementById("slideshow-div");
        let dots_div = document.getElementById("dots-div");
        slideshow_div.innerHTML = "";
        dots_div.innerHTML = "";
        for (let i = 0; i < element["imatges"].length; ++i){
            let image = element["imatges"][i];
            slideshow_div.innerHTML += '<div class="mySlides fade"> <div class="numbertext">' + (i+1) + " / " + element["imatges"].length + '</div> <img src="' + image + '" style="width:100%"> </div>';
            
            let dot = document.createElement("span");
            dot.classList.add('dot');
            dot.onclick = function () {currentSlide(i+1);};
            dots_div.appendChild(dot);
        }

        showSlides(slideIndex);
        document.getElementById("modal-image").src = element["thumbnail"];
    });

    return elementoDiv;
}

function getRandomTime(){
    return Math.floor(Math.random() * (10000 - 3000)) + 2000;
}

function updateElement(idElem){
    let key = getRandomGallery();
    let val = gallery[key];
    let oldKey = gridId[idElem];
    gridId[idElem] = key;

    selectedGallery = selectedGallery.filter(item => item !== oldKey);
    unselectedGallery.push(oldKey);

    let oldElement = document.getElementById(idElem);
    let element = createGridElement(val);
    element.id = idElem;
    //oldElement.replaceWith(element)
    oldElement.classList.add('fadeout');
    oldElement.style.opacity = 0;
    setTimeout(function () {
        oldElement.replaceWith(element);
        oldElement.classList.remove('fadeout');
        oldElement.classList.add('fadein');
        oldElement.style.opacity = 1;
    }, 2000); 

    setTimeout(() => {
        updateElement(idElem)
    }, getRandomTime());
    
}

function initializeHome(){
    unselectedGallery = Object.keys(gallery);
    let randomHome = document.getElementById("random_home");
    for (let i = 0; i < 9; ++i){
        let tmpId = "rand_" + i;
        let key = getRandomGallery();
        gridId[tmpId] = key;
        let element = gallery[key];
        
        let elementoDiv = createGridElement(element);
        elementoDiv.id = tmpId;
        elementoDiv.classList.add('fadeout');
  
        setTimeout(() => {
            updateElement(tmpId)
        }, getRandomTime());

        randomHome.appendChild(elementoDiv);
    }
}

function translate(lng, tagAttr){
    translator = new Translate();
    translator.init(tagAttr, lng);
    translator.process();
}

function init() {
    translate('esp','lng-tag')
    document.getElementById('home_nav').onclick = function () {GoTo("home");};
    document.getElementById('about_nav').onclick = function () {GoTo("about");};
    document.getElementById('newsletter_nav').onclick = function () {GoTo("newsletter");};
    document.getElementById('gallery_nav').onclick = function () {GoTo("gallery");};
    document.getElementById('contact_nav').onclick = function () {GoTo("contact");};
    document.getElementById('copy_email').onclick = function () {copyEmail();};
    document.getElementById('prev_slideshow').onclick = function () {plusSlides(-1);};
    document.getElementById('next_slideshow').onclick = function () {plusSlides(1);};

    modal = document.getElementById("myModal");
    document.getElementsByClassName("close")[0].onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    let dropdown = document.getElementById('language-picker-select');

  
    dropdown.addEventListener('change', function() {
        translate(dropdown.value,'lng-tag')
    });
    
    initializeGallery()
    initializeHome()

}

init()