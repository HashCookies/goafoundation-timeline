(function($){})(window.jQuery);
	
	var winH = $(window).height(),
	winW = $(window).width();
	
	var left = winW / 3;
	
$(document).ready(function() {

	var $main = $('#main');
	
	var bigDate = $('.big-date');
	
	$('#intro-slide').css({ marginTop: winH - 180 });
	$('.header-img').height(winH - 180);
	
	$main.onepage_scroll({
		beforeMove: function(index) {
			console.log(index);
			var current = $main.find('section:eq(' + index + ')');
			var currDate = current.attr('data-year');
			bigDate.text(currDate);
		}
	});
	
	$('#intro-slide .inner').css({
		
	});
	
	

	
});

$(window).load(function() {

});
