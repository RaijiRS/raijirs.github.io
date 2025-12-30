# Portfolio & Booking Site

A modern, responsive portfolio website with integrated booking/scheduling functionality. Perfect for professionals who want to showcase their work and allow clients to book appointments online.

Built by **Raiji Sacaza** - Software Developer building full-stack systems with Java, JavaScript, Python, and cloud infrastructure.

## Features

- **Portfolio Sections**
  - Hero section with call-to-action
  - About section with professional information
  - Projects showcase with unique GitHub links for each project
  - Skills and expertise display
  - Contact form

- **Booking System**
  - Interactive calendar for date selection
  - Time slot selection
  - Service type selection
  - Booking form with validation
  - Booking confirmation

- **Modern UI/UX**
  - Responsive design (mobile, tablet, desktop)
  - Smooth scrolling navigation
  - Beautiful gradient backgrounds
  - Modern animations and transitions
  - Accessible components

## Featured Projects

The portfolio showcases several projects, each with its own GitHub repository:

1. **Eagle-Eye Navigation** - Full-stack mobile app for real-time campus navigation
   - Tech: Node.js, Firebase, Vue, Mobile
   - [View on GitHub](https://github.com/CSCI-400/eagle_eye_api/blob/main/README.md)

2. **Spades Web Game** - Interactive Spades card game with AI opponents
   - Tech: React, JavaScript, Tailwind CSS
   - [View on GitHub](https://github.com/RaijiRS/Spades)

3. **Clover AI** - Lightweight AI chatbot assistant with file upload and contextual chat
   - Tech: React, ChromaDB, Python, FastAPI
   - [View on GitHub](https://github.com/RaijiRS/Clover/blob/main/README.md)

4. **Mobile Banking App** - Secure mobile banking with biometric authentication
   - Tech: React Native, Firebase, Stripe

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **date-fns** - Date manipulation
- **lucide-react** - Icons

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd portfolio-booking-site
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio-booking-site/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx          # Main page
│   └── globals.css       # Global styles
├── components/
│   ├── Navigation.tsx    # Navigation bar
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Projects.tsx      # Projects showcase
│   ├── Skills.tsx        # Skills section
│   ├── Booking.tsx       # Booking system
│   └── Contact.tsx       # Contact form
├── package.json
├── tsconfig.json
└── tailwind.config.js
```

## Customization

### Update Personal Information

1. **About Section** (`components/About.tsx`): Update the bio, experience, and statistics
2. **Projects** (`components/Projects.tsx`): Add your own projects
3. **Skills** (`components/Skills.tsx`): Update skill categories and levels
4. **Contact** (`components/Contact.tsx`): Update contact information

### Customize Services

Edit the `services` array in `components/Booking.tsx` to match your service offerings:

```typescript
const services = [
  'Consultation',
  'Haircut',
  'Styling',
  // Add your services here
]
```

### Styling

The color scheme can be customized in `tailwind.config.js`. The primary color is set to blue, but you can change it to match your brand.

## Next Steps

To make this production-ready, consider:

1. **Backend Integration**: Connect the booking form to a backend API or database
2. **Email Notifications**: Send confirmation emails when bookings are made
3. **Calendar Integration**: Sync with Google Calendar or other calendar services
4. **Payment Integration**: Add payment processing for bookings
5. **Admin Dashboard**: Create an admin panel to manage bookings
6. **Authentication**: Add user authentication for booking management

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## License

MIT License - feel free to use this project for your own portfolio!

