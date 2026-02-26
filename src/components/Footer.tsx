import React from 'react';

export const Footer = () => {
  return (
    <footer id="contact" className="py-24 bg-luxury-gloss text-luxury-beige border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
          
          {/* Column 1: Sales Information */}
          <div className="space-y-12">
            <h2 className="text-4xl font-serif opacity-90">Sales information</h2>
            
            <div className="space-y-6">
              {[
                {
                  name: "Sille Sillaste",
                  role: "CUSTOMER RELATIONS MANAGER",
                  phone: "+372 5757 1010",
                  email: "voltaskai@endover.ee",
                  img: "https://picsum.photos/seed/sille/200/250"
                },
                {
                  name: "Reesi Tralla",
                  role: "BUSINESS RELATIONS MANAGER",
                  phone: "+372 5191 3222",
                  email: "voltaskai@endover.ee",
                  img: "https://picsum.photos/seed/reesi/200/250"
                }
              ].map((person) => (
                <div key={person.name} className="bg-white/5 p-6 rounded-2xl flex justify-between items-center group hover:bg-white/10 transition-colors">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-serif">{person.name}</h4>
                      <p className="text-[9px] uppercase tracking-widest opacity-50">{person.role}</p>
                    </div>
                    <div className="text-[11px] space-y-1 opacity-70">
                      <p>{person.phone}</p>
                      <p className="underline underline-offset-4 decoration-white/20">{person.email}</p>
                    </div>
                  </div>
                  <div className="w-20 h-24 rounded-xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                    <img src={person.img} alt={person.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Contact Us */}
          <div className="space-y-12 lg:border-x lg:border-white/5 lg:px-12">
            <h2 className="text-4xl font-serif opacity-90">Contact us</h2>
            
            <form className="space-y-6">
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest opacity-40">Name</label>
                <input type="text" className="w-full bg-transparent border-b border-white/10 py-2 focus:border-luxury-mustard outline-none transition-colors" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest opacity-40">Email address</label>
                <input type="email" className="w-full bg-transparent border-b border-white/10 py-2 focus:border-luxury-mustard outline-none transition-colors" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest opacity-40">Phone number</label>
                <input type="tel" className="w-full bg-transparent border-b border-white/10 py-2 focus:border-luxury-mustard outline-none transition-colors" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest opacity-40">Message</label>
                <textarea 
                  rows={2}
                  className="w-full bg-transparent border-b border-white/10 py-2 focus:border-luxury-mustard outline-none transition-colors resize-none"
                  defaultValue="Hello. I am looking for a home/commercial space in Volta SKAI. I would like to receive more information."
                />
              </div>
              
              <div className="flex gap-3 items-start">
                <input type="checkbox" id="subscribe" className="mt-1 accent-luxury-mustard" />
                <label htmlFor="subscribe" className="text-[11px] leading-relaxed opacity-60">
                  I would like to subscribe to the newsletter and receive additional information about Volta SKAI and Endover developments.
                </label>
              </div>

              <button type="submit" className="px-10 py-3 bg-white/10 hover:bg-luxury-mustard text-white rounded-lg text-[10px] uppercase tracking-widest font-bold transition-all">
                SEND
              </button>
              
              <p className="text-[9px] leading-relaxed opacity-40">
                You can unsubscribe from the newsletter at any time. When you send a query, your data will be processed in accordance with our <a href="#" className="underline">privacy policy</a>.
              </p>
            </form>
          </div>

          {/* Column 3: Premium Club */}
          <div className="space-y-12">
            <h2 className="text-4xl font-serif opacity-90 leading-tight">Join Endover's <br /> Premium Club</h2>
            
            <div className="space-y-8">
              <p className="text-sm leading-relaxed opacity-70">
                Subscribe to the Endover newsletter to be the first to hear about new projects, pre-sales, and exclusive members-only offers!
              </p>
              
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email address"
                  className="flex-1 bg-transparent border border-white/10 rounded-lg px-4 py-3 text-xs focus:border-luxury-mustard outline-none transition-colors" 
                />
                <button className="px-6 py-3 bg-white/10 hover:bg-luxury-mustard text-white rounded-lg text-[10px] uppercase tracking-widest font-bold transition-all">
                  JOIN
                </button>
              </div>

              <p className="text-[9px] leading-relaxed opacity-40">
                You can unsubscribe from the newsletter at any time. When you send a query, your data will be processed in accordance with our <a href="#" className="underline">privacy policy</a>.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Section: Essential Links */}
        <div className="pt-12 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-6">
              <div className="text-2xl font-serif tracking-widest uppercase opacity-40">Elyse</div>
              <p className="text-[10px] uppercase tracking-[0.4em] font-medium opacity-30">
                © 2026 Elyse Residences. <br /> All Rights Reserved.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-40">Navigation</h4>
              <ul className="space-y-2 text-[11px] uppercase tracking-widest opacity-60">
                <li><a href="#about" className="hover:text-luxury-mustard transition-colors">About</a></li>
                <li><a href="#amenities" className="hover:text-luxury-mustard transition-colors">Amenities</a></li>
                <li><a href="#projects" className="hover:text-luxury-mustard transition-colors">Projects</a></li>
                <li><a href="#contact" className="hover:text-luxury-mustard transition-colors">Contact</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-40">Social</h4>
              <ul className="space-y-2 text-[11px] uppercase tracking-widest opacity-60">
                <li><a href="#" className="hover:text-luxury-mustard transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-luxury-mustard transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-luxury-mustard transition-colors">Pinterest</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-40">Legal</h4>
              <ul className="space-y-2 text-[11px] uppercase tracking-widest opacity-60">
                <li><a href="#" className="hover:text-luxury-mustard transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-luxury-mustard transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-luxury-mustard transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
