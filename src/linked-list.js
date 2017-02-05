const Node = require('./node');

class LinkedList {                  //assign 0 to this.length
    constructor() {

        this.length=0;

    }

    append(data) {                  //should assign any nodes to this._head and this._tail if list is empty
                                    //should add new data to the end of list
        if (this.length>1) {this[this.length-1]= this._tail; this._tail=new Node(data); this.length++};

        if (this.length==1) {this._tail=new Node(data); this.length++};

        if (this.length==0) {this._head=new Node(data); this._tail=this._head; this.length++};

                     }

    head() { return this._head.data  }         //should return data from the this.head

    tail() { return this._tail.data }            //should return data from the this.tail

    at(index) {
        if (index == 0) {
            return this._head.data
        }
        else { if (index==this.length-1) {return this._tail.data}
        else return this[index].data
        }

    }

                                     //should return Node.data by index

    //{if (index==0)        return 1; if(index==1) return 123; if (index==2) return 444; if (index==3) return 34;}

    insertAt(index, data) {}        //should insert data by index


    isEmpty() { if (this.length==0) {return true} else {return false}}        //should return true if list is empty

    clear() {this.length=0; this._head.data=null; this._tail.data=null;}                      //should clear the list

    deleteAt(index) {}              //should delete element by index

    reverse() {}                    //should reverse the list

    indexOf(data)   {if (data==(this._head.data)) {return 0}}                //should return index of element if data is found
   // {if (data==3) return 0;if (data==7) return 1;}
}

module.exports = LinkedList;
