# Carbon Day Microsite

A microsite built with IBM Carbon Design System, React, and Vite.

## Project Setup

This project has been initialized with the following structure:

### Technology Stack
- **React 18.3.1** - UI framework
- **Vite 5.4.1** - Build tool and dev server
- **React Router DOM 6.26.0** - Client-side routing
- **Carbon React 1.65.0** - IBM Carbon Design System components
- **Carbon Icons React 11.47.0** - Carbon icon library
- **Sass 1.77.8** - CSS preprocessor for Carbon styles

### Theme Configuration
- **Theme**: Gray 90 (dark theme)
- **Background**: `$background` token (#262626 in Gray 90 theme)
- **Typography**: IBM Plex Serif for the main title

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### 3. Build for Production

```bash
npm run build
```

### 4. Preview Production Build

```bash
npm run preview
```

## Project Structure

```
carbon-day-microsite/
├── src/
│   ├── pages/
│   │   ├── Home.jsx          # Home page component
│   │   └── Home.scss         # Home page styles
│   ├── App.jsx               # Main app component with routing
│   ├── main.jsx              # Application entry point
│   └── index.scss            # Global styles with Carbon theme
├── index.html                # HTML template
├── vite.config.js            # Vite configuration
└── package.json              # Project dependencies
```

## Key Features Implemented

### ✅ Core Structure
- Vite + React project setup
- React Router DOM for routing
- Carbon Design System integration

### ✅ Styling
- SCSS configuration with Carbon
- Gray 90 theme applied globally
- IBM Plex Serif typography for main heading

### ✅ Home Page
- "Carbon Day" title in IBM Plex Serif
- Centered layout
- Gray 90 background (#262626)
- Uses Carbon theme tokens for colors

## Carbon Design System Integration

### Theme Configuration
The Gray 90 theme is configured in `src/index.scss`:

```scss
@use '@carbon/react/scss/themes';
@use '@carbon/react/scss/theme' with (
  $theme: themes.$g90
);
@use '@carbon/react';
```

### Typography
The home page uses IBM Plex Serif with Carbon's type tokens:

```scss
font-family: 'IBM Plex Serif', 'Georgia', 'Times New Roman', serif;
@include type-style('heading-07');
```

## Next Steps

The core structure is ready for you to:
1. Add Tabs component for the 4 content areas
2. Add agenda content
3. Add resource materials
4. Add icons and additional styling
5. Implement the full design from your Figma file

## Carbon Resources

- [Carbon Design System](https://carbondesignsystem.com/)
- [Carbon React Components](https://react.carbondesignsystem.com/)
- [Carbon Icons](https://carbondesignsystem.com/guidelines/icons/library/)
- [Gray 90 Theme Documentation](https://carbondesignsystem.com/elements/themes/overview/)