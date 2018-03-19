let track = 0;
function update(actn) {			
	if (actn === 'forward') {
		if (track < ACT.length-1) {
			track++;
		}
	}else if(actn === 'backward'){
		if(track>0){
			track--;
		}
	}

	drawer.plr = ACT[track];
	drawer.drawAll();
}

/*

function action_(inOb) {
	if (!trace) {
		ctx.beginPath();
		ctx.arc(x, y, w, 0, 2 * Math.PI, false);
		ctx.stroke();
		ctx.fillStyle = "#000000";
		ctx.fill();
	}

	if(lastAction){lastAction.style.backgroundColor = '#ffffff';}
	inOb[itter].style.backgroundColor = '#666666';
	if (inOb[itter].value == 'left'||inOb[itter].value == 'right'||inOb[itter].value == 'up'||inOb[itter].value == 'down') {action_move();}else 
	if (inOb[itter].value == 'if') {action_if();}else 
	if (inOb[itter].value == 'while') {action_while();}else 
	if (inOb[itter].value == 'loop') {action_loop(inOb[itter].nextSibling);}else 
	if (inOb[itter].value == 'method') {action_method();}else 
	if (clr.rwby.indexOf( inOb[itter].value ) > -1 ) {action_color(inOb[itter].value);}
	else{action_leave_trail(inOb[itter]);}
	lastAction = inOb[itter];
	draw();
	itter++;
}

function action_move(inObj){
	var temp = document.getElementsByClassName('act')[itter].value;
	if (temp == 'right') {action.right();}else
	if (temp == 'left') {action.left();}else 
	if (temp == 'up') {action.up();}else 
	if (temp == 'down') {action.down();}
}

function action_leave_trail(inObj){
	trace = inObj.value;
}

function action_if(){

}

function action_while(){

}

function action_loop(inOb){
	var beg = itter;
	var temp = inOb.getElementsByClassName('act');
	var count = inOb.getElementsByClassName('val')[0];
	valItter++;
	for (var i = 0; i < count.value; i++) {
		for (var j = 0; j < temp.length; j++) {
			update();
		}
		itter = beg;
	}
}

function action_method(){

}

function action_color(inClr){
	clr.clrFunc[inClr]();
}*/