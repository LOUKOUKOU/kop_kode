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

const ENDLINE = function(attribute){
	let temp = document.createElement('br');
	temp.setAttribute("class", attribute);
	return temp;
}

function addOptions(arr, opt){
	for(let i = 0; arr[i]||opt.options[i]; ){
		if (arr[i]) {
			if (!opt.options[i]) {
				let temp = document.createElement("option");
				temp.text = arr[i];
				//temp.setAttribute("class", arr[i]);	
				opt.add(temp);
			}else{	
	  			opt.options[i].text = arr[i];
			}
			i++
		}else{
			opt.options[i] = null;
		}
	}
	opt.value = arr[0];
}