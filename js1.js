/*
There are n people standing in a circle waiting to be executed. 
The counting out begins at some point in the circle and proceeds around the circle in a fixed direction.
In each step, a certain number of people are skipped and the next person is executed.
The elimination proceeds around the circle(which is becoming smaller and smaller as the executed people are removed),
until only the last person remains, who is given freedom.
Given the total number of persons n and a number k which indicates that k - 1 persons are skipped and k - th person is killed in circle.
The task is to choose the place in the initial circle so that you are the last one remaining and so survive.

----------------------------------------------------------------------------------------------------------------------
Input:   Enter N and K separated by space : 172 6

Output:  Position to not die : 111

----------------------------------------------------------------------------------------------------------------------
Input:   Enter N and K separated by space : 5 3

Output:  Position to not die : 4

----------------------------------------------------------------------------------------------------------------------
Input:   Enter N and K separated by space : 12 2

Output:  Position to not die : 9

----------------------------------------------------------------------------------------------------------------------

*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function solution(n, k) {
    let head = new Node(1);
    let curr = head;
    for (let i = 2; i <= n; i++) {
        curr.next = new Node(i);
        curr = curr.next;
    }
    curr.next = head;

    let p1 = p2 = head;
    while (p1 != p1.next) {
        let c = 1;
        while (c < k) {
            p2 = p1;
            p1 = p1.next;
            c++;
        }

        p2.next = p1.next;
        delete p1;
        p1 = p2.next;
    }
    let ans = p1.data;
    delete p1;
    console.log('Position to not die : ' + ans);

}

var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter N and K separated by space : ", function (line) {
    let arr = line.split(' ').map(Number);
    solution(arr[0], arr[1]);
    readline.close();
})
