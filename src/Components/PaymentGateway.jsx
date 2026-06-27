import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function PaymentGateway() {
  const items = useSelector((state) => state.cart?.items) || [];
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("");
  const [showQR, setShowQR] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  const totalBill = items.reduce((sum, value) => {
    const itemPrice = value.price || value.defaultPrice || 0;
    return sum + (itemPrice / 100) * value.quantity;
  }, 0);

  useEffect(() => {
    if (!showQR) return;
    if (timeLeft === 0) {
      navigate("/order-success");
      return;
    }
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [showQR, timeLeft, navigate]);

  const handlePaymentSubmit = () => {
    if (!paymentMethod) return alert("Please choose a payment option!");
    if (paymentMethod === "qr") setShowQR(true);
    else if (paymentMethod === "cod") navigate("/order-success");
  };

  const upiUrl = `upi://pay?pa=swiggy@paytm&pn=SwiggyOrder&am=${totalBill}&cu=INR`;
  const qrCodeImageSrc = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(upiUrl)}`;

  return (
    <div className="max-w-md mx-auto px-4 py-6 md:py-12 font-sans">
      {!showQR ? (
        <div className="space-y-5 md:space-y-6 bg-white p-5 md:p-6 rounded-xl md:rounded-2xl border border-gray-100 shadow-md">
          <div>
            <button onClick={() => navigate("/checkout")} className="text-[10px] md:text-xs font-bold text-gray-400 hover:text-gray-600 transition uppercase tracking-wider mb-2 block">
              ← Back to Summary
            </button>
            <h2 className="text-xl md:text-2xl font-black text-gray-900">Payment Options</h2>
            <p className="text-[10px] md:text-xs font-bold text-gray-400 mt-0.5 uppercase tracking-wide">
              Total Payable: <span className="text-gray-800">₹{totalBill}</span>
            </p>
          </div>

          <div className="space-y-3">
            <label className={`flex items-center justify-between border p-3 md:p-4 rounded-xl cursor-pointer transition-all ${paymentMethod === "qr" ? "border-[#ff5200] bg-orange-50/40" : "border-gray-100 hover:bg-gray-50"}`}>
              <div className="flex items-center space-x-3">
                <div className="text-lg md:text-xl">📷</div>
                <div>
                  <p className="font-bold text-gray-800 text-xs md:text-sm">Scan QR Code</p>
                  <p className="text-[10px] md:text-[11px] text-gray-400 font-medium">Instant digital verification</p>
                </div>
              </div>
              <input type="radio" name="payment" value="qr" checked={paymentMethod === "qr"} onChange={() => setPaymentMethod("qr")} className="w-4 h-4 accent-[#ff5200]" />
            </label>

            <label className={`flex items-center justify-between border p-3 md:p-4 rounded-xl cursor-pointer transition-all ${paymentMethod === "cod" ? "border-[#ff5200] bg-orange-50/40" : "border-gray-100 hover:bg-gray-50"}`}>
              <div className="flex items-center space-x-3">
                <div className="text-lg md:text-xl">💵</div>
                <div>
                  <p className="font-bold text-gray-800 text-xs md:text-sm">Cash on Delivery (COD)</p>
                  <p className="text-[10px] md:text-[11px] text-gray-400 font-medium">Pay at delivery runtime</p>
                </div>
              </div>
              <input type="radio" name="payment" value="cod" checked={paymentMethod === "cod"} onChange={() => setPaymentMethod("cod")} className="w-4 h-4 accent-[#ff5200]" />
            </label>
          </div>

          <button onClick={handlePaymentSubmit} className="w-full bg-gray-950 text-white text-center font-extrabold py-3 md:py-3.5 rounded-xl md:rounded-2xl shadow-md hover:bg-gray-850 transition uppercase tracking-wide text-xs md:text-sm cursor-pointer mt-2">
            {paymentMethod === "qr" ? "Generate Payment QR" : "Confirm Order"}
          </button>
        </div>
      ) : (
        <div className="space-y-5 md:space-y-6 bg-white p-5 md:p-6 rounded-xl md:rounded-2xl border border-gray-100 shadow-md text-center">
          <div>
            <button onClick={() => { setShowQR(false); setTimeLeft(30); }} className="text-[10px] md:text-xs font-bold text-gray-400 hover:text-gray-600 transition uppercase tracking-wider mb-2 block mx-auto">
              ← Cancel & Go Back
            </button>
            <h2 className="text-xl md:text-2xl font-black text-gray-900">Scan QR to Pay</h2>
            <p className="text-xs md:text-sm font-bold text-gray-500 mt-1">Amount: <span className="text-[#ff5200]">₹{totalBill}</span></p>
          </div>

          <div className="bg-gray-50 p-4 md:p-6 rounded-xl inline-block border border-gray-100 shadow-inner mx-auto">
            <img src={qrCodeImageSrc} alt="UPI QR" className="w-44 h-44 md:w-56 md:h-56 mx-auto object-contain bg-white p-2 rounded-lg border border-gray-100" />
          </div>

          <div className="space-y-1">
            <p className="text-xs md:text-sm font-extrabold text-gray-800">Waiting for confirmation...</p>
            <p className="text-[11px] md:text-xs font-bold text-[#ff5200] animate-pulse bg-orange-50 px-3 py-1.5 rounded-full inline-block">
              ⏱️ Processing in {timeLeft} seconds
            </p>
          </div>
        </div>
      )}
    </div>
  );
}