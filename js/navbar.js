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
    $('body').on('click','.menu-sel-langue', function(){
        $('.menu-sel-langue .dropdown-list').toggleClass('open-drop');
	});
    $('body').on('click','.menu-sel-curency', function(){
        $('.menu-sel-curency .dropdown-list').toggleClass('open-drope');
	});
  
});
