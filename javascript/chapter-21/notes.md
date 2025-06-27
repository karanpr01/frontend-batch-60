

## 📌 1. **Global Execution Context (GEC)**

The **Global Execution Context** is the default or base execution context in JS when a script first runs.

### Phases of Execution Context:

1. **Creation Phase** (also called "Memory Creation Phase")

   * The JS engine scans the code.
   * **Memory is allocated** for variables and functions:

     * `var` → assigned `undefined`
     * `let` / `const` → *uninitialized* (goes into **TDZ**)
     * Function declarations → memory assigned with the whole function

2. **Execution Phase**

   * Code is executed **line-by-line**.
   * Variables are assigned values.
   * Functions are invoked.

---

### 🧠 What is the Execution Context?

Every time a function is called, a new execution context is created and pushed to the **Call Stack**.

There are two main types:

* **Global Execution Context (GEC)** → Created for your entire script
* **Functional Execution Context (FEC)** → Created each time a function runs

---

## 📌 2. **Hoisting**

**Hoisting** is JS's behavior of moving declarations to the top of the scope during the creation phase.

### Rules:

* `var` is hoisted and initialized as `undefined`
* `function` declarations are hoisted with their **entire definition**
* `let` and `const` are hoisted but not initialized (TDZ)

---

### ✅ Example 1: Variable Hoisting (var vs let/const)

```js
console.log(a);  // undefined
var a = 10;

console.log(b);  // ReferenceError
let b = 20;
```

#### Explanation:

* `var a` is hoisted and initialized to `undefined`
* `let b` is hoisted but not initialized, so accessing it throws a **ReferenceError** (TDZ)

---

## 📌 3. **Temporal Dead Zone (TDZ)**

The **TDZ** is the time between the hoisting of a variable declared with `let` or `const` and its actual declaration.

Trying to access it during this period will throw a **ReferenceError**.

### ✅ Example 2: TDZ Demo

```js
function example() {
  console.log(x); // ReferenceError
  let x = 5;
}
example();
```

Even though `x` is declared in the same scope, accessing it before its declaration causes an error due to TDZ.

---

## 📌 4. **Function Hoisting**

```js
greet();  // Works due to hoisting

function greet() {
  console.log("Hello!");
}

sayHi();  // Error: sayHi is not a function
var sayHi = function () {
  console.log("Hi!");
};
```

### Explanation:

* `greet()` is a function declaration, so the entire function is hoisted.
* `sayHi` is a variable (assigned to a function expression), so it's hoisted as `undefined`.

---

## ✅ Example 3: Combining All – GEC + Hoisting + TDZ

```js
console.log(message); // undefined (hoisted)
console.log(count);   // ReferenceError (TDZ)

var message = "Hi!";
let count = 10;

greet(); // Works
function greet() {
  console.log("Inside greet");
}

sayHello(); // TypeError: sayHello is not a function
var sayHello = function () {
  console.log("Hello!");
};
```

### Key Points:

* `message` is `var`, hoisted and initialized to `undefined`.
* `count` is `let`, hoisted but not initialized → TDZ
* `greet()` works → Function declaration is hoisted.
* `sayHello` is `undefined` at call time → It's a variable assigned a function.

---

## 🎯 Summary Table

| Type           | Hoisted | Initialized | Can access before declaration? |
| -------------- | ------- | ----------- | ------------------------------ |
| `var`          | ✅ Yes   | ✅ undefined | ✅ Yes (but undefined)          |
| `let`          | ✅ Yes   | ❌ No        | ❌ No (TDZ)                     |
| `const`        | ✅ Yes   | ❌ No        | ❌ No (TDZ)                     |
| Function Decl. | ✅ Yes   | ✅ Yes       | ✅ Yes                          |
| Function Expr. | ✅ Var   | ✅ No        | ❌ No                           |

---

## 🔥 Pro Tips for Interview & Real Projects

* Always declare variables at the top of their scope.
* Prefer `let` and `const` to avoid bugs from accidental hoisting.
* Understand hoisting well—it’s a common source of confusion in interviews and debugging.
* In strict mode (`'use strict'`), some silent hoisting behaviors throw errors.
