// Place any jQuery/helper plugins in here.
import $ from 'jquery';
$(function(){
    $('body').on('click','.site-header__menu-icon', function(){
        $('.site-header__menu-icon').toggleClass('open');
        $('.menu-mt').toggleClass('open');
        $('.bg-header').toggleClass('open');
	});
    
});
$(function(){
    
        $('body').on('click','.perso-mt', function(){
            $('.menu-perso').toggleClass('active');
        });
});