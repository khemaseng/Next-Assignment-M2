 
 import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-zinc-100 flex flex-col font-sans">

      {/* STORY & MISSION SECTION */}
      <section className="py-20 border-b border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-4/3 rounded-2xl overflow-hidden border border-slate-200 dark:border-zinc-800 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop"
                  alt="Kitchen cooking"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-4/3 rounded-2xl overflow-hidden border border-slate-200 dark:border-zinc-800 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop"
                  alt="Chef plating food"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <span className="text-xs font-semibold text-orange-600 dark:text-orange-400 uppercase tracking-wider">
                Passionate Culinary Team
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                Driven By Taste, Authenticity, & Fresh Ingredients
              </h2>
              <p className="text-slate-500 dark:text-zinc-400 leading-relaxed text-sm sm:text-base">
                Founded with a single goal: to make world-class gourmet dining accessible at home. Every dish curated at Tinh Mhob undergoes rigorous recipe refinement to maintain flavor profile, presentation, and high nutritional standards.
              </p>
              <p className="text-slate-500 dark:text-zinc-400 leading-relaxed text-sm sm:text-base">
                We partner strictly with local organic farmers to secure fresh herbs, wild seafood, and premium cut meats daily.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-slate-200 dark:border-zinc-800">
                <div>
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-500">100%</div>
                  <div className="text-xs text-slate-500 dark:text-zinc-400 mt-1">Farm-Fresh Organic Products</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-500">50+</div>
                  <div className="text-xs text-slate-500 dark:text-zinc-400 mt-1">Award-Winning Culinary Chefs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 border-b border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950">
        <div className="container mx-auto px-6 max-w-7xl space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold text-orange-600 dark:text-orange-400 uppercase tracking-wider">
              Our Principles
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Why Choose Tinh Mhob
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Authentic Heritage',
                desc: 'Preserving genuine recipes and traditional seasoning techniques passed down across generations.',
              },
              {
                title: 'Uncompromised Quality',
                desc: 'Sourcing certified non-GMO, organic produce and sustainably harvested proteins.',
              },
              {
                title: 'Master Precision',
                desc: 'Meticulous preparation standard guaranteeing consistency in taste and artful presentation.',
              },
            ].map((value, i) => (
              <div key={i} className="p-8 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 space-y-3">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{value.title}</h3>
                <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANAGEMENT TEAM (5 MANAGERS)
      <section className="py-20 border-b border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
        <div className="container mx-auto px-6 max-w-7xl space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold text-orange-600 dark:text-orange-400 uppercase tracking-wider">
              Executive Leadership
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Meet Our Management Team
            </h2>
            <p className="text-slate-500 dark:text-zinc-400 text-sm">
              The visionary minds behind our restaurant operations, culinary development, and service excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                name: '',
                role: 'Chief Executive Officer',
                img: '',
              },
              {
                name: '',
                role: 'Executive Chef Manager',
                img: '',
              },
              {
                name: '',
                role: 'Head of Culinary Operations',
                img: '',
              },
              {
                name: '',
                role: 'Quality Assurance Director',
                img: '',
              },
              {
                name: '',
                role: 'General Restaurant Manager',
                img: 'h',
              },
            ].map((manager, index) => (
              <div
                key={index}
                className="group rounded-2xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 overflow-hidden shadow-xs hover:shadow-md transition text-center p-4 space-y-3"
              >
                <div className="aspect-square rounded-xl overflow-hidden border border-slate-200 dark:border-zinc-800">
                  <img
                    src={manager.img}
                    alt={manager.name || 'Manager'}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white leading-tight">
                    {manager.name}
                  </h3>
                  <p className="text-xs font-medium text-orange-600 dark:text-orange-400 mt-1">
                    {manager.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 border-b border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950">
        <div className="container mx-auto px-6 max-w-4xl space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold text-orange-600 dark:text-orange-400 uppercase tracking-wider">
              Help Center
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 dark:text-zinc-400 text-sm">
              Everything you need to know about our sourcing, reservations, and delivery.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Where do you source your ingredients?',
                a: 'We partner directly with certified organic local farmers and sustainable fisheries to ensure 100% fresh, non-GMO produce delivered daily.',
              },
              {
                q: 'How does your food delivery service work?',
                a: 'Our meals are prepared fresh upon order and sealed in temperature-controlled eco-packaging to ensure maximum temperature and taste retention upon arrival.',
              },
              {
                q: 'Do you cater to specific dietary restrictions?',
                a: 'Yes, our digital menu features clear dietary tags for Gluten-Free, Vegan, Dairy-Free, and Keto options prepared in segregated culinary areas.',
              },
              {
                q: 'Can I make table reservations in advance?',
                a: 'Reservations can be made directly online up to 30 days in advance via our digital menu system or by contacting our management directly.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 space-y-2"
              >
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {faq.q}
                </h3>
                <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTION BANNER */}
      <section className="py-20 bg-white dark:bg-zinc-900">
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Experience Culinary Excellence
          </h2>
          <p className="text-slate-500 dark:text-zinc-400 max-w-lg mx-auto text-sm sm:text-base">
            Explore our curated digital food menu and discover your next favorite meal today.
          </p>
          <div>
            <Link
              href="/foods"
              className="inline-block px-8 py-3.5 rounded-xl font-semibold bg-orange-500 hover:bg-orange-600 text-white transition shadow-sm"
            >
              Browse Digital Menu
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}