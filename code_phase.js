let on_change = new event_change_main(new coder());

function event_change_main(inCoder) {
	this.cdr = inCoder;
	this.innit = function(){
		if (!this.cdr instanceof coder) {this.cdr = new coder();}
		if (!this.actns) {this.actns = {};}
	}
	this.innit();

	this.add = function(obj){
		this.cdr.add(obj);

	}
}

function coder(){

	this.add = function(obj){
		if (obj.value === 'remove' || obj.value === 'clear' || obj.value === 'clear & remove' ) {
			this.remove_tree(obj);
		}else{
			this.build_tree(obj);
			let temp = SELECT();
			obj.parentElement.appendChild(temp);
		}
	}

	this.build_tree = function(obj){
		let leaf_element;

		let branch_id = `${obj.value}-${random()}`;
		obj.setAttribute("id", branch_id);

		switch(obj.value) {
		    case 'loop':
		        leaf_element = LOOPS(branch_id);
		        break;
		    case 'if':
		        leaf_element = STATEMENT(branch_id);
		        break;
		    default:
		        leaf_element = DIRECTION(branch_id);
		}

		let br = ENDLINE(branch_id);

		obj.parentElement.appendChild(leaf_element);
		obj.parentElement.appendChild(br);

		if (obj.value != 'move') {	
			let select = SELECT();
			let scope = HOLDER(branch_id);
			scope.appendChild(select);
			obj.parentElement.appendChild(scope);
			addOptions([obj.value, 'remove', 'clear', 'clear & remove'], obj);
		}else{
			addOptions([obj.value, 'remove'], obj);
		}

	}
//TODO: remove duplicate coding.
	this.remove_tree = function(obj){
		switch(obj.value) {
		    case 'remove':
		        this.remove_branch(obj);
		        break;
		    case 'clear':
		        this.remove_leafs(obj);
		        break;
		    case 'clear & remove':
		        this.remove_leafs(obj);
		        this.remove_branch(obj);
		}
	}

	this.remove_branch = function(obj){
		let temp = document.getElementsByClassName(obj.id);
		let leafs = temp[temp.length-1];
		console.log(`branch: ${obj.innerHTML}`);
		if (leafs.tagName === 'SECTION') {	
			while (leafs.firstChild && !(leafs.firstChild.value === 'none'&&leafs.firstChild.classList.contains('branch')))
			{
			    leafs.parentNode.insertBefore(leafs.firstChild, leafs);
			}
		}
		while(temp.length>0){temp[0].parentNode.removeChild(temp[0]);}
		obj.parentNode.removeChild(obj);
	}

	this.remove_leafs = function(obj){
		let temp = document.getElementsByClassName(obj.id);
		let leafs = temp[temp.length-1];
		console.log(`leaf: ${obj.innerHTML}`);
		if (leafs.tagName === 'SECTION') {
			while (leafs.firstChild && !(leafs.firstChild.value === 'none'&&leafs.firstChild.classList.contains('branch')))
			{
				if (leafs.firstChild.classList.contains('branch')) {
					this.remove_leafs(leafs.firstChild);
			    	this.remove_branch(leafs.firstChild);
				}
			}
			obj.value = obj.options[0].text;
		}
	}
}


function  random(){
    return Math.floor((Math.random() * 100000) + 1);
}


/*
actions: {move-id: {get: [1,1], set: function(inMove) { alert(this.get); }}};
actions: {move-id: {get = [], set = function(inMove) {}}};
actions: {move-id: {get = [], set = function(inMove) {}}};
actions: {move-id: {get = [], set = function(inMove) {}}};
actions: {move-id: {get = [], set = function(inMove) {}}};
*/


		/*obj.className = "act";
		var temp = document.createElement('select');
		temp.setAttribute("id", random());
		obj.parentNode.appendChild(temp);*/
	
/*
    var mySelect = inOb.value;

    document.getElementById('x').innerHTML = mySelect;

    if (mySelect != '') {
    	var temp = document.createElement('select');

    	var head = inOb.cloneNode(true);
    	var newHead = inOb.cloneNode(true);
    	head.id = "";
    	newHead.id = "";
    	head.value = mySelect;

    	var contains = document.createElement('div');
    	contains.style.marginLeft = '10px';
    	contains.style.marginBottom = '10px';
    	contains.style.marginTop = '10px';
    	contains.className = 'actions';

	    if (mySelect == 'move') {
	    	temp.setAttribute("onchange", "event_move(this)");
	    	temp.innerHTML = "<option></option><option>left</option><option>right</option><option>up</option><option>down</option>";
	    }else
	    if (mySelect == 'if'||mySelect == 'while'||mySelect == 'loop'||mySelect == 'method') {
	    	var temp = document.getElementById("main_select").cloneNode(true);
    		temp.id = "";
			if (mySelect == 'if') {event_if(inOb);}else 
				if (mySelect == 'while') {event_while(inOb);}else 
					if (mySelect == 'loop') {event_loop(contains);}else 
						if (mySelect == 'method') {event_method(inOb);}
    		head.className = "act";
	    }else
	    if (mySelect == 'color') {
	    	temp.setAttribute("onchange", "event_color(this)");
	    	temp.innerHTML += "<option></option>";
	    	for (var i = 0; i < clr.rwby.length; i++) {
	    		temp.innerHTML += "<option>"+clr.rwby[i]+"</option>";
	    	}
	    	temp.className = "act";
	    }else
	    if (mySelect == 'leave trail') {
	    	temp.innerHTML = "<option>false</option><option>true</option>";
	    	temp.className = "act";
	    }
	    
	    
	    contains.appendChild(temp);

	    inOb.parentNode.insertBefore(head, inOb);
	  	inOb.parentNode.insertBefore(contains, inOb);
	    
	   	inOb.selectedIndex = '0';
	    temp.selectedIndex = '0';
	}
}



function event_if() {
   
}

function event_while() {
   
}

function event_loop(inOb) {
	var temp = document.createElement('input');
	var br = document.createElement('br');
  	temp.className = "val";
  	temp.setAttribute('type','number');
  	temp.setAttribute("min","0");
	inOb.appendChild(temp);
	inOb.appendChild(br);
}

function event_method() {
   
}

function event_color() {
   
}

function event_terminate(inObj) {
   if(inObj.value == ""){
		inObj.parentElement.removeChild(inObj.nextSibling);
		inObj.parentElement.removeChild(inObj);
   }
}
*/