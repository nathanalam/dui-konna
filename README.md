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
- yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/nathanalam/dui-konna.git
cd dui-konna
```

2. Install dependencies
```bash
yarn install
```

3. Run the development server
```bash
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Building for Production

### Generate Static Website

To generate a static website that can be deployed to any static hosting service:

```bash
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

## Google Spreadsheet Integration

This website fetches product data directly from a public Google Spreadsheet without requiring any API keys or backend services.

### How It Works

1. The products are stored in a publicly accessible Google Spreadsheet
2. The website fetches the CSV export of the spreadsheet directly from the client-side
3. The data is parsed and displayed in the products section of the website

### Updating Products

To update the displayed products:

1. Edit the Google Spreadsheet at: [Dui Konna Products](https://docs.google.com/spreadsheets/d/1MQ4AnjWUty_uyNj-Z2vlW3y3IwsLrb1xAuYIThgXC5M/edit?gid=0#gid=0)
2. Ensure the spreadsheet has the following columns:
   - ID: A unique identifier for the product
   - Image URL: The URL of the product image
   - Name: The name of the product
   - Description: A short description of the product
   - Price: The price in Bangladeshi Taka (৳)

The changes to the spreadsheet will be reflected on the website immediately when users reload the page.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
