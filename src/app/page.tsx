
import React from "react";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google"; 

// Google Sans is distributed as "Plus Jakarta Sans" on Google Fonts
const googleSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function Home() {
  return (
    <div className={`${googleSans.className} min-h-screen bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-zinc-100 flex flex-col`}>
      
      {/* SECTION 1: HERO */}
      <section className="relative pt-6 pb-16 md:pt-8 md:pb-20 overflow-hidden bg-background border-b border-slate-200 dark:border-zinc-800">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                Artisan Culinary Experience
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none text-slate-900 dark:text-white">
                Masterfully Crafted <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
                  Gourmet Recipes
                </span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 max-w-xl leading-relaxed font-medium">
                Indulge in an extraordinary dining journey. Handcrafted dishes prepared daily by top culinary chefs using fresh, organic ingredients.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/foods"
                  className="px-8 py-3.5 rounded-xl font-bold bg-orange-500 hover:bg-orange-600 text-white transition shadow-sm text-center"
                >
                  Explore Food Menu
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-3.5 rounded-xl font-bold border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-slate-100 dark:hover:bg-zinc-800 transition text-center"
                >
                  Learn Our Story
                </Link>
              </div>

              <div className="pt-6 border-t border-slate-200 dark:border-zinc-800/80 flex items-center gap-6 text-slate-500 dark:text-zinc-400 text-xs font-semibold">
                <div><span className="text-orange-500 font-extrabold">★ 4.9/5</span> Rating</div>
                <div>•</div>
                <div><span className="font-extrabold text-slate-900 dark:text-white">30 Min</span> Express Delivery</div>
                <div>•</div>
                <div><span className="font-extrabold text-slate-900 dark:text-white">100%</span> Organic</div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative grid grid-cols-2 gap-4">
                <div className="col-span-2 relative aspect-16/10 rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-zinc-800">
                  <img
                    src="https://www.papercitymag.com/wp-content/uploads/2026/01/Night-Rooster-Tablescape-1024x683.jpg"
                    alt="Master Chef Plating Gourmet Dish"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-xs font-bold text-orange-400 uppercase tracking-wider">Featured Dish</p>
                    <p className="text-base font-extrabold">Pan-Seared Salmon</p>
                  </div>
                </div>

                <div className="relative aspect-square rounded-xl overflow-hidden border border-slate-200 dark:border-zinc-800">
                  <img
                    src="https://platform.la.eater.com/wp-content/uploads/sites/26/2025/12/Lead.jpg?quality=90&strip=all&crop=0,0.015620118712903,100,99.968759762574"
                    alt="Ribeye Steak"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="relative aspect-square rounded-xl overflow-hidden border border-slate-200 dark:border-zinc-800">
                  <img
                    src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=500&auto=format&fit=crop"
                    alt="Pasta"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: CATEGORY EXPLORER */}
      <section className="py-20 border-b border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <span className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider">
              Curated Collections
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Explore By Category</h2>
            <p className="text-slate-500 dark:text-zinc-400 text-sm font-medium">
              Find handcrafted meals organized for every craving and dietary requirement.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Fresh Seafood', count: '24 Items', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaCV_HqX8xFVnKI7kn3SWiN85_zp3BsHPpoIsRb7LbpImD9_MV89pKOltj&s=10' },
              { name: 'Fresh Seafood', count: '18 Items', img: 'https://seaconcept.nl/wp-content/uploads/2022/12/seaconcept-handflakad-roodbaars-8-1024x768.jpg' },
              { name: 'Artisanal Pasta', count: '30 Items', img: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281292?q=80&w=400&auto=format&fit=crop' },
              { name: 'Grilled Meats', count: '15 Items', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIBQ1u7ON4uJ2lcwAfZvx3SaDznmesbVBl9VLLSOIOybGZC4spmhMuJ7k6&s=10' },
            ].map((cat) => (
              <Link
                key={cat.name}
                href="/foods"
                className="group relative rounded-xl overflow-hidden aspect-4/3 border border-slate-200 dark:border-zinc-800 hover:shadow-md transition"
              >
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                  <span className="text-white font-extrabold text-base">{cat.name}</span>
                  <span className="text-orange-400 text-xs font-semibold mt-0.5">{cat.count}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: SIGNATURE DISHES */}
      <section className="py-20 border-b border-slate-200 dark:border-zinc-800">
        <div className="container mx-auto px-6 max-w-7xl space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <span className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider">
                Chef's Recommendations
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Today’s Top Highlights</h2>
            </div>
            <Link href="/foods" className="text-orange-600 dark:text-orange-400 font-bold text-sm hover:underline">
              View Complete Menu →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: 1, title: 'Charcoal Grilled Steak', category: 'American', rating: '4.9', img: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/7c556e105670207.5f7e129c1c96a.jpg' },
              { id: 2, title: 'Traditional Pork Ramen', category: 'Japanese', rating: '5.0', img: 'https://images.slurrp.com/prod/articles/pcojd5nu3he.webp' },
              { id: 3, title: 'Smoked Double Burger', category: 'Gourmet', rating: '4.8', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500&auto=format&fit=crop' },
            ].map((item) => (
              <div key={item.id} className="rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden shadow-xs">
                <div className="relative h-48 w-full">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                  <span className="absolute top-3 right-3 px-2 py-1 rounded-md text-xs font-bold bg-zinc-900/80 text-orange-400">
                    ★ {item.rating}
                  </span>
                </div>
                <div className="p-5 space-y-2">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    {item.category}
                  </span>
                  <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: STATS */}
      <section className="py-16 bg-slate-900 text-white border-b border-slate-800">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <h3 className="text-3xl sm:text-4xl font-black text-orange-400">100%</h3>
              <p className="text-xs sm:text-sm text-slate-400 font-medium">Organic Sourcing</p>
            </div>
            <div className="space-y-1">
              <h3 className="text-3xl sm:text-4xl font-black text-orange-400">30 Min</h3>
              <p className="text-xs sm:text-sm text-slate-400 font-medium">Average Delivery</p>
            </div>
            <div className="space-y-1">
              <h3 className="text-3xl sm:text-4xl font-black text-orange-400">250+</h3>
              <p className="text-xs sm:text-sm text-slate-400 font-medium">Unique Dishes</p>
            </div>
            <div className="space-y-1">
              <h3 className="text-3xl sm:text-4xl font-black text-orange-400">15,000+</h3>
              <p className="text-xs sm:text-sm text-slate-400 font-medium">Happy Customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: HOW IT WORKS */}
      <section className="py-20 border-b border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950">
        <div className="container mx-auto px-6 max-w-7xl space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider">
              Simple Step Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">How We Serve You</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Choose Your Meal', desc: 'Browse our curated collection of verified recipes and regional delicacies.' },
              { step: '02', title: 'Artisan Preparation', desc: 'Our world-class chefs prepare your dish with fresh, premium organic ingredients.' },
              { step: '03', title: 'Fast Express Delivery', desc: 'Enjoy hot, fresh, restaurant-grade food delivered directly to your doorstep.' },
            ].map((s) => (
              <div key={s.step} className="p-8 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 space-y-3 relative overflow-hidden">
                <span className="text-4xl font-black text-orange-500/20 absolute top-4 right-4">{s.step}</span>
                <h3 className="text-xl font-extrabold">{s.title}</h3>
                <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed font-medium">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: TESTIMONIALS */}
      <section className="py-20 border-b border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50">
        <div className="container mx-auto px-6 max-w-7xl space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider">
              Verified Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Loved By Food Enthusiasts</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Jenkins', role: 'Food Critic', quote: 'The freshness of the seafood and attention to seasoning are completely unmatched.', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop' },
              { name: 'David Miller', role: 'Home Chef', quote: 'Finding recipes this detailed and authentic has transformed my weekend family dinners.', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop' },
              { name: 'Emily Chen', role: 'Regular Customer', quote: 'Prompt delivery and restaurant-quality plating every single order!', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop' },
            ].map((t) => (
              <div key={t.name} className="p-6 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 space-y-4">
                <p className="text-slate-600 dark:text-zinc-300 italic text-sm font-medium">"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-2">
                  <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover border-2 border-orange-500" />
                  <div>
                    <h4 className="font-extrabold text-sm">{t.name}</h4>
                    <p className="text-xs text-slate-400 font-medium">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: PROMOTIONAL NEWSLETTER */}
      <section className="py-20 bg-white dark:bg-zinc-900">
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-6">
          <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 uppercase tracking-wider">
            Join Our VIP Club
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Get 20% Off Your First Order
          </h2>
          <p className="text-slate-500 dark:text-zinc-400 max-w-xl mx-auto text-sm sm:text-base font-medium">
            Subscribe to receive secret recipes, weekly promotional codes, and chef updates.
          </p>
          <div className="flex flex-col sm:flex-row justify-center max-w-md mx-auto gap-3">
            <input
              type="email"
              placeholder="Enter your email address..."
              className="px-4 py-3 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50 w-full font-medium"
            />
            <button className="px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:opacity-90 transition text-sm">
              Subscribe
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}