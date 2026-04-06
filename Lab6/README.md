# Lab 6 - WFood

## Project Introduction

WFood is a static website project that represents a simple fast food ordering service. This project was created for Lab 6 as a way to practice web layout design, responsive structure, and basic front end interaction with JavaScript.

The website includes three main pages: a home page, a menu page, and a contact page. The main idea of the project is to build a clean and modern interface that looks like a real food delivery website while still remaining simple enough for a lab assignment.

## Website Goals

The website was developed to create a clear and easy to use food ordering experience. The main goals are:

- Present a food service layout with strong visuals, clear content, and simple navigation.
- Use Bootstrap to create a responsive and consistent interface.
- Add basic JavaScript interactions such as menu filtering, dish detail modals, and demo form handling.
- Organize the project clearly by separating HTML, CSS, JavaScript, and asset files.
- Practice UX and UI thinking with attention to readability and ease of use.

## Target Users

The website is intended for users who want to browse dishes quickly, explore featured items, and send a basic order request through a contact form. Since this is only a demo project, no real data is stored and there is no actual checkout or payment process.

## Technologies Used

- HTML5 for page structure and semantic content.
- CSS3 for custom styling and visual identity.
- Bootstrap 5.3.3 for layout, components, and responsive behavior.
- Bootstrap Icons for interface icons.
- Vanilla JavaScript for front end interaction.

## Folder Structure

```text
Lab6/
  index.html
  menu.html
  contact.html
  README.md
  assets/
    css/
      styles.css
    img/
      dish-chicken.svg
      dish-combo.svg
      dish-milktea.svg
      dish-pasta.svg
      dish-pizza.svg
      dish-ricechicken.svg
      dish-salad.svg
      hero-food.svg
      photos/
        burger.jpg
        chicken.jpg
        combo.jpg
        hero.jpg
        milktea.jpg
        pasta.jpg
        pizza.jpg
        ricechicken.jpg
        salad.jpg
    js/
      main.js
```

## Page Description

### 1. Home Page - `index.html`

The home page introduces WFood and gives users their first impression of the website.

Main components:

- A sticky navigation bar for quick access to Home, Menu, and Contact.
- A hero section with a large heading, short description, call to action buttons, and supporting images.
- A featured dish carousel that highlights popular menu items.
- A section presenting key service highlights such as fast delivery, careful packaging, and flexible payment.
- A three step ordering explanation that helps users understand the basic flow.
- A final call to action section that encourages users to move to the menu page.

UX and UI value:

- Creates a strong visual starting point with a large hero section and featured imagery.
- Guides user behavior with clear call to action buttons.
- Breaks content into clear sections so users can scan information quickly.

### 2. Menu Page - `menu.html`

The menu page displays the demo dishes available on the website.

Main components:

- A search input at the top for filtering dishes by name.
- A product grid built with cards to display menu items visually.
- Each dish card includes an image, title, status badge, short description, and price.
- A "View Details" button that opens a modal with more information about the selected dish.

UX and UI value:

- The grid layout makes dishes easy to compare.
- Large food images improve visual appeal.
- The modal avoids unnecessary navigation and keeps the browsing flow smooth.

### 3. Contact and Order Page - `contact.html`

The contact page works as a simple demo order request area.

Main components:

- A short introduction about the service area and hotline details.
- An order form including full name, phone number, address, notes, payment method, and preferred time.
- Basic Bootstrap validation for required input fields.
- An accordion based FAQ section that answers common questions.

UX and UI value:

- The form is divided into clear input groups, making it easier to complete.
- Validation feedback gives users direct visual guidance when information is missing.
- The FAQ section helps explain the service without forcing users to leave the page.

## Visual Style

The visual style of WFood is designed to feel modern, friendly, and energetic.

Main characteristics:

- Warm red and orange tones are used to suggest food, speed, and appetite.
- A light background combined with soft gradients adds depth to the layout.
- Cards use large border radii, soft shadows, and generous spacing for a more open look.
- Food imagery is placed prominently to increase visual interest.
- Typography is clearly structured so headings, supporting text, and secondary information are easy to distinguish.

## Responsive Design

The website is designed to work well across multiple screen sizes.

On desktop:

- Content is arranged into multiple columns where appropriate.
- The hero section and dish cards make good use of the available width.

On tablet:

- The menu grid adapts to fewer columns while preserving spacing and readability.
- Content sections remain balanced and easy to scan.

On mobile:

- The navigation collapses into a mobile friendly menu.
- Buttons remain large enough to tap comfortably.
- Content stacks vertically to support readability and scrolling.

## JavaScript Features

The `assets/js/main.js` file handles the main interactions of the website.

### Automatic Footer Year

When a page loads, JavaScript inserts the current year into the footer so the copyright text stays up to date.

### Menu Filtering

Users can type into the search field on the menu page. The script reads each card's `data-name` value and shows or hides items based on the entered text.

### Dish Detail Modal

When the detail button is clicked, information such as the dish name, price, description, and image is read from `data-*` attributes and inserted into the Bootstrap modal.

### Order Form Validation

The contact page uses simple client side validation:

- Prevent submission when required fields are empty.
- Show Bootstrap validation feedback styles.
- Display a demo success message and reset the form when the submission is valid.

## Project Strengths

- Clear structure that is easy to understand and navigate.
- Consistent design language across all pages.
- Practical use of Bootstrap components instead of relying only on default styling.
- Basic interactivity that makes the website feel more dynamic.
- Suitable for demonstrating UI design, responsive layout, and client side interaction in a lab assignment.

## Current Limitations

Because this is a demo project, there are still some limitations:

- No real shopping cart.
- No backend or database integration.
- No actual order storage.
- No user account system or login.
- Search only filters front end content by dish name.

## Future Improvements

If the project were expanded further, the website could include:

- A real add to cart feature.
- User login and account management.
- Backend integration for storing orders.
- Dish filtering by category, price, or status.
- An admin page for managing menu items.
- Online payment support.
- Delivery tracking or API integration.

## How to Run the Project

Because this is a static website, it can be run very easily:

1. Open the `Lab6` folder in VS Code or a file manager.
2. Open `index.html` directly in a browser.
3. Or use a tool such as Live Server for a smoother local preview during development.

## Summary

WFood is a Lab 6 project that demonstrates web interface design using Bootstrap together with HTML, CSS, and basic JavaScript. It shows how to build a multi page website with a clear UX direction, responsive structure, attractive presentation, and enough interaction to simulate a realistic food ordering concept.