# Frontend Mentor -  Results Summary Component Solution🔗
This is my solution to the [Results summary component coding challenge](https://results-summary-card-coral.vercel.app/) on Frontend Mentor.

## Overview ✨

### The Challenge

The goal was to build a responsive results summary card that matches the provided design. The component should display a user's results and a summary of different categories. Key requirements included:

- Replicating the design for both desktop and mobile screens.
- Implementing hover and focus states for interactive elements.
- **Bonus:** Using the provided data.json file to dynamically populate the content with JavaScript.

### Preview

![Screenshot](./assets/images/preview.jpg) 

## 🛠️ Technologies Used
- **HTML5** - For the semantic structure of the component.
- **JavaScript (ES6)** - To handle dynamic content from a local JSON file (Bonus).
- **CSS3** - For all styling and responsive design.
- **Flexbox** - Used for creating the main two-column layout and aligning items within each summary row.

## My Process 🛠️
### 1. HTML Structure 📋
I created a semantic HTML structure with:

- A single <main> container for the entire card component.
- Two main sections: a `.result section` for the user's score and a `.summary section` for the category results.
- For each category item, I used a div element to hold the icon, category name, and score.
- A `<button>` element for the "Continue" call-to-action.

### 2. Styling 🎨
- **Mobile-first approach** 📱
- **Typography** Imported and applied custom fonts
- **Layout**  I used Flexbox on the main container to easily arrange the two sections side by side on desktop. This also allows for a simple flex-direction: column change in the media query for mobile.
- **Overlapping Effect** The key to the design's "overlap" effect was using a single parent container with a border-radius and overflow: hidden. The two child sections inside (.result and .summary) have their own backgrounds, but the parent's overflow: hidden ensures their corners don't poke out, giving the clean, unified appearance.
- **Category items** Each result item uses a div with a unique class (e.g., .reaction, .memory) to apply the specific background color and icon color from the style guide.

## 📚 What I Learned
- **Flexbox for Complex Layouts:** I furthered my understanding of using Flexbox to create multi-column layouts and how to adapt them for mobile views.

- **The Power of overflow:** `hidden:` I learned how this simple property on a parent container is a powerful tool for controlling the visible shape of its children, which was essential for creating the rounded, unified card.

- **CSS Custom Properties:** I reinforced the best practice of using variables for colors and other repeating values to make the stylesheet cleaner and more maintainable.

## 🔗 Links
- **🌐 Live Site URL**: [Results summary component coding challenge](https://results-summary-card-coral.vercel.app/)

### **👥 Solved by M Olaya** 
<a href="https://www.linkedin.com/in/molaya">LinkedIn</a> 
