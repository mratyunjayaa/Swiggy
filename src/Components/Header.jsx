import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-[#ff5200] font-swiggy w-full overflow-hidden">
      {/* Top Navbar Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center container mx-auto px-4 py-4 md:py-8 gap-4">
        <img
          className="w-32 h-10 md:w-40 md:h-12 self-start sm:self-auto"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
          alt="Swiggy Logo"
        />

        {/* Navigation Actions */}
        <div className="text-white text-xs md:text-sm lg:text-base font-bold flex flex-wrap sm:flex-nowrap gap-3 md:gap-6 lg:gap-15 items-center justify-start sm:justify-end w-full sm:w-auto">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.swiggy.com/corporate/"
            className="hover:opacity-90 transition-opacity"
          >
            Swiggy Corporate
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.swiggy.com/login"
            className="hover:opacity-90 transition-opacity"
          >
            Partner With Us
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            className="border border-white py-2 px-3 md:py-3 md:px-4 rounded-xl md:rounded-2xl hover:bg-white hover:text-[#ff5200] transition-all"
            href="https://www.swiggy.com/corporate/"
          >
            Get the App
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            className="border border-black bg-black rounded-xl md:rounded-2xl py-2 px-3 md:py-3 md:px-4 hover:bg-neutral-900 transition-all text-center"
            href="https://www.swiggy.com/login"
          >
            Sign In
          </a>
        </div>
      </div>

      {/* Hero Body Content Section */}
      <div className="pt-8 pb-12 md:pt-16 md:py-9 relative px-4">
        {/* Decorative Background Artwork - Hidden on Mobile viewports */}
        <img
          className="hidden lg:block h-80 xl:h-110 w-44 xl:w-60 absolute top-0 left-0 object-contain pointer-events-none select-none"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
          alt=""
        />

        <img
          className="hidden lg:block h-80 xl:h-110 w-44 xl:w-60 absolute top-0 right-0 object-contain pointer-events-none select-none"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
          alt=""
        />

        {/* Hero Headline Statement */}
        <div className="w-full lg:max-w-[60%] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-black container mx-auto text-center leading-tight tracking-tight">
          Order Food & groceries. Discover best restaurants. Swiggy it!
        </div>

        {/* Dual Input Omnibox Rows */}
        <div className="w-full sm:max-w-[80%] md:max-w-[70%] container mx-auto flex flex-col md:flex-row gap-3 md:gap-5 mt-6 md:mt-8">
          <input
            className="bg-white w-full md:w-[40%] text-sm sm:text-base md:text-xl px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl shadow-sm outline-none font-medium text-gray-800 placeholder-gray-400"
            type="text"
            placeholder="Delhi, India"
          />

          <input
            className="bg-white w-full md:flex-1 text-sm sm:text-base md:text-xl px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl shadow-sm outline-none font-medium text-gray-800 placeholder-gray-400"
            type="text"
            placeholder="Search for restaurants and items"
          />
        </div>

        {/* Core Channel Promo Service Banners */}
        <div className="w-full max-w-[95%] sm:max-w-[85%] md:max-w-[80%] container mx-auto grid grid-cols-3 gap-2 sm:gap-4 mt-8 md:mt-12">
          <Link to="/restaurent" className="hover:scale-102 transition-transform block">
            <img
              className="w-full h-auto object-contain rounded-xl sm:rounded-2xl shadow-sm"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/faa6d07d-e43c-4aa1-90d8-eda6c14e467d_Food2BU.png"
              alt="Food Delivery"
            />
          </Link>

          <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1" className="hover:scale-102 transition-transform block">
            <img
              className="w-full h-auto object-contain rounded-xl sm:rounded-2xl shadow-sm"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/7a7904a7-e0a9-4466-8226-715999664e83_IM2BU.png"
              alt="Instamart Grocery"
            />
          </a>

          <a href="https://www.swiggy.com/dineout" className="hover:scale-102 transition-transform block">
            <img
              className="w-full h-auto object-contain rounded-xl sm:rounded-2xl shadow-sm"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/8fa21ee7-affd-43a4-b14d-978c9b372159_DO2BU.png"
              alt="Dineout Table Booking"
            />
          </a>
        </div>
      </div>
    </header>
  );
}