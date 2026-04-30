# Meganathan Raj - Professional Portfolio

Welcome to the repository for my professional developer portfolio! This project showcases my skills, experience, and projects as a software developer, with a specific focus on Flutter development.

## 🚀 Features

* **Modern UI/UX:** A clean, vibrant, and highly responsive design tailored to provide a premium user experience.
* **Dynamic Animations:** Smooth scroll effects and micro-interactions powered by Framer Motion.
* **Project Showcase:** Detailed cards displaying my recent work and achievements.
* **Skills Graph:** A visual representation of my core technical stack (Flutter, Firebase, Git, etc.).
* **Functional Contact Form:** A built-in contact form fully integrated with Google Apps Script to seamlessly deliver messages straight to my Google Sheets.
* **Dark/Light Theming:** Carefully selected color palettes ensuring the website looks amazing in any environment.

## 🛠️ Tech Stack

This project was built using modern web development tools:

* **Framework:** [React 18](https://reactjs.org/) + [Vite](https://vitejs.dev/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Animations:** [Framer Motion](https://www.framer.com/motion/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **UI Components:** [Radix UI](https://www.radix-ui.com/) (Headless accessible components)
* **Backend Integration:** Google Apps Script (For contact form data storage)

## 💻 Running Locally

To run this project on your local machine, follow these steps:

### Prerequisites

* [Node.js](https://nodejs.org/en/) (Version 16 or higher is recommended)
* npm (comes with Node.js) or [bun](https://bun.sh/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   # or
   bun run dev
   ```

4. **View the application:**
   Open your browser and navigate to `http://localhost:5173` (or the port specified in your terminal).

## 📬 Contact Form Setup

The contact form is configured to send data directly to a Google Sheet via a custom Google Apps Script endpoint. 

If you are reusing this code:
1. Create a Google Sheet with headers: `name`, `email`, `subject`, `message`, `date`.
2. Create a Google Apps Script linked to that sheet using the `doPost` method.
3. Replace the `scriptURL` in `src/components/portfolio/Contact.jsx` with your own Google Apps Script Web App URL.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---
*Crafted with ❤️ and a lot of coffee.*
