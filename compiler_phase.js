function compiler(inDrawer){
	this.drawer = inDrawer;
	this.set_move = {'up': [0,-1], 'down': [0, 1], 'left': [-1, 0], 'right': [1, 0]};
	this.ACT;
	this.map = this.drawer.lvl_handler.map;
	this.barrier;

	this.start_compiler_root = function(){
		this.ACT = [this.drawer.lvl_handler.player];
		this.compile(document.getElementById('actions_div'));
		return this.ACT;
	}

	this.compile = function(inBranch) {
		let leaf;
		let next_move;
		let holder = inBranch.children;

		for(let i = 0; i < holder.length; i++){
			leaf = inBranch.getElementsByClassName(holder[i].id);
			switch(holder[i].value) {
				case 'move':
					leaf = leaf[0].value;
					next_move = this.next(this.set_move[leaf],  this.get_last());

					if (!this.drawer.lvl_handler.is_barrier(next_move[0],next_move[1])) {	
						this.ACT.push(next_move);
					}

					break;
				case 'loop':
					for (var j = 0; j < leaf[0].value; j++) {
						this.compile(leaf[2]);
					}

					break;
				case 'if':
					coords = this.get_last();
					if (this.map[coords[1]][coords[0]] === leaf[0].value) {
						this.compile(leaf[2]);
					}
			}
		}
	}

	this.next = function(moves_array, cur_pos){
		return [cur_pos[0] + moves_array[0], cur_pos[1] + moves_array[1]];
	}

	this.get_last = function(){
		return this.ACT[this.ACT.length-1];
	}
}

