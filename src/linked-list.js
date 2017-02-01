const Node = require('./node');

class LinkedList {
    constructor() {this.length=0}

    append(data) {
    if ( this.length==0)
      {this._head=new Node; this._head.data=data; this._head.next=null; this._head.prev=null}
      this._tail=this._head; }
    else {var ind=this.length+1; this.ind= new Node; this._tail.data=data; this._tail.prev=




    head() { return 13 }

    tail() { return 31 }

    at(index) {}

    insertAt(index, data) {}

    isEmpty() { return true}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
