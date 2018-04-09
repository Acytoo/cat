function Circle(x, y, r){
	this.x = x;
	this.y = y;
	this.r = r;
	// point object
	this.position = {x:x, y:y};
	this.fill = false;		//false : no wall
	this.hasCat = false;	//false : no cat
	/*
	 * You can define methods in one function, but never forget the f*cking semicolon, f*ck!!!!!
	 */
	this.build = function(){
		this.fill = true;
	};
	this.getPosition = function(){
		return this.postion;
	};
	this.addCat = function(){
		this.hasCat = true;
	};
	this.removeCat = function(){
		this.hasCat = false;
	};
	this.positonRight = function(position){
		var widthRight = 
	};
	/**
	 * The position function stop here for a while.
	 */
}

function Cat(c, r){
	this.column = c;
	this.row = r;
	this.x = 0;
	this.y = 0;
	
	this.updateCatPositon = function(newc, newr){
		this.column = bewc;
		this.row = newr;
	};
	this.updateCatCoordinate = function(position){
		this.x += positon.x;
		this.y +=position.y;
	};
	//Let's return object to do something for the good of the realm!!!!!!!!!!
	this.getCatPosition = function(){
		return {column: this.column, row: this.row};
	};
	this.getCatCoordinate = function(){
		return {x:this.x, y:this.y};
	};
}

function Game(ctx){
	this.context = ctx;
	this.start = function(){
		
	};
}
	
	
	
	
	
	
	
	
	
	
}