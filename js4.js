/*

Write a CLL class that has the following methods:
> Add a node to the end of the list
> Add a node to the beginning of the list
> Add a node at a particular position in the list
> Delete a node from the end of the list
> Delete a node from the beginning of the list
> Delete a node at a particular position in the list
> Print the list
> Return the length of the list
> Search for a node in the list
> Exit

*/

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class CLL{
    constructor(){
        this.last = null;
    }

    add(data) {
        if (this.last == null) {
            this.last = new Node(data);
            this.last.next = this.last;
            return;
        }
        let temp = this.last.next;
        this.last.next = new Node(data);
        this.last.next.next = temp;
        this.last = this.last.next;
    }

    add_at_start(data) {
        if (this.last == null) {
            this.last = new Node(data);
            this.last.next = this.last;
            return;
        }
        let temp = this.last.next;
        this.last.next = new Node(data);
        this.last.next.next = temp;
    }


    add_at_pos(data, pos) {
        if (pos == 0) {
            this.add(data);
            return;
        }
        let temp = this.last.next;
        let count = 0;
        while (count < pos - 1) {
            temp = temp.next;
            count++;
        }
        let new_node = new Node(data);
        new_node.next = temp.next;
        temp.next = new_node;
    }

    delete_at_pos(pos) {
        if (pos == 0) {
            this.last.next = this.last.next.next;
            return;
        }
        let temp = this.last.next;
        let count = 0;
        while (count < pos - 1) {
            temp = temp.next;
            count++;
        }
        temp.next = temp.next.next;
    }

    delete_last() {
        if (this.last == null) {
            console.log("List is empty");
            return;
        }
        if (this.last == this.last.next) {
            this.last = null;
            return;
        }
        let curr = this.last;
        do {
            curr = curr.next;
        } while (curr.next != this.last);
        curr.next = this.last.next;
        this.last = curr;
    }



    delete_first() {
        this.last.next = this.last.next.next;
    }

    print() {
        if (this.last == null) {
            return;
        }
        let temp = this.last.next;
        let res = '';
        do {
            res = res + temp.data + " ";
            temp = temp.next;
        } while (temp != this.last.next);
        console.log(res);
    }

    length() {
        if (this.last == null) {
            return;
        }
        let temp = this.last.next;
        let res = 0;
        do {
            res++;
            temp = temp.next;
        } while (temp != this.last.next);
        return res;
    }

    search(data) {
        if (this.last == null) {
            return;
        }
        let temp = this.last.next;
        let res = 0;
        do {
            if (temp.data == data) {
                return res;
            }
            temp = temp.next;
            res++;
        } while (temp != this.last.next);
        return -1;
    }

    delete(data) {
        if (this.last == null) {
            return;
        }

        if (this.last.data == data && this.last == this.last.next) { //Checking if its the only node which 
            this.last = null;                                        //constains the data we want to delete
            return;
        }

        let curr = this.last;
        do {
            if (curr.next.data == data) {
                curr.next = curr.next.next;
                return;
            }
            curr = curr.next;
        } while (curr != this.last);
    }
    
}