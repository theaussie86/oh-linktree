import Image from "next/image";
import { HeaderConfig } from "@/lib/types";
import logo from "@/public/Logo-Onlineheldinnen.png";

interface HeaderProps {
  config: HeaderConfig;
}

export function Header({ config }: HeaderProps) {
  return (
    <header className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Dark gradient background with city silhouette */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* City silhouette overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
          {/* Simple city silhouette using CSS */}
          <div className="absolute bottom-0 w-full h-24 hero-city">
            <div className="flex items-end justify-between h-full px-4">
              {/* Building shapes */}
              <div className="w-8 h-16 bg-slate-800 rounded-t"></div>
              <div className="w-6 h-20 bg-slate-800 rounded-t"></div>
              <div className="w-10 h-12 bg-slate-800 rounded-t"></div>
              <div className="w-7 h-18 bg-slate-800 rounded-t"></div>
              <div className="w-9 h-14 bg-slate-800 rounded-t"></div>
              <div className="w-5 h-22 bg-slate-800 rounded-t"></div>
              <div className="w-8 h-16 bg-slate-800 rounded-t"></div>
              <div className="w-6 h-20 bg-slate-800 rounded-t"></div>
              <div className="w-11 h-10 bg-slate-800 rounded-t"></div>
              <div className="w-7 h-18 bg-slate-800 rounded-t"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Profile Picture */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full border-4 border-white shadow-2xl overflow-hidden hero-float bg-gray-100">
            <Image
              src={logo}
              alt="Logo Online Heldinnen"
              width={128}
              height={128}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-brand-gold font-heading mb-4 drop-shadow-lg">
          {config.heading}
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white font-body mb-12 max-w-2xl mx-auto leading-relaxed">
          {config.subheading}
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-8">
          <a
            href="https://onlineheldinnen.de"
            className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
            aria-label="Website"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/leise.digitalfrei"
            className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
            aria-label="Instagram"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.069 1.689-.069 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a
            href="https://de.pinterest.com/OnlineGeldheldinnen/"
            className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
            aria-label="Pinterest"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="-271 273 256 256"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M-143,273c-70.7,0-128,57.3-128,128c0,52.4,31.5,97.4,76.6,117.2c-0.4-8.9-0.1-19.7,2.2-29.4c2.5-10.4,16.5-69.7,16.5-69.7 s-4.1-8.2-4.1-20.2c0-19,11-33.1,24.7-33.1c11.6,0,17.3,8.7,17.3,19.2c0,11.7-7.5,29.2-11.3,45.4c-3.2,13.6,6.8,24.6,20.2,24.6 c24.3,0,40.6-31.1,40.6-68c0-28-18.9-49-53.3-49c-38.8,0-63,28.9-63,61.3c0,11.2,3.3,19,8.4,25.1c2.4,2.8,2.7,3.9,1.8,7.1 c-0.6,2.3-2,8-2.6,10.3c-0.9,3.2-3.5,4.4-6.4,3.2c-17.9-7.3-26.2-26.9-26.2-48.9c0-36.4,30.7-80,91.5-80c48.9,0,81,35.4,81,73.3 c0,50.2-27.9,87.7-69.1,87.7c-13.8,0-26.8-7.5-31.3-15.9c0,0-7.4,29.5-9,35.2c-2.7,9.9-8,19.7-12.9,27.4c11.5,3.4,23.7,5.3,36.3,5.3 c70.7,0,128-57.3,128-128C-15,330.3-72.3,273-143,273z" />
            </svg>
          </a>
          <a
            href="https://onlineheldinnen.de/pinterst-starter-freebie/"
            className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
            aria-label="Newsletter"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Subtle animation elements */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-orange-500 rounded-full hero-glow"></div>
      <div
        className="absolute top-20 right-20 w-1 h-1 bg-white rounded-full hero-glow"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-orange-500 rounded-full hero-glow"
        style={{ animationDelay: "0.5s" }}
      ></div>
    </header>
  );
}
