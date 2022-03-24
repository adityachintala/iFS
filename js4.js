class cls {
    name = "Hello";
    method() {
        console.log(`Hi ${this.name}`);
    }
}

let a = new cls();
a.method();