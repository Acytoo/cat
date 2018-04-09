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
	//Grid is a two dimensional array of circles
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
	this.pickRandom = function(){
		//Pick random numbers of circles between 5 and 8
		var date = new Date();
		var seed = date.getSeconds();
		var number = Math.floor(Math.random(seed) * 4) + 5;
		for (var k = 0; k < number; k++){
			//The dot might be less than 5 since I build nothing when the center is the i,j 
			var i, j;
			i = Math.floor(Math.random() * this.numOfBlocks);
			j = Math.floor(Math.random() * this.numOfBlocks);
			if (i != Math.floor(this.numOfBlocks / 2) || j != Math.floor(this.numOfBlocks / 2)){
				this.grid[i][j].build();
			}
		}		
	};
	//Here coming the main function to draw the playground
	this.draw = function(){
		this.context = clearRect(0,0,550,430);	//Let it be , let's draw a rectangle
		for (var i = 0; i < this.numberOfBlocks; i++){
			for (var j = 0; j < this.numberOfBlocks; j++){
				this.context.beginPath();
				if (this.grid[i][j].fill == true){
					this.context.fillStyle = 'rgb(0,126,143)';
					
				}
				else{
					this.context.fillStyle = 'rgb(120,191,186)';
				}
				this.context.arc(this.grid[i][j].getPosition().x, this.grid[i][j].getPosition().y, this.radius, this.startAngle, this.endAngle, this.clockwise);
		        this.context.fill();
			}
		}
		this.context.drawImage(self.img, self.cat.x - 18, self.cat.y - 45);
	};
	
	this.updateCircle = function(position){
		var flag = false;
		for (var i = 0; i < this.numberOfBlocks; i++){
			for (var j = 0; j < this.numberOfBlocks; j++){		//Good position, not build yet and no cat, we can build here
				if(this.grid[i][j].isInPosition(position) && !this.grid[i][j].fill && !this.grid[i][j].hasCat) {
					
					this.grid[i][j].build();
					this.draw();
			        flag = true;
			    }
				
			}
		}
		return flag;
	};
	
	this.initCat = function(){
		var pos = Math.floor(self.numOfBlocks / 2);
		this.cat = new Cat(pos, pos);
		this.updateCat(pos, pos);
		this.cat.updateCatCoordinate(this.grid[pos][pos].getPositon());
	};
	this.updateCat = function(c, r, previousPos){
		this.grid[c][r].addCat();
		this.cat.updateCatPostion(c,r);
		if (previousPos !== undefined){
		    this.grid[previousPos.col][previousPos.row].removeCat();
		}
	};
	
	this.moveCat = function(){
		this.lock  = true;
		var 
	}
	this.findAvailablePosition = function(){
		var currentPosition = this.cat.getCatPosition();
		//Is === faster than == ?? Alec Chen 
		if (curentPosition.column === 0 || currentPosition.column === this.numberOfBlocks - 1 || currentPosition.row === 0 || currentPosition === this.numberOffBlocks - 1){
			return {win: true, lose: false};	//The return object
		}
		if (currentPositon.row % 2){
			this.availableLocations = [{row:currentPosition.row - 1, col:currentPosition.col, isAvailable: true},
                					   {row:currentPosition.row - 1, col:currentPosition.col + 1, isAvailable: true},
                					   {row:currentPosition.row, col:currentPosition.col - 1, isAvailable: true},
                					   {row:currentPosition.row, col:currentPosition.col + 1, isAvailable: true},
                					   {row:currentPosition.row + 1, col:currentPosition.col, isAvailable: true},
                					   {row:currentPosition.row + 1, col:currentPosition.col + 1, isAvailable: true}
                					   ];
		}
		else{
			this.availableLocations = [{row:currentPosition.row - 1, col:currentPosition.col - 1, isAvailable: true},
									   {row:currentPosition.row - 1, col:currentPosition.col, isAvailable: true},
									   {row:currentPosition.row, col:currentPosition.col - 1, isAvailable: true},
									   {row:currentPosition.row, col:currentPosition.col + 1, isAvailable: true},
									   {row:currentPosition.row + 1, col:currentPosition.col - 1, isAvailable: true},
									   {row:currentPosition.row + 1, col:currentPosition.col, isAvailable: true}
									   ];	
		}
		var noPlaceLeft = false;
		/**
		 * I believe there is something wrong, however I have a f**king headache and can not fix it now !@!!!!!!!!!!!!!!!   
		 * 
		 */
		for (var i = 0; i < this.availableLocations.length; ++i){
			noPlaceLeft = this.grid[this.availableLocations[i].column][this.availableLocation[i].row].fill;
			this.availableLocation[i].isAvailable = noPlaceLeft;
			
		}
	}
	
	
	
	
}
