High-Performance Scroll Animation Hero

A cinematic, interactive hero section built with React, Tailwind CSS, and GSAP. This project demonstrates advanced frontend animation techniques, focusing on fluid scroll-driven interactions, GPU-accelerated motion, and seamless image blending.

(Image used for demonstration)

✨ Features

Initial Choreography: A staggered, premium intro sequence that reveals the headline, performance metrics, and the hero vehicle on page load.

Scroll-Driven Storytelling: Animations are tied strictly to the user's scroll progress (scrubbing) rather than time, ensuring a natural and fluid interaction.

High Performance: Strictly utilizes GPU-accelerated CSS properties (transform: translate, scale, rotate, and opacity) to prevent costly layout reflows and paint operations.

Advanced Blending Tricks: Uses CSS mix-blend-screen combined with mask-image: radial-gradient(...) to seamlessly composite a standard rectangular image into the dark cinematic background without needing a perfectly transparent PNG.

Responsive Layout: Adapts flawlessly from mobile screens to ultrawide desktop monitors using Tailwind's responsive utilities.

🛠 Tech Stack

React.js: UI component architecture.

Tailwind CSS: Utility-first styling and layout management.

GSAP (GreenSock): The industry standard for robust, high-performance JavaScript animations.

Lucide React: Clean, lightweight SVG icons.

🚀 Getting Started

Prerequisites

Make sure you have Node.js and npm (or yarn/pnpm) installed on your machine.

Installation

Clone the repository (or download the source code):

git clone [https://github.com/yourusername/scroll-animation-hero.git](https://github.com/yourusername/scroll-animation-hero.git)
cd scroll-animation-hero


Install dependencies:

npm install


Start the development server:

npm run dev


View in browser: Open http://localhost:5173/ (or the port provided by Vite) to see the animation in action.

🎨 Customization

Changing the Car Image

To use your own vehicle or product image:

Find a high-quality image, preferably with a black or very dark background (this works best with the mix-blend-screen effect).

Place your image in the src/assets/ directory.

Open src/App.jsx and update the <img src="..." /> tag inside the carContainerRef div to point to your new image.

Modifying the Animation

The animation timelines are neatly organized inside the useEffect hook in App.jsx:

tlLoad: Controls the initial entry animation on page load.

tlScroll: Controls the scroll-linked animations. You can adjust the scrub value, scale, or duration parameters to make the animation feel faster, slower, or more dramatic.

💡 Performance Notes

This project dynamically injects GSAP via CDN in the useEffect hook to maximize compatibility and prevent bundler resolution errors in strict sandbox environments. If you are integrating this into a standard production build (like Next.js or a standard Vite app), you can install GSAP via npm (npm install gsap) and import it directly at the top of the file:

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
