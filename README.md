# hbd-salome-website

## Stack

- Frontend: React, TypeScript, Vite
- Styling: TailwindCSS

## Frontend System Design

- Component-based architecture

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:mateobetancurb/happybirthday-salome-website.git
   ```
2. Navigate to the project directory:
   ```bash
   cd happybirthday-salome-website
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```

### Running the project locally

To start the development server, run:

```bash
pnpm run dev
```

This will typically start the application on `http://localhost:5173`.

## Available Scripts

In the project directory, you can run the following scripts:

- `pnpm run dev`: Runs the app in development mode.
- `pnpm run build`: Builds the app for production to the `dist` folder.
- `pnpm run lint`: Lints the project files using ESLint.
- `pnpm run preview`: Serves the production build locally for preview.

## Deployment

This project is intended to be deployed on Vercel.
The Vercel integration will typically handle the build and deployment process automatically when changes are pushed to the connected Git repository.
Additionally, Vercel Analytics is integrated: `@vercel/analytics`.
