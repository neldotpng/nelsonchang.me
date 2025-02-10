(function(){
	var loader = $('#loader');

	$('.next').click( function(event) {
		$('header, main, nav, footer').addClass('page-trans-next');

		event.preventDefault();
		var href = $(this).attr('href');

		setTimeout( function() {
			window.location = href;
		}, 600);
	});

	$('.prev').click( function(event) {
		$('header, main, nav, footer').addClass('page-trans-prev');

		event.preventDefault();
		var href = $(this).attr('href');

		setTimeout( function() {
			window.location = href;
		}, 600);
	});

	$(window).load( function() {
		loader.addClass('svg-container-close');

		setTimeout( function() {
			loader.remove();
		}, 600);
	});

	var hasRun = false;

	$(window).load( function() {
		if ( !hasRun ) {
			hasRun = true;
			$('body').scrollTop(0);
		}
	});

	new WOW().init();
})();