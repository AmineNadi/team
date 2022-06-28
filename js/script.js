$(function () {
  $(".menu-toggle").on("click", function () {
    $("body").toggleClass("open");
  });
  $("nav ul li.sub").on("click", function () {
    $(".search-header").removeClass("open");
    $(".retour").toggleClass("show");
    $(".footer-mt").addClass("show");
  });
  $(".retour").on("click", function () {
    $("li.list-inline-item.sub").removeClass("show");
    $(".retour").toggleClass("show");
    $(".footer-mt").removeClass("show");
  });
  //$(".select-all").on("click", function () {
   // $(".menu-langue").toggleClass("activat");
  //});
  //$(".select-l").on("click", function () {
  //  $(".dropdown-list-one").toggleClass("up");
  //});
  //$(".select-e").on("click", function () {
  //  $(".dropdown-list-two").toggleClass("look");
  //});
    
  });


    const select = document.querySelector(".select-all");
    const options_list = document.querySelector(".menu-langue");
    const svg_down = document.querySelector(".svg-down");
    

    

    select.addEventListener("click", () => {
      options_list.classList.toggle("activat");
      svg_down.classList.toggle("activat");

    });

    const drop_item = document.querySelector(".dropdown-list-langue");
    const seli = document.querySelector(".dropdown-select-langue");
    const options = document.querySelectorAll(".dropdown-list__item");
  
      seli.addEventListener("click", () => {
      drop_item.classList.toggle("ouvert");
    });
    options.forEach((option) => {
      option.addEventListener("click", () => {
        options.forEach((option) => {option.classList.remove('selected')});
        seli.querySelector("span").innerHTML = option.innerHTML;
        option.classList.add("selected");
        drop_item.classList.toggle("ouvert");
        
      });
    });





    const drop_item_cur = document.querySelector(".dropdown-list-currency");
    const seli_cur = document.querySelector(".dropdown-select-currency");
    const optionss = document.querySelectorAll(".dropdown-list__iteme");
  
      seli_cur.addEventListener("click", () => {
      drop_item_cur.classList.toggle("ouvert");
   
    });

    optionss.forEach((optione) => {
      optione.addEventListener("click", () => {
        optionss.forEach((optione) => {optione.classList.remove('selecte')});
        seli_cur.querySelector("span").innerHTML = optione.innerHTML;
        optione.classList.add("selecte");
        drop_item_cur.classList.toggle("ouvert");
        
      });
    });
  

    let langue = document.querySelector(".select-l");
    let currency = document.querySelector(".select-e");
    let total = document.querySelector(".select-all span")
    
    document.querySelector(".btn-lang").addEventListener("click", myfu);

    function myfu() {
      if(langue.textContent=="Français" && currency.textContent=="USD"){
        total.textContent="FR- $";
      }else if(langue.textContent=="Français" && currency.textContent=="GBP"){
        total.textContent="FR- £"
      }else if(langue.textContent=="Français" && currency.textContent=="EUR"){
        total.textContent="FR- €"
      }
      if(langue.textContent=="English" && currency.textContent=="USD"){
        total.textContent="EN- $";
      }else if(langue.textContent=="English" && currency.textContent=="GBP"){
        total.textContent="EN- £"
      }else if(langue.textContent=="English" && currency.textContent=="EUR"){
        total.textContent="EN- €"
      }
      if(langue.textContent=="Deutsch" && currency.textContent=="USD"){
        total.textContent="DE- $";
      }else if(langue.textContent=="Deutsch" && currency.textContent=="GBP"){
        total.textContent="DE- £"
      }else if(langue.textContent=="Deutsch" && currency.textContent=="EUR"){
        total.textContent="DE- €"
      }
    }
 


  $(function() {
    var header = $(".header-content");
    var banner =$(".banner")
  
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll > 40) {
            header.addClass("scrolled");
            banner.addClass("scrolled")
        } else {
            header.removeClass("scrolled");
            banner.removeClass("scrolled");
        }
    });
  });



  var array = document.querySelectorAll(".links-footer");

  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    element.addEventListener("click", function (event) {
      

      if (this.classList.contains("active")) {
        this.classList.remove("active");
      } else {
        this.classList.add("active");
      }

    });
  }

  //-megamenu tablette mobile-//

  var mega = document.querySelectorAll("li.list-inline-item.sub");

  for (let index = 0; index < mega.length; index++) {
    const eleme = mega[index];

    eleme.addEventListener("click", function (event) {
        this.classList.add("show");
      })
  }






//- sliderShow- //


const slides_item = document.querySelectorAll('.carousel-item');
let carouselSlide =document.querySelector('.carousel');
var next = document.querySelector('.next');
var prev = document.querySelector('.prev');
let page_slider = document.querySelector('.page-slider').innerHTML;
let counter = 1;
let size;

Array.prototype.slice.call(carouselSlide.children);

function duplicateChildNodes (parentId){
  var parent = document.getElementById(parentId);
  NodeList.prototype.forEach = Array.prototype.forEach;
  var children = parent.childNodes;
  children.forEach(function(item){
    var cln = item.cloneNode(true);
    parent.appendChild(cln);
  });
};



function getCarouselWidth() {
  size = slides_item[0].clientWidth;
  
}
getCarouselWidth();
addEvents();



function addEvents(){
  window.onresize = ()=>{
    getCarouselWidth();
    prevSlide();
    
  };

  next.addEventListener('click', nextSlide );
  
  prev.addEventListener('click',prevSlide);
}

function prevSlide(){
  if(counter <= 1 ){
    carouselSlide.style.transition ="transform 0.4s ease-in-out";
    
    carouselSlide.style.transform ='translateX('+ (size * (counter - slides_item.length  )) + 'px)';
    counter = slides_item.length;
    return;
  
}else {
  carouselSlide.style.transition ="transform 0.4s ease-in-out";
  carouselSlide.style.transform ='translateX(' + (-size * (counter - slides_item.length +1) ) + 'px)';
  counter--;
}

}

function nextSlide() {
  if(counter >= slides_item.length) {
    
    carouselSlide.style.transition ="transform 0.4s ease-in-out";

    carouselSlide.style.transform ='translateX( ' + (counter - slides_item.length) +'px)';
    counter = 1;
    return;
  }else {
  carouselSlide.style.transition ="transform 0.4s ease-in-out";
  carouselSlide.style.transform ='translateX(' + (-size * counter) + 'px)';
  counter++;
  }
  if(-size > -2732){
    duplicateChildNodes("slideId");
    
  }
  
}


if(slides_item[0].clientWidth){
  page_slider = "01 / 03" ;
}

else if(slides_item[1].clientWidth){
    page_slider = "02 / 03" ;
  }






const marque_item = document.querySelectorAll('.marque-item');
const carouselMarque =document.querySelector('.carousele');

var next_one =document.querySelectorAll('.next_carousel');
var prev_one = document.querySelectorAll('.prev_carousel');
let count = 1;
const sizee = marque_item[0].clientWidth;

for (let index = 0; index < next_one.length; index++) {
  const caro = next_one[index];

caro.addEventListener('click', () => {
  if(count >= marque_item.length) {
    
    carouselMarque.style.transform ='translateX( ' + (count - marque_item.length) +')';
    count = 1;
    return;
  }else{
    carouselMarque.style.transition ="transform 0.4s ease-in-out";
  
  carouselMarque.style.transform ='translateX(' + (-sizee * count) + 'px)';
  count++;
  }
}); }

for (let index = 0; index < prev_one.length; index++) {
  const caroo = prev_one[index];
caroo.addEventListener('click', () => {
    if(count <= 1 ){
      carouselMarque.style.transition ="transform 0.4s ease-in-out";
      carouselMarque.style.transform ='translateX('+ (sizee * (count - marque_item.length  )) + 'px)';
      count = 3;
      return;
    
  }else{
  
    carouselMarque.style.transform ='translateX(' + (-sizee * (count - marque_item.length +1) ) + 'px)';
    count--;
  
  }
});

}
