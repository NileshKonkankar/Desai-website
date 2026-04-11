export default function QuoteForm() {
  return (
    <div id="quote" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl shadow-2xl overflow-hidden sm:flex border border-slate-800">
          <div className="px-6 py-12 sm:px-10 sm:w-5/12 relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-600 opacity-20 transform -skew-x-12 scale-150"></div>
            <div className="relative z-10 h-full flex flex-col justify-center">
              <h3 className="text-3xl font-extrabold text-white tracking-tight">Bulk Order Request</h3>
              <p className="mt-6 text-blue-100 text-lg">
                Submit your material or cable requirements. Our sales team evaluates requests and responds with detailed pricing and logistics tailored for you.
              </p>
              <div className="mt-10 flex items-center space-x-4 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 backdrop-blur-sm">
                <span className="flex-shrink-0 bg-amber-500/20 rounded-full p-2 text-amber-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </span>
                <span className="text-white font-medium">Fast turnaround for standard quotes</span>
              </div>
            </div>
          </div>
          
          <div className="px-6 py-12 sm:px-12 sm:w-7/12 bg-slate-800">
            <form action="#" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300">Name & Company</label>
                  <div className="mt-2">
                    <input type="text" name="name" id="name" className="py-3 px-4 block w-full bg-slate-900 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder-slate-500" placeholder="John Doe - ACME Corp" />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300">Email Address</label>
                  <div className="mt-2">
                    <input type="email" name="email" id="email" className="py-3 px-4 block w-full bg-slate-900 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder-slate-500" placeholder="contact@acmecorp.com" />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="product" className="block text-sm font-medium text-slate-300">Product Line / Item Name</label>
                  <div className="mt-2">
                    <input type="text" name="product" id="product" className="py-3 px-4 block w-full bg-slate-900 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder-slate-500" placeholder="e.g., Caustic Soda or Submersible Cables" />
                  </div>
                </div>
                <div>
                  <label htmlFor="volume" className="block text-sm font-medium text-slate-300">Target Volume / Quantity</label>
                  <div className="mt-2">
                    <input type="text" name="volume" id="volume" className="py-3 px-4 block w-full bg-slate-900 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder-slate-500" placeholder="e.g., 5000 Liters / 1000 Meters" />
                  </div>
                </div>
                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-slate-300">Industry</label>
                  <div className="mt-2">
                    <select id="industry" name="industry" className="py-3 px-4 block w-full bg-slate-900 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all appearance-none cursor-pointer">
                      <option>Chemical / Industrial</option>
                      <option>Sugar Processing</option>
                      <option>Electrical / Telecom</option>
                      <option>Agriculture / Other</option>
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-2 pt-4">
                  <button type="button" className="w-full inline-flex items-center justify-center px-8 py-4 border border-transparent rounded-lg shadow-sm text-lg font-bold text-slate-900 bg-amber-500 hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-amber-500 transition-all hover:shadow-lg hover:shadow-amber-500/20">
                    Get Pricing & Logistics Info
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
