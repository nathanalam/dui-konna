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

1. Add a GitHub Actions workflow file to your repository:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: out
```

2. Push your changes to GitHub, and the workflow will automatically deploy your site to GitHub Pages.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
