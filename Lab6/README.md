# Lab 6: WFood

## Project Overview

WFood is a static multi page website that simulates a modern food ordering service. This project was created for Lab 6 to practice interface design, responsive layout building, visual hierarchy, and simple front end interaction using Bootstrap and vanilla JavaScript.

The website is designed as a small but complete demo product. It includes a home page, a menu page, and a contact and order page. The main idea is to present a realistic food delivery brand with a clean user experience, attractive food imagery, and clear interaction flow from browsing to submitting an order request.

## Project Goals

This website was built to achieve several learning and design objectives. First, it demonstrates how a food service landing page can be structured in a way that is easy to scan and visually appealing. Second, it applies Bootstrap components and grid layout to create a responsive interface across desktop, tablet, and mobile screens. Third, it adds lightweight client side interaction such as menu filtering, modal based detail viewing, and form validation. Finally, it keeps the project structure organized by separating HTML, CSS, JavaScript, and media assets into dedicated folders.

## Target Users

WFood is aimed at users who want to quickly explore available dishes, view featured items, and submit a basic order request. Since this is a demo project, the experience focuses on presentation and interaction rather than real order processing. There is no database, no live payment gateway, and no backend integration.

## Technologies Used

The project uses HTML5 for page structure, CSS3 for custom styling, Bootstrap 5.3.3 for layout and interface components, Bootstrap Icons for visual icons, and vanilla JavaScript for browser side interactions. This combination keeps the project lightweight while still allowing the interface to feel complete and interactive.

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

## Page Details

### Home Page: `index.html`

The home page introduces the WFood brand and creates the first visual impression. It contains a sticky navigation bar, a hero section with a strong headline and call to action buttons, a featured carousel for popular dishes, and a set of sections that explain the service highlights and the order process.

From a UX perspective, this page is built to guide the user quickly toward browsing the menu. Large headings, clear button placement, supporting feature cards, and strong image presentation all work together to make the page easy to understand within a few seconds.

### Menu Page: `menu.html`

The menu page displays the product catalog in a card based layout. Each dish card contains an image, item name, short description, status badge, and price. A search field at the top allows the user to filter dishes by name in real time. When a user clicks the detail button, a Bootstrap modal opens and displays more information about the selected dish.

This page focuses on browsing efficiency. The grid layout makes comparison easy, the cards are visually consistent, and the modal interaction allows users to inspect an item without leaving the page.

### Contact Page: `contact.html`

The contact page acts as a demo order request form. It includes service area information, contact details, a structured form with required fields, and a frequently asked questions section shown in an accordion layout.

The form asks for the customer name, phone number, address, order note, payment method, and preferred delivery time. Validation feedback is handled on the client side to show whether the required information is complete before displaying a success message.

## Visual and UX Direction

The interface is designed with a warm, energetic, food related visual style. The color palette leans toward red and orange tones to suggest appetite, warmth, and speed. Soft gradients and subtle shadows are used to create depth without making the layout heavy. Rounded cards, large images, and generous spacing help the interface feel approachable and modern.

Typography is organized to support fast reading. Headlines are bold and clear, supporting text is softer in tone, and action buttons are placed where users naturally expect them. The design tries to balance promotional presentation with practical usability.

## Responsive Behavior

WFood is built to adapt smoothly across different screen sizes. On desktop, the layout uses multiple columns to make full use of the wider space. On tablets, the card grid reduces the number of columns while preserving spacing and readability. On mobile devices, the navigation collapses, content stacks vertically, and action buttons remain easy to tap. This ensures that the project remains usable and visually balanced regardless of device width.

## JavaScript Features

The `assets/js/main.js` file handles the main interactive behavior of the site. It automatically updates the footer year so the copyright section stays current. It also powers the live search feature on the menu page by reading each card's `data-name` attribute and hiding non matching items.

Another important feature is the modal content injection on the menu page. When the user clicks a dish detail button, the script reads custom `data-*` attributes from that button and fills the modal with the correct title, description, price, and image. On the contact page, JavaScript works with Bootstrap validation classes to prevent invalid submission and display a demo success message after a valid form submission.

## Strengths of the Project

One of the strongest aspects of this project is its clarity. The navigation is straightforward, the content is divided into logical sections, and the interface stays consistent across all pages. Another strength is the balance between visual design and usability. The project is attractive enough to feel like a real service concept while still being simple enough to understand as a lab assignment.

The site also shows a practical use of Bootstrap rather than relying on default components without structure. Layout, cards, modal, accordion, form styling, and responsive behavior all contribute to a complete front end exercise.

## Current Limitations

Because WFood is a demo website, several features are intentionally simplified. There is no real shopping cart, no persistent order storage, no authentication system, and no backend processing. The search is limited to front end filtering by dish name, and the order form only simulates submission. These limitations are acceptable for a lab project, but they also define the boundary between this demo and a production ready application.

## Future Improvements

If the project were expanded further, it could evolve into a more realistic food delivery platform. Natural next steps would include adding a real cart system, building a backend for order management, storing product data in a database, implementing user authentication, supporting online payment, and creating an administration panel for menu management. Additional filtering options such as category, price range, and popularity could also improve the browsing experience.

## How to Run the Project

This is a static website, so it can be opened very easily. The simplest method is to open the `Lab6` folder and run `index.html` directly in a browser. A better development workflow is to use a local preview tool such as Live Server in VS Code so that page refresh and asset loading behave more consistently while editing.

## Summary

WFood is a complete Lab 6 front end demo that presents a fictional food ordering brand through a well structured multi page website. It combines Bootstrap based layout, custom CSS styling, and lightweight JavaScript interaction to demonstrate both interface design and practical front end implementation. The project is suitable for showcasing responsive design, user flow planning, and the presentation of a simple service product in a polished and understandable way.