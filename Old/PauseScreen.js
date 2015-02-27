/* An independent screen that has an independent ginput and screen display
 * Can either copy past into subclasses to overwrite initialization and 
 * not need to reuse base constructor code. Along with allow to put specific
 * GUI input into a seperate class.
 * 
 * Each Screen gets it's only GUI or gInput
 */
"use strict";
function PauseScreen(alwaysUpdate, alwaysDraw,canvas){
    Sprite.call(this);
}
PauseScreen.prototype= Object.create(Screen.prototype);
PauseScreen.prototype.constructor= Screen;

Screen.prototype.init = function(){
	
	var main = new TextButton("Main Menu");
    main.setLabelColors("#aaaaaa", "#00ff00", "#ff0000");
    this.gui.addChild(main);
    main.func = function(){
        screenMan.remove(pauseMenu);
        screenMan.remove(gameScreen);
    }
}
Screen.prototype.update=function(){
	this.updateChildren();
}