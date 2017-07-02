'use strict';
$(function() {
 
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