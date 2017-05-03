var GRID_SIZE = 32;
var cell;
var uniqueTiles = [];
var player;
function setup(){
	createCanvas(800 + GRID_SIZE + 1, 641);
	
	player = new Player(random(GRID_SIZE,width-GRID_SIZE), random(GRID_SIZE,height-GRID_SIZE*2));
	cell = new Cell(0, 0, "yellow");

}

function draw(){
	if(!started){
		for(var y = 0; y < height; y += GRID_SIZE){
			for(var x = 0; x < width; x += GRID_SIZE){
				fill(160);
				rect(x,y,GRID_SIZE,GRID_SIZE);
			}
		}
	}	
	for(var i = 0; i < uniqueTiles.length; i++){
		uniqueTiles[i].draw();
	}
	if(cell !== undefined){
		player.draw();
		cell.draw();
		cell.update();
	}	
}
