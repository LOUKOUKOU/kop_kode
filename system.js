/*system*/
/*var client = new XMLHttpRequest();
client.open('GET', '/foo.txt');
client.onreadystatechange = function() {
  level = client.responseText;
}*/

let c = document.getElementById("myCanvas");

let lvl = new level_handler(level);
let drwr = new drawer(c.getContext("2d"), lvl);
let on_change = new event_change_main(new coder());

let comp = new compiler(drwr);
let run = new runner(drwr);

function compile_and_run(){
	run.start(comp.start_compiler_root());
}

function system_reset(){
	run.restart();
}

drwr.drawAll();


