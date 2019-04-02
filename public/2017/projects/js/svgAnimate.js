/**
 * Adapted from
 * http://www.codrops.com
 */

(function() {

	var docElem = window.document.documentElement;

	window.requestAnimFrame = function(){
		return (
			window.requestAnimationFrame       ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame    ||
			window.oRequestAnimationFrame      ||
			window.msRequestAnimationFrame     ||
			function(/* function */ callback){
				window.setTimeout(callback, 1000 / 60);
			}
		);
	}();

	window.cancelAnimFrame = function(){
		return (
			window.cancelAnimationFrame       ||
			window.webkitCancelAnimationFrame ||
			window.mozCancelAnimationFrame    ||
			window.oCancelAnimationFrame      ||
			window.msCancelAnimationFrame     ||
			function(id){
				window.clearTimeout(id);
			}
		);
	}();

	function SVGEl( el ) {
		this.el = el;
		this.image = this.el.previousElementSibling;
		this.current_frame = 0;
		this.total_frames = 100;
		this.path = [];
		this.length = [];
		this.handle = 0;
		this.init();
	}

	SVGEl.prototype.init = function() {
		var self = this;
		[].slice.call( this.el.querySelectorAll( 'path' ) ).forEach( function( path, i ) {
			self.path[i] = path;
			var l = self.path[i].getTotalLength();
			self.length[i] = l;
			self.path[i].style.strokeDasharray = l + ' ' + l;
			self.path[i].style.strokeDashoffset = l;
		} );
	};

	SVGEl.prototype.render = function() {
		if( this.rendered ) return;
		this.rendered = true;
		this.draw();
	};

	SVGEl.prototype.draw = function() {
		var self = this,
			progress = this.current_frame/this.total_frames;
		if (progress > 1) {
			window.cancelAnimFrame(this.handle);
			this.showImage();
		} else {
			this.current_frame++;
			for(var j=0, len = this.path.length; j<len;j++){
				this.path[j].style.strokeDashoffset = Math.floor(this.length[j] * (1 - progress));
			}
			this.handle = window.requestAnimFrame(function() { self.draw(); });
		}
	};

	SVGEl.prototype.showImage = function() {
		$('.illustration').addClass('show');
		$('.line-drawing').attr('class', 'line-drawing hide');
	};
	
	function init() {
		var svg = new SVGEl( document.querySelector( 'svg.line-drawing' ) );
		svg.render();
	}

	var executed = false;

	document.addEventListener( 'scroll', function() {
		if ( !executed ) {
			executed = true;
			setTimeout(function() {
				init();
			}, 500);
		}
	});

	$('.scroll-down').click( function() {
		if ( !executed ) {
			executed = true;
			setTimeout(function() {
				init();
			}, 500);
		}
	});

})();