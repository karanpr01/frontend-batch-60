# 📘 JavaScript Functions – Complete Notes

---

## ✅ 1. What is a Function?

A **function** is a reusable block of code designed to perform a particular task.

```js
function greet() {
  console.log("Hello!");
}
greet(); // Output: Hello!
```

---

## ✅ 2. Function Declaration (Function Statement)

```js
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5
```

* **Hoisted**: Can be called before declaration.

---

## ✅ 3. Function Expression

```js
const subtract = function(a, b) {
  return a - b;
};
console.log(subtract(5, 2)); // 3
```

* **Not hoisted** like function declarations.

---

## ✅ 4. Arrow Functions (ES6+)

```js
const multiply = (a, b) => a * b;
console.log(multiply(2, 3)); // 6
```

* Shorter syntax
* No `this`, `arguments`, `super`, or `new.target` bindings

### One-liner:

```js
const square = x => x * x;
```

---

## ✅ 5. Function Parameters & Arguments

```js
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greet();           // Hello, Guest!
greet("Alice");    // Hello, Alice!
```

* Default parameters
* `arguments` object (only in regular functions)

---

## ✅ 6. Rest Parameters

```js
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
```

* Gathers remaining arguments into an array.

---

## ✅ 7. Callback Functions

A function passed as an argument to another function.

```js
function greet(name, callback) {
  console.log(`Hi, ${name}`);
  callback();
}
greet("John", () => console.log("Callback called!"));
```

---

## ✅ 8. Anonymous Functions

Functions without a name. Often used as callbacks.

```js
setTimeout(function () {
  console.log("Hello after 1 sec");
}, 1000);
```

---

## ✅ 9. Named Functions

```js
function sayHello() {
  console.log("Hello");
}
```

Useful for recursion and debugging.

---

## ✅ 10. Immediately Invoked Function Expressions (IIFE)

```js
(function() {
  console.log("Executed Immediately");
})();
```

Used to avoid polluting the global scope.

---

## ✅ 11. Higher-Order Functions

Functions that:

* Accept other functions as arguments
* Return a function

```js
function higherOrder(fn) {
  return function () {
    fn();
  };
}
```

---

## ✅ 12. Closures 🔒

A function **remembers** the variables from its **lexical scope**, even when executed outside of that scope.

```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter(); // 1
counter(); // 2
```

---

## ✅ 13. Function Scope & Block Scope

* `var` – function scoped
* `let`/`const` – block scoped

```js
function example() {
  var a = 1;
  if (true) {
    let b = 2;
    const c = 3;
  }
  console.log(a); // 1
  // b and c are not accessible
}
```

---

## ✅ 14. `this` in Functions

* In regular functions: `this` depends on how the function is called.
* In arrow functions: `this` is lexically inherited (from the outer scope).

```js
const obj = {
  name: "Alice",
  greet: function () {
    console.log(this.name);
  },
};

obj.greet(); // Alice
```

Arrow function example (won't work with `this` as expected):

```js
const obj = {
  name: "Bob",
  greet: () => {
    console.log(this.name); // undefined
  },
};
```

---

## ✅ 15. Recursion

Function calling itself.

```js
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // 120
```

---

## ✅ 16. Function Constructor (Rarely Used)

```js
const add = new Function("a", "b", "return a + b");
console.log(add(2, 3)); // 5
```

---

## ✅ 17. Generator Functions (`function*`)

Can pause execution with `yield`.

```js
function* gen() {
  yield 1;
  yield 2;
}
const g = gen();
console.log(g.next()); // { value: 1, done: false }
console.log(g.next()); // { value: 2, done: false }
```

---

## ✅ 18. Async/Await Functions

Used for asynchronous code in a readable way.

```js
async function fetchData() {
  const res = await fetch("https://api.example.com");
  const data = await res.json();
  console.log(data);
}
```

---

## 🧠 Advanced Topics

* **Function Currying**

```js
const add = a => b => a + b;
console.log(add(2)(3)); // 5
```

