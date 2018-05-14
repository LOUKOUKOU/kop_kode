function level_handler(inLevel){
	this.level = inLevel;
	this.player = this.level.player_init_pos;
	this.map = this.level.map;

	this.block_width = function(){
		return this.level.map.length;
	}	

	this.get_level_width = function(){
		return this.map.length;
	}

	this.get_level_height = function(){
		return this.map[0].length;
	}

	this.block_width = function(){
		return this.level.BLOCK_WIDTH;
	}	

	this.at_coord = function(x,y){
		return this.level.map[x][y];
	}

	this.is_barrier = function(x,y){
		for (let i = 0; i < this.level.barriers.length; i++) {
			if (this.level.map[x][y] === this.level.barriers[i]) {
				return true;
			}
		}
		return false;
	}	

	this.reset_player = function(){
		this.player = this.level.player_init_pos;
	}
}
