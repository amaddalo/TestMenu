//Should probably only be in the gameScreen input as Pausing at MainMenu is strange
gInput.addFunc(27, function(){
	var pauseMenu = new PauseScreen(false, false,canvas);
	console.log("Here"+screenMan.curScreen());
    if(screenMan.curScreen() == pauseMenu){
    	screenMan.remove(pauseMenu);
    }
    else{
    	console.log("Pausing");
    	screenMan.push(pauseMenu);
    }
});

//Game screen should be made from the MenuScreen.
var gameScreen = new Screen(false, true, canvas);
gameScreen.init = function(){
	/*
	 * Yeps
	 */
	
	/*
	 * Kay
	 */
};
