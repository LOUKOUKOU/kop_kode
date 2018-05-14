function drawer(inContext, inLevel){
	this.context = inContext;
	this.lvl_handler = inLevel;
	this.SPRITES = this.lvl_handler.level.SPRITES;

	this.drawAll = function(){
		this.context.canvas.width = this.block(this.lvl_handler.get_level_width());
		this.context.canvas.height = this.block(this.lvl_handler.get_level_height());
		
		for(let i in this.lvl_handler.map){
			for(let j in this.lvl_handler.map[i]){
				this.draw({x: this.block(j), y: this.block(i), clr: this.lvl_handler.map[i][j]});
			}
		}

		this.drawPlayer({x: this.block(this.lvl_handler.player[0])+(this.block()/2), y: this.block(this.lvl_handler.player[1])+(this.block()/2)});
	}

	this.draw = function(obj){
		this.context.fillStyle = this.SPRITES[obj.clr];
		this.context.fillRect(obj.x, obj.y, this.block(), this.block(),);
	}

	this.drawPlayer = function(obj){
		this.context.beginPath();
		this.context.arc(obj.x, obj.y, this.block()/2, 0, 2 * Math.PI, false);
		this.context.stroke();
		this.context.fillStyle = "#000000";
		this.context.fill();
	}

	this.block = function(inVal = 1){
		return inVal * this.lvl_handler.block_width();
	}

	this.reset = function(){
		this.lvl_handler.reset_player();
		return this;
	}
	this.set_player = function(inCoords){
		this.lvl_handler.player = inCoords;
		return this;
	}
}