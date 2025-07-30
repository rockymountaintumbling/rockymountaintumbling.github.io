# Rocky Mountain Tumbling

A React-based website for Rocky Mountain Tumbling built with Vite, TypeScript, and Tailwind CSS.

## GitHub Pages Setup

This site is configured to deploy automatically to GitHub Pages. Here's how to set it up:

### 1. Repository Settings

1. Go to your GitHub repository settings
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select "GitHub Actions"
4. The site will be deployed automatically when you push to the main branch

### 2. First Deployment

1. Push your code to the main branch
2. Go to the "Actions" tab in your repository
3. You should see a "Deploy to GitHub Pages" workflow running
4. Once complete, your site will be available at: `https://rockymountaintumbling.github.io/rockymountaintumbling.github.io`

### 3. Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### 4. Custom Domain (Optional)

If you want to use a custom domain:

1. Add your custom domain to the repository settings under Pages
2. Update the `homepage` field in `package.json` to your custom domain
3. Update the `base` field in `vite.config.ts` to `/` (instead of the current path)

## Technologies Used

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Lucide React (icons)
- Keen Slider (carousel)

## Project Structure

- `src/components/` - React components
- `src/components/classes/` - Class-related components
- `src/components/staff/` - Staff-related components
- `public/` - Static assets (images, etc.)
