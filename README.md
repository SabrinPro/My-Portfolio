# Sabrin Alam — Personal Portfolio

A modern, responsive personal portfolio website developed for **Sabrin Alam**, a Computer Science & Engineering student at **Southeast University**, with a career focus on **Artificial Intelligence and AI Engineering**.

The portfolio is designed to present academic background, technical skills, research activities, projects, areas of interest, career direction, and contact information through a professional and interactive web interface.

---

## Project Overview

This project is a **responsive personal portfolio website** developed using **HTML5, CSS3, and Vanilla JavaScript**.

The website focuses on:

* Professional personal branding
* Academic and technical profile presentation
* Research and publication showcase
* Project presentation
* Responsive web design
* Interactive JavaScript functionality
* Accessibility-focused navigation
* Modern UI/UX design
* Git and GitHub version control

The website uses a modern AI-inspired visual style with gradients, glassmorphism effects, rounded cards, responsive layouts, hover interactions, and subtle animations.

---

## Objectives

The main objectives of this project are to:

* Build a professional personal portfolio website.
* Present academic and technical information in a structured way.
* Showcase research work and academic projects.
* Demonstrate practical knowledge of HTML, CSS, and JavaScript.
* Implement responsive design for desktop, tablet, and mobile devices.
* Add meaningful JavaScript-based interactive functionality.
* Apply accessibility-friendly web development practices.
* Practice Git and GitHub-based version control.
* Create a portfolio that can be used as a professional online profile.

---

## Technologies Used

### Frontend

* **HTML5**

  * Semantic page structure
  * Sections and navigation
  * Forms
  * Accessible labels and attributes

* **CSS3**

  * Responsive layouts
  * Flexbox
  * Grid
  * CSS variables
  * Gradients
  * Glassmorphism
  * Transitions
  * Hover effects
  * Animations
  * Media queries

* **Vanilla JavaScript**

  * Theme switching
  * Mobile navigation
  * Form validation
  * Navigation state management
  * Scroll-based interactions
  * Intersection Observer API
  * Local storage
  * Keyboard interaction
  * Dynamic content

### Version Control

* **Git**
* **GitHub**

---

## Website Features

### 1. Responsive Portfolio Layout

The website adapts to different screen sizes including:

* Desktop
* Laptop
* Tablet
* Mobile

Responsive CSS rules modify navigation, buttons, cards, spacing, typography, and layouts for smaller screens.

---

### 2. Dark and Light Theme

The website includes a **Dark/Light Mode toggle**.

JavaScript controls the theme and stores the selected preference using:

```text
localStorage
```

This allows the selected theme to remain available when the website is revisited.

---

### 3. Responsive Navigation

The navigation system includes:

* Desktop navigation
* Mobile hamburger menu
* Open/close menu functionality
* Automatic menu closing after selecting a section
* `Escape` key support for closing the mobile menu
* Active navigation highlighting

---

### 4. Active Section Navigation

The currently visible website section is detected using the **Intersection Observer API**.

The corresponding navigation item is automatically highlighted while scrolling through the website.

---

### 5. Scroll Reveal Animation

Website elements are revealed as the user scrolls down the page.

This functionality is implemented using JavaScript's:

```text
IntersectionObserver
```

API.

---

### 6. Contact Form Validation

The contact section contains a form with:

* Name
* Email
* Subject
* Message

JavaScript validates the submitted information and displays appropriate error or success messages.

The validation includes:

* Minimum name length
* Email format validation
* Subject validation
* Minimum message length
* `aria-invalid` state updates for invalid fields

---

### 7. Project Card Interaction

Project cards include interactive hover effects.

When the user moves the cursor over a project card:

* The card moves slightly upward.
* A shadow effect appears.
* A subtle purple glow is applied.
* Smooth CSS transitions are used.

---

### 8. Accessibility Improvements

Accessibility-focused functionality includes:

* Semantic HTML structure
* Form labels
* Keyboard navigation support
* `aria-expanded`
* `aria-label`
* `aria-invalid`
* Escape-key navigation support
* Clear navigation states

---

## JavaScript Functionalities

The main interactive functionality is implemented in `script.js`.

The JavaScript implementation includes:

### Theme Management

* Dark/light mode switching
* Theme preference storage using `localStorage`
* Automatic restoration of saved theme

### Navigation Management

* Mobile menu toggle
* Navigation menu open/close state
* Automatic menu closing after navigation
* Escape-key support
* `aria-expanded` state management
* Dynamic `aria-label` updates

### Active Navigation

The active navigation item is updated according to the section currently visible on the screen.

### Scroll Animation

`IntersectionObserver` is used to reveal elements when they enter the viewport.

### Contact Form Validation

The form validates user input before submission and provides error feedback for invalid fields.

### Dynamic Copyright Year

The footer year is automatically updated using JavaScript:

```javascript
new Date().getFullYear()
```

This prevents the copyright year from becoming outdated.

---

## Responsive Design

The website follows a responsive design approach using CSS media queries.

The layout has been optimized for:

| Device  | Design Support                           |
| ------- | ---------------------------------------- |
| Desktop | Full navigation and multi-column layouts |
| Laptop  | Adaptive spacing and content widths      |
| Tablet  | Responsive cards and navigation          |
| Mobile  | Hamburger navigation and stacked layouts |

Special mobile adjustments include:

* Reduced container width
* Smaller spacing
* Stacked hero buttons
* Full-width mobile buttons
* Responsive contact form
* Adjusted timeline cards
* Mobile-friendly navigation

---

## Accessibility

Accessibility was considered during both HTML and JavaScript implementation.

Implemented accessibility features include:

* Semantic HTML sections
* Proper form labels
* Keyboard interaction
* Mobile navigation keyboard support
* `aria-expanded` for navigation state
* `aria-label` for navigation controls
* `aria-invalid` for form validation
* Clear visual navigation states

These features help make the website easier to navigate and understand for different users.

---

## Sections Included

The portfolio contains the following main sections:

1. **Hero**
2. **About**
3. **Education**
4. **Skills**
5. **Research**
6. **Projects**
7. **Areas of Expertise**
8. **Certification**
9. **Activities**
10. **Career Journey**
11. **Contact**

---

# Research & Publications

The research section presents academic research activities and publications without adding unverified publication information.

### 1. Structured Reasoning with Tree-of-Thoughts for Bengali Math Word Problems

**Conference:** ICCIT 2025
**Paper ID:** 1381
**Research Area:** Artificial Intelligence, Natural Language Processing, Bengali Mathematical Word Problems

The work explores structured reasoning using **Tree-of-Thoughts** for solving Bengali mathematical word problems.

The research evaluates different reasoning approaches and investigates how structured reasoning can improve performance on Bengali mathematical problem-solving tasks.

## Projects

### Software Development Lab Website

A web development project developed as part of academic coursework.

The project demonstrates:

* Website development
* User interface design
* CRUD-based functionality
* Frontend and backend concepts
* Database-related functionality

---

### Assembly Language Mini Project

An academic project focused on Assembly Language concepts and implementation.

The project demonstrates practical understanding of low-level programming and computer architecture-related concepts.

---

### Smart Plant Watering System

An Arduino-based automation project designed for smart plant watering.

The system involves:

* Soil moisture sensing
* Environmental monitoring
* Automatic water pump control
* Relay-based switching
* LED indicators
* Buzzer alerts
* Arduino-based control logic

The project demonstrates the practical application of sensors, embedded systems, and automation.

---

## UI/UX Implementation

The portfolio uses a modern and consistent visual design system.

### Visual Design

The interface includes:

* AI-inspired visual identity
* Purple and sky-blue gradients
* Glassmorphism cards
* Rounded UI components
* Soft shadows
* Glow effects
* Hover transitions
* Responsive spacing
* Modern typography
* Section-based visual hierarchy

### Interactive UI

Interactive elements include:

* Theme toggle
* Mobile navigation
* Active navigation states
* Scroll reveal animations
* Interactive project cards
* Form validation feedback
* Hover transitions

The design aims to maintain a professional appearance while keeping the interface simple and easy to navigate.

---

## Git & GitHub Version Control

The project was developed incrementally using **Git** and maintained through **GitHub**.

The development history contains meaningful commits representing different stages of development.

### Development History

```text
1. Initial portfolio website setup
2. Update contact information
3. Improve education section
4. Improve mobile responsive layout
5. Refine visual styling
6. Improve contact form validation
7. Improve navigation accessibility
8. Enhance project card interactions
```

This demonstrates incremental development rather than completing the entire website in a single commit.

Git was used to track changes and maintain the development history of the project.

---

## Folder Structure

```text
Sabrin-Alam-Portfolio/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
├── images/
│   └── profile.jpg
│
└── assets/
```

### Main Files

**index.html**
Contains the main structure and content of the portfolio.

**style.css**
Contains the complete visual styling, responsive design, animations, transitions, and layout rules.

**script.js**
Contains interactive JavaScript functionality including theme switching, navigation, scroll effects, form validation, accessibility behavior, and dynamic content.

**README.md**
Contains project documentation, technologies, features, research information, project details, and setup instructions.

---

## How to Run

### Option 1 — Open Directly

1. Download or clone the repository.
2. Open the project folder in VS Code.
3. Open `index.html` in a web browser.

No backend server is required to view the portfolio.

### Option 2 — VS Code Live Server

The project can also be opened using the **Live Server** extension in VS Code.

Steps:

1. Open the project folder in VS Code.
2. Install the Live Server extension if necessary.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

Live Server is only a development convenience and is not required for the final website.

---

## GitHub Repository

The source code and development history are available on GitHub:

**Repository:**
https://github.com/SabrinPro/my-portfolio

---

## Author

**Sabrin Alam**

BSc in Computer Science & Engineering
**Southeast University**

**Expected Graduation:** 2027

**Career Direction:** Aspiring AI Engineer

### Areas of Interest

* Artificial Intelligence
* Machine Learning
* Natural Language Processing
* Deep Learning
* Large Language Models
* AI Research
* Cybersecurity

### Professional Profiles

**GitHub:**
https://github.com/SabrinPro

**LinkedIn:**
https://www.linkedin.com/in/sabrin-alam-66447a406/

**Email:**
[sabrinalam231@gamil.com](mailto:sabrinalam231@gamil.com)

---

## Academic Purpose

This portfolio was developed as a university web development project to demonstrate practical skills in:

* HTML5
* CSS3
* Vanilla JavaScript
* Responsive web design
* UI/UX development
* Accessibility
* Form validation
* Browser APIs
* Git
* GitHub
* Incremental software development

The project combines academic requirements with a professional portfolio structure to demonstrate both web development skills and the author's academic and research interests.
