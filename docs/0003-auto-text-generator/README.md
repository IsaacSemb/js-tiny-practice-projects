# HTML Text Automation 🎯

This project showcases a simple and fun text animation using HTML, CSS, and JavaScript. It dynamically displays a rotating list of careers with a typing effect — like a digital fortune teller telling you what you’ll be!

## 🚀 Features

- Displays a new random career every few seconds  
- Automatically adds the correct article ("a" or "an") before the career  
- Typing animation for each word  
- Custom Google Font (Matemasie)  
- Responsive, centered design with colorful background  

## 📁 Project Structure

```
📁 project-folder/
├── index.html         # Main HTML file
├── styles.css         # CSS styling
├── script.js          # JavaScript logic
└── README.md          # This file
```

## 🔧 How It Works

1. HTML displays a blank `<h1>` element.
2. JavaScript:
   - Selects a random career from a predefined list.
   - Simulates typing the career name letter by letter.
   - Uses `setTimeout` for a smooth typing animation.
   - Resets and picks a new career once the current one finishes typing.
3. CSS centers everything on the screen and styles it using the imported Google font and a coral background.

## 📦 Setup

1. Clone or download this repository.
2. Open `index.html` in any browser.
3. Enjoy the magic! ✨

## 🎨 Customization

Want to add your own careers?  
Edit the `careers` array in `script.js`:
```js
const careers = [
  "astronaut",
  "game developer",
  "marine biologist",
  // add yours here
];
```