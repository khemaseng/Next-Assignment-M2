 
'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-[#0c0c0e] text-zinc-300 pt-16 pb-8 border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-zinc-800/80">
          
          {/* Brand Info & Socials */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-orange-300 to-red-600 flex items-center justify-center text-white shadow-lg">
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                 <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 640"
      className="h-6 w-6"
      fill="currentColor"
    >
     <path d="M127.9 78.4C127.1 70.2 120.2 64 112 64C103.8 64 96.9 70.2 96 78.3L81.9 213.7C80.6 219.7 80 225.8 80 231.9C80 277.8 115.1 315.5 160 319.6L160 544C160 561.7 174.3 576 192 576C209.7 576 224 561.7 224 544L224 319.6C268.9 315.5 304 277.8 304 231.9C304 225.8 303.4 219.7 302.1 213.7L287.9 78.3C287.1 70.2 280.2 64 272 64C263.8 64 256.9 70.2 256.1 78.4L242.5 213.9C241.9 219.6 237.1 224 231.4 224C225.6 224 220.8 219.6 220.2 213.8L207.9 78.6C207.2 70.3 200.3 64 192 64C183.7 64 176.8 70.3 176.1 78.6L163.8 213.8C163.3 219.6 158.4 224 152.6 224C146.8 224 142 219.6 141.5 213.9L127.9 78.4zM512 64C496 64 384 96 384 240L384 352C384 387.3 412.7 416 448 416L480 416L480 544C480 561.7 494.3 576 512 576C529.7 576 544 561.7 544 544L544 96C544 78.3 529.7 64 512 64z"/>
    </svg>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent ">
                 TINH MHOB
                </span>
                <span className="text-[10px] font-bold tracking-widest text-amber-200 uppercase -mt-1">
                  Food Lover
                </span>
              </div>
            </Link>

            <p className="text-sm text-zinc-400 leading-relaxed">
             Our goal is to provide delicious food, fresh ingredients, and a convenient online ordering experience for every customer.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-400 hover:text-amber-400 hover:border-amber-500 transition-colors">
                𝕏
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-400 hover:text-amber-400 hover:border-amber-500 transition-colors">
                f
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-400 hover:text-amber-400 hover:border-amber-500 transition-colors">
                in
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base tracking-wide">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-zinc-400 hover:text-white transition-colors">
                  Home Landing
                </Link>
              </li>
              <li>
                <Link href="/foods" className="text-zinc-400 hover:text-white transition-colors">
                  Full Food Menu
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-zinc-400 hover:text-white transition-colors">
                  Our Story & Team
                </Link>
              </li>
              <li>
                <Link href="/about#reservation" className="text-zinc-400 hover:text-white transition-colors">
                  Table Reservation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours & Location */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base tracking-wide">Hours & Location</h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
                <div>
                  <p className="font-bold text-white">Mon - Sun: 10:00 AM - 11:00 PM</p>
                  <p className="text-xs text-zinc-500">Kitchen closes at 10:30 PM</p>
                </div>
              </li>
              <li className="flex items-center gap-2.5 text-zinc-300">
                <svg className="w-4 h-4 text-amber-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <span>126 Mhob , Phnom Penh</span>
              </li>
              <li className="flex items-center gap-2.5 text-zinc-300">
                <svg className="w-4 h-4 text-amber-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>+855 (800) 555-9999 </span>
              </li>
              <li className="flex items-center gap-2.5 text-zinc-300">
                <svg className="w-4 h-4 text-amber-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <span>orders@mhob.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base tracking-wide">Join Our Culinary Club</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Subscribe to get secret recipes, weekend discount codes, and special chef invites.
            </p>
            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-xs font-semibold">
                ✓ Thank you! You are now subscribed.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors pr-12"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-400 hover:to-orange-500 text-white flex items-center justify-center transition-colors"
                  >
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                      <path d="m22 2-7 20-4-9-9-4Zm0 0L11 13"/>
                    </svg>
                  </button>
                </div>
                <p className="text-[11px] text-zinc-500">We respect your privacy. Unsubscribe anytime.</p>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} MHOB. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}