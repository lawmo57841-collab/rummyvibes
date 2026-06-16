# RummyVibes Website

This is the landing page for RummyVibes - a keyboard sound customization app.

## Features

- Modern, responsive design
- Mobile-friendly layout
- Smooth animations and transitions
- Direct download links to GitHub releases
- Open-source friendly

## Files

- `index.html` - Main landing page
- `styles.css` - Styling and responsive design
- `script.js` - Interactive features and animations

## Local Development

Simply open `index.html` in a web browser, or serve it with a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js with http-server
npx http-server
```

Then navigate to `http://localhost:8000` (or the port shown).

## Hosting Options

### GitHub Pages
1. Push this folder to your GitHub repository
2. Go to repository Settings → Pages
3. Set source to `main` branch and `/website` folder
4. Custom domain can be added in Settings → Pages

### Vercel
1. Connect your GitHub repository to Vercel
2. Set build settings:
   - Framework: None
   - Root Directory: `website`
3. Deploy!

### Netlify
1. Drag and drop the `website` folder to Netlify
2. Or connect your GitHub repository
3. Build command: (leave empty)
4. Publish directory: `website`

### Traditional Hosting
Upload the contents of the `website` folder to any web hosting service via FTP or file manager.

## Customization

Edit the following files to customize:

- `index.html` - Content, structure, links
- `styles.css` - Colors, fonts, layout
- `script.js` - Interactivity and animations

The website uses CSS custom properties (variables) for easy theming. Edit the `:root` section in `styles.css`:

```css
:root {
    --primary: #667eea;
    --secondary: #764ba2;
    --surface: #1e293b;
    /* ... more colors */
}
```

## License

Part of the RummyVibes project - see main repository for license details.
