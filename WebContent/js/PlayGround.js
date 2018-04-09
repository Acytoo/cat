function PlagGround(ctx){
	this.numOfBlocks = 11;
	this.radius = 20;
	this.horizontalOffset = 20;
	this.verticalOffset = 30;
	this.startAngle = 0;
	this.endAngle = Math.PI * 2;
	this.context = ctx;
	this.grid = 0;
	this.div = document.getElementById("canvas");
	this.height = 36;
	this.width = 48;
	this.x = 0;
	this.y = 0;
	this.cat = 0;
	this.lock = false;
	this.img = 0;
	//There is no brackets in the f**king js !!!!!!!!!!!!!
	this.onCreate = function(){
		this.setUpGrid();
		this.pickRandom();
		this.initCat()
		this.img = new Image();
		//You can update this later, to change the figure of the "cat"
		this.img.src = 'cat.png';
		this.img.onload = function(){
			this.draw();
		};
	};
	this.setUpGrid = function(){
		this.grid = [];
		for (var i = 0; i < this.numOfBlocks; i++){
			this.grid = [];
			for (var j = 0; j < this.numOfBlocks; j++){
				if (j % 2){
					this.x = this.width * i + this.horizontalOffset + (this.width / 2);
				}
				else{
					this.x = this.width * i + this.horizontalOffset;
				}
				this.y = this.height * j + this.horizontalOffset;
				this.grid[i][j] = new Circle(this.x, this.y+this.verticalOffset + this.radius);
			}
		}
	};
	this.
	
	
	
	
	
}
