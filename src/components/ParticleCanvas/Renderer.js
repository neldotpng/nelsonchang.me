import WebGLView from './webgl/WebGLView';
import GUIView from './gui/GUIView';

export default class Renderer {

	constructor() {
	}

	init() {
		this.initWebGL();
		this.initGUI();
		this.addListeners();
		this.animate();
		this.resize();
	}

	initWebGL() {
		this.webgl = new WebGLView(this);
		document.querySelector('#container').appendChild(this.webgl.renderer.domElement);
	}

	initGUI() {
		this.gui = new GUIView(this);
	}

	addListeners() {
		this.handlerAnimate = this.animate.bind(this);

		window.addEventListener('resize', this.resize.bind(this));

		const el = this.webgl.renderer.domElement;
	}

	animate() {
		this.update();
		this.draw();

		this.raf = requestAnimationFrame(this.handlerAnimate);
	}

	// ---------------------------------------------------------------------------------------------
	// PUBLIC
	// ---------------------------------------------------------------------------------------------

	update() {
		if (this.webgl) this.webgl.update();
		if (this.gui) this.gui.update();
	}

	draw() {
		if (this.webgl) this.webgl.draw();
		if (this.gui.stats) this.gui.stats.end();
	}

	// ---------------------------------------------------------------------------------------------
	// EVENT HANDLERS
	// ---------------------------------------------------------------------------------------------

	resize() {
		if (this.webgl) this.webgl.resize();
	}
}
