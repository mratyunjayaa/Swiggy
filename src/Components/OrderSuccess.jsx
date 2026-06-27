import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function OrderSuccess() {
  const navigate = useNavigate();
  const [reward, setReward] = useState(null);

  useEffect(() => {
    const rewardOptions = [
      {
        type: "cashback",
        title: "🎉 Flat ₹50 Cashback Received!",
        description: "Successfully credited directly into your Swiggy Money Wallet instantly.",
        badgeBg: "bg-green-100 text-green-700"
      },
      {
        type: "coupon",
        title: "🎁 Next-Order Promo Unlocked!",
        description: "Use coupon SWIGGYNEW20 to get 20% off up to ₹100 on your next feast order.",
        badgeBg: "bg-amber-100 text-amber-700"
      }
    ];

    // Pick a random reward on component mount
    const randomChoice = rewardOptions[Math.floor(Math.random() * rewardOptions.length)];
    setReward(randomChoice);
  }, []);

  return (
    <div className="max-w-md mx-auto px-4 py-16 text-center font-sans">
      <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto shadow-md mb-6">
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h2 className="text-3xl font-black text-gray-900 tracking-tight">Order Confirmed!</h2>
      <p className="text-gray-500 font-semibold mt-2 text-sm">
        Thank you for your order! Your delicious food is being carefully packed.
      </p>

      {reward && (
        <div className="mt-8 border border-dashed border-gray-200 bg-white p-5 rounded-2xl shadow-sm relative">
          <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 text-[10px] font-black uppercase tracking-wider px-3 py-0.5 rounded-full ${reward.badgeBg}`}>
            Your Reward
          </div>
          <p className="font-extrabold text-gray-800 text-base mt-1">{reward.title}</p>
          <p className="text-xs font-semibold text-gray-400 mt-1 leading-relaxed">
            {reward.description}
          </p>
        </div>
      )}

      <button 
        onClick={() => navigate("/")}
        className="mt-8 w-full bg-gray-900 text-white font-extrabold py-3.5 rounded-2xl shadow-sm hover:bg-gray-800 transition text-sm tracking-wide uppercase"
      >
        Back to Home Menu
      </button>
    </div>
  );
}