import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function CheckOut() {
  const items = useSelector((state) => state.cart?.items) || [];
  const navigate = useNavigate();

  const totalBill = items.reduce((sum, value) => {
    const itemPrice = value.price || value.defaultPrice || 0;
    return sum + (itemPrice / 100) * value.quantity;
  }, 0);

  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center font-sans">
        <h2 className="text-xl md:text-2xl font-black mb-2">Checkout Menu Items</h2>
        <p className="text-gray-500 font-semibold text-sm">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 md:py-10 font-sans">
      <h2 className="text-xl md:text-2xl font-black mb-4 md:mb-6">Review Order Items</h2>
      
      <div className="space-y-3">
        {items.map((value) => (
          <div key={value.id} className="flex justify-between items-center bg-white p-3 md:p-4 rounded-xl border border-gray-100 shadow-sm gap-2">
            <div className="flex items-center space-x-3 md:space-x-4 w-[75%]">
              {value.imageId ? (
                <img 
                  className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-lg flex-shrink-0" 
                  src={"https://media-assets.swiggy.com/swiggy/image/upload/" + value.imageId} 
                  alt={value.name} 
                />
              ) : (
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-50 rounded-lg flex items-center justify-center text-[9px] text-gray-400 flex-shrink-0">
                  No Image
                </div>
              )}
              <div className="truncate">
                <p className="font-bold text-gray-800 text-sm md:text-base truncate">{value.name}</p>
                <p className="text-[11px] md:text-xs font-semibold text-gray-400 mt-0.5">
                  ₹{(value.price || value.defaultPrice) / 100} × {value.quantity}
                </p>
              </div>
            </div>
            
            <div className="text-right flex-shrink-0">
              <p className="font-extrabold text-sm md:text-base text-gray-800">
                ₹{((value.price || value.defaultPrice) / 100) * value.quantity}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 border border-gray-100 rounded-xl md:rounded-2xl p-4 md:p-5 flex justify-between items-center shadow-sm mt-5 md:mt-6">
        <div>
          <p className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-wider">Total Bill</p>
          <p className="text-[10px] md:text-xs font-semibold text-gray-400 mt-0.5">Inclusive of all taxes</p>
        </div>
        <p className="text-2xl md:text-3xl font-black text-gray-900">₹{totalBill}</p>
      </div>

      <button 
        onClick={() => navigate("/payment")}
        className="w-full bg-[#ff5200] text-white text-center font-extrabold py-3 md:py-3.5 rounded-xl md:rounded-2xl shadow-md hover:bg-[#e04600] transition uppercase tracking-wide text-xs md:text-sm cursor-pointer mt-5 md:mt-6"
      >
        Proceed to Pay
      </button>
    </div>
  );
}