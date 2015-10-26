//creating a stack. Stack is aan ordered collection of items
//it follows the LIFO that is Last In first Out principles
var item = [];
//this method adds elements to the stack
this.push = function(element){
	item.push(element);
};

//this method removes the last element of the stack
this.pop = function(){
	return item.pop();
};

//this method helps to know what the last element
//thats added to the class
this.peek = function(){
	return item[item.length - 1];
};

//this method returns true if no item as been added, 
//and false otherwise
this.isEmpty = function(){
	return item.length === 0;
};

//this checks the size of the stack
this.size = function(){
	return item.length;
};

//clear the item in the stack
this.clear = function(){
	item = [];
};

//print the stack
this.print = function(){
	console.log(item.toString());
};

//the complete implementation 
function stack() {
	var item = [];
	this.push = function(element){
	item.push(element);
  };
  this.pop = function(){
	return item.pop();
  };
  this.peek = function(){
	return item[item.length - 1];
  };
  this.isEmpty = function(){
	return item.length === 0;
  };
  this.size = function(){
	return item.length;
  };
  this.clear = function(){
	item = [];
  };
  this.print = function(){
	console.log(item.toString());
 };
}

//examples
var stack = new stack();
stack.push(7);
stack.push(8);
console.log(stack.isEmpty()); // false
console.log(stack.peek()); // 8 last value added
console.log(stack.size()); // 2
stack.print(); // 7, 8