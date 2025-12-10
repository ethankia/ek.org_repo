# Project Outline - Ethan (tragi.c) Developer Portfolio

## File Structure
```
/mnt/okcomputer/output/
├── index.html          # Homepage with code snippet and navigation
├── pricing.html        # Service pricing tiers
├── contact.html        # Contact form with Discord integration
├── projects.html       # Snake game and portfolio
├── main.js            # Core JavaScript functionality
├── resources/         # Local assets folder
│   ├── hero-bg.jpg    # Dark developer workspace background
│   ├── code-1.jpg     # Code editor screenshot
│   ├── code-2.jpg     # Terminal screenshot
│   └── code-3.jpg     # IDE screenshot
├── interaction.md     # Interaction design documentation
├── design.md         # Design style guide
└── outline.md        # This project outline
```

## Page Breakdown

### index.html - Homepage
- **Navigation Bar**: Fixed top with logo and menu
- **Hero Section**: 
  - Animated background with shader effects
  - MacBook-style code snippet display
  - Rotating code examples with syntax highlighting
  - Typewriter animation effects
- **Mouse UV Effect**: Canvas-based particle trail
- **Call-to-Action**: Links to pricing and contact pages
- **Footer**: Copyright and social links

### pricing.html - Service Tiers
- **Navigation**: Consistent with homepage
- **Pricing Cards**: 
  - Website development tiers (Basic, Medium, Informational, Project, Company)
  - Mobile app development tiers (Simple game, Chat apps, Video player, Informational)
  - Clear pricing with time estimates
- **Contact CTA**: "Looking for something else? Contact tragi.c on Discord"
- **Footer**: Consistent design

### contact.html - Contact Form
- **Navigation**: Consistent with other pages
- **Contact Form**:
  - Name input field
  - Discord username input
  - Payment method dropdown (CashApp, PayPal, Apple Pay)
  - Project type dropdown (Website, Mobile App)
  - Understanding confirmation dropdown
  - Discord webhook integration
- **Disclaimer**: "ALL LOGOS & BRAND NAMES MUST BE MADE BY CONSUMER"
- **Alternative Contact**: Discord server link for assistance
- **Footer**: Consistent design

### projects.html - Portfolio & Game
- **Navigation**: Consistent with other pages
- **Snake Game**:
  - Canvas-based game using arrow keys or WASD
  - Infinite gameplay with score tracking
  - Retro styling with modern effects
- **Coming Soon Section**: "More coming soon" text with animation
- **Footer**: Consistent design

## JavaScript Functionality (main.js)

### Core Features
- **UV Mouse Trail**: p5.js particle system
- **Code Animation**: Typed.js integration with syntax highlighting
- **Form Handling**: Discord webhook submission
- **Snake Game**: Complete game logic and controls
- **Navigation**: Smooth page transitions
- **Responsive**: Mobile menu functionality

### Animation Systems
- **Page Load**: Staggered element animations
- **Scroll Effects**: Parallax and reveal animations
- **Hover States**: 3D transforms and glow effects
- **Code Typing**: Realistic programming animations

## Technical Implementation

### Libraries Used
- Anime.js for smooth animations
- p5.js for particle effects and game
- Shader-park for background effects
- ECharts.js for data visualization
- Pixi.js for advanced graphics
- Splitting.js for text animations
- Typed.js for typewriter effects

### Responsive Design
- Mobile-first approach
- Breakpoints: 640px, 768px, 1024px, 1280px
- Flexible grid system
- Touch-friendly interactions

### Performance Optimization
- Lazy loading for images
- Efficient particle systems
- Optimized animations
- Minimal DOM manipulation