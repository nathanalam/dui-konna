# Dui Konna - Muslin Saree Website

A beautiful website showcasing handcrafted Muslin sarees, built with Next.js and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Beautiful product showcase
- Customer reviews section
- Order tracking functionality
- Static website generation for easy deployment

## Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/nathanalam/dui-konna.git
cd dui-konna
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Building for Production

### Generate Static Website

To generate a static website that can be deployed to any static hosting service:

```bash
npm run build
# or
yarn build
```

This will create a static export in the `out` directory.

### Deploying the Static Website

The static website can be deployed to any static hosting service such as:

- Vercel
- Netlify
- GitHub Pages
- Amazon S3
- Firebase Hosting

#### Example: Deploying to GitHub Pages

1. The repository includes a GitHub Actions workflow file that automatically deploys your site to GitHub Pages when you push to the main branch.

2. Make sure your repository settings are configured to use GitHub Pages:
   - Go to Settings > Pages
   - Set the source to "GitHub Actions"

## License

This project is licensed under the MIT License - see the LICENSE file for details.
