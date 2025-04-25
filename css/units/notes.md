
## **1️⃣ Absolute vs. Relative Units in CSS**
CSS units define **how sizes are measured** for fonts, margins, padding, and other elements.

### **🔹 Absolute Units (Fixed Size)**
These units **do not change** based on the screen size or parent elements.

| Unit | Description |
|------|------------|
| `px`  | Pixels (most commonly used, but not scalable) |
| `pt`  | Points (used in print, 1pt = 1/72 inch) |
| `pc`  | Picas (used in typography, 1pc = 12pt) |
| `in`  | Inches (1in = 96px) |
| `cm`  | Centimeters (1cm = 37.8px) |
| `mm`  | Millimeters (1mm = 3.78px) |

🔹 **Example:**
```css
h1 {
  font-size: 24px; /* Always 24 pixels, regardless of the parent */
}
```

**🟢 When to use?**  
- When you need fixed sizes (e.g., small icons, borders).
- Avoid `px` for font sizes in responsive designs.

---

### **🔹 Relative Units (Scalable & Responsive)**
Relative units **adjust based on the context** (parent elements, viewport, or root font size).

| Unit | Relative To | Description |
|------|------------|------------|
| `%`  | Parent Element | Percentage-based size |
| `em`  | Parent Font Size | 1em = 100% of parent font size |
| `rem` | Root Font Size (`html`) | 1rem = 100% of root font size |
| `vh`  | Viewport Height | 1vh = 1% of viewport height |
| `vw`  | Viewport Width | 1vw = 1% of viewport width |
| `vmin` | Smaller of `vh` or `vw` | 1vmin = 1% of the smaller side |
| `vmax` | Larger of `vh` or `vw` | 1vmax = 1% of the larger side |

🔹 **Example using `em` and `rem`:**
```css
html {
  font-size: 16px;
}

p {
  font-size: 1.5em; /* 1.5 times the parent font size */
}

h1 {
  font-size: 2rem; /* 2 times the root font size (16px × 2 = 32px) */
}
```
🟢 **`rem` vs. `em`:**
- `rem` is **consistent** because it depends on the root `<html>` font size.
- `em` **cascades**, so it depends on the parent element.

🔹 **Example using `vh` and `vw`:**
```css
.fullscreen-section {
  width: 100vw; /* Full width of the viewport */
  height: 100vh; /* Full height of the viewport */
  background: lightblue;
}
```
**🟢 When to use?**  
- Use `rem` for **scalable** font sizes.
- Use `vh` and `vw` for **fullscreen layouts**.

---