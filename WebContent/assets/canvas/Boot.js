
// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.0 (Phaser v2.6.2)


/**
 * Boot.
 */
function Boot() {
	
	Phaser.State.call(this);
	
}

/** @type Phaser.State */
var Boot_proto = Object.create(Phaser.State.prototype);
Boot.prototype = Boot_proto;
Boot.prototype.constructor = Boot;

Boot.prototype.init = function () {
	
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;
	this.game.renderer.renderSession.roundPixels = true;
	
};

Boot.prototype.preload = function () {
	
	this.load.pack('boot', 'assets/pack.json');
	
};

Boot.prototype.create = function () {
	
	// all the assets used in the splash are loaded
	// so jump to the Preloader state
	this.game.state.start("Preloader");
	
	
};

/* --- end generated code --- */
// -- user code here --
