## 📘 CSS `display` Property – Complete Notes

The `display` property in CSS determines how an element is displayed in the document layout flow.

---

### 🔹 1. **Common `display` Values**

| Value | Description |
|-------|-------------|
| `block` | Element takes up full width. Starts on a new line. |
| `inline` | Element only takes up as much width as needed. Does not start on a new line. |
| `inline-block` | Like `inline`, but allows setting width & height. |
| `none` | Hides the element (doesn't take up space in layout). |
| `flex` | Turns the element into a **flex container**. |
| `inline-flex` | Same as `flex`, but behaves like `inline`. |
| `grid` | Turns the element into a **grid container**. |
| `inline-grid` | Same as `grid`, but behaves like `inline`. |


---

### 🔸 2. **Block vs Inline vs Inline-Block**

| Feature | `block` | `inline` | `inline-block` |
|--------|---------|----------|----------------|
| Starts on new line | ✅ | ❌ | ❌ |
| Width/Height can be set | ✅ | ❌ | ✅ |
| Margin/Padding respected | ✅ | Partial | ✅ |

**Example:**
```html
<div style="display: block;">Block</div>
<span style="display: inline;">Inline</span>
<span style="display: inline-block;">Inline-Block</span>
```

---

### 🔹 3. **`display: none` vs `visibility: hidden`**

| Feature | `display: none` | `visibility: hidden` |
|---------|------------------|-----------------------|
| Element visible? | ❌ | ❌ |
| Takes space in layout? | ❌ | ✅ |
| Can interact (click)? | ❌ | ❌ |

---

### 🔸 4. **`display: flex` and `inline-flex`**

- Makes an element a **flex container**.
- Enables powerful layout tools using `justify-content`, `align-items`, etc.

```css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

---

### 🔹 5. **`display: grid` and `inline-grid`**

- Makes an element a **grid container**.
- Use with `grid-template-columns`, `grid-gap`, etc.

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

---


### 🧠 Bonus: `display` Default Values

| Element | Default `display` |
|---------|--------------------|
| `<div>` | `block` |
| `<span>` | `inline` |
| `<p>` | `block` |
| `<img>` | `inline` |
| `<button>` | `inline-block` |

You can use the browser’s DevTools to check default styles.

