(function() {
	/*
	** Scroll disable adapted from
	** http://stackoverflow.com/questions/4770025/how-to-disable-scrolling-temporarily?lq=1
	*/

	// left: 37, up: 38, right: 39, down: 40,
	// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
	var keyss = {37: 1, 38: 1, 39: 1, 40: 1};

	function prevent_Default(e) {
		e = e || window.event;
		if (e.preventDefault)
			e.preventDefault();
			e.returnValue = false;
	}

	function preventDefaultForScrollKeys(e) {
		if (keyss[e.keyCode]) {
			prevent_Default(e);
			return false;
		}
	}

	function disableScroll() {
		if (window.addEventListener) // older FF
			window.addEventListener('DOMMouseScroll', prevent_Default, false);
			window.onwheel = prevent_Default; // modern standard
			window.onmousewheel = document.onmousewheel = prevent_Default; // older browsers, IE
			window.ontouchmove  = prevent_Default; // mobile
			document.onkeydown  = preventDefaultForScrollKeys;
	}

	function enableScroll() {
		if (window.removeEventListener)
			window.removeEventListener('DOMMouseScroll', prevent_Default, false);
			window.onmousewheel = document.onmousewheel = null;
			window.onwheel = null;
			window.ontouchmove = null;
			document.onkeydown = null;
	}
// Click Events

	$('#work').click(function() {
		$('.works').addClass('works-menu');
		disableScroll();
	});

	$('#about').click(function() {
		$('.about').addClass('about-show');
		disableScroll();
	});

	$('.close, .self').click(function() {
		$('.works-menu').removeClass('works-menu');
		enableScroll();
	});

	$('.close-about').click(function() {
		$('.about-show').removeClass('about-show');
		enableScroll();
	});

	$(document).mouseup(function (e) {
		var container = $('.about');

		if (!container.is(e.target) && container.has(e.target).length === 0){
			$('.about-show').removeClass('about-show');
			enableScroll();
		}
	});
})();