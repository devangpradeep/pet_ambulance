# PetAmbulance - Emergency Pet Transportation Service

A modern, responsive web application for a 24/7 emergency pet ambulance service. Built with React, TypeScript, and Vite, featuring a beautiful UI with Tailwind CSS.

## Features

- 🚑 24/7 Emergency pet transportation service
- 📱 Responsive design for all devices
- 🎨 Modern UI with smooth animations and glassmorphism effects
- 🐾 Professional pet care information
- 📞 Easy contact and booking system
- ⚡ Fast performance with Vite

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 18.0 or higher)
- **npm** (version 9.0 or higher) or **yarn**

You can verify your installations by running:
```bash
node --version
npm --version
```

## Setup Instructions

### 1. Clone the Repository

```bash
git clone git@github.com:devangpradeep/pet_ambulance.git
cd pet_ambulance
```

### 2. Install Dependencies

Install all required packages using npm:

```bash
npm install
```

Or if you prefer yarn:

```bash
yarn install
```

This will install all dependencies listed in `package.json`, including:
- React 19.2.0
- TypeScript
- Vite
- Tailwind CSS
- ESLint and related plugins

### 3. Start the Development Server

To run the application in development mode:

```bash
npm run dev
```

Or with yarn:

```bash
yarn dev
```

The development server will start, and you should see output similar to:
```
  VITE v7.2.4  ready in XXX ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Open your browser and navigate to `http://localhost:5173/` to view the application.

The development server includes:
- ⚡ Hot Module Replacement (HMR) - changes appear instantly
- 🔍 TypeScript type checking
- 🎨 Tailwind CSS compilation

## Available Scripts

### Development

```bash
npm run dev
```
Starts the Vite development server with hot reload at `http://localhost:5173/`

### Build

```bash
npm run build
```
Compiles TypeScript and builds the production-ready application to the `dist/` folder. The build is optimized and minified.

### Preview

```bash
npm run preview
```
Locally preview the production build before deployment. Run this after `npm run build`.

### Lint

```bash
npm run lint
```
Runs ESLint to check code quality and identify potential issues.

```bash
npm run lint:fix
```
Automatically fixes all auto-fixable linting errors.

For detailed ESLint configuration and usage, see [ESLINT_SETUP.md](ESLINT_SETUP.md).

## Project Structure

```
pet_ambulance/
├── public/              # Static assets
│   └── favicon.png      # Pet ambulance favicon
├── src/                 # Source files
│   ├── components/      # React components
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles and Tailwind directives
├── index.html          # HTML template
├── package.json        # Project dependencies and scripts
├── tailwind.config.js  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```

## Technology Stack

- **React 19.2** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting and quality

## Development Tips

1. **Hot Reload**: Save any file to see changes instantly in the browser
2. **TypeScript**: The project uses strict TypeScript - type errors will show in the console
3. **Tailwind**: Use Tailwind utility classes for styling - check `tailwind.config.js` for custom theme
4. **Components**: All React components are in the `src/components/` directory

## Troubleshooting

### Port Already in Use

If port 5173 is already in use, Vite will automatically try the next available port. You can also specify a custom port:

```bash
npm run dev -- --port 3000
```

### Dependencies Issues

If you encounter dependency issues, try:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

Ensure TypeScript compilation passes:

```bash
npx tsc --noEmit
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary.

## Support

For questions or issues, please contact the development team.
