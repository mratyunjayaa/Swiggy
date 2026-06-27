import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 text-gray-800 font-sans mt-20 border-t border-gray-200">
      
      {/* Top Links Section */}
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
        
        {/* Brand Meta Column */}
        <div className="col-span-2 sm:col-span-3 md:col-span-1 space-y-2">
          <div className="flex items-center space-x-2">
            <Link to="/" className="block flex-shrink-0">
              <img
                className="w-24 h-auto object-contain"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
                alt="Swiggy Logo"
                style={{ filter: "invert(40%) sepia(90%) saturate(2000%) hue-rotate(5deg)" }}
              />
            </Link>
          </div>
          <div className="pt-2 text-gray-500 font-medium text-xs">
            <p className="text-orange-600 font-bold">🧑‍💻 Developed by Vishal TomaR</p>
            <p className="mt-0.5">© 2026 TomA+ Limited</p>
          </div>
        </div>

        {/* Company Column */}
        <div>
          <h4 className="font-extrabold text-gray-900 mb-4">Company</h4>
          <ul className="space-y-3 font-medium text-gray-600">
            <li><a href="#" className="hover:text-gray-900 transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-gray-900 transition-colors">Swiggy Corporate</a></li>
            <li><a href="#" className="hover:text-gray-900 transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-gray-900 transition-colors">Team</a></li>
            <li><a href="#" className="hover:text-gray-900 transition-colors">Swiggy One</a></li>
            <li><a href="#" className="hover:text-gray-900 transition-colors">Swiggy Instamart</a></li>
          </ul>
        </div>

        {/* Contact & Legal Column */}
        <div>
          <h4 className="font-extrabold text-gray-900 mb-4">Contact us</h4>
          <ul className="space-y-3 font-medium text-gray-600 mb-6">
            <li><a href="#" className="hover:text-gray-900 transition-colors">Help & Support</a></li>
            <li><a href="#" className="hover:text-gray-900 transition-colors">Partner With Us</a></li>
            <li><a href="#" className="hover:text-gray-900 transition-colors">Ride With Us</a></li>
          </ul>

          <h4 className="font-extrabold text-gray-900 mb-4">Legal</h4>
          <ul className="space-y-3 font-medium text-gray-600">
            <li><a href="#" className="hover:text-gray-900 transition-colors">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-gray-900 transition-colors">Cookie Policy</a></li>
            <li><a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Available In Column */}
        <div>
          <h4 className="font-extrabold text-gray-900 mb-4">Available in:</h4>
          <ul className="space-y-3 font-medium text-gray-600">
            <li><a href="#" className="hover:text-gray-900 transition-colors">Bangalore</a></li>
            <li><a href="#" className="hover:text-gray-900 transition-colors">Gurgaon</a></li>
            <li><a href="#" className="hover:text-gray-900 transition-colors">Hyderabad</a></li>
            <li><a href="#" className="hover:text-gray-900 transition-colors">Delhi</a></li>
            <li><a href="#" className="hover:text-gray-900 transition-colors">Mumbai</a></li>
            <li><a href="#" className="hover:text-gray-900 transition-colors">Pune</a></li>
            <li className="pt-2">
              <select className="border border-gray-300 text-xs font-bold rounded-lg px-3 py-1.5 bg-white text-gray-700 outline-none cursor-pointer">
                <option>685 cities</option>
              </select>
            </li>
          </ul>
        </div>

        {/* Life at Swiggy & Social Links Column */}
        <div>
          <h4 className="font-extrabold text-gray-900 mb-4">Life at Swiggy</h4>
          <ul className="space-y-3 font-medium text-gray-600 mb-6">
            <li><a href="#" className="hover:text-gray-900 transition-colors">Explore With Swiggy</a></li>
            <li><a href="#" className="hover:text-gray-900 transition-colors">Swiggy News</a></li>
            <li><a href="#" className="hover:text-gray-900 transition-colors">Snackables</a></li>
          </ul>

          <h4 className="font-extrabold text-gray-900 mb-3">Social Links</h4>
          <div className="flex items-center gap-3 text-gray-700">
            <a href="#" className="hover:text-gray-900 transition-colors text-lg">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors text-lg">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors text-lg">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors text-lg">
              <i className="fa-brands fa-pinterest"></i>
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors text-lg">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </div>
        </div>

      </div>

      {/* Thin Divider Line */}
      <div className="max-w-6xl mx-auto border-t border-gray-300/70 my-2"></div>

      {/* Bottom App Banner Section */}
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <h2 className="text-lg md:text-xl font-extrabold text-gray-800 tracking-tight text-center md:text-left">
          For better experience, download the Swiggy app now
        </h2>
        <div className="flex justify-center items-center gap-4">
          <a href="https://apps.apple.com/in/app/swiggy-food-instamart-dineout/id989540920" className="h-10 md:h-12 transform active:scale-95 transition-transform block">
            <img 
              className="h-full w-auto object-contain rounded-lg shadow-xs" 
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png" 
              alt="Download on the App Store" 
            />
          </a>
          <a href="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader" className="h-10 md:h-12 transform active:scale-95 transition-transform block">
            <img 
              className="h-full w-auto object-contain rounded-lg shadow-xs" 
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png" 
              alt="Get it on Google Play Store" 
            />
          </a>
        </div>
      </div>

    </footer>
  );
}