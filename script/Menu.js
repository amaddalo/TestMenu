/**
 * @author Anthony
 */
"use strict";

var Menu= function(canvas,ctx){
	this.canvas=canvas;
	this.ctx=ctx;
	this.clickables=[];
	
}

function draw_border(canvas, ctx) {
	ctx.strokeStyle = "#000000";
	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.lineTo(canvas.width, 0);
	ctx.lineTo(canvas.width, canvas.height);
	ctx.lineTo(0, canvas.height);
	ctx.lineTo(0, 0);
	ctx.stroke();
}
function draw_Menu(canvas, ctx){
	ctx.fillStyle="#FFFFFF";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	playBut=new sprites["playbutton"];
	ctx.drawImage(playBut,0,0);
}
function clickedOn(element, mousePos) {
    var minX = element.x;
    var minY = element.y;
    var maxX = element.x + element.width;
    var maxY = element.y + element.height;
    //stuff is square despite appearance
    var mouseX = mousePos.x;
    var mouseY = mousePos.y;
    if (mouseX >= minX && mouseX <= maxX && mouseY >= minY && mouseY <= maxY) {
        return true;
    }
    return false;
}

Menu.prototype.load= function(){

	draw_Menu(this.canvas, this.ctx);	
	draw_border(this.canvas,this.ctx);
	var mousePos={x: 0, y: 0};
	var v;
	the_canvas.onmousedown = function(e) {
		if(e.button==0){
			mousePos = {x: e.offsetX, y: e.offsetY};
			for (v in clickables){
				derp=clickables[v];
				if(clickedOn(derp,mousePos)){
					
				}
			}
		}
	}
}
