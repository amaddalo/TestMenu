"use strict";

function loadScript(path, callback)
{
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = path;

    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}
//Loads an array of scripts (in that order), then call final_callback
function loadScripts(urls, final_callback) {
	function build_recursive_bullshit(urls, start, final) {
		if (start >= urls.length) {
			return final;
		} else {
			return function() {
				loadScript(urls[start], build_recursive_bullshit(urls, start+1, final));
			};
		}
	};
	build_recursive_bullshit(urls, 0, final_callback)();
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
};
function draw_loadingbar(canvas, ctx, status) {
	var percent = status.loaded_sprites/status.max;
	var height = 16;
	var width = Math.min(canvas.width, 256);
	var top = canvas.height/2 - height/2;
	var left = canvas.width/2 - width/2;
	var center = percent*width;
	
	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(left, top, width, height);
	ctx.fillStyle = "#000000";
	ctx.fillRect(left, top, center, height);
	ctx.stokeStyle = "#000000";
	ctx.beginPath();
	ctx.moveTo(left, top);
	ctx.lineTo(left+width, top);
	ctx.lineTo(left+width, top+height);
	ctx.lineTo(left, top+height);
	ctx.lineTo(left, top);
	ctx.stroke();
}

function mainFunc(){
	var canvas = document.getElementById("game_canvas");
	var ctx = canvas.getContext("2d");
	
	//blank and draw border
	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	draw_border(canvas, ctx);
	
	var menu= new Menu(canvas, ctx);
	menu.load();
}
loadScripts(["script/debug.js", "script/sprite.js", "script/world.js","script/Menu.js","script/game.js"], mainFunc);



