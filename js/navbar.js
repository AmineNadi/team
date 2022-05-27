import $ from 'jquery';

$(function() {
    $("body").on('click','.site-header__menu-icon','.navbar ul li',function() {
      $(this).toggleClass("open");
      $('.navbar ul li').toggleClass("open");
    });
  });
