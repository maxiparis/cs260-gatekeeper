-# Notes

## Things I learned in this tutorial

- git fetch will update my local repo without pulling.
- git commit -am will add and commit in one command.
- licenses are important for open-source developemnt.

## Things I learned after creating my EC2 instance
- EC2 instances are the server hosting a web server and they have ips where I can access to them.
- Every time I reboot or restart my EC2 instance, its ip will change.
- To avoid this, I can create an elastic IP address and associate it with the EC2 instance.
- how to ssh into my server: ssh -i awsServer.pem ubuntu@54.224.69.77

# HTML
## Images
To insert images in HTML, you can use the `<img>` tag. Here’s the basic syntax:

```html
<img src="image-path" alt="description" width="width-value" height="height-value">
```


### Key Attributes:
1. **`src` (source)**: This is the URL or path to the image you want to display.
2. **`alt` (alternative text)**: This provides a description of the image for accessibility and if the image fails to load.
3. **`width`** and **`height`**: These specify the image's dimensions (optional).

### Example:
```html
<img src="images/picture.jpg" alt="A beautiful sunset" width="500" height="300">
```

- **External Image**: Use an absolute URL for images hosted online.
  ```html
  <img src="https://example.com/image.jpg" alt="Example image">
  ```

- **Local Image**: Use a relative path for images stored locally in your project.
  ```html
  <img src="assets/image.jpg" alt="Local image">
  ```

Let me know if you need help with anything specific!

## Header, Nav, Main, Footer
Here’s an explanation of the **`<body>`**, **`<nav>`**, **`<main>`**, **`<header>`**, and **`<footer>`** HTML tags, along with an example of how they are used:

### 1. **`<body>`**:
- **Definition**: Contains the entire content of the HTML document (text, images, videos, links, etc.) that appears on the page.
- **Example**:
  ```html
  <body>
    <h1>Welcome to My Website</h1>
    <p>This is the main content of the page.</p>
  </body>
  ```

### 2. **`<nav>`**:
- **Definition**: Represents a section of the page that contains links to navigate within the website (like a menu or table of contents).
- **Example**:
  ```html
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
  ```

### 3. **`<main>`**:
- **Definition**: Contains the dominant content of the `<body>` of a document. It should only contain content unique to that page and be used once per page.
- **Example**:
  ```html
  <main>
    <h2>About Us</h2>
    <p>This section contains information about our company.</p>
  </main>
  ```

### 4. **`<header>`**:
- **Definition**: Represents introductory content or a group of navigation links, typically containing the site’s branding, title, or logo.
- **Example**:
  ```html
  <header>
    <h1>My Awesome Website</h1>
    <p>Welcome to my personal blog!</p>
  </header>
  ```

### 5. **`<footer>`**:
- **Definition**: Represents the footer of a document or section. Usually contains metadata, copyright, contact info, or related links.
- **Example**:
  ```html
  <footer>
    <p>&copy; 2024 My Awesome Website. All rights reserved.</p>
  </footer>
  ```

### Complete Example:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Basic Web Page Structure</title>
</head>
<body>

  <header>
    <h1>My Awesome Website</h1>
    <p>Your go-to site for tech news</p>
  </header>

  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About Us</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  <main>
    <h2>Welcome!</h2>
    <p>This is the main content of the website where you can find great articles.</p>
  </main>

  <footer>
    <p>&copy; 2024 My Awesome Website</p>
    <p>Contact us at: info@mywebsite.com</p>
  </footer>

</body>
</html>
```

### Explanation:
- **`<header>`**: Contains the title and a welcoming message.
- **`<nav>`**: Provides a navigation menu with links.
- **`<main>`**: Contains the core content of the page.
- **`<footer>`**: Includes copyright information and contact details.

These tags help structure a webpage and make it more semantically meaningful.

### Summary

``` html
<header>
... could contain the nav here or after
	<nav>
		list
	</nav>
</header>

<main>
	my main content
</main>

<footer>
	footer stuff
</footer>
```


# CSS
## Units
Here’s a table summarizing the most commonly used units in CSS:

| **Unit** | **Type** | **Description**                                 | **Example**          |
| -------- | -------- | ----------------------------------------------- | -------------------- |
| `px`     | Absolute | Pixels (1px = 1/96th of 1 inch)                 | `width: 200px;`      |
| `in`     | Absolute | Inches (1in = 96px)                             | `width: 2in;`        |
| `cm`     | Absolute | Centimeters (1cm ≈ 37.8px)                      | `width: 5cm;`        |
| `mm`     | Absolute | Millimeters (1mm ≈ 3.78px)                      | `width: 10mm;`       |
| `pt`     | Absolute | Points (1pt = 1/72 of 1 inch)                   | `font-size: 12pt;`   |
| `pc`     | Absolute | Picas (1pc = 12pt = 1/6 of 1 inch)              | `width: 2pc;`        |
| `%`      | Relative | Percentage of the parent element                | `width: 50%;`        |
| `em`     | Relative | Relative to the font size of the parent element | `padding: 2em;`      |
| `rem`    | Relative | Relative to the root element's font size        | `font-size: 1.5rem;` |
| `vw`     | Relative | Relative to 1% of the viewport's width          | `width: 50vw;`       |
| **`vh`** | Relative | Relative to 1% of the viewport's height         | `height: 75vh;`      |
| `vmin`   | Relative | 1% of the viewport’s smaller dimension          | `font-size: 10vmin;` |
| `vmax`   | Relative | 1% of the viewport’s larger dimension           | `width: 80vmax;`     |
| `ch`     | Relative | Width of the "0" character in the current font  | `width: 40ch;`       |
| `ex`     | Relative | Height of the lowercase "x" in the current font | `font-size: 1ex;`    |

# Associating CSS with HTML

There are three ways that you can associate CSS with HTML.
## The **first way** is to use the style attribute of an HTML element and explicitly assign one or more declarations.

``` html
<p style="color:green">CSS</p>
```

## Second way
The next way to associate CSS is to use the HTML style element to define CSS rules within the HTML document. The style element should appear in the head element of the document so that the rules apply to all elements of the document.

``` html
<head>
  <style>
    p {
      color: green;
    }
  </style>
</head>
<body>
  <p>CSS</p>
</body>
```

## Third way
The final way to associate CSS is to use the HTML link element to create a hyperlink reference to an external file containing CSS rules. The link element must appear in the head element of the document.

``` html
<link rel="stylesheet" href="styles.css" />
```

``` css
styles.css

p {
  color: green;
}
```

***All of the above examples are equivalent, but using the ==link== element usually is the preferred way to define CSS.***

# Combinators

Next we want to change the color of the second level headings (`h2`), but we only want to do that within the sections for each department. To make that happen we can provide a `descendant combinator` that is defined with a space delimited list of values where each item in the list is a descendant of the previous item. So our selector would be all `h2`elements that are descendants of `section` elements.

``` css
section h2 {
  color: #004400;
}
```
There are other types of combinators that you can use. These include the following.

| Combinator       | Meaning                    | Example        | Description                                |
| ---------------- | -------------------------- | -------------- | ------------------------------------------ |
| Descendant       | A list of descendants      | `body section` | Any section that is a descendant of a body |
| Child            | A list of direct children  | `section > p`  | Any p that is a direct child of a section  |
| General sibling  | A list of siblings         | `div ~ p`      | Any p that has a div sibling               |
| Adjacent sibling | A list of adjacent sibling | `div + p`      | Any p that has an adjacent div sibling     |

We can use the general sibling combinator to increase the whitespace padding on the left of paragraphs that are siblings of a level two heading.

``` css
h2 ~ p {
  padding-left: 0.5em;
}
```

# className selector

The next selector we will use is the className selector. Remember that any element can have zero or more classNameifications applied to it. For example, our document has a className of `introduction` applied to the first paragraph, and a className of `summary` applied to the final paragraph of each section. If we want to bold the summary paragraphs we would supply the className name summary prefixed with a period (`.summary`).

``` css
.summary {
  font-weight: bold;
}
```

You can also combine the element name and className selectors to select all paragraphs with a className of summary.

``` css
p.summary {
  font-weight: bold;
}
```

# ID selector

ID selectors reference the ID of an element. All IDs should be unique within an HTML document and so this select targets a specific element. To use the ID selector you prefix the ID with the hash symbol (`#`). We would like to showcase our physics department by putting a thin purple border along the left side of the physics section.

``` css
#physics {
  border-left: solid 1em purple;
}
```

# Pseudo selector

CSS also defines a significant list of pseudo selectors which select based on positional relationships, mouse interactions, hyperlink visitation states, and attributes. We will give just one example. Suppose we want our purple highlight bar to appear only when the mouse hovers over the text. To accomplish this we can change our ID selector to select whenever a section is hovered over.

``` css
section:hover {
  border-left: solid 1em purple;
}
```


## Example:
``` css
body {
  font-family: sans-serif;
}

h1 {
  border-bottom: thin black solid;
}

section {
  background: #eeeeee;
  padding: 0.25em;
  margin-bottom: 0.5em;
  border-left: solid 1em #eeeeee;  
}

/* h2 descendent of section */
section h2 {
  color: #0044EE;
}

/* Sibling of h2 */
h2 ~ p {
  padding-left: 0.5em;
}


/* paragraph with summary className */
p.summary {
  font-weight: bold;
}

/** on section mouse hover */
section:hover {
  border-left: solid 1em purple;
}


```

``` html
<body>
  <h1>Departments</h1>
  <p>welcome message<p>
  <section id="physics">
    <h2>Physics</h2>
    <p className="introduction">Introduction</p>
    <p>Text</p>
    <p className="summary">Summary</p>
  </section>
  <section id="chemistry">
    <h2>Chemistry</h2>
    <p className="introduction">Introduction</p>
    <p>Text</p>
    <p className="summary">Summary</p>
  </section>
</body>

```

# CSS Declarations
| Property           | Value                              | Example             | Discussion                                                                     |
| ------------------ | ---------------------------------- | ------------------- | ------------------------------------------------------------------------------ |
| background-color   | color                              | `red`               | Fill the background color                                                      |
| border             | color width style                  | `#fad solid medium` | Sets the border using shorthand where any or all of the values may be provided |
| border-radius      | unit                               | `50%`               | The size of the border radius                                                  |
| box-shadow         | x-offset y-offset blu-radius color | `2px 2px 2px gray`  | Creates a shadow                                                               |
| columns            | number                             | `3`                 | Number of textual columns                                                      |
| column-rule        | color width style                  | `solid thin black`  | Sets the border used between columns using border shorthand                    |
| color              | color                              | `rgb(128, 0, 0)`    | Sets the text color                                                            |
| cursor             | type                               | `grab`              | Sets the cursor to display when hovering over the element                      |
| display            | type                               | `none`              | Defines how to display the element and its children                            |
| filter             | filter-function                    | `grayscale(30%)`    | Applies a visual filter                                                        |
| float              | direction                          | `right`             | Places the element to the left or right in the flow                            |
| flex               |                                    |                     | Flex layout. Used for responsive design                                        |
| font               | family size style                  | `Arial 1.2em bold`  | Defines the text font using shorthand                                          |
| grid               |                                    |                     | Grid layout. Used for responsive design                                        |
| height             | unit                               | `.25em`             | Sets the height of the box                                                     |
| margin             | unit                               | `5px 5px 0 0`       | Sets the margin spacing                                                        |
| max-[width/height] | unit                               | `20%`               | Restricts the width or height to no more than the unit                         |
| min-[width/height] | unit                               | `10vh`              | Restricts the width or height to no less than the unit                         |
| opacity            | number                             | `.9`                | Sets how opaque the element is                                                 |
| overflow           | [visible/hidden/scroll/auto]       | `scroll`            | Defines what happens when the content does not fix in its box                  |
| position           | [static/relative/absolute/sticky]  | `absolute`          | Defines how the element is positioned in the document                          |
| padding            | unit                               | `1em 2em`           | Sets the padding spacing                                                       |
| left               | unit                               | `10rem`             | The horizontal value of a positioned element                                   |
| text-align         | [start/end/center/justify]         | `end`               | Defines how the text is aligned in the element                                 |
| top                | unit                               | `50px`              | The vertical value of a positioned element                                     |
| transform          | transform-function                 | `rotate(0.5turn)`   | Applies a transformation to the element                                        |
| width              | unit                               | `25vmin`            | Sets the width of the box                                                      |
| z-index            | number                             | `100`               | Controls the positioning of the element on the z axis                          |
# Units

You can use a variety of units when defining the size of a CSS property. For example, the width of an element can be defined using absolute units such as the number of pixels (`px`) or inches (`in`). You can also use relative units such as a percentage of the parent element (`50%`), a percentage of a minimum viewport dimension (`25vmin`), or a multiplier of the size of the letter m (`1.5rem`) as defined by the root element.

``` css
p {
  width: 25%;
  height: 30vh;
}
```

Here is a list of the most commonly used units. All of the units are prefixed with a number when used as a property value.

| Unit | Description                                                      |
| ---- | ---------------------------------------------------------------- |
| px   | The number of pixels                                             |
| pt   | The number of points (1/72 of an inch)                           |
| in   | The number of inches                                             |
| cm   | The number of centimeters                                        |
| %    | A percentage of the parent element                               |
| em   | A multiplier of the width of the letter `m` in the parent's font |
| rem  | A multiplier of the width of the letter `m` in the root's font   |
| ex   | A multiplier of the height of the element's font                 |
| vw   | A percentage of the viewport's width                             |
| vh   | A percentage of the viewport's height                            |
| vmin | A percentage of the viewport's smaller dimension                 |
| vmax | A percentage of the viewport's larger dimension                  |

# Color

CSS defines multiple ways to describe color, ranging from representations familiar to programmers and ones familiar to layout designers and artists.

| Method       | Example                   | Description                                                                                                                                                                                                       |
| ------------ | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| keyword      | `red`                     | A set of predefined colors (e.g. white, cornflowerblue, darkslateblue)                                                                                                                                            |
| RGB hex      | `#00FFAA22`or `#0FA2`     | Red, green, and blue as a hexadecimal number, with an optional alpha opacity                                                                                                                                      |
| RGB function | `rgb(128, 255, 128, 0.5)` | Red, green, and blue as a percentage or number between 0 and 255, with an optional alpha opacity percentage                                                                                                       |
| HSL          | `hsl(180, 30%, 90%, 0.5)` | Hue, saturation, and light, with an optional opacity percentage. Hue is the position on the 365 degree color wheel (red is 0 and 255). Saturation is how gray the color is, and light is how bright the color is. |
# Importing fonts

In addition to referencing standard fonts found on the user's computer you can specify a font that you provide with your application. That way your application is guaranteed to always look the same. In order to have the browser load a font you use the `@font-face` rule and provide the font name and source location.

```
@font-face {
  font-family: 'Quicksand';
  src: url('https://cs260.click/fonts/quicksand.ttf');
}

p {
  font-family: Quicksand;
}
```


If you do not want to host font files on your server, then you can load them from a font provider. For example, Google provides a large selection of [open source fonts](https://fonts.google.com/) that you can use without paying any royalties. The easiest way to use Google fonts is to use a CSS import statement to reference the Google Font Service. This will automatically generate the CSS for importing the font.

```
@import url('https://fonts.googleapis.com/css2?family=Rubik Microbe&display=swap');

p {
  font-family: 'Rubik Microbe';
}
```

# Animation

``` css
p {
  text-align: center;
  font-size: 20vh;

  animation-name: demo;
  animation-duration: 3s;
}

@keyframes demo {
  from {
    font-size: 0vh;
  }

  95% {
    font-size: 21vh;
  }

  to {
    font-size: 20vh;
  }
}

```

# Difference between padding, border and margin
In CSS, **padding**, **border**, and **margin** are properties used to control the space around an element. Here's how they differ:

![[Pasted image 20241001145338.png]]
### 1. **Padding**
- **Definition**: Padding is the space **inside** the element, between the content and the element's border.
- **Effect**: It increases the size of the element without affecting the position relative to other elements.
- **Example**:
  ``` css
  .box {
    padding: 20px;
  }
  ```
  This adds 20 pixels of space between the content and the inside edges of the element.

### 2. **Border**
- **Definition**: The border is a line that wraps around the element, outside the padding, separating the element from the margin.
- **Effect**: It creates a visible outline around the element, but can also affect the size of the element.
- **Example**:
  ```css
  .box {
    border: 2px solid black;
  }
  ```
  This adds a 2-pixel solid black line **around** the element.

### 3. **Margin**
- **Definition**: Margin is the space **outside** the element, separating it from neighboring elements.
- **Effect**: It adds space around the element, pushing it away from other elements, without affecting the element’s size.
- **Example**:
  ```css
  .box {
    margin: 20px;
  }
  ```
  This adds 20 pixels of space around the outside of the element, between it and other elements.

### Summary:
- **Padding**: Space **Inside** the border, creates space between content and border.
- **Border**: The visible **outline** around an element.
- **Margin**: Space **Outside** the border, creates space between elements.

These properties are used to manage layout and spacing in CSS effectively.

---
# Display

The CSS display property allows you to change how an HTML element is displayed by the browser. The common options for the display property include the following.

| Value    | Meaning                                                                                                                      |
| -------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `none`   | Don't display this element. The element still exists, but the browser will not render it.                                    |
| `block`  | Display this element with a width that fills its parent element. A `p` or `div` element has block display by default.        |
| `inline` | Display this element with a width that is only as big as its content. A `b` or `span` element has inline display by default. |
| `flex`   | Display this element's children in a flexible orientation.                                                                   |
| `grid`   | Display this element's children in a grid orientation.                                                                       |
```html
<div className="none">None</div>
<div className="block">Block</div>
<div className="inline">Inline1</div>
<div className="inline">Inline2</div>
<div className="flex">
  <div>FlexA</div>
  <div>FlexB</div>
  <div>FlexC</div>
  <div>FlexD</div>
</div>
<div className="grid">
  <div>GridA</div>
  <div>GridB</div>
  <div>GridC</div>
  <div>GridD</div>
</div>
```

By default:
![[Pasted image 20241003212220.png]]

If we modify the display property associated with each element with the following CSS, then we get a totally different rendering.

```css
.none {
  display: none;
}

.block {
  display: block;
}

.inline {
  display: inline;
}

.flex {
  display: flex;
  flex-direction: row;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
```

![[Pasted image 20241003212310.png]]

# Flex

Flex is like a Stack in Swift.
It could be vertical (`VStack`)
```css
.container {
	display: flex;
	flex-direction: column;
}
```

or horizontal (`HStack`)
```css
.container {
	display: flex;
	flex-direction: row;
}
```

## Gap

Gap adds even space between the elements inside a `flex` container.

see [documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/gap)

# Frameworks
## Tailwind

Tailwind takes a different approach than traditional CSS frameworks. Instead of using large, rich, CSS rulesets to compartmentalize styling and functionality, it uses smaller definitions that are applied specifically to individual HTML elements. This moves much of the CSS representation out of the CSS file and directly into the HTML.

```html
<div className="pt-6 md:p-8 text-center md:text-left space-y-4">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="profile.png" />
  <p className="text-lg font-medium">“Tailwind CSS”</p>
</div>
```
## Bootstrap

### Getting bootstrap

[Some documentation](https://getbootstrap.com/docs/5.2/getting-started/introduction/)

You can integrate Bootstrap into your web applications simply by referencing the Bootstrap CSS files from their [content delivery network](https://getbootstrap.com/docs/5.2/getting-started/introduction/#cdn-links) (CDN). You then add the HTML link elements to your head element like this.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
    />
  </head>
  <body>
    ...
  </body>
</html>
```
If you are going to use Bootstrap components that require JavaScript (carousel, buttons, and more), you will also need to include Bootstrap's JavaScript module. You add this by putting the following at **the end** of your HTML body element.

```html
<body>
  ...

  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
    crossorigin="anonymous"
  ></script>
</body>
```

## Example in CodePen

[Link 🔗](https://codepen.io/leesjensen/pen/JjZavjW)

# Setting responsive screen
```css
.form-width {  
    width: 100%; /* Default width for small screens */  
}  
  
@media (min-width: 576px) { /* sm breakpoint */  
    .form-width {  
        width: 80%; /* Width for small screens and up */  
    }  
}  
  
@media (min-width: 768px) { /* md breakpoint */  
    .form-width {  
        width: 50%; /* Width for medium screens and up */  
    }  
}  
  
@media (min-width: 992px) { /* lg breakpoint */  
    .form-width {  
        width: 35%; /* Width for large screens and up */  
    }  
}  
  
@media (min-width: 1200px) { /* xlg breakpoint */  
    .form-width {  
        width: 20%; /* Width for large screens and up */  
    }  
}
```

# CSS Bootstrap

# Align-items vs justify-content
In Bootstrap and Flexbox, `align-items-center` and `justify-content-center` are two utility classNamees that control the alignment of flex items, but they operate along different axes and serve different purposes. Here's a detailed explanation of each:

## 1. **`align-items`**
### Def:
- **Axis**: It operates along the **cross axis** (perpendicular to the main axis).
- **Usage**: Use this className when you want to align items vertically within a flex container.

### Usage:
- **`align-items-start`**: Aligns flex items to the start of the cross axis (top for row direction).
- **`align-items-center`**: Vertically centers flex items.
- **`align-items-end`**: Aligns flex items to the end of the cross axis (bottom for row direction).
- **`align-items-baseline`**: Aligns items along their baseline.
- **`align-items-stretch`**: Stretches items to fill the container (default behavior).

## 2. **`justify-content`**

### Def:
- **Axis**: It operates along the **main axis** (the direction in which flex items are laid out, either row or column).
- **Usage**: Use this className when you want to center items horizontally within a flex container.

### Usage
- **`justify-content-start`**: Aligns flex items to the start of the main axis (left for row direction).
- **`justify-content-center`**: Horizontally centers flex items.
- **`justify-content-end`**: Aligns flex items to the end of the main axis (right for row direction).
- **`justify-content-between`**: Distributes items evenly; the first item is at the start and the last at the end, with equal space between them.
- **`justify-content-around`**: Distributes items evenly; each item has equal space around it.
- **`justify-content-evenly`**: Distributes items evenly; equal space around all items.

### **Summary of Differences**

| Property                   | `align-items-center`                      | `justify-content-center`                    |
|---------------------------|-------------------------------------------|--------------------------------------------|
| **Purpose**               | Vertical alignment of items               | Horizontal alignment of items              |
| **Axis**                  | Cross axis (perpendicular to the main axis) | Main axis (the direction of the flex items) |
| **Effect**                | Centers items vertically                  | Centers items horizontally                  |

# Padding

To add padding to the left of a component in Bootstrap, you can use the padding utility classNamees provided by Bootstrap. The classNamees follow a specific naming convention: `p{side}-{breakpoint}-{size}`, where:

- **`p`** stands for padding.
- **`{side}`** can be:
    - `t` for top
    - `b` for bottom
    - `l` for left
    - `r` for right
    - `x` for horizontal (left and right)
    - `y` for vertical (top and bottom)
- **`{breakpoint}`** is optional and specifies the screen size (e.g., `sm`, `md`, `lg`, `xl`, `xxl`). If omitted, the padding applies to all screen sizes.
- **`{size}`** is a number from `0` to `5`, where `0` means no padding and `5` is the largest amount of padding.

### Example of Adding Left Padding

1. **Basic Left Padding**:
   To add a left padding of `3` to a component:
   ```html
   <div className="ps-3">This div has padding on the left.</div>
   ```

2. **Responsive Left Padding**:
   To add different left padding based on screen size, you can specify breakpoints:
   ```html
   <div className="ps-2 ps-md-4">This div has padding on the left: 2 on small screens, 4 on medium screens and up.</div>
   ```

### Explanation of classNamees Used

- **`ps-{size}`**: This className is specifically for padding left (`ps` stands for padding-start in Bootstrap 5, which aligns with left padding for left-to-right languages). It adjusts the left padding based on the specified size.


# Margin
In Bootstrap, margin utility classNamees are used to control the space outside of an element. Margins create space between elements, helping to improve layout and spacing in your designs. Like padding, margin utility classNamees follow a specific naming convention that makes them easy to apply. Here’s a breakdown of how to use margin classNamees effectively.

### 1. **Margin className Naming Convention**

The margin utility classNamees in Bootstrap use the following structure: `m{side}-{breakpoint}-{size}`, where:

- **`m`** stands for margin.
- **`{side}`** can be:
    - `t` for top margin
    - `b` for bottom margin
    - `l` for left margin
    - `r` for right margin
    - `x` for horizontal margins (left and right)
    - `y` for vertical margins (top and bottom)
- **`{breakpoint}`** is optional and specifies the screen size (e.g., `sm`, `md`, `lg`, `xl`, `xxl`). If omitted, the margin applies to all screen sizes.
- **`{size}`** is a number from `0` to `5`, where `0` means no margin and `5` is the largest amount of margin.

### 2. **Examples of Margin classNamees**

#### **Basic Margin**

To add a uniform margin to all sides of an element, you would use:
```html
<div className="m-3">This div has a margin of 3 units on all sides.</div>
```

#### **Specific Side Margin**

To add margin to a specific side, use the appropriate letter:
- **Top Margin**:
  ```html
  <div className="mt-4">This div has a top margin of 4 units.</div>
  ```

- **Bottom Margin**:
  ```html
  <div className="mb-2">This div has a bottom margin of 2 units.</div>
  ```

- **Left Margin**:
  ```html
  <div className="ml-1">This div has a left margin of 1 unit.</div>
  ```

- **Right Margin**:
  ```html
  <div className="mr-5">This div has a right margin of 5 units.</div>
  ```

#### **Horizontal and Vertical Margin**

To add margin to both sides or both top and bottom:
- **Horizontal Margin**:
  ```html
  <div className="mx-3">This div has a horizontal margin of 3 units.</div>
  ```

- **Vertical Margin**:
  ```html
  <div className="my-2">This div has a vertical margin of 2 units.</div>
  ```

### 3. **Responsive Margin**

You can apply different margin sizes for different screen sizes using the breakpoint suffixes:
```html
<div className="mt-2 mt-md-4">This div has a top margin of 2 units on small screens and 4 units on medium screens and up.</div>
```

### 5. **Negative Margins**

Bootstrap also allows you to use negative margins with the same syntax as positive margins. Negative margins can help adjust spacing when needed:
- **Negative Top Margin**:
  ```html
  <div className="mt-n2">This div has a negative top margin.</div>
  ```


# Flex-grow and Flex-shrink

## Explanation
[Documentation](https://getbootstrap.com/docs/4.1/utilities/flex/#grow-and-shrink)

Use `.flex-grow-*` utilities to toggle a flex item’s ability to grow to fill available space. In the example below, the `.flex-grow-1` elements uses all available space it can, while allowing the remaining two flex items their necessary space.

```html
<div className="d-flex bd-highlight">
  <div className="p-2 flex-grow-1 bd-highlight">Flex item</div>
  <div className="p-2 bd-highlight">Flex item</div>
  <div className="p-2 bd-highlight">Third flex item</div>
</div>
```

Use `.flex-shrink-*` utilities to toggle a flex item’s ability to shrink if necessary. In the example below, the second flex item with `.flex-shrink-1` is forced to wrap it’s contents to a new line, “shrinking” to allow more space for the previous flex item with `.w-100`.

```html
<div className="d-flex bd-highlight">
  <div className="p-2 w-100 bd-highlight">Flex item</div>
  <div className="p-2 flex-shrink-1 bd-highlight">Flex item</div>
</div>
```

Responsive variations also exist for `flex-grow` and `flex-shrink`.

- `.flex-{grow|shrink}-0`
- `.flex-{grow|shrink}-1`
- `.flex-sm-{grow|shrink}-0`
- `.flex-sm-{grow|shrink}-1`
- `.flex-md-{grow|shrink}-0`
- `.flex-md-{grow|shrink}-1`
- `.flex-lg-{grow|shrink}-0`
- `.flex-lg-{grow|shrink}-1`
- `.flex-xl-{grow|shrink}-0`
- `.flex-xl-{grow|shrink}-1`

The `flex-grow` property can take **any non-negative number** (including decimals), which defines how much a flex item should grow relative to the other flex items in the same flex container. Here's a breakdown of possible values:

## Possible Values for `flex-grow`:
1. **0 (Zero)**:
    - The element **will not grow** to fill any available space. It will only take up its content's natural width or height.
    - This is the default value for `flex-grow`.

   ```css
   flex-grow: 0;
   ```

2. **1 (One)**:
    - The element will grow and take up any available space in the container **proportionally to other elements** that have `flex-grow` set.
    - If other items have `flex-grow: 0`, this element will take all available space.

   ```css
   flex-grow: 1;
   ```

3. **Greater than 1 (e.g., 2, 3, etc.)**:
    - The element will grow in **proportion to its `flex-grow` value** relative to the other flex items.
    - For example, if one item has `flex-grow: 1` and another has `flex-grow: 2`, the second item will grow to take up twice as much space as the first.

   ```css
   flex-grow: 2;
   ```

4. **Decimal Values (e.g., 0.5, 1.5)**:
    - You can use decimal values for more granular control over how much the item should grow compared to other items.
    - For example, if one item has `flex-grow: 0.5` and another has `flex-grow: 1.5`, the second item will take up three times as much space as the first.

   ```css
   flex-grow: 0.5;
   ```

### Example:
Let's look at an example with different `flex-grow` values:

```html
<div className="d-flex">
  <div className="flex-grow-1 bg-primary text-white">Item 1 (flex-grow: 1)</div>
  <div className="flex-grow-2 bg-success text-white">Item 2 (flex-grow: 2)</div>
  <div className="flex-grow-3 bg-danger text-white">Item 3 (flex-grow: 3)</div>
</div>
```

### Behavior:
- **Item 1** will grow to take up 1 part of the remaining space.
- **Item 2** will grow to take up 2 parts of the remaining space.
- **Item 3** will grow to take up 3 parts of the remaining space.

The total available space will be divided proportionally (1:2:3) among the items.

### Summary:
- `flex-grow: 0`: No growth.
- `flex-grow: 1`: Proportional growth, will fill all available space if no other elements are growing.
- `flex-grow > 1`: Grow in proportion to other flex items.
- `flex-grow < 1`: Grow a fraction of the available space compared to other flex items.


# Forms

[Documentation!](https://getbootstrap.com/docs/5.0/forms/overview/)

## Simple Example
```html
<form>
	<div className="form-group">
		<label className="form-label" ...>
		<input className="form-control" ...>
	</div>

	<div className="form-group">
		<label className="form-label" ...>
		<select className="form-select" ...>
	</div>
</form>
```

## Complex Example

```html
<form>
    <!-- Email Input Field -->
    <div className="form-group mb-3">
        <label for="email" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" placeholder="Enter email" aria-describedby="emailHelp">
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>

    <!-- Password Input Field -->
    <div className="form-group mb-3">
        <label for="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" placeholder="Enter password">
    </div>

    <!-- Select Dropdown Field -->
    <div className="form-group mb-4">
        <label for="options" className="form-label">Select an Option</label>
        <select className="form-select" id="options">
            <option value="" disabled selected>Select an option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
        </select>
    </div>

    <!-- Checkbox -->
    <div className="form-check mb-3">
        <input type="checkbox" className="form-check-input" id="termsCheck">
        <label className="form-check-label" for="termsCheck">Agree to terms and conditions</label>
    </div>

    <!-- Submit Button -->
    <div className="d-grid">
        <button type="submit" className="btn btn-primary">Submit</button>
    </div>
</form>

```


# Flex row/column responsive

## How to

```html
<div className="flex-column flex-sm-row">
```

To create a layout that switches between **`flex-row`** and **`flex-column`** depending on screen size, you can use Bootstrap's responsive flex utilities. Bootstrap provides classNamees to manage flex-direction based on the screen size, such as `flex-row` for horizontal layout and `flex-column` for vertical layout. You can apply these responsively with breakpoints like `-sm`, `-md`, `-lg`, and `-xl`.

## ChatGPT
### Basic Example: Switching Between Row and Column
Let's say you want the layout to be a row on larger screens and a column on smaller screens. Here's how you can do it:

```html
<div className="d-flex flex-column flex-md-row">
  <div className="p-2">Item 1</div>
  <div className="p-2">Item 2</div>
  <div className="p-2">Item 3</div>
</div>
```

### Explanation:
- **`d-flex`**: This makes the container a flexbox.
- **`flex-column`**: On small screens (default), this will arrange the flex items vertically (in a column).
- **`flex-md-row`**: Once the screen reaches the **medium breakpoint** (`768px` and above), the layout will switch to a row (horizontal arrangement).

### Using Other Breakpoints:
You can change the flex direction at different breakpoints depending on the size of the screen. Here are the available breakpoints for `flex-*` classNamees:

- **`flex-sm-*`**: Applies on small screens (≥576px).
- **`flex-md-*`**: Applies on medium screens (≥768px).
- **`flex-lg-*`**: Applies on large screens (≥992px).
- **`flex-xl-*`**: Applies on extra-large screens (≥1200px).

### Example with Different Breakpoints:

```html
<div className="d-flex flex-column flex-sm-row flex-lg-column">
  <div className="p-2">Item 1</div>
  <div className="p-2">Item 2</div>
  <div className="p-2">Item 3</div>
</div>
```

### Explanation:
- **`flex-column`**: For extra small screens (less than `576px`), it arranges items in a column.
- **`flex-sm-row`**: On small screens (≥576px), it arranges the items horizontally in a row.
- **`flex-lg-column`**: On large screens (≥992px), it switches back to column layout.

### Full Example with Styling:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">
  <title>Responsive Flexbox</title>
</head>
<body>
  <div className="d-flex flex-column flex-md-row flex-lg-column justify-content-center align-items-center">
    <div className="p-3 bg-primary text-white">Item 1</div>
    <div className="p-3 bg-success text-white">Item 2</div>
    <div className="p-3 bg-danger text-white">Item 3</div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

In this example:
- **On small screens (less than 768px)**: Items will be stacked vertically (`flex-column`).
- **On medium screens (768px and above)**: Items will switch to a row layout (`flex-md-row`).
- **On large screens (992px and above)**: Items will stack vertically again (`flex-lg-column`).

You can adjust the breakpoints based on your design needs!

# JavaScript

# Declaring variables

Variables are declared using either the `let` or `const` keyword. `let` allows you to change the value of the variable while `const` will cause an error if you attempt to change it.
```js
let x = 1; //can change
const y = 2; //can't change, constant
```

# Features
- is for manipulating the DOM.
- it started as client side scriptiing languge, but thanks to `Node.js` we can know run it as a backend service.

### Example

```javascript
function sayHello( {
	console.log("hello")
})
```

```html
<body>
	<script>
		function sayGoodbye() {
			alert('Goodbye')
		}
	</script>
	
	<button onclick="sayHello()">Say Hello </button> //METHOD1
	<button onclick="sayGoodbye()">Say Goodbye </button> //METHOD2
	<button onclick="let i=1;i++;console.log(i)">Press me </button> //METHOD3
	
</body>
```

# debugger

`debugger;` to trigger a breakpoint in the code, ex:

```javascript
function trigger() {
	debugger;
}
```

https://htmlpreview.github.io/?https://github.com/webprogramming260/.github/blob/main/profile/javascript/introduction/jsDemo.html

# `Null` / `undefined`

??

# Types
## Objects
```javascript
x = {};
console.log('type changed: ', typeof x, x);
x = { v: 2, z: 'fish' };
console.log('type changed: ', typeof x, x);

```

```js
const obj = new Object({ a: 3 });
obj['b'] = 'fish';
obj.c = [1, 2, 3];
obj.hello = function () {
  console.log('hello');
};

console.log(obj);
// OUTPUT: {a: 3, b: 'fish', c: [1,2,3], hello: func}
```

### Object literals

You can also declare a variable of object type with the `object-literal` syntax. This syntax allows you to provide the initial composition of the object.

```js
const obj = {
  a: 3,
  b: 'fish',
};
```

### Object functions

| Function | Meaning                             |
| -------- | ----------------------------------- |
| entries  | Returns an array of key value pairs |
| keys     | Returns an array of keys            |
| values   | Returns an array of values          |

```js
const obj = {
  a: 3,
  b: 'fish',
};

console.log(Object.entries(obj));
// OUTPUT: [['a', 3], ['b', 'fish']]
console.log(Object.keys(obj));
// OUTPUT: ['a', 'b']
console.log(Object.values(obj));
// OUTPUT: [3, 'fish']
```

### Constructor

Any function that returns an object is considered a `constructor` and can be invoked with the `new` operator.

```js
function Person(name) {
  return {
    name: name,
  };
}

const p = new Person('Eich');
console.log(p);
// OUTPUT: {name: 'Eich'}
```

### classNamees

You can use classNamees to define objects. Using a className clarifies the intent to create a **reusable** component rather than a one-off object. className declarations look similar to declaring an object, but classNamees have an explicit constructor and assumed function declarations. The person object from above would look like the following when converted to a className.

```js
className Person {
  constructor(name) {
    this.name = name;
  }

  log() {
    console.log('My name is ' + this.name);
  }
}

const p = new Person('Eich');
p.log();
// OUTPUT: My name is Eich
```

#### Private className properties
You can make properties and functions of classNamees private by prefixing them with a `#`.

```js
className Person {
  #name;

  constructor(name) {
    this.#name = name;
  }
}

const p = new Person('Eich');
p.#name = 'Lie';
// OUTPUT: Uncaught SyntaxError: Private field '#name' must be declared in an enclosing className
```


## Arrays
```javascript
x = [1, 2];
console.log('type changed: ', typeof x, x);
console.log(Array.isArray(x));
console.log(x instanceof Array);
```

## Functions
functions are a type in JavaScript

```javascript
  x = function () {
    return 3;
  };
  console.log('type changed: ', typeof x, x);
```

### Chat
In JavaScript, functions are considered **first-className citizens**, meaning they are treated as a **type of object**. This allows functions to be assigned to variables, passed as arguments to other functions, and returned from functions, much like any other data type (e.g., numbers, strings).

Here's why functions are treated as a type in JavaScript:

##### 1. Function Objects
- Functions in JavaScript are technically objects of the `Function` type. This means ==they can have properties and methods==, just like any other object.
- You can use functions like objects, even adding properties to them.

   ```javascript
   function greet() {
       console.log("Hello!");
   }
   
   greet.language = "English"; // Adding a property to the function
   console.log(greet.language); // Output: English
   ```

##### 2. Storing Functions in Variables
- Functions can be assigned to variables, making the variable reference that function.

   ```javascript
   const sayHello = function() {
       console.log("Hello, world!");
   };
   
   sayHello(); // Output: Hello, world!
   ```

##### 3. Passing Functions as Arguments
- Since functions are a type, they can be passed as arguments to other functions, making callbacks and higher-order functions possible.

   ```javascript
   function executeFunction(fn) {
       fn(); // Calling the passed function
   }
   
   executeFunction(() => console.log("Function executed!")); // Output: Function executed!
   ```

##### 4. Returning Functions from Functions
- Functions can also be returned from other functions, allowing for more dynamic and flexible code.

   ```javascript
   function createMultiplier(factor) {
       return function(number) {
           return number * factor;
       };
   }
   
   const double = createMultiplier(2);
   console.log(double(5)); // Output: 10
   ```

##### 5. Functions are callable objects
- Unlike normal objects, functions can be "called" (invoked) using parentheses. However, they still maintain the behavior of objects in every other way.

In short, functions in JavaScript are treated as a special type of object, allowing them to behave dynamically and flexibly in the language.

###  Function syntax

```js

function withNoReturn(parameter) {
	//do something
}

function withReturn(parameter) {
	return something
}

```

- **parameter** is not defined with a type
- **return** type is not defined in the function.


### Function parameters
When a function is called, the caller may choose what parameters to provide. If a parameter is not provided then the value of the parameter is `undefined` when the function executes.

In addition to explicitly passing the value of a parameter to a function, the function can define a default value. This is done by assigning a value to the parameter in the function declaration.

```js
function labeler(value, title = 'title') {
  console.log(`${title}=${value}`);
}

labeler();
// OUTPUT: title=undefined

labeler('fish');
// OUTPUT: title=fish

labeler('fish', 'animal');
// OUTPUT: animal=fish
```

### Anonymous functions

Functions in JavaScript are commonly assigned to a variable so that they can be passed as a parameter to some other function or stored as an object property. To easily support this common use **you can define a function anonymously and assign it to a variable.**

```js
// Function that takes a function as a parameter
function doMath(operation, a, b) {
  return operation(a, b);
}

// Anonymous function assigned to a variable
const add = function (a, b) {
  return a + b;
};

console.log(doMath(add, 5, 3));
// OUTPUT: 8

// Anonymous function assigned to a parameter
console.log(
  doMath(
    function (a, b) {
      return a - b;
    },
    5,
    3
  )
);
// OUTPUT: 2
```


### Arrow functions

Because functions are first order objects in JavaScript they can be declared anywhere and passed as parameters. This results in code with lots of anonymous functions cluttering things up. To make the code more compact the `arrow` syntax was created. This syntax replaces the need for the `function` keyword with the symbols `=>` placed after the parameter declaration. The enclosing curly braces are also optional.

This is a function in arrow syntax that takes no parameters and always returns 3.

`() => 3;`

The following two invocations of sort are equivalent.

```js
const a = [1, 2, 3, 4];

// standard function syntax
a.sort(function (v1, v2) {
  return v1 - v2;
});

// arrow function syntax
a.sort((v1, v2) => v1 - v2);
```

Besides being compact, the `arrow` function syntax has some important semantic differences from the standard function syntax. This includes restrictions that arrow functions cannot be used for constructors or iterator generators.

#### Return values

Arrow functions also have special rules for the `return` keyword. The return keyword is optional if no curly braces are provided for the function and it contains a single expression. In that case the result of the expression is automatically returned. If curly braces are provided then the arrow function behaves just like a standard function.

```js
() => 3;
// RETURNS: 3

() => {
  3;
};
// RETURNS: undefined

() => {
  return 3;
};
// RETURNS: 3
```

# Loops

JavaScript supports many common programming language looping constructs. This includes `for`, `for in`, `for of`, `while`, `do while`, and `switch`. Here are some examples.

### for

Note the introduction of the common post increment operation (`i++`) for adding one to a number.
```js
for (let i = 0; i < 2; i++) {
  console.log(i);
}
// OUTPUT: 0 1
```


### do while

```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 2);
// OUTPUT: 0 1
```


### while

```js
let i = 0;
while (i < 2) {
  console.log(i);
  i++;
}
// OUTPUT: 0 1
```


### for in

The `for in` statement iterates over an object's property names.

```js
const obj = { a: 1, b: 'fish' };
for (const name in obj) {
  console.log(name);
}
// OUTPUT: a
// OUTPUT: b
```


For **arrays** the object's name is the array **index**.

```js
const arr = ['a', 'b'];
for (const name in arr) {
  console.log(name);
}
// OUTPUT: 0
// OUTPUT: 1
```


### for of

The `for of` statement iterates over an iterable's (Array, Map, Set, ...) property values.

```js
const arr = ['a', 'b'];
for (const val of arr) {
  console.log(val);
}
// OUTPUT: 'a'
// OUTPUT: 'b'
```


### Break and continue

All of the looping constructs demonstrated above allow for either a `break` or `continue` statement to abort or advance the loop.

```js
let i = 0;
while (true) {
  console.log(i);
  if (i === 0) {
    i++;
    continue;
  } else {
    break;
  }
}
// OUTPUT: 0 1
```

# Strings

Strings are a primitive type in JavaScript. A string variable is specified by surrounding a sequence of characters with **single quotes (`'`), double quotes (`"`), or backticks (`` ` ``)**.

The meaning of single or double quotes are equivalent, but the **backtick defines a string literal that may contain JavaScript that is evaluated in place and concatenated into the string**.

A string literal replacement specifier is declared with a dollar sign followed by a curly brace pair. Anything inside the curly braces is evaluated as JavaScript. You can also use backticks to create multiline strings without having to explicitly escape the newline characters using `\n`.

```js
'quoted text'; // " also works

const l = 'literal';
console.log(`string ${l + (1 + 1)} text`);
// OUTPUT: string literal2 text
```
## String functions

The string object has several interesting functions associated with it. Here are some of the commonly used ones.

| Function      | Meaning                                                      |
| ------------- | ------------------------------------------------------------ |
| length        | The number of characters in the string                       |
| indexOf()     | The starting index of a given substring                      |
| split()       | Split the string into an array on the given delimiter string |
| startsWith()  | True if the string has a given prefix                        |
| endsWith()    | True if the string has a given suffix                        |
| toLowerCase() | Converts all characters to lowercase                         |

```js
const s = 'Example:조선글';

console.log(s.length);
// OUTPUT: 11

console.log(s.indexOf('조선글'));
// OUTPUT: 8

console.log(s.split(':'));
// OUTPUT: ['Example', '조선글']

console.log(s.startsWith('Ex'));
// OUTPUT: true

console.log(s.endsWith('조선글'));
// OUTPUT: true

console.log(s.toLowerCase());
// OUTPUT: example:조선글
```

# JSON and JS

You can convert JSON to, and from, JavaScript using the `JSON.parse` and `JSON.stringify` functions.

```js
const obj = { a: 2, b: 'crockford', c: undefined };
const json = JSON.stringify(obj);
const objFromJson = JSON.parse(json);

console.log(obj, json, objFromJson);

// OUTPUT:
// {a: 2, b: 'crockford', c: undefined}
// {"a":2, "b":"crockford"}
// {a: 2, b: 'crockford'} < pretty much the same thing
```

Note that in this example, JSON cannot represent the JavaScript `undefined` object and so it gets dropped when converting from JavaScript to JSON.

# Rest

Sometimes you want a function to take an unknown number of parameters. For example, if you wanted to write a function that checks to see if some number in a list is equal to a given number, you could write this using an array.

```js
function hasNumber(test, numbers) {
  return numbers.some((i) => i === test);
}

const a = [1, 2, 3];
hasNumber(2, a);
// RETURNS: true
```

However sometimes you don't have an array to work with. In this case you could create one on the fly.

```js
function hasTwo(a, b, c) {
  return hasNumber(2, [a, b, c]);
}
```

But JavaScript provides the `rest` syntax to make this easier. Think of it as a parameter that contains the `rest` of the parameters. To turn the last parameter of any function into a `rest` parameter you prefix it with three periods. You can then call it with any number of parameters and they are all automatically combined into an array.

```js
function hasNumber(test, ...numbers) {
  return numbers.some((i) => i === test);
}

hasNumber(2, 1, 2, 3);
// RETURNS: true
```

Note that you can only make the last parameter a `rest` parameter. Otherwise JavaScript would not know which parameters to combine into the array.

Technically speaking, `rest` allows JavaScript to provide what is called variadic functions.

## Spread

Spread does the opposite of rest. It take an object that is iterable (e.g. array or string) and expands it into a function's parameters. Consider the following.

```js
function person(firstName, lastName) {
  return { first: firstName, last: lastName };
}

const p = person(...['Ryan', 'Dahl']);
console.log(p);
// OUTPUT: {first: 'Ryan', last: 'Dahl'}
```

# Exceptions

JavaScript supports exception handling using the `try catch` and `throw` syntax. An exception can be triggered whenever your code generates an exception using the `throw` keyword, or whenever an exception is generated by the JavaScript runtime, for example, when an undefined variable is used.

To catch a thrown exception, you wrap a code block with the `try` keyword, and follow the try block with a `catch` block. If within the try block, including any functions that block calls, an exception is thrown, then all of the code after the throw is ignored, the call stack is unwound, and the catch block is called.

In addition to a catch block, you can specify a `finally` block that is always called whenever the `try` block is exited regardless if an exception was ever thrown.

The basic syntax looks like the following.

## Syntax
```js
try {
  // normal execution code
} catch (err) {
  // exception handling code
} finally {
  // always called code
}
```

## For example:

```js
function connectDatabase() {
  throw new Error('connection error');
}

try {
  connectDatabase();
  console.log('never executed');
} catch (err) {
  console.log(err);
} finally {
  console.log('always executed');
}

// OUTPUT: Error: connection error
//         always executed
```



# DOM (Document Object Model)

Here are some of the most commonly used DOM functions in JavaScript:

## **`document.getElementById(id)`**
Selects an element by its ID.

   ```javascript
   const element = document.getElementById('myElement');
	//selects an element like <div id="myElement"> </div>>
	
   ```

## **`document.querySelector(selector)`**
Selects the first element that matches a CSS selector.

   ```javascript
   const element = document.querySelector('.myclassName');
   ```

Example:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Example</title>
</head>
<body>
    <div className="myclassName">Hello, World!</div>
    <script>
        const element = document.querySelector('.myclassName');
        element.textContent = 'Hello, JavaScript!'; // Changes the text inside the div
    </script>
</body>
</html>

```

## **`document.querySelectorAll(selector)`**
Selects all elements that match a CSS selector, returning a NodeList.

   ```javascript
   const elements = document.querySelectorAll('div');
   ```

## **`document.createElement(tagName)`**
Creates a new HTML element.

   ```javascript
   const newDiv = document.createElement('div');  
   //creates an <div></div> element

	const table = document.createElement('table'); 
	//<table></table>
   ```

## **`element.appendChild(child)`**
Appends a child element to a specified parent element.

   ```javascript
   const parent = document.getElementById('parent');
	//<div className="parent">
	// ...
	//</div>
	

   parent.appendChild(newDiv);
	//<div className="parent">
		// <div></div>
	//</div>
   ```

## **`element.removeChild(child)`**
Removes a specified child element from a parent.

   ```javascript
   parent.removeChild(childElement);
   ```

## **`element.setAttribute(name, value)`**
Sets the value of an attribute on the specified element.

### Syntax:
```js
	element.setAttribute(name, value);
```

### Parameters

1. **`name`**: A string that specifies the name of the attribute you want to set. This can be any valid HTML attribute (like `className`, `id`, `src`, `href`, etc.).

2. **`value`**: A string that defines the value you want to assign to the specified attribute. If the attribute does not exist, it will be created.

### Example
   ```javascript
   //before: element = <h1>Title</h1>
   element.setAttribute('className', 'newclassName');

	//after: element = <h1 className="newclassName">Title</h1>
   ```

### Better Example
```html
    <img id="myImage" src="image.jpg" alt="A sample image">
    <script>
        const image = document.getElementById('myImage');

        // Change the 'src' attribute
        image.setAttribute('src', 'new-image.jpg');

        // Change the 'alt' attribute
        image.setAttribute('alt', 'A new sample image');

        // Add a 'title' attribute
        image.setAttribute('title', 'This is a new image');
    </script>
```
## **`element.getAttribute(name)`**
Gets the value of an attribute from an element.

   ```javascript
   const classNameName = element.getAttribute('className');
   ```

### Example:
```html
    <a id="myLink" href="https://example.com">Click here</a>
    <script>
        const link = document.getElementById('myLink');

        const hrefValue = link.getAttribute('href');
        // href = "https://example.com"
    </script>
```

## **element.classNameList**
The `classNameList` property is a convenient way to access and manipulate the list of classNamees on an HTML element. It provides a simple interface for adding, removing, and toggling classNamees without directly manipulating the `className` attribute as a string.

The `classNameList` property is a convenient way to access and manipulate the list of classNamees on an HTML element. It provides a simple interface for adding, removing, and toggling classNamees without directly manipulating the `className` attribute as a string.

### How to Access `classNameList`

To access the `classNameList` of an element, you can use the following syntax:

```javascript
const element = document.getElementById('myElement');
const classNameList = element.classNameList;
```

### Methods Available on `classNameList`

Here are some commonly used methods of `classNameList`:

1. **`add(classNameName)`**: Adds one or more classNamees to the element.

   ```javascript
   element.classNameList.add('newclassName');
   ```

2. **`remove(classNameName)`**: Removes one or more classNamees from the element.

   ```javascript
   element.classNameList.remove('oldclassName');
   ```

3. **`toggle(classNameName)`**: Toggles a className; if the className exists, it removes it, and if it doesn't, it adds it.

   ```javascript
   element.classNameList.toggle('active');
   ```

4. **`contains(classNameName)`**: Checks if the element has a specific className and returns `true` or `false`.

   ```javascript
   const hasclassName = element.classNameList.contains('myclassName');
   ```

5. **`replace(oldclassName, newclassName)`**: Replaces an existing className with a new one.

   ```javascript
   element.classNameList.replace('oldclassName', 'newclassName');
   ```

### Example

Here’s a simple example demonstrating how to use `classNameList`:

```html
<!DOCTYPE html>
<html>
<head>
    <title>classNameList Example</title>
</head>
<body>
    <div id="myElement" className="box active">Hello World!</div>
    <button id="toggleButton">Toggle className</button>
    <script>
        const element = document.getElementById('myElement');
        const button = document.getElementById('toggleButton');

        // Log the current classNameList
        console.log('Initial classNameList:', element.classNameList);

        // Toggle the 'active' className on button click
        button.addEventListener('click', () => {
            element.classNameList.toggle('active');
            console.log('Updated classNameList:', element.classNameList);
        });
    </script>
</body>
</html>
```

### In this example:

1. **Initial className List**: When the page loads, the initial className list of the `<div>` is logged to the console.

2. **Toggle className**: When the button is clicked, the `active` className is toggled on the `<div>`, and the updated className list is logged.

## Manipulating HTML

Sure! Let's break down `outerHTML`, `innerHTML`, and `textContent` in simple terms, along with straightforward examples.

### 1. `innerHTML`

- **What it is**: `innerHTML` gets or sets the HTML inside an element. It includes any HTML tags inside that element.

#### Example

```html
<div id="myDiv">Hello, <strong>world!</strong></div>
```

- **Using `innerHTML` to get content**:

```javascript
const div = document.getElementById('myDiv');
const content = div.innerHTML; // "Hello, <strong>world!</strong>"
```

- **Using `innerHTML` to set new content**:

```javascript
div.innerHTML = '<p>New content!</p>'; // Replaces the existing content
```

### 2. `outerHTML`

- **What it is**: `outerHTML` gets or sets the entire HTML of an element, including the element itself and its attributes.

#### Example

```html
<div id="myDiv">Hello, <strong>world!</strong></div>
```

- **Using `outerHTML` to get content**:

```javascript
const div = document.getElementById('myDiv');
const fullContent = div.outerHTML; // "<div id="myDiv">Hello, <strong>world!</strong></div>"
```

- **Using `outerHTML` to replace the element**:

```javascript
div.outerHTML = '<section>New section!</section>'; 
// Replaces the whole <div> with a <section>
```

### 3. `textContent`

- **What it is**: `textContent` gets or sets the plain text inside an element, ignoring any HTML tags.

#### Example

```html
<div id="myDiv">Hello, <strong>world!</strong></div>
```

- **Using `textContent` to get content**:

```javascript
const div = document.getElementById('myDiv');
const text = div.textContent; // "Hello, world!" (only text, no tags)
```

- **Using `textContent` to set new text**:

```javascript
div.textContent = 'New plain text!'; // Replaces the text, no HTML allowed
```

### Summary

- **`innerHTML`**: Works with HTML inside an element. It can include tags.
- **`outerHTML`**: Works with the entire element, including its tags and attributes.
- **`textContent`**: Works only with text, ignoring any HTML tags.

## Event Listeners //TODO



# Promises

The state of the promise execution is always in one of three possible states.

1. **pending** - Currently running asynchronously
2. **fulfilled** - Completed successfully
3. **rejected** - Failed to complete


## Resolving and rejecting

Now that we know how to use a promise to execute asynchronously, we need to be able to set the state to `fulfilled` when things complete correctly, or to `rejected` when an error happens. The promise executor function takes two functions as parameters, `resolve` and `reject`. Calling `resolve` sets the promise to the `fulfilled` state, and calling `reject` sets the promise to the `rejected` state.

Consider the following "coin toss" promise that waits ten seconds and then has a fifty percent chance of resolving or rejecting.

```js
const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve('success');
    } else {
      reject('error');
    }
  }, 10000);
});
```

If you log the coinToss promise object to the console immediately after calling the constructor, it will display that it is in the `pending` state.

```js
console.log(coinToss);
// OUTPUT: Promise {<pending>}
```

If you wait ten seconds and then log the coinToss promise object again, the state will either show as `fulfilled` or `rejected` depending upon the way the coin landed.

```js
console.log(coinToss);
// OUTPUT: Promise {<fulfilled>}
```

## Then, catch, finally

With the ability to asynchronously execute and set the resulting state, we now need a way to generically do something with the result of a promise after it resolves. This is done with functionality similar to exception handling. The promise object has three functions: `then`, `catch`, and `finally`. The `then` function is called if the promise is fulfilled, `catch` is called if the promise is `rejected`, and `finally` is always called after all the processing is completed.

We can rework our coinToss example and make it so 10 percent of the time the coin falls off the table and resolves to the rejected state. Otherwise the promise resolves to fulfilled with a result of either `heads` or `tails`.

```js
const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.1) {
      resolve(Math.random() > 0.5 ? 'heads' : 'tails');
    } else {
      reject('fell off table');
    }
  }, 10000);
});
```

We then chain the `then`, `catch` and `finally` functions to the coinToss object in order to handle each of the possible results.
```js
coinToss
  .then((result) => console.log(`Coin toss result: ${result}`))
  .catch((err) => console.log(`Error: ${err}`))
  .finally(() => console.log('Toss completed'));

// OUTPUT:
//    Coin toss result: tails
//    Toss completed
```

### Explanation

In the Promise declaration we can set the conditions upon what is considered successful or rejected.
For example, I can make an rest api call to a weather service. If I get a code 200 then I will `resolve` with a specific value (maybe the temperature.) Otherwise, (i get a code 404) I `reject`.

Then, when I do this API call in my website, I can choose to do something according to the state of the `Promise`.
- I use `then` when I want to work after the state was set to `fulfilled`. I can display the weather.
- I use `catch` when I detect an error in the weather api call and I want to display an error to the user.
- `finally` will run regarding the result of the `Promise`.


![[Pasted image 20241019133517.png]]

- [ ] This [CodePen](https://codepen.io/leesjensen/pen/RwJJKwj) uses promises to order pizzas. Create a fork of the pen and take some time to experiment with it. Modify the CodePen to include a **new function** that **makes the pizza** and **include it in the promise chain**.

# Async/Await
## Why do we use it?
`async` and `await` are used to make working with promises more **readable** and **manageable**, especially when dealing with complex asynchronous code. While you can work with plain promises using `.then()`, `async`/`await` provides several benefits that make asynchronous code easier to write and understand.
### Summary of `async`/`await` Benefits:

- **Readability**: Makes asynchronous code look more like synchronous code, improving readability and maintainability.
- **Error handling**: Uses familiar `try/catch` blocks instead of chaining `.catch()`.
- **Sequential execution**: Easier to handle sequential asynchronous tasks, especially in loops or with complex logic.
- **Less nesting**: Reduces promise chaining and avoids "promise hell."

**`async`/`await`** in JavaScript is a simpler and cleaner way to handle **asynchronous** operations, like making network requests or reading files, which take some time to complete.

## Definitions and how to use
### What does **asynchronous** mean?
When you do something asynchronously, the task doesn't block your program from doing other things. Instead, your program continues running, and the task completes in the background. When the task finishes, you get the result.

### What is **`async`**?
- **`async`** is a keyword used to declare a function that will handle asynchronous operations.
- An `async` function always returns a **promise**. Even if you don’t explicitly return a promise, JavaScript automatically wraps the return value in a promise.

```javascript
async function myFunction() {
  return "Hello";
}

myFunction().then(console.log);  // Output: Hello
```

### What is **`await`**?
- **`await`** is used inside an `async` function to wait for a promise to resolve (or finish). It pauses the function execution until the asynchronous task is done, making the code look **synchronous** (step-by-step).

```javascript
async function fetchData() {
  const result = await fetch('https://api.example.com/data');  // Wait for the fetch operation
  console.log(result);  // This runs after the fetch is done
}
```

### Why is it useful?
Without `async`/`await`, you'd have to handle promises with `.then()`, which can get messy and harder to read when you have multiple asynchronous tasks. `async`/`await` makes your code look more like normal, step-by-step code while still being non-blocking.

### Simple analogy:
- **Without `async`/`await` (using promises)**: Imagine you’re ordering food online. You place the order (a promise) and keep checking every few minutes if the food has arrived (using `.then()`), which can be annoying.
- **With `async`/`await`**: You place the order (a promise) and go about your day. When the food arrives (the promise resolves), you handle it immediately. You don’t need to keep checking!

In short, `async`/`await` makes working with asynchronous code in JavaScript much easier to read and understand!

### Example from className:

**then/catch chain version**
```js
coinToss()
  .then((result) => console.log(`Toss result ${result}`))
  .catch((err) => console.error(`Error: ${err}`))
  .finally(() => console.log(`Toss completed`));
```


**async, try/catch version**
```js
try {
  const result = await coinToss();
  console.log(`Toss result ${result}`);
} catch (err) {
  console.error(`Error: ${err}`);
} finally {
  console.log(`Toss completed`);
}
```


# Function parameters: Value vs Reference

> [!TLDR]
> - **Primitive values** are passed by value (a copy is made).
> - **Objects (including arrays)** are passed by reference, meaning changes to the object inside the function will be reflected in the original object.
>

In JavaScript, whether arguments are passed **by value** or **by reference** depends on the **data type** of the argument being passed.

### 1. **Primitive types** (pass-by-value):
- **Primitive types** in JavaScript include `number`, `string`, `boolean`, `null`, `undefined`, `symbol`, and `bigint`.
- When you pass a primitive value to a function, it is **copied** into the function parameter. Any changes made to the parameter inside the function do not affect the original value.

Example with primitives (pass-by-value):
   ```javascript
   function changeValue(x) {
     x = 10;  // This change won't affect the original value
   }

   let num = 5;
   changeValue(num);
   console.log(num);  // Output: 5 (not affected by the change)
   ```

In this case, `num` remains `5` because the value `5` is copied into the function, and any changes to `x` inside the function don’t affect the original variable.

### 2. **Objects and Arrays** (pass-by-reference):
- **Objects** (including arrays) are passed **by reference**. This means that when you pass an object to a function, the function receives a reference to the same object in memory, not a copy. Any changes made to the object's properties inside the function will affect the original object.

Example with objects (pass-by-reference):
   ```javascript
   function changeObject(obj) {
     obj.name = "Max";  // This will change the original object
   }

   let person = { name: "John" };
   changeObject(person);
   console.log(person.name);  // Output: Max (the original object is modified)
   ```

In this case, `person.name` changes to `"Max"` because the function manipulates the same object reference.

### Important distinction:
- **Primitive values** are passed by value (a copy is made).
- **Objects (including arrays)** are passed by reference, meaning changes to the object inside the function will be reflected in the original object.

However, note that while objects are passed by reference, if you reassign the object inside the function, it **won’t affect the original reference** outside the function:

```javascript
function reassignObject(obj) {
  obj = { name: "New Person" };  // This reassignment doesn't affect the original object
}

let person = { name: "John" };
reassignObject(person);
console.log(person.name);  // Output: John (not affected by reassignment)
```

In this case, the reassignment to `obj` inside the function only changes the local reference inside the function, so the original `person` remains unchanged.

