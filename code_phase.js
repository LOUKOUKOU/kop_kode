function event_change_main(inCoder) {
	this.cdr = inCoder;
	this.innit = function(){
		if (!this.cdr instanceof coder) {this.cdr = new coder();}
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
			add_options([obj.value, 'remove', 'clear', 'clear & remove'], obj);
		}else{
			add_options([obj.value, 'remove'], obj);
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
		let holder = temp[temp.length-1];
		if (this.is_holder(holder)) {	
			while (this.is_first_child(holder.firstChild)) {
			    holder.parentNode.insertBefore(holder.firstChild, holder);
			}
		}
		while(temp.length>0){temp[0].parentNode.removeChild(temp[0]);}
		obj.parentNode.removeChild(obj);
	}

	this.remove_leafs = function(obj){
		let temp = document.getElementsByClassName(obj.id);
		let holder = temp[temp.length-1];
		if (this.is_holder(holder)) {
			while (this.is_first_child(holder.firstChild)) {

				if (this.is_branch(holder.firstChild)) {
					this.remove_leafs(holder.firstChild);
			    	this.remove_branch(holder.firstChild);
				}
			}
			obj.value = obj.options[0].text;
		}
	}

	this.is_holder = function(inDOM){
		return inDOM.tagName === 'SECTION';
	}

	this.is_branch = function(inDOM){
		return inDOM.classList.contains('branch');
	}

	this.is_none = function(inDOM){
		return inDOM.value === 'none';
	}

	this.is_first_child = function(inDOM){
		return inDOM && !(this.is_none(inDOM) && this.is_branch(inDOM));
	}
}



