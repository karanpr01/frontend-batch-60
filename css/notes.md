
## **1. What is CSS?**
**CSS** (Cascading Style Sheets) is a language used to **style** and **layout** HTML elements, enhancing the visual presentation of web pages. It controls aspects like colors, fonts, spacing, positioning, and responsiveness.

- **Separation of Concerns**: CSS separates content (HTML) from presentation (CSS), making code cleaner and more maintainable.
- Without CSS, websites would appear as plain, unstyled documents.

---

### **Example:**
```html
<!-- HTML -->
<h1>Hello World!</h1>

<!-- CSS -->
<style>
  h1 {
    color: blue;         /* Changes text color */
    font-size: 32px;     /* Sets font size */
    text-align: center;  /* Centers text horizontally */
  }
</style>
```

---

## **2. CSS Syntax**
CSS follows a simple structure:

```css
selector {
  property: value;
}
```

- **Selector**: Targets the HTML element(s) you want to style.
- **Property**: The aspect of the element you want to modify.
- **Value**: The specific setting for the property.

---

### **Example:**
```css
p {
  color: red;           /* Changes text color to red */
  font-family: Arial;   /* Sets font to Arial */
  font-size: 16px;      /* Sets font size to 16 pixels */
  line-height: 1.5;     /* Adds vertical spacing between lines */
}
```

---

## **3. Box Model**
Every HTML element is represented as a **rectangular box**, consisting of four layers:

| Layer       | Description                                                                 |
|-------------|-----------------------------------------------------------------------------|
| **Content** | The innermost part, containing text, images, or other media.                |
| **Padding** | Space between the content and the border.                                  |
| **Border**  | A visible boundary around the padding.                                     |
| **Margin**  | Space outside the border, separating the element from other elements.      |

---

### **Box Sizing**
CSS provides two box-sizing models:

1. **`content-box`** (Default):
   - The `width` and `height` properties apply only to the **content area**.
   - Padding and border are added **outside** the specified dimensions.

   ```css
   div {
     width: 200px;
     padding: 20px;
     border: 5px solid black;
     box-sizing: content-box; /* Default behavior */
   }
   ```

   > Final width = 200px (content) + 40px (padding) + 10px (border) = **250px**

2. **`border-box`**:
   - The `width` and `height` properties include **content, padding, and border**.
   - This makes layout calculations more predictable.

   ```css
   div {
     width: 200px;
     padding: 20px;
     border: 5px solid black;
     box-sizing: border-box;
   }
   ```

   > Final width = **200px** (everything included)

---

### **Best Practice**
Use `box-sizing: border-box;` globally to simplify layout calculations:

```css
* {
  box-sizing: border-box;
}
```

---

## **4. Typography in CSS**
Typography controls the appearance and readability of text on your webpage.

---

### **Common Typography Properties**

| Property          | Description                                                                 |
|-------------------|-----------------------------------------------------------------------------|
| `font-family`     | Specifies the typeface (e.g., Arial, Georgia).                              |
| `font-size`       | Defines the size of the text (e.g., 16px, 1.2rem).                          |
| `font-weight`     | Controls the thickness of the text (e.g., normal, bold, 700).              |
| `line-height`     | Adjusts the vertical spacing between lines of text.                        |
| `letter-spacing`  | Adds space between individual characters.                                  |
| `text-align`      | Aligns text horizontally (e.g., left, center, right, justify).              |
| `text-transform`  | Modifies text capitalization (e.g., uppercase, lowercase, capitalize).      |
| `color`           | Sets the text color.                                                       |

---

### **Example:**
```css
h1 {
  font-family: 'Poppins', sans-serif; /* Modern font */
  font-size: 40px;                    /* Large font size */
  font-weight: bold;                  /* Bold text */
  color: #333;                        /* Dark gray color */
  text-align: center;                 /* Centered text */
  text-transform: uppercase;          /* Converts text to uppercase */
  letter-spacing: 2px;                /* Adds spacing between letters */
}
```

---

## **5. Backgrounds in CSS**
Background properties allow you to customize the appearance of an element's background using colors, images, gradients, and more.

---

### **Important Background Properties**

| Property             | Description                                                                 |
|----------------------|-----------------------------------------------------------------------------|
| `background-color`   | Sets the background color (e.g., `#f5f5f5`, `lightblue`).                   |
| `background-image`   | Adds a background image (e.g., `url('image.jpg')`).                         |
| `background-repeat`  | Controls whether the image repeats (e.g., `no-repeat`, `repeat-x`, etc.).   |
| `background-size`    | Resizes the background image (e.g., `cover`, `contain`).                    |
| `background-position`| Positions the background image (e.g., `center`, `top left`).               |
| `background-attachment` | Determines if the image scrolls with the page (`scroll`) or stays fixed (`fixed`). |

---

### **Example:**
```css
body {
  background-color: #f5f5f5;                      /* Light gray background */
  background-image: url('background.jpg');        /* Adds a background image */
  background-repeat: no-repeat;                   /* Prevents image repetition */
  background-size: cover;                         /* Covers the entire element */
  background-position: center;                    /* Centers the image */
  background-attachment: fixed;                   /* Keeps the image fixed while scrolling */
}
```

---

### **Shorthand Syntax**
You can combine all background properties into a single declaration:

```css
background: #f5f5f5 url('background.jpg') no-repeat center/cover fixed;
```

---

## **6. Layout Techniques**
CSS provides powerful tools for creating layouts, including Flexbox and Grid.



<!-- https://www.w3schools.com/cssref/trysel.php -->