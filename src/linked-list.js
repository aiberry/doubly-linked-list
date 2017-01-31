const Node = require('./node');

class LinkedList {
    constructor() {this.length=0}

    append(data) {if (this.length==0) this._head=data;
                  if (this.length==0) this._tail=data}

    head() {}

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
