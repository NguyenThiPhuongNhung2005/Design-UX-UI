PROJECT REPORT: PETCARE T - ADVANCED PET SERVICE ECOSYSTEM

1. PROJECT OVERVIEW

PetCare T is a premium, high-fidelity web platform designed to streamline professional pet care services. Moving beyond a simple informational site, PetCare T introduces a full-service ecosystem including Grooming, Health Check-ups, Pet Hotel (Boarding), and Specialized Care for small animals (Hamsters, Rabbits, Birds).

The project focuses on a "boutique" care philosophy: “Một nơi nhỏ, chăm sóc thật kỹ” (A small place, dedicated care), emphasizing transparency and emotional connection between the caregiver and the pet.

<img width="1024" height="403" alt="image" src="https://github.com/user-attachments/assets/b6f70318-6081-4572-b3f0-f84a5a52ffa1" />

Figure 1: The "About Us" section showcasing the Mission and Core Values with a modern Glassmorphism UI.

2. DESIGN PHILOSOPHY: MODERN MINIMALISM
For PetCare T, the design language has shifted towards Gen-Z aesthetics and High-Trust UI:

Color Palette: A sophisticated Purple-to-Pink gradient represents creativity, luxury, and compassion.

Visual Style: Utilizing Glassmorphism (frosted glass effects) and soft border-radius to create a friendly, approachable atmosphere.

User Psychology: Transparency is key—every service card includes clear pricing, estimated duration, and detailed inclusions to reduce user hesitation.

3. SYSTEM ARCHITECTURE
The project follows a standard modern front-end structure, maintaining a strict separation of concerns between logic, content, and presentation:

index.html: The central landing page integrating key touchpoints (Hero, Services, Testimonials, FAQ).

services.html: A detailed module for specialized service packages (Grooming, Boarding, Wellness).

about.html: A brand narrative page detailing the vision, mission, and the professional team.

contact.html: A lead generation and customer support interface.

assets/css/styles.css: Contains global design tokens, brand palettes, Glassmorphism effects, and the responsive grid system.

assets/js/main.js: Lightweight client-side logic for smooth scrolling, form validation, and UI state management.

4. CORE SERVICE MODULES
   
4.1. Professional Grooming & Spa

The system categorizes grooming into logical tiers: Basic Bathing, Style Blow-drying, and Premium Spa. Each service is treated as a "Product" that can be added to a cart, allowing for a seamless e-commerce experience within a service platform.

<img width="1023" height="397" alt="image" src="https://github.com/user-attachments/assets/7a8c08a9-2f89-41ae-8189-29378c039119" />

Figure 2: Categorized Grooming services with tiered pricing and duration estimates.

4.2. Pet Boarding (Pet Hotel)

A dedicated module for pet owners who need long-term care. It features clean-room promises, dietary tracking, and a "Photo Update" commitment to ensure peace of mind.

<img width="1024" height="561" alt="image" src="https://github.com/user-attachments/assets/3c467875-181b-4cc5-975d-f318cf480ad8" />

Figure 3: Pet Hotel booking interface with 180,000đ/day entry price.

4.3. Specialized Small Animal Care

Recognizing the "Exotic Pet" niche, PetCare T provides tailored services for hamsters, rabbits, and birds, focusing on stress-free handling and habitat consultation.

<img width="1023" height="561" alt="image" src="https://github.com/user-attachments/assets/71a8decb-8353-4402-a96a-820a001ca6d7" />

Figure 4: Specialized care module for small mammals and birds.

5. UX FEATURES & FLOW (USER JOURNEY)

5.1. The 4-Step Care Process (The Stepper)

To build trust, the platform visualizes the internal workflow: Reception → Care → Inspection → Handover. This "Stepper" design is optimized for mobile responsiveness and clarity.

5.2. Advanced Product/Service Detail Page

Each service (e.g., Care+ Grooming) has a dedicated landing page. It includes:

Checklist of Inclusions: (e.g., Bathing + Scent + Nail Clipping).

Dynamic Pricing: Showing original vs. discounted rates.

Booking Actions: "Add to Cart" or "Buy Now" for immediate conversion.

<img width="1024" height="556" alt="image" src="https://github.com/user-attachments/assets/1966b15f-5006-4d22-b6fb-821fcc5cb6b8" />

Figure 6: Comprehensive Service Detail page with "Safe & Secure" (An tâm) trust badges.

5.3. Conversion Optimization (Call to Action)

Strategic CTA bars are placed throughout the scroll journey to ensure the "Book Now" (Đặt lịch) option is always accessible but never intrusive.


6. TECHNICAL SPECIFICATION

6.1. Frameworks & Utilities

Bootstrap 5: Utilized for its robust Grid system, Flexbox utilities, and responsive components, ensuring a "Mobile-First" experience across all viewports.

Custom CSS Variables: Implemented to manage brand colors and typography globally, ensuring high maintainability.

6.2. Deployment & Optimization

Environment: Optimized for high-performance rendering on modern browsers; compatible with VS Code Live Server for real-time development.

Asset Management: Images are optimized ( / ) and scripts are deferred to ensure a high Lighthouse performance score..webp.jpg

7. EVALUATION & CONCLUSION
   
PetCare T successfully combines the warmth of a pet spa with the efficiency of a modern e-commerce platform. By focusing on transparency (Price/Time) and professionalism (The 4-step process), the site serves as a perfect case study for high-converting UI/UX design in the service industry.

