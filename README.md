
---

# MS - Frontend Developer Machine Test

This project is a submission for the Frontend Developer position, focusing on implementing a Figma design using Next.js. The app is responsive and optimized for different devices.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Running the Project](#running-the-project)
- [Building for Production](#building-for-production)
- [Testing](#testing)
- [Deployment](#deployment)
- [Additional Notes](#additional-notes)

---

## Project Overview

This project was built using **Next.js** as the primary framework, with **React.js** for UI components and **Tailwind CSS** for styling. The goal was to convert the given Figma design into a fully functional, responsive website that works well on different devices.

## Technologies Used

- **Next.js**: The React framework for production.
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **TypeScript**: Added for type-checking and better developer experience.
- **React Icons**: Used for scalable icons across the UI.

## Getting Started

### Prerequisites

Ensure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher) or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd ms
   ```

3. Install dependencies:
   ```bash
   npm install
   ```
   or if you use Yarn:
   ```bash
   yarn
   ```

## Running the Project

### Development Server

To start the development server, run:
```bash
npm run dev
```
or
```bash
yarn dev
```

This will start the app at `http://localhost:3000`. Open your browser and navigate to this URL to see the project in action.

### Linting

To run the linter and check for coding standard issues:
```bash
npm run lint
```

## Building for Production

To create an optimized production build, use the following command:
```bash
npm run build
```

This will output an optimized version of the app in the `.next` folder.

To run the production server:
```bash
npm run start
```

This will start the application in production mode, serving the optimized build.

## Testing

At the moment, no unit or integration tests are included in the project. However, adding testing libraries like Jest or Cypress is recommended for future enhancements.

## Deployment

This application is live and hosted on Vercel. You can view the live demo by visiting the link below:

**Live Demo**: [https://ms-machine-test.vercel.app/](https://ms-machine-test.vercel.app/)

To deploy it yourself:

1. Create a Vercel account if you don't have one.
2. Link the GitHub repository to your Vercel account.
3. Vercel will automatically detect the Next.js project and handle the deployment.

Once deployed, you will have a live link to your project.

## Additional Notes

- The design was based on a Figma mockup provided during the machine test.
- The application is fully responsive and optimized for different screen sizes.
- [Tailwind CSS](https://tailwindcss.com/) was used for rapid and consistent styling.
- TypeScript was used for added type safety during development.

---

Feel free to reach out if you have any questions or need further clarification regarding the project setup or deployment process.

## License

This project is for demonstration purposes as part of a hiring process and is not licensed for commercial use.

---
