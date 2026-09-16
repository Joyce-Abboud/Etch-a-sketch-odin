# Etch-a-sketch-odin
odin
live demo: https://joyce-abboud.github.io/Etch-a-sketch-odin/
# Etch-a-Sketch

A browser-based Etch-a-Sketch project built with **HTML, CSS, and JavaScript** as part of [The Odin Project](https://www.theodinproject.com/).

## About

This project recreates an Etch-a-Sketch-style drawing grid. The page starts with a grid of squares, and users can hover over the squares to draw on the grid.

The project also includes different drawing modes and allows the user to resize the grid.

## Features

* 🖤 **Black mode** — hover over squares to color them black.
* 🌈 **Colorful mode** — hover over squares to give them random colors.
* 🔄 **Reset** — clears the current drawing.
* 📐 **Resize** — choose a new grid size from 2×2 up to 100×100.
* 📱 **Dynamic grid** — the grid is generated using JavaScript and CSS Grid.

## Technologies Used

* HTML5
* CSS3
* JavaScript
* CSS Grid
* DOM Manipulation
* JavaScript Event Listeners

## What I Learned

Through this project, I practiced:

* Creating HTML elements with JavaScript
* Using `querySelector()` and `querySelectorAll()`
* Adding and removing DOM elements
* Using event listeners such as `click` and `mouseover`
* Generating random RGB colors
* Using CSS Grid to create an evenly sized grid
* Using JavaScript to dynamically change CSS properties
* Working with functions and loops
* Handling user input with `prompt()`

## How It Works

The grid is generated dynamically based on the selected size.

For example, if the user chooses `16`, JavaScript creates:

```text
16 × 16 = 256 squares
```

If the user chooses `50`:

```text
50 × 50 = 2500 squares
```

CSS Grid then divides the available container space equally between the squares.

## Project Structure

```text
etch-a-sketch/
├── index.html
├── style.css
└── script.js
```

## Credits

This project was created as part of **The Odin Project Foundations** curriculum.

## Author

**Joyce Abboud**
