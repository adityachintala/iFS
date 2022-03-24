/*

Collatz sequence is defined corresponding to n as the numbers formed by the following operations :
 
If n is even, then n = n / 2.
If n is odd, then n = 3*n + 1.
Repeat above steps, until it becomes 1.

----------------------------------------------------------------------------------------------------

Now we input some numbers and store them in a CLL.
We have to update each and every element of CLL with the corresponding Collatz sequence.
Until we get all the elements equal to 1.

Now we should output how many times the we had to traverse the whole CLL.

----------------------------------------------------------------------------------------------------

Input: n elements are taken as input.

Output: Print the number of times the we had to traverse the whole CLL.

----------------------------------------------------------------------------------------------------

Input:  Enter elements separated by space : 1 3 5 6

Output: Number of times we had to traverse the whole CLL: 8

----------------------------------------------------------------------------------------------------

Input:  Enter elements separated by space : 1 2 3 4 5 6 7 8 9

Output: Number of times we had to traverse the whole CLL: 19

----------------------------------------------------------------------------------------------------

Input:  Enter elements separated by space : 1 1 1 1 1 2 1 1 1

Output: Number of times we had to traverse the whole CLL: 1

----------------------------------------------------------------------------------------------------

Input:  Enter elements separated by space : 1 1 1 1 1 1 1

Output: Number of times we had to traverse the whole CLL: 0

----------------------------------------------------------------------------------------------------
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

    length() {
        if (this.last == null) {
            return 0;
        }
        let curr = this.last;
        let count = 1;
        do {
            curr = curr.next;
            count++;
        } while (curr != this.last);
        return count;
    }

    check_if_all_elements_are_equal_to_1() {
        if (this.last == null) {
            return false;
        }
        let curr = this.last;
        do {
            if (curr.data != 1) {
                return false;
            }
            curr = curr.next;
        } while (curr != this.last);
        return true;
    }
}

function solution(last) {
    let cll = new CLL();
    let curr = last.next;

    do {
        cll.add(curr.data);
        curr = curr.next;
    } while (curr != last.next);

    let length = cll.length();

    if (length == 0) {
        return;
    }

    let count = 0;

    while (!cll.check_if_all_elements_are_equal_to_1()) {
        let curr = cll.last.next;
        do {
            if (curr.data % 2 == 0 && curr.data != 1) {
                curr.data = curr.data / 2;
            }
            else if (curr.data != 1 && curr.data % 2 != 0) {
                curr.data = 3 * curr.data + 1;
            }
            curr = curr.next;
        } while (curr != cll.last.next);
        count++;
    }

    console.log("\nNumber of times we had to traverse the whole CLL: " + count);
}


var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter elements separated by space : ", function (line) {
    let arr = line.split(' ').map(Number);
    let last = null;
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
