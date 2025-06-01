# Weather Now 🌤️

A modern, beautiful weather application built with Next.js that provides real-time weather information with stunning animations.

![Weather App Screenshot](https://img.shields.io/badge/Next.js-15.3.3-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat-square&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## ✨ Features

- 🔍 **City Search**: Search for any city worldwide (Tokyo, Berlin, Dubai, etc.)
- 🌡️ **Real-time Weather Data**: Current temperature, humidity, wind speed, and pressure
- 📍 **Location Information**: Display city name and coordinates
- 🎨 **Beautiful Animations**: Animated weather icons for different conditions
- 📱 **Responsive Design**: Optimized for both desktop and mobile devices
- 🌈 **Modern UI**: Gradient backgrounds and smooth transitions
- 🆓 **No API Keys Required**: Uses free, open APIs

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/hdh3296/wheather.git
cd wheather
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15.3.3](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: Custom CSS animations with SVG
- **APIs**:
  - [OpenStreetMap Nominatim](https://nominatim.openstreetmap.org/) - Geocoding
  - [Open-Meteo](https://open-meteo.com/) - Weather data

## 📋 API Endpoints

The app includes two API routes:

- `/api/geocode?q={city}` - Converts city names to coordinates
- `/api/weather?lat={lat}&lon={lon}` - Fetches weather data for coordinates

## 🎨 Weather Conditions

The app displays animated icons for:
- ☀️ Clear day/night
- ☁️ Cloudy
- 🌧️ Rainy
- ❄️ Snowy
- 🌫️ Foggy

## 📱 Screenshots

The app features:
- Clean, centered search interface
- Smooth loading animations with status updates
- Beautiful weather display cards
- Responsive design that works on all devices

## 🏗️ Project Structure

```
weather-app/
├── app/
│   ├── api/
│   │   ├── geocode/
│   │   └── weather/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── SearchBar.tsx
│   ├── LoadingAnimation.tsx
│   ├── WeatherDisplay.tsx
│   └── WeatherIcon.tsx
├── lib/
│   └── weatherUtils.ts
└── public/
```

## 🚀 Deployment

### Deploy on Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/hdh3296/wheather)

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**hdh3296**

- GitHub: [@hdh3296](https://github.com/hdh3296)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## ⭐ Show your support

Give a ⭐️ if you like this project!

---

Built with ❤️ using Next.js and TypeScript
