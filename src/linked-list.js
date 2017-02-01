const Node = require('./node');

class LinkedList {
    constructor() {this.length=0}

    append(data) {
      if ( this.length==0)

      {this._head=new Node(this.data=data, this.prev=null, this.next=null);
      this._tail=new Node(this.data=data, this.prev=null, this.next=null)}}



    head(){}// {this.list=this.list+new Node(data=this.data prev=null next=null)}

    tail() {}

    at(index) {}

    insertAt(index, data) {}

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
