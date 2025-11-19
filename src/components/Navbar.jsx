import { Menu, ShoppingCart, Bike, Phone, Search } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20">
      <nav className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-red-600 to-rose-700 flex items-center justify-center shadow-lg shadow-red-900/30">
            <Bike className="h-6 w-6 text-white" />
          </div>
          <span className="text-white text-xl font-semibold tracking-tight">Redline Moto</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#models" className="text-slate-200 hover:text-white transition">Models</a>
          <a href="#shop" className="text-slate-200 hover:text-white transition">Shop</a>
          <a href="#why" className="text-slate-200 hover:text-white transition">Why Us</a>
          <a href="#contact" className="text-slate-200 hover:text-white transition">Contact</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <div className="relative">
            <input
              className="bg-slate-800/60 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm text-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-600/60"
              placeholder="Search models"
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          </div>
          <a href="#cart" className="inline-flex items-center gap-2 bg-gradient-to-br from-red-600 to-rose-700 text-white px-4 py-2 rounded-xl shadow-lg shadow-red-900/30 hover:shadow-red-900/50 transition">
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden lg:inline">Cart</span>
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/10 hover:bg-white/15 text-white">
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden mx-4 rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur p-4 space-y-3">
          <a href="#models" className="block text-slate-200">Models</a>
          <a href="#shop" className="block text-slate-200">Shop</a>
          <a href="#why" className="block text-slate-200">Why Us</a>
          <a href="#contact" className="block text-slate-200">Contact</a>
          <a href="tel:+1800123456" className="mt-2 inline-flex items-center gap-2 text-white bg-gradient-to-br from-red-600 to-rose-700 px-4 py-2 rounded-xl">
            <Phone className="h-4 w-4" />
            Sales
          </a>
        </div>
      )}
    </header>
  );
}
