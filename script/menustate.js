"use strict";

function MenuState(canvas, push_state,pop_state) {
	State.apply(this, [push_state, pop_state]);
	this.clickables=[];
	this.playBut=null;
	this.levelSelectBut=null;
	this.aboutBut=null;
	this.logo=null;
	//Could use the Sprites being loaded before menu was to be newed. Could we do that before doing new worldstate or menustate? 
	//sprite[] don't keep track of (x.y) location on canvas so drawing images in relation to one another doesn't work
	//Which for small amount of Sprites doesn't really matter.
	//Need to figure out way to use onlick methods of ctx drawn image objects since can't do the little alchemy detection without usable (x,y) locations
	
}

MenuState.prototype=Object.create(State.prototype);
MenuState.prototype.constructor=MenuState;

MenuState.prototype.draw=function(canvas,ctx){
	//background, logo, play, Level Select, about
	//Dont particularly need to have this redrawn with each step but rather only when state changes
	ctx.fillStyle="#FFFFFF";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	//logo=sprites["Logo"];
	//ctx.drawImage(this.logo,0,0);
	
	//DONT LIKE HAVING THIS OVER AND OVER IN DRAW BUT CANT HAVE IT IN NEW BECAUSE SPRITES AREN'T LOADED WHEN MENUSTATE IS FIRST MADE'
	this.playBut=sprites["PlayButton"];
	this.levelSelectBut=sprites["LevelButton"];
	this.aboutBut=sprites["AboutButton"];


	ctx.drawImage(this.playBut, canvas.width-this.playBut.width ,0);
	//Gets 0,0
	//console.log(this.playBut.x," ",this.playBut.y);
	ctx.drawImage(this.levelSelectBut, canvas.width-this.levelSelectBut.width, this.playBut.y+this.playBut.height+5);
	//console.log(this.levelSelectBut.x," ",this.levelSelectBut.y);
	ctx.drawImage(this.aboutBut,canvas.width-this.aboutBut.width,this.playBut.height+5+this.levelSelectBut.height+5);

};
MenuState.prototype.onclick = function(e){
	if(e.button==0){
		//check what button if any
		for(var but in this.clickables){
			console.log(but);
			var minX=this.clickables[but].x;
			var minY=this.clickables[but].y;
			var maxX=this.clickables[but].x+this.clickables[but].width;
			var maxY=this.clickables[but].y+this.clickables[but].height;
			if (e.x >= minX && e.x <= maxX && e.y >= minY && e.y <= maxY){
				//button clicked
				console.log(but);		
				break;
			}	
		}
		
	}
};
