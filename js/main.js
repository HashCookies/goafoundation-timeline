(function($){})(window.jQuery);
	
	var winH = $(window).height(),
	winW = $(window).width();
	
	var left = winW / 3;
	
$(document).ready(function() {

	var $main = $('#main');
	
	var bigDate = $('.big-date');
	

	$('.header-img').height(winH - 180).anystretch('file://localhost/Users/hashcookies/Dropbox/GoaFoundation.com/timeline/images/main-bg.jpg', { elPosition: 'fixed'} );
	
	$('.slide2').css({ marginTop: winH });
	
	$('.slide4').waypoint(function() {
		$('.header-img').height(winH).addClass('parallaxed').anystretch('file://localhost/Users/hashcookies/Dropbox/GoaFoundation.com/timeline/images/3993981365_e93f8c8079_o.jpg', { speed: 'slow' });
	}, { offset: '100%' });	
	

	
});

$(window).load(function() {

});
