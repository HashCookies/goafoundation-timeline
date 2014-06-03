(function($){})(window.jQuery);
	
	var winH = $(window).height(),
	winW = $(window).width();
	
	var left = winW / 3;
	
$(document).ready(function() {
	
	var $bgImg = $('#bg-img');

	$bgImg.height(winH);
	
	
	$('.full-bg').waypoint(function() {
		url = $(this).attr('data-stretch');
		$bgImg.height(winH).addClass('parallaxed').anystretch(url, { speed: 'slow', elPosition: 'fixed' });
	}, { offset: '100%' });	
	
	$('.full-bg').waypoint(function() {
	  url = $(this).attr('data-stretch');
	  $bgImg.height(winH).addClass('parallaxed').anystretch(url, { speed: 'slow', elPosition: 'fixed' });
	}, {
	  offset: function() {
	    return -$(this).height();
	  }
	});
	
});