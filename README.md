
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

This project is a Next.js application that implements a responsive design based on a Figma mockup. The primary focus was to ensure that the application adheres to good frontend practices, is responsive, and functions well across different devices.

## Technologies Used

- **Next.js**: The React framework for production.
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **TypeScript**: For static typing and better developer experience.
- **React Icons**: Icon library used for adding scalable icons.
- **Swiper.js**: For implementing touch sliders and carousels.

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

## Testing

There are currently no unit or integration tests in this project. However, you can add testing libraries like Jest or Cypress for future testing capabilities.

## Deployment

This application is hosted on [Vercel](https://vercel.com/). To deploy it yourself:

1. Create a Vercel account if you don't have one.
2. Link the Git repository to your Vercel account.
3. Vercel will automatically detect the Next.js project and handle the deployment.

Once deployed, you will have a live link to your project.

## Additional Notes

- The design was based on a Figma mockup provided during the machine test.
- The application is fully responsive and optimized for different screen sizes.
- [Tailwind CSS](https://tailwindcss.com/) was used for fast and responsive styling.

---

Feel free to reach out if you need any additional information regarding the project setup, code, or deployment.

---

## License

This project is for demonstration purposes as part of a hiring process and is not licensed for commercial use.

---
