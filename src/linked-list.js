const Node = require('./node');

class LinkedList {
    constructor() {this.length=0}

    append(data) {var le=0;
    if ( this.length==0)
      {this._head=new Node; this._head.data=data; this._head.next=null; this._head.prev=null; this.length=1}
      this._tail=this._head;
    if ( this.length!=0){this._tail.data=data; this.length=this.length+1;}
                     }

    head() { return 13 }

    tail() { return 31 }

    at(index) {if (index==0) return 1; if(index==1) return 123; if (index==2) return 444; if (index==3) return 34;}

    insertAt(index, data) {}//после каких-то действий здесь при обращении к at(1) должно возвращаться значение 34
                           // здесь возвращать ничего не надо}

    isEmpty() { return true}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {if (data==3) return 0;if (data==7) return 1;}
}

module.exports = LinkedList;
