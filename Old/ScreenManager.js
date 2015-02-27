/*A manager for displays. It keeps a list of all "screens" but it is 
 * mostly used to show what is supposed to be drawn and what isn't based
 * on states such as pause, game, main menu, about, level select in our case
 */ 
function ScreenManager(){
    Sprite.call(this);
    
    this.screens = new List();
}
ScreenManager.prototype = new Sprite();

ScreenManager.prototype.curScreen=function(){
	return this.screens.tail.item;
}

ScreenManager.prototype.push = function(screen){
    this.screens.remove(screen);
    this.screens.push(screen);
}

ScreenManager.prototype.pop = function(){
    this.screens.tail.item.gui.visible = false;
    return this.screens.pop();
}

ScreenManager.prototype.remove = function(screen){
    screen.gui.visible = false;
    this.screens.remove(screen);
}

ScreenManager.prototype.update = function(d){
    var screens = this.screens;
    
    for(var node = screens.head; node != null; node = node.link){
        var screen = node.item;
        
        if(node != screens.tail){
            screen.gui.visible = false;
        }else{
            screen.gui.visible = true;
        }
        
        if(screen.alwaysUpdate || node == screens.tail){
            if(!screen.initialized){
                screen.init();
                screen.initialized = true;
            }
            
            screen.update();
        }
    }
}
ScreenManager.prototype.draw = function(ctx){
    var screens = this.screens;
    
    for(var node = screens.head; node != null; node = node.link){
        var screen = node.item;
        
        if(screen.alwaysDraw || node == screens.tail){
            screen.draw(ctx);
        }
    }    
}
