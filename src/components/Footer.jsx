export default function Footer() {
  return (
    <section
      id="footer"
      className="py-10 sm:py-15 px-10 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div>
          <div className="flex items-center space-x-1 group cursor-pointer mb-3 sm:mb-6">
            <div>
              <img
                className="w-6 h-6 sm:w-8 sm:h-8"
                src="../src/assets/logo.png"
                alt="logo"
              />
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-medium">
              <span className="text-blue-500">Splash</span>
              <span className="text-white">Code</span>
            </span>
          </div>
        </div>
        <div className="flex justify-between items-start flex-col sm:flex-row sm:items-center">
          <div>
            <p className="text-xs sm:text-sm text-gray-400">
              Copyright 2026 SplashCode. All rights reserved.
            </p>
          </div>
          <div>
            <div className="flex space-x-2 sm:space-x-3 text-xs sm:text-sm ">
              <a
                className="text-gray-400 hover:text-blue-300 transition-color"
                href="#"
              >
                Privacy Policy
              </a>
              <a
                className="text-gray-400 hover:text-blue-300 transition-color"
                href="#"
              >
                Terms of Service
              </a>
              <a
                className="text-gray-400 hover:text-blue-300 transition-color"
                href="#"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
