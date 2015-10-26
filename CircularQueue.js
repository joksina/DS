//Circular queue
//an example of the Circular queue is the hot potato game
//a process of elimination
function hotPotato(nameList, num){
	for (var i = 0; i < nameList.length; i++) {
		queue.enqueue(nameList[i]);
	}

	var eliminate = "";
	while(queue.size() > 1){
		for (var i = 0; i < num; i++) {
			queue.enqueue(queue.dequeue());
		}
		eliminate = queue.dequeue();
		console.log(eliminate + " was eliminated from hotPotato");
	}
	return queue.dequeue();
}