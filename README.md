# Politie Training Landing Page

A modern landing page for Lean Agile Groep's police training courses, built with Next.js and Tailwind CSS.

## Features

- Responsive design
- Modern UI with Tailwind CSS
- Course information and signup forms
- Dark theme with brand colors
- Combined Scrum Academy and Lean Agile Groep branding

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

### Plesk Server Deployment

This project is configured for Plesk server deployment:

1. **Clone the repository** on your Plesk server:
   ```bash
   git clone git@github.com:Salsa85/lag-pol.git
   cd lag-pol
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Build the application**:
   ```bash
   npm run build
   ```

4. **Start the application**:
   ```bash
   npm start
   # or using PM2 for production
   pm2 start ecosystem.config.js
   ```

5. **Configure Plesk**:
   - Set up a Node.js application in Plesk
   - Point to the project directory
   - Set the application root to the project folder
   - Set the startup file to `server.js`
   - Configure the domain and SSL certificate

### Environment Variables

Create a `.env` file in the project root with:
```
NODE_ENV=production
PORT=3000
```

## Tech Stack

- Next.js 15
- React 19
- Tailwind CSS v4
- TypeScript
- GSAP for animations
- OGL for 3D effects (DarkVeil)

## Project Structure

- `/src/app` - Next.js App Router pages
- `/src/components` - Reusable React components
- `/public` - Static assets
- `/.github/workflows` - GitHub Actions deployment configuration