/*system*/
let level;
/*var client = new XMLHttpRequest();
client.open('GET', '/foo.txt');
client.onreadystatechange = function() {
  level = client.responseText;
}*/

level = [['bl','bl','bl','bl','bl','bl','bl','bl','bl','bl','bl'],['bl','wh','wh','wh','wh','ye','wh','gr','wh','wh','bl'],['bl','wh','wh','wh','wh','wh','wh','wh','wh','wh','bl'],['bl','wh','wh','wh','wh','wh','wh','wh','wh','wh','bl'],['bl','wh','wh','wh','wh','wh','wh','wh','wh','wh','bl'],['bl','wh','wh','wh','wh','wh','wh','wh','wh','wh','bl'],['bl','wh','wh','wh','wh','wh','wh','wh','wh','wh','bl'],['bl','wh','wh','wh','wh','wh','wh','wh','wh','wh','bl'],['bl','wh','wh','wh','wh','wh','wh','wh','wh','wh','bl'],['bl','wh','wh','wh','wh','wh','wh','wh','wh','wh','bl'],['bl','bl','bl','bl','bl','bl','bl','bl','bl','bl','bl']];
let player = [5,5];
const BLOCK_WIDTH = 10;

let color = {re: "#FF0000",gr: "#00FF00",bu: "#0000FF",	ye: "#FFFF00",or: "#FF8C00",pu: "#800080",bl: "#000000",wh: "#FFFFFF"};

let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
/*let action = new mover();
let clr = new color();*/
let drawer = new level_drawer(level, player);
let EVENT;

drawer.drawAll();

function level_drawer(inLevel, inPlayer){
	this.lvl = inLevel;
	this.plr = inPlayer;
	this.drawAll = function(){
		for(let i in this.lvl){
			for(let j in this.lvl[i]){
				let temp = {x: j*BLOCK_WIDTH, y: i*BLOCK_WIDTH, clr: this.lvl[i][j]};
				this.draw(temp);
			}
		}

		let temp  = {x: this.plr[0]*BLOCK_WIDTH+(BLOCK_WIDTH/2), y: this.plr[1]*BLOCK_WIDTH+(BLOCK_WIDTH/2)};
		this.drawPlayer(temp);
	}

	this.draw = function(obj){
		ctx.fillStyle = color[obj.clr];
		ctx.fillRect(obj.x, obj.y, BLOCK_WIDTH, BLOCK_WIDTH,);
	}

	this.drawPlayer = function(obj){
		ctx.beginPath();
		ctx.arc(obj.x, obj.y, BLOCK_WIDTH/2, 0, 2 * Math.PI, false);
		ctx.stroke();
		ctx.fillStyle = "#000000";
		ctx.fill();
	}
}



