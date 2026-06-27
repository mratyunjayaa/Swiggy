import { Search, Percent, LifeBuoy, User, ShoppingBag } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function RestHeader() {
  const cartItems = useSelector((state) => state.cart?.items) || [];
  const totalQuantity = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);

  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 h-16 md:h-20 flex items-center justify-between font-sans gap-2">
        
        {/* Left Fixed Section */}
        <div className="flex items-center space-x-2 md:space-x-4 flex-shrink-0">
          <Link to="/" className="bg-[#f07841e2] rounded-xl md:rounded-3xl overflow-hidden block flex-shrink-0">
            <img
              className="w-10 h-8 md:w-15 md:h-12 object-contain"
              src="https://compare.buyhatke.com/images/site_icons_m/swiggy.png"
              alt="Swiggy Logo"
            />
          </Link>

          <div className="flex items-center space-x-1 text-[11px] md:text-sm cursor-pointer group max-w-[90px] xs:max-w-[120px] md:max-w-none">
            <span className="font-extrabold text-gray-900 border-b-2 border-gray-900 pb-0.5 whitespace-nowrap">
              Other
            </span>
            <span className="text-gray-500 font-medium group-hover:text-[#fc8019] transition-colors truncate">
              Delhi, India
            </span>
            <span className="text-[#fc8019] text-[8px] md:text-[10px] font-bold flex-shrink-0">
              ▼
            </span>
          </div>
        </div>

        {/* Center Scrollable Links Section */}
        <nav className="flex items-center space-x-3 md:space-x-8 text-gray-700 font-semibold text-[12px] md:text-[15px] overflow-x-auto md:overflow-visible no-scrollbar py-2 flex-1 justify-center md:justify-end px-1">
          
          <a href="#" className="flex items-center space-x-1 md:space-x-2 hover:text-[#fc8019] transition-colors whitespace-nowrap hidden lg:flex">
            <svg className="w-4 h-4 md:w-5 md:h-5 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
            <span>Swiggy Corporate</span>
          </a>

          <a href="#" className="flex items-center space-x-1 md:space-x-2 hover:text-[#fc8019] transition-colors whitespace-nowrap">
            <Search size={16} className="md:w-[19px] md:h-[19px]" strokeWidth={2.5} />
            <span className="hidden xs:inline">Search</span>
          </a>

          <a href="#" className="flex items-center space-x-1 md:space-x-2 hover:text-[#fc8019] transition-colors relative group whitespace-nowrap">
            <Percent size={16} className="md:w-[19px] md:h-[19px]" strokeWidth={2.5} />
            <span>Offers</span>
            <span className="absolute -top-2 -right-3 md:-top-3.5 md:-right-6 text-[6px] md:text-[9px] font-black text-amber-500 bg-white scale-75 md:scale-90 uppercase">
              New
            </span>
          </a>

          <a href="#" className="flex items-center space-x-1 md:space-x-2 hover:text-[#fc8019] transition-colors whitespace-nowrap hidden sm:flex">
            <LifeBuoy size={16} className="md:w-[19px] md:h-[19px]" strokeWidth={2.5} />
            <span>Help</span>
          </a>

          <a href="#" className="flex items-center space-x-1 md:space-x-2 hover:text-[#fc8019] transition-colors whitespace-nowrap">
            <User size={16} className="md:w-[19px] md:h-[19px]" strokeWidth={2.5} />
            <span>Sign In</span>
          </a>

        </nav>

        {/* Right Fixed Section */}
        <div className="flex-shrink-0 pl-1">
          <Link to="/checkout" className="flex items-center space-x-1 md:space-x-2 text-gray-700 font-bold md:font-semibold text-[12px] md:text-[15px] hover:text-[#fc8019] transition-colors whitespace-nowrap bg-gray-50 xs:bg-transparent px-2 py-1 xs:p-0 rounded-lg border border-gray-100 xs:border-none">
            <div className="relative flex items-center justify-center">
              <ShoppingBag size={18} className="md:w-[20px] md:h-[20px] text-[#ebe3e1] xs:text-current" strokeWidth={2.5} />
              <span className="absolute text-[10px] md:text-[15px] font-black  md:top-[2px] text-gray-800 select-none">
                {totalQuantity}
              </span>
            </div>
            <span>Cart</span>
          </Link>
        </div>

      </div>
    </header>
  );
}