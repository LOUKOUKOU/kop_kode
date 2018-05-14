function runner(inDrawer){

	this.track = 0;
	this.timer;
	this.speed = 500;
	this.drawer = inDrawer;
	this.actions;

	this.start = function(inActions){
		this.actions = inActions;
		_this = this;
		this.timer = setInterval(function(){_this.update();}, this.speed);
	}	

	this.restart = function(){
		this.stop();
		this.track = 0;
		this.drawer.reset().drawAll();
	}

	this.stop = function(){
		clearInterval(this.timer);
	}	

	this.update = function(){	
		this.update_track();
		this.drawer.set_player(this.actions[this.track]).drawAll();
	}

	this.update_track = function(direction = 'forward'){			
		if (direction === 'forward') {
			if (this.track < this.actions.length-1) {
				this.track++;
			}else{
				this.restart();
			}
		}else if(direction === 'backward'){
			if(this.track>0){
				this.track--;
			}
		}
	}

	this.update_speed = function(newSpeed){
		this.speed = newSpeed;
	}
}