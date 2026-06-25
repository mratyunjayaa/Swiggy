import React from 'react';
import { Search } from 'lucide-react'; // Optional: Use lucide-react or standard icons for the search bar

export default function PizzaHutMenuUI() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans pb-24">
      
      {/* 1. Breadcrumbs & Header Section */}
      <div className="max-w-5xl mx-auto px-4 pt-4">
        <nav className="text-xs text-gray-400 space-x-1">
          <a href="#" className="hover:underline">Home</a>
          <span>/</span>
          <a href="#" className="hover:underline">Surat</a>
          <span>/</span>
          <span className="text-gray-600 font-medium">Pizza Hut</span>
        </nav>
        
        <h1 className="text-3xl font-extrabold tracking-tight mt-6 mb-4">Pizza Hut</h1>
        
        {/* Switch Tabs (Order Online / Dineout) */}
        <div className="flex border-b border-gray-200 text-sm font-bold space-x-6">
          <button className="border-b-4 border-orange-500 pb-2 text-gray-900">
            Order Online
          </button>
          <button className="pb-2 text-gray-500 hover:text-gray-900">
            Dineout
          </button>
        </div>
      </div>

      {/* 2. Primary Restaurant Container Card */}
      <div className="max-w-5xl mx-auto px-4 mt-6">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden p-4 md:p-6">
          
          {/* Warning Banner */}
          <div className="bg-rose-50 border border-rose-100 rounded-xl p-3 flex items-center space-x-2 text-rose-600 text-xs md:text-sm font-semibold mb-4">
            <span className="bg-rose-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-black">
              i
            </span>
            <span>This location is outside the outlet's delivery area</span>
          </div>

          {/* Ratings & Basic Info */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-sm font-bold">
              <span className="bg-green-600 text-white rounded-full text-xs px-1.5 py-0.5 flex items-center gap-0.5">
                ★ 4.4
              </span>
              <span className="text-gray-700">(9.7K+ ratings)</span>
              <span className="text-gray-300">•</span>
              <span className="text-gray-700">₹350 for two</span>
            </div>

            {/* Category tags */}
            <div className="text-xs font-bold text-orange-600 underline">
              <a href="#">Pizzas</a>
            </div>

            {/* Timeline/Location Steps */}
            <div className="relative pl-6 mt-4 pt-1 space-y-4 text-xs font-bold text-gray-700">
              {/* Vertical Connector Line */}
              <div className="absolute left-1.5 top-2.5 bottom-2.5 w-0.5 bg-gray-200"></div>

              {/* Step 1: Outlet */}
              <div className="relative flex items-center">
                <div className="absolute -left-6 w-3.5 h-3.5 rounded-full border border-gray-300 bg-white flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                </div>
                <span>Outlet</span>
                <span className="text-orange-600 ml-1 cursor-pointer flex items-center">
                  Athwa <span className="text-[9px] ml-0.5">▼</span>
                </span>
              </div>

              {/* Step 2: Delivery Status */}
              <div className="relative flex items-center">
                <div className="absolute -left-6 w-3.5 h-3.5 rounded-full border border-gray-300 bg-white flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                </div>
                <span className="text-gray-900">Does not deliver</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 3. Deals Showcase Header */}
      <div className="max-w-5xl mx-auto px-4 mt-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-extrabold tracking-tight">Deals for you</h2>
          <div className="flex space-x-2">
            <button className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-gray-600 transition">
              ←
            </button>
            <button className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-gray-600 transition">
              →
            </button>
          </div>
        </div>

        {/* Deals Container Horizontal Scroll */}
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-2">
          
          {/* Card 1 */}
          <div className="min-w-[260px] md:min-w-[280px] bg-white border border-gray-200 rounded-2xl p-3 flex items-center space-x-3 shadow-sm">
            <div className="bg-red-50 text-red-500 font-extrabold text-[9px] px-2 py-2 rounded-xl text-center leading-tight border border-red-100 uppercase">
              Deal <br /> Of Day
            </div>
            <div>
              <div className="font-extrabold text-sm text-gray-800">Items At ₹99</div>
              <div className="text-[10px] font-bold text-gray-400 mt-0.5">ON SELECT ITEMS |</div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="min-w-[260px] md:min-w-[280px] bg-white border border-gray-200 rounded-2xl p-3 flex items-center space-x-3 shadow-sm">
            <div className="bg-blue-50 text-blue-600 font-black text-xs px-2.5 py-3 rounded-xl border border-blue-100">
              VISA
            </div>
            <div>
              <div className="font-extrabold text-sm text-gray-800">10% Off Upto ₹75</div>
              <div className="text-[10px] font-bold text-gray-400 mt-0.5">USE VISAPLATINUMCC</div>
            </div>
          </div>

          {/* Card 3 (Peek Card) */}
          <div className="min-w-[260px] md:min-w-[280px] bg-white border border-gray-200 rounded-2xl p-3 flex items-center space-x-3 opacity-60">
            <div className="bg-blue-50 text-blue-600 font-black text-xs px-2.5 py-3 rounded-xl border border-blue-100">
              VISA
            </div>
            <div>
              <div className="font-extrabold text-sm text-gray-800">15% Off Upto ₹100</div>
              <div className="text-[10px] font-bold text-gray-400 mt-0.5">USE SIGNATURE</div>
            </div>
          </div>

        </div>
      </div>

      {/* 4. Menu Separation & Search Block */}
      <div className="max-w-md mx-auto px-4 mt-12 text-center">
        <div className="flex items-center justify-center space-x-2 text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">
          <span>~</span>
          <span>MENU</span>
          <span>~</span>
        </div>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search for dishes" 
            className="w-full bg-gray-200/70 border border-transparent rounded-xl py-3 pl-4 pr-10 text-center font-bold text-sm placeholder-gray-500 focus:outline-none focus:bg-white focus:border-gray-300 transition"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <Search size={16} />
          </div>
        </div>
      </div>

      {/* 5. Floating Action Sticky Menu Button */}
      <button className="fixed bottom-6 right-6 md:right-1/2 md:translate-x-1/2 bg-black text-white px-4 py-3 rounded-full flex items-center space-x-2 shadow-xl hover:scale-105 active:scale-95 transition-all z-50 group">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-white" viewBox="0 0 24 24">
          <path d="M2 6h20v2H2zm0 5h20v2H2zm0 5h20v2H2z"/>
        </svg>
        <span className="text-xs font-extrabold uppercase tracking-widest pr-1">Menu</span>
      </button>

    </div>
  );
}