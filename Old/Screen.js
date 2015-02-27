/* An independent screen that has an independent ginput and screen display
 * Can either copy past into subclasses to overwrite initialization and 
 * not need to reuse base constructor code. Along with allow to put specific
 * GUI input into a seperate class.
 * 
 * Each Screen gets it's only GUI
 */
function Screen(alwaysUpdate, alwaysDraw,canvas){
    Sprite.call(this);
    
    this.canvas = canvas;
    
    this.alwaysUpdate = alwaysUpdate;
    this.alwaysDraw = alwaysDraw;
    
    this.stage = new Sprite();
    this.addChild(this.stage);
    
    this.gui = new GUI(gInput);
    this.addChild(this.gui);
    
    
    
    this.initialized = false;
    this.updates=0;
}

Screen.prototype = new Sprite();

Screen.prototype.init = function(){
}
Screen.prototype.update=function(){
	this.updateChildren();
}