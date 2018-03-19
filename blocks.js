const SELECT = function(){
	let temp = document.createElement('select');
	let arr = ['none', 'move', 'loop', 'if', 'while'];
	addOptions(arr, temp);
	temp.setAttribute("onchange", 'on_change.add(this)');
	temp.classList.add('branch');
	return temp; 
}

const DIRECTION = function(attribute){
	let temp = document.createElement('select');
	let arr = ['none', 'up', 'down', 'left', 'right'];
	addOptions(arr, temp);
	temp.classList.add(attribute);
	temp.classList.add('leaf');
	return temp;
}

const LOOPS =  function(attribute){
	let temp = document.createElement('input');
	temp.setAttribute("type", 'text');
	temp.value = 0;
	temp.classList.add(attribute);
	temp.classList.add('leaf');
	return temp;
}

const STATEMENT =  function(attribute){
	let temp = document.createElement('select');
	let arr = ['none','re','gr','bu','ye','or','pu','bl','wh'];
	addOptions(arr, temp);
	temp.classList.add(attribute);
	temp.classList.add('leaf');
	return temp;
}

const HOLDER = function(attribute){
	let temp = document.createElement('section');
	temp.setAttribute("class", attribute);	
	return temp;
}

const ENDLINE = function(){
	let temp = document.createElement('br');
	return temp;
}

function addOptions(arr, opt){
	arr.forEach(function(element) {
	  let temp = document.createElement("option");
	  temp.text = element;
	  temp.setAttribute("class", element);	
	  opt.add(temp);
	});
}