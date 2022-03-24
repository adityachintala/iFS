/*

Write a CLL class that has the following methods:
1) Add a node to the end of the list
2) Delete a node from the end of the list
3) Print the list
4) Return the length of the list
5) Search for a node in the list
6) Exit

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