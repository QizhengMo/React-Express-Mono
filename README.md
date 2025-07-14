# React Express Monorepo

This is a full-stack web application built with React, Express, and TypeScript, all managed within a pnpm monorepo.
- Type safty
- Full-Stack
- AI-friendly: Plain old stacks, no magic, allowing you AI toolings to generate the very best code
- Monorepo: reuse type definitions in contract module

## Project Structure

The project is a monorepo using [pnpm workspaces](https://pnpm.io/workspaces). It is divided into the following packages:

-   `packages/contract`: A shared package containing types and interfaces used by both the frontend and backend.
-   `packages/front`: The React frontend application, built with [Vite](https://vitejs.dev/).
-   `packages/server`: The Express backend server.

## Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) (v22 or higher)
-   [pnpm](https://pnpm.io/)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/QizhengMo/React-Express-Mono.git
    cd react-express
    ```
2.  Install the dependencies using pnpm:
    ```bash
    pnpm install
    ```

### Development

To start the development servers for both the frontend and backend, run the following command from the root of the project:

```bash
pnpm dev
```

This will:

-   Start the Vite development server for the frontend on `http://localhost:5173`.
-   Start the Express server with nodemon for the backend on `http://localhost:3000`.

### Building for Production

To build the application for production, run the following command from the root of the project:

```bash
pnpm build
```

### Docker Support
This project includes a Dockerfile for both the frontend and backend. To build and run the application using Docker, you can use the following commands:
The front end production build will be served by the Express server.
```bash
docker build -t react-express-mono .
docker run -p 3000:3000 react-express-mono
```

This will create production-ready builds for both the frontend and backend in their respective `dist` directories.

## Key Technologies

-   [React](https://reactjs.org/)
-   [Express](https://expressjs.com/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Vite](https://vitejs.dev/)
-   [pnpm](https://pnpm.io/)
-   [Rollup](https://rollupjs.org/)
