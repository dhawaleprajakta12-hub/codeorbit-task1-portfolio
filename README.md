# Personal Portfolio Website

## Project

Personal Portfolio Website

## Description

A responsive personal portfolio website created using HTML, CSS, and Vanilla JavaScript. This portfolio showcases the skills, education, and projects of Prajakta Dhawale, an MCA student and aspiring full stack developer. It was built as part of the CodeOrbit Tech 1-Month Full Stack Development Internship — Task 1.

## Sections

- Home
- About Me
- Skills
- Education
- Projects
- Contact

## Technologies

- HTML5
- CSS3
- JavaScript

## Features

- Responsive design (desktop, tablet, and mobile)
- Dark/light theme toggle with localStorage persistence
- Smooth scrolling navigation
- Sticky navbar with active link highlighting
- Mobile hamburger menu
- Project showcase with technology tags
- Skills section organized by category
- Contact form with JavaScript validation
- Scroll reveal animations
- Accessible markup with aria labels and keyboard support

## How to Run

### Option 1: Open directly

1. Download or clone this project folder.
2. Open `index.html` in any modern web browser (Chrome, Firefox, Edge, Safari).

### Option 2: Run a local development server

If you have Python installed:

```bash
# Python 3
python -m http.server 8000

# Then open http://localhost:8000 in your browser
```

If you have Node.js installed:

```bash
npx serve
```

Then open the provided URL in your browser.

## Project Structure

```
portfolio/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Notes

- The contact form is frontend-only. No data is sent to a server.
- The theme preference is saved in the browser's localStorage and restored on refresh.
- No external frameworks or libraries are used — only HTML, CSS, and vanilla JavaScript.
