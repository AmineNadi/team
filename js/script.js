$(function () {
  $(".menu-toggle").on("click", function () {
    $("body").toggleClass("open");
  });
  $("nav ul li.sub").on("click", function () {
    $(".search-header").removeClass("open");
    $(".retour").toggleClass("show");
  });
  $(".retour").on("click", function () {
    $("li.list-inline-item.sub").removeClass("show");
    $(".retour").toggleClass("show");
  });
  $(".select-all").on("click", function () {
    $(".menu-langue").toggleClass("activat");
  });
  $(".select-l").on("click", function () {
    $(".dropdown-list-one").toggleClass("up");
  });
    
  });

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
  var mega = document.querySelectorAll("li.list-inline-item.sub");

  for (let index = 0; index < mega.length; index++) {
    const eleme = mega[index];

    eleme.addEventListener("click", function (event) {
        this.classList.add("show");
      })
  }
});
