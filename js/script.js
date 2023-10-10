import Translate from './translate.js';

let sections = ["home", "about", "newsletter", "gallery", "contact"]
let translator;
let gallery = [];
let modal;
let slideIndex;

function GoTo(section) {
    console.log(section)
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

function initializeGallery(){
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            } 
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

                        /*
                        <div class="container">
                            <img src="img_avatar.png" class="image">
                            <div class="overlay">My Name is John</div>
                        </div>
                        */
                        let val = gallery[key];
                        let cuadricula = document.getElementById(val["type"]);
                        if (cuadricula){
                            let elementoDiv = document.createElement("div");
                            elementoDiv.className = "container";
    
                            let image = document.createElement("img");
                            image.src = val["thumbnail"];
                            image.className = "image";

                            let imageName = document.createElement("div");
                            imageName.textContent = val["name"];
                            imageName.className = "overlay";
    
                            elementoDiv.appendChild(imageName);
                            elementoDiv.appendChild(image);

                            elementoDiv.addEventListener('click', () => {
                                console.log(val)
                                modal.style.display = "block";
                                document.getElementById("modal-title").textContent = val["name"];
                                document.getElementById("modal-text").textContent = val["description"];
                                document.getElementById("modal-image").src = val["thumbnail"];
                            });
                            cuadricula.appendChild(elementoDiv);
                        }
                    }
                }
            }
        }
    }
    xrhFile.send();
}

function translate(lng, tagAttr){
    translator = new Translate();
    translator.init(tagAttr, lng);
    translator.process();
} //dibuixos i series, grans formats, accións i instalacions

function init() {
    translate('esp','lng-tag')
    document.getElementById('home_nav').onclick = function () {GoTo("home");};
    document.getElementById('about_nav').onclick = function () {GoTo("about");};
    document.getElementById('newsletter_nav').onclick = function () {GoTo("newsletter");};
    document.getElementById('gallery_nav').onclick = function () {GoTo("gallery");};
    document.getElementById('contact_nav').onclick = function () {GoTo("contact");};
    document.getElementById('copy_email').onclick = function () {copyEmail();};
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

}

init()