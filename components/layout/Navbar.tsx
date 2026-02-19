"use client";

import { useState, useEffect } from "react";
import { Sparkles, Search, ShoppingBag, Menu, X, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#collections", label: "Collections" },
  { href: "#personnalisation", label: "Sur Mesure" },
  { href: "#histoire", label: "Notre Histoire" },
  { href: "#artisans", label: "Artisans" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? "glass shadow-md" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-600 rounded-full flex items-center justify-center">
              <Sparkles className="text-white w-5 h-5" />
            </div>
            <div>
              <h1 className="font-serif text-2xl font-bold text-gray-900 tracking-wide">AMAZIGH</h1>
              <p className="text-xs text-amber-700 tracking-widest uppercase">Heritage</p>
            </div>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-amber-700 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search className="w-5 h-5" />
            </Button>
            
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-terracotta text-white text-xs rounded-full w-5 h-5 flex items-center justify-center text-[10px]">3</span>
            </Button>

            <Button className="hidden md:flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white border-0" size="sm">
              <Wand2 className="w-4 h-4" />
              <span>Conseiller IA</span>
            </Button>

            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-lg font-medium text-gray-900 hover:text-amber-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button className="w-full mt-4 gap-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white border-0">
                <Wand2 className="w-4 h-4" />
                Conseiller IA
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
