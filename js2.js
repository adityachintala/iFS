/*

You are given a CLL, from which you have to separate the even and odd numbers.
In the end you need to have two CLLs, one with even numbers and other with odd numbers.

----------------------------------------------------------------------------------------------------------------------
Input:   Enter elements separated by space : 1 3 5 6

Output:  Even Elements : 1 3 5
         
         Odd Elements : 6

----------------------------------------------------------------------------------------------------------------------
Input:   Enter elements separated by space : 1 3 5 6 7

Output:  Even Elements : 1 3 5 7

         Odd Elements : 6

----------------------------------------------------------------------------------------------------------------------         
Input:   Enter elements separated by space : 1 2 3 4 5 6 7 4 5 43 34 5 53 34

Output:  Even Elements : 
         2 4 6 4 34 34 
         
         Odd Elements : 
         1 3 5 7 5 43 5 53 
----------------------------------------------------------------------------------------------------------------------               
*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class CLL {
    constructor() {
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

    delete(d) {
        if (this.last == null) {
            return;
        }

        if (this.last.data == d && this.last == this.last.next) { //Checking if its the only node which 
            this.last = null;                                        //constains the data we want to delete
            return;
        }

        let curr = this.last;
        do {
            if (curr.next.data == d) {
                curr.next = curr.next.next;
                return;
            }
            curr = curr.next;
        } while (curr != this.last);
    }
}

function solution(last) {
    let curr = last.next;
    let even = new CLL();
    let odd = new CLL();
    //We add even elements to 'even' object and odd elements to 'odd' object

    do {
        if (curr.data % 2 == 0) {
            even.add(curr.data);
        }
        else {
            odd.add(curr.data);
        }
        curr = curr.next;
    } while (curr != last.next);

    console.log("\nEven Elements : ");
    even.print();

    console.log("\nOdd Elements : ");
    odd.print();
}

var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter elements separated by space : ", function (line) {
    let arr = line.split(' ').map(Number);
    let last = null;
    let curr = last;
    for (let i = 0; i < arr.length; i++) {
        if (last == null) {
            last = new Node(arr[i]);
            last.next = last;
        }
        else {
            let temp = last.next;
            last.next = new Node(arr[i]);
            last.next.next = temp;
            last = last.next;
        }
    }
    solution(last);
    readline.close();
})
