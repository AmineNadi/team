import $ from 'jquery';
$(function(){
    $('body').on('click','.site-header__menu-icon', function(){
        $('.site-header__menu-icon').toggleClass('open');

	});
});

console.log("cc---------------")