// Place any jQuery/helper plugins in here.
import $ from 'jquery';
$(function(){
    $('body').on('click','.site-header__menu-icon', function(){
        $('.site-header__menu-icon').toggleClass('open');
        $('.menu-mt').toggleClass('open');
        $('.bg-header').toggleClass('open');
	});
    $('body').on('click','.select-langue > span', function(){
        $('.menu-langue').toggleClass('active');
	});
  $('body').on('click','.perso-mt , .retour-perso', function(){
    $('.menu-perso-mt').toggleClass('up');
});

  
});
    const select = document.querySelector(".dropdown-select");
    const options_list = document.querySelector(".dropdown-list");
    const options = document.querySelectorAll(".dropdown-list__item");

    //show & hide options list
    select.addEventListener("click", () => {
      options_list.classList.toggle("activat");
     
     // select.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
    });

    //select option
    options.forEach((option) => {
      option.addEventListener("click", () => {
        options.forEach((option) => {option.classList.remove('selected')});
        select.querySelector("span").innerHTML = option.innerHTML;
        option.classList.add("selected");
        options_list.classList.toggle("activat");
       
        //select.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
      });
    });

    const selecte = document.querySelector(".dropdown-selecte");
    const options_liste = document.querySelector(".dropdown-liste");
    const optionse = document.querySelectorAll(".dropdown-list__iteme");

    //show & hide options list
    selecte.addEventListener("click", () => {
      options_liste.classList.toggle("activate");
     
     // select.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
    });

    //select option
    optionse.forEach((option) => {
      option.addEventListener("click", () => {
        optionse.forEach((option) => {option.classList.remove('selectede')});
        selecte.querySelector("span").innerHTML = option.innerHTML;
        option.classList.add("selectede");
        options_liste.classList.toggle("activate");
       
        //select.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
      });
    });

    let langue = document.querySelector(".select-l");
    let currency = document.querySelector(".select-c");
    let total = document.querySelector(".select-all");
    
    document.querySelector(".btn").addEventListener("click", myfu);

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