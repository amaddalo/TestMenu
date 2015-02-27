/**
 * @author Anthony
 */
"use strict";

function draw_border(canvas, ctx) {
	ctx.strokeStyle = "#000000";
	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.lineTo(canvas.width, 0);
	ctx.lineTo(canvas.width, canvas.height);
	ctx.lineTo(0, canvas.height);
	ctx.lineTo(0, 0);
	ctx.stroke();
};
function draw_Menu(canvas,ctx){
	//ctx.fillStyle="#FFFFFF";
	//ctx.fillRect(0, 0, canvas.width, canvas.height);
	//load img
	var path="playbutton";
	var head = document.getElementsByTagName('head')[0];
	var img = new Image();
	img.src = "resource/" + path + ".png";
	img.name = path;
	//img.onload = function() {sprites[this.name] = this; sprites_loaded++;};
	head.appendChild(img);
	
	//draw img
	ctx.drawImage(img,0,0);
}
function load(){
	var the_canvas = document.getElementById("game_canvas");
	var the_ctx = the_canvas.getContext("2d");
	draw_border(the_canvas,the_ctx);
	draw_Menu(the_canvas,the_ctx);	
	the_canvas.onmousedown = function(e) {
		if(e.button==0){
			
		}
	}
}
load();
