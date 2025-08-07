# Personal Portfolio Website Template

This project is a clean, modern, and simple single-page portfolio website template built entirely with HTML and CSS. It's designed to serve as a starting point for developers and designers to showcase their work and skills.

The layout is built using CSS Flexbox, creating a responsive two-column hero section for an introduction and a profile image.

## Features

-   **Clean Navigation Bar:** A top-aligned navigation bar with a logo and links to different sections.
-   **Two-Column Hero Section:** A balanced layout featuring personal introduction text on one side and a profile image on the other.
-   **Call-to-Action Button:** A styled "Hire Me" button with an interactive hover effect to grab attention.
-   **Minimalist Design:** A simple and modern UI that focuses on readability and presenting information clearly.
-   **Easy to Customize:** The code is straightforward, making it easy to change text, images, and colors.
-   **Ready for Expansion:** Includes an empty footer and placeholder navigation links, making it simple to add more sections like 'About', 'Skills', and 'Contact'.

## Technologies Used

-   **HTML5:** For the structure and content of the page.
-   **CSS3:** For all styling, layout (Flexbox), and interactive hover effects.

## Setup and Usage

To use this template for your own portfolio, follow these steps:

1.  **Clone or Download:** Get the project files onto your local machine.
    ```sh
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    ```
2.  **Navigate to Folder:** Open the project folder in your code editor.
3.  **Customize Content:** Edit the `index.html` (or your HTML file) to add your personal information.
4.  **View in Browser:** Open the `index.html` file in your web browser to see your portfolio.

## How to Personalize

-   **Edit Text:** Open the HTML file and change the name (`Prem Sahi`), title (`UI/UX DESIGNER`), and location to your own details.
-   **Change Image:** In the HTML file, find the `<img>` tag and replace the `src="..."` URL with a link to your own photo. It's best to save your image in the project folder and link to it locally (e.g., `src="./images/my-photo.jpg"`).
-   **Update Colors:** In the `portfolio.css` file, find instances of `color: blue` and `background-color: blue` and replace `blue` with your preferred color code (e.g., `#6A5ACD`).
-   **Activate Links:** Update the `href="#"` in the navigation bar to point to different sections of your page (e.g., `href="#about"`) once you create those sections.

## Code Breakdown

The primary layout mechanism is **CSS Flexbox**.
-   The `.nav-bar` class uses `display: flex` to place the logo and the navigation links list side-by-side.
-   The `.folio` class also uses `display: flex` to create the two-column layout for the text content and the profile image.
-   Negative margins (e.g., `margin-top: -20px`) are used to tighten the spacing between text elements in the main article.
