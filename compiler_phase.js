let ACT;

let setMove = {'up': [0,-1], 'down': [0, 1], 'left': [-1, 0], 'right': [1, 0]};

function start_compiler_root(){
	ACT  = [drawer.plr];
	compile(document.getElementById('actions_div'));
}

let compile = function(inBranch) {
	let cur_branches = inBranch.children;
	for(let i = 0; i < cur_branches.length; i++){
		if (cur_branches[i].value === 'move') {
			let leaf = inBranch.getElementsByClassName(cur_branches[i].id)[0].value;
			ACT.push(next(setMove[leaf], ACT[ACT.length-1]));
		}else
		if (cur_branches[i].value === 'loop') {
			let leaf = inBranch.getElementsByClassName(cur_branches[i].id);
			for (var j = 0; j < leaf[0].value; j++) {
				console.log(j);
				compile(leaf[1]);
			}
		}else
		if (cur_branches[i].value === 'if') {
			let leaf = inBranch.getElementsByClassName(cur_branches[i].id);
			let coords = ACT[ACT.length-1];
			console.log(`${level[coords[1]][coords[0]]} : ${leaf[0].value}`);
			if (level[coords[1]][coords[0]] === leaf[0].value) {
				compile(leaf[1]);
			}
		}
	}
}

function next(moves_array, cur_pos){
	return [cur_pos[0] + moves_array[0], cur_pos[1] + moves_array[1]];
}