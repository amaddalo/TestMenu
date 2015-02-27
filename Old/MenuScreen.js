/**
 * @author Anthony
 */
"use strict";
function MenuScreen(alwaysUpdate,alwaysDraw,canvas){
	Screen.call(this);	
}
MenuScreen.prototype= Object.create(Screen.prototype);
MenuScreen.prototype.constructor= Screen;

MenuScreen.prototype.init=function(){
	
    var newGame = new TextButton("New Game");
    var newGameBut= new Button(newGameBut);
    newGame.setLabelColors("#aaaaaa", "#00ff00", "#ff0000");
    //set positions for newGame button
    newGameBut.x=canvas.width /5;
    newGameBut.y=0;
    newGameBut.width=150;
    newGameBut.height=100;
    newGameBut.image = Textures.load("lightningball.png");
    
    newGameBut.bbox = new BRect(newGameBut.x, newGameBut.y, newGameBut.width, newGameBut.height);
    
    newGameBut.func=function(){
	console.log("yep");
	var newGameScreen= new GameScreen(false,true,canvas);
	screenMan.push(newGameScreen);
		}
    
    
    this.gui.addChild(newGameBut);
    
    
    newGame.func = function(){
        screenMan.push(gameScreen);
    }

}

MenuScreen.prototype.update=function(){
	this.updateChildren();
}

