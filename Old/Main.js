/**
 * @author Anthony
 */
"use strict";
clearColor = [0, 0, 0, 0];
use2D = true;
initGame("canvas");
//if the grid needs to get canvas dimensions
var canvas=document.getElementById("canvas");
var cWidth= canvas.width;
var cHeight= canvas.height;

//Only thing to be added to world as a child
var screenMan = new ScreenManager();
world.addChild(screenMan);

//MenuScreen pushed to ScreenManager
var mainMenu = new MenuScreen(false, false,canvas);
screenMan.push(mainMenu);