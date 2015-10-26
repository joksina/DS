function linkedList(){
	//this is the helper class
	//the element is the value we want to add to the list
	var Node = function(element){
		this.element = element;
		this.next = null;
	};
	// stores the length of the items in list
	var length = 0;
	var head = null;
	//this adds a new item to the list
	this.append = function(element){
		//create node
		var node = new Node(element), current;
		//check first node and add
		if(head === null){
			head = node;
		}else {
			current = head;
			//loop through the list until the lst item
			while(current.next) {
				current = current.next;
			}
			current.next = node;
		}
		//increment the list
		length++;
	};
	//this inserts to a specified position
	this.insert = function(position, element){
		//check for out-of-bounds values
        if (position >= 0 && position <= length){

            var node = new Node(element),
                current = head,
                previous,
                index = 0;

            if (position === 0){ //add on first position

                node.next = current;
                head = node;

            } else {
                while (index++ < position){
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }

            length++; //update size of list

            return true;

        } else {
            return false;
        }
	};
	
	this.removeAt = function(position){
		//check for out-of-bound values
		if(position > -1 && position < length){
			var current = head, previous, index = 0;

			//remove first item
			if(position === 0){
				head = current.next;
			}else {
				while(index++ < position){
					previous = current;
					current = current.next;
				}
				//link the previous with curent
				previous.next = current.next;
			}
			length--;
			return current.element;
		}else {
			return null;
		}
	};
	
	this.remove = function(element){
		var index = this.indexOf(element);
		return this.removeAt(index);
	};
	//this returns the index of element
	this.indexOf = function(element){
		var current = head,
            index = 0;

        while (current) {
            if (element === current.element) {
                return index;
            }
            index++;
            current = current.next;
        }

        return -1;
	};
	//returns true if the linked list is empty
	this.isEmpty = function(){
		return length === 0;
	};
	this.size = function(){
		return length;
	};
	this.toString = function(){
		var current = head,
            string = '';

        while (current) {
            string += current.element + (current.next ? '\n' : '');
            current = current.next;
        }
        return string;
	};
	this.print = function(){
		console.log(this.toString());
	};
}

//testing the list 
var list = new linkedList();
list.append(10);
list.append(15);
list.print();
console.log(list.indexOf(15)); // 1
list.append(10); //10, 15, 10
list.print();
console.log(list.indexOf(10)); // 0
list.append(13);
list.print();
console.log(list.indexOf(13)); // 3
console.log(list.indexOf(10)); //0
list.append(11);
list.append(12);
list.print(); //10, 15, 10, 13, 11, 12
console.log(list.removeAt(1)); //takes out 15
list.print(); // 10, 10, 13, 11, 12
console.log(list.removeAt(3)); // 11
list.print(); // 10, 10, 13, 12
list.append(14);
list.print(); // 10, 10, 13, 12, 14
list.insert(0,16);// adds 16 to the 0th position
list.print(); //16, 10, 10, 13, 12, 14
list.insert(1,17); //16, 17, 10, 10, 13, 12, 14
list.print();
list.insert(list.size(),18); //adds 18 to the end of the length
list.print();//16, 17, 10, 10, 13, 12, 14, 18
list.remove(16);
list.print(); //17, 10, 10, 13, 12, 14, 18
list.remove(11);//no 11
list.print(); //17, 10, 10, 13, 12, 14, 18
list.remove(18);
list.print(); //17, 10, 10, 13, 12, 14