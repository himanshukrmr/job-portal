# Job Portal

This project is a job portal application built with React and Vite. It uses Clerk for authentication and includes various features to manage job applications.

## Features

- User authentication with Clerk
- Job listings
- Apply for jobs
- View applied jobs
- Responsive design with Tailwind CSS

## Technologies Used

- React
- Vite
- Clerk for authentication
- Tailwind CSS for styling
- React Router for navigation

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/himanshukrmr/job-portal.git
    cd job-portal/client
    ```

2. Install dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

3. Create a `.env` file in the root directory and add your Clerk publishable key:
    ```env
    VITE_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
    ```

### Running the Application

1. Start the development server:
    ```sh
    npm run dev
    # or
    yarn dev
    ```

2. Open your browser and navigate to `http://localhost:3000`.

### Building for Production

1. Build the application:
    ```sh
    npm run build
    # or
    yarn build
    ```

2. Serve the production build:
    ```sh
    npm run serve
    # or
    yarn serve
    ```

