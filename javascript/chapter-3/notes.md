### ✅ 1. `if`, `else if`, `else` Statement

#### 🔹 Syntax:

```javascript
if (condition) {
  // code if condition is true
} else if (anotherCondition) {
  // code if anotherCondition is true
} else {
  // code if none of the above are true
}
```

#### 🔹 Example:

```javascript
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else {
  console.log("Grade: C or below");
}
```

#### 🔹 Notes:

* You can have **multiple `else if` blocks**, but **only one `if`** and **one `else`**.
* Conditions are checked **top to bottom**, first true one executes.

---

### ✅ 2. `switch` Statement

#### 🔹 Syntax:

```javascript
switch(expression) {
  case value1:
    // code block
    break;
  case value2:
    // code block
    break;
  default:
    // default code block
}
```

#### 🔹 Example:

```javascript
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}
```

#### 🔹 Notes:

* Use `break` to **prevent fall-through** (i.e., continuing to next case).
* `default` is optional but recommended for unknown values.
* Works best with **discrete values**, like numbers or strings.

---

### ✅ 3. Ternary Operator (`? :`)

#### 🔹 Syntax:

```javascript
condition ? expressionIfTrue : expressionIfFalse;
```

#### 🔹 Example:

```javascript
let age = 18;
let access = (age >= 18) ? "Allowed" : "Denied";
console.log(access); // "Allowed"
```

#### 🔹 Nested Ternary Example (use sparingly for readability):

```javascript
let score = 75;
let grade = score >= 90 ? "A" :
            score >= 80 ? "B" :
            score >= 70 ? "C" : "F";
console.log(grade); // "C"
```

#### 🔹 Notes:

* Ternary is **shorthand for simple if-else**.
* Avoid nesting too deeply — it reduces readability.

---

### 🔍 When to Use What?

| Use Case                       | Best Choice      |
| ------------------------------ | ---------------- |
| Multiple discrete values       | `switch`         |
| Simple true/false logic        | Ternary operator |
| Complex or multiple conditions | `if-else`        |
