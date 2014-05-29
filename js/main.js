(function($){})(window.jQuery);
	
	var winH = $(window).height(),
	winW = $(window).width();
	
	var left = winW / 3;
	
$(document).ready(function() {

	var $main = $('#main');
	
	var bigDate = $('.big-date');
	

	$('.header-img').height(winH - 180).anystretch('file://localhost/Users/hashcookies/Dropbox/GoaFoundation.com/timeline/images/main-bg.jpg', { elPosition: 'fixed'} );
	
	$('.slide2').css({ marginTop: winH });
	
	$('#intro-slide').waypoint(function() {
		$('.header-img').height(winH - 180).removeClass('parallaxed').anystretch('file://localhost/Users/hashcookies/Dropbox/GoaFoundation.com/timeline/images/main-bg.jpg', { elPosition: 'fixed'} );
	});
	
	$('.full-bg').waypoint(function() {
		url = $(this).attr('data-stretch');
		$('.header-img').height(winH).addClass('parallaxed').anystretch(url, { speed: 'slow' });
	}, { offset: '100%' });	
	
	
	
});

$(window).load(function() {

});
