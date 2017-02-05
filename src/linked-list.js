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

    tail() { return this._tail.data }          //should return data from the this.tail

    at(index) {                                //should return Node.data by index
        if (index == 0) {
            return this._head.data
        }
        else { if (index==this.length-1) {return this._tail.data}
        else return this[index].data
        }

    }





    insertAt(index, data) {

if (index==this.length-1) {this[this.length-1]=new Node(data); this.length++;};
if (index==0) {for (var i=this.length-1; i>1; i--) {}}

    }        //should insert data by index


    isEmpty() { if (this.length==0) {return true} else {return false}}        //should return true if list is empty

    clear() {this.length=0; this._head.data=null; this._tail.data=null;}                      //should clear the list

    deleteAt(index) {
      for (var i=(index); i<(this.length-1); i=i+1) {this[i-1]=this[i]};

      //this[this.length-2].data=undefined; this.lenth--;
    }              //should delete element by index

    reverse() {}                    //should reverse the list

    indexOf(data)   {var res=-1;
      if (data==this._head.data) res= 0;
      if (data==this._tail.data) res=this.length-1;
      for (var i=1; i<=this.length-2; i++) if (this.i.data=data) res=i;
    return res;}
              //should return index of element if data is found


}
module.exports = LinkedList;
