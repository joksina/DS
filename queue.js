//Queues is an ordered of collection of items that folows FIFO
// that is First in First Out
function Queue(){
	var item = [];
	// adds a new item to the back of the queue
	this.enqueue = function(element){
		item.push(element);
	};
	// this removes the fist item from the queue
	this.dequeue = function(){
		return item.shift();
	};
	//this returns the first element of the queue
	this.front = function(){
		return item[0];
	};
	//this returns true if the item is empty and otherwise if it's not
	this.isEmpty = function(){
		return item.length === 0;
	};
	//this returns the length of the queue
	this.size = function(){
		return item.length;
	};
	// print the item of queue
	this.print = function(){
		console.log(item.toString());
	};
}
