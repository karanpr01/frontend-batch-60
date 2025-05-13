### 🔁 **`for` Loop**

The `for` loop is used when the number of iterations is known in advance.

#### ✅ Syntax:

```javascript
for (initialization; condition; increment/decrement) {
  // code to run in each iteration
}
```

#### ✅ Example:

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i); // Outputs: 0 1 2 3 4
}
```

#### ✅ How it works:

1. **Initialization**: Runs once before the loop starts.
2. **Condition**: Checked before each iteration; loop runs while this is `true`.
3. **Increment/Decrement**: Updates the loop counter after each iteration.

---

### 🔄 **`while` Loop**

The `while` loop is used when the number of iterations is **not known in advance**.

#### ✅ Syntax:

```javascript
while (condition) {
  // code to run
}
```

#### ✅ Example:

```javascript
let i = 0;
while (i < 5) {
  console.log(i); // Outputs: 0 1 2 3 4
  i++;
}
```

#### ✅ How it works:

* Checks the condition **before** every iteration.
* If `condition` is `true`, runs the code inside.
* Continues until `condition` becomes `false`.

---

### 🔁 `do...while` Loop

Similar to `while`, but guarantees the loop runs **at least once**.

#### ✅ Syntax:

```javascript
do {
  // code to run
} while (condition);
```

#### ✅ Example:

```javascript
let i = 0;
do {
  console.log(i); // Outputs: 0 even if condition is false initially
  i++;
} while (i < 5);
```

---

### 🧠 Quick Tips:

* Use `for` when you know how many times to loop.
* Use `while` or `do...while` when you don’t know the exact number of repetitions.
* Always ensure your loop has a condition that eventually becomes `false` to avoid **infinite loops**.


Here are the answers to the **first question from each level** in your JavaScript Loops Worksheet:

---

### ✅ **Easy - Q1**

**Write a `for` loop that prints the numbers from 1 to 5 (inclusive).**

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

🧠 **Reasoning**:

* The loop starts from `i = 1` and runs while `i <= 5`, incrementing `i` by 1 each time. This prints `1 2 3 4 5`.

---

### ✅ **Medium - Q5**

**Rewrite this `for` loop as a `while` loop:**

```javascript
for (let i = 10; i > 5; i--) {
  console.log(i);
}
```

🔁 **While version**:

```javascript
let i = 10;
while (i > 5) {
  console.log(i);
  i--;
}
```

🧠 **Reasoning**:

* Initialization (`let i = 10`) happens before the loop.
* Condition (`i > 5`) is checked before each loop.
* Decrement (`i--`) is performed at the end of each iteration.

---

### ✅ **Hard - Q8**

**Write a `while` loop that sums all numbers from 1 to 100 and prints the result.**

```javascript
let sum = 0;
let i = 1;
while (i <= 100) {
  sum += i;
  i++;
}
console.log(sum);
```

🧠 **Reasoning**:

* Start with `sum = 0`.
* Keep adding `i` to `sum` from `i = 1` to `100`.
* Final `sum` should be **5050**, which is the sum of the first 100 natural numbers.

---

Would you like solutions for the remaining questions too?
