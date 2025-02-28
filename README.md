# Job Tracker Application

## Overview

The Job Tracker Application is a web-based tool designed to help job seekers efficiently manage and track their job applications. Built with Next.js, it offers a user-friendly interface and robust features to streamline the job search process.

## Features

- **Application Tracking**: Easily add, update, and track job applications with key details such as company, position, date applied, and current status.
- **Status Management**: Organize applications by status (e.g., Applied, Interviewing, Offer Received, Rejected) to stay on top of your job search progress.
- **Company Information**: Store important company details, including contact information, notes, and relevant links.
- **User Authentication**: Secure user accounts with authentication to protect personal job search data.
- **Dashboard**: A centralized dashboard provides an overview of all job applications, upcoming interviews, and recent activities.
- **Responsive Design**: Fully responsive design ensures a seamless experience across desktop and mobile devices.

## Technologies Used

- **Frontend**:
  - [Next.js](https://nextjs.org/) - React framework for building performant web applications.
  - [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for rapid UI development.
  - [React Icons](https://react-icons.github.io/react-icons) - Comprehensive icon library for React.
- **Backend**:
  - [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction) - Serverless functions for handling API requests.
- **Database**:
  - [MongoDB](https://www.mongodb.com/) - NoSQL database for storing job application data.
  - [Mongoose](https://mongoosejs.com/) - MongoDB object modeling tool designed to work in an asynchronous environment.
- **Authentication**:
  - [NextAuth.js](https://next-auth.js.org/) - Authentication library for Next.js applications.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/) - running locally or accessible via a connection string

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/job-tracker.git
   cd job-tracker
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables:**

   Create a `.env.local` file in the root directory and add the following environment variables:

   ```
   MONGODB_URI=your_mongodb_connection_string
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_secret_key
   ```

   Replace `your_mongodb_connection_string` with your MongoDB connection string and `your_secret_key` with a secure random string.

## Running the Application

1. **Start the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. **Open your browser and navigate to `http://localhost:3000` to view the application.**

## Project Structure

job-tracker/
├── components/       # Reusable UI components
├── lib/              # Utility functions and helper functions
├── models/           # MongoDB schema definitions
├── pages/            # Next.js pages and API routes
│   ├── api/          # API endpoints
│   └── ...           # Page components
├── public/           # Static assets
├── styles/           # Global styles and Tailwind CSS configuration
├── .env.local        # Environment variables
├── next.config.js    # Next.js configuration file
└── README.md         # Project documentation


## Contributing

Contributions are welcome! Here’s how you can contribute:

1. **Fork the repository.**
2. **Create a new branch** for your feature or bug fix.
3. **Commit your changes** with descriptive commit messages.
4. **Push your changes** to your fork.
5. **Submit a pull request** to the main repository.

## License

This project is licensed under the [MIT License](LICENSE). See the LICENSE file for more details.

## Contact

Ajit Rai - [raiajit022@gmail.com](mailto:raiajit022@gmail.com)

Project Link: [https://github.com/raiajit022/Job-Application-Tracker.git](https://github.com/raiajit022/Job-Application-Tracker.git)
