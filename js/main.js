'use strict';
$(function() {

$("a[href*='#']").click(function() {
	$('body').animate({
		scrollTop: $(this.hash).offset().top - 50 }, 500
	);
});

$(window).scroll(function () {
	if($(window).scrollTop() >=50) {
		$('#main-nav').addClass('scroll');
		$('#main-nav').css({'transition': 'all 0.3'});
	} else {
		$('#main-nav').removeClass('scroll');
	}
	
});
	if($(window).scrollTop() >=50) {
		$('#main-nav').addClass('scroll'); }
 
});