import { Phone, Mail, MapPin, Printer } from 'lucide-react';

export default function ContactFooter() {
  return (
    <footer className="bg-slate-950 px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 text-slate-400">
        <div className="md:col-span-4">
          <h4 className="text-white text-xl font-extrabold tracking-tight mb-4 flex items-center">
            <span className="bg-blue-600 p-1.5 rounded-md mr-3">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
            </span>
            Desai Industries
          </h4>
          <p className="text-sm leading-relaxed mb-6">
            An established organization situated in Sangli since 1974, supplying various Chemicals, Wire & Cables, Sugar Chemicals, and Fruit Drying Oil.
          </p>
        </div>
        
        <div className="md:col-span-4 md:col-start-6">
          <h4 className="text-white text-lg font-bold mb-6">Headquarters</h4>
          <ul className="space-y-4">
            <li className="flex items-start">
              <MapPin className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-sm border-l-2 border-slate-800 pl-4 block">
                P – 66, Midc Area, Kupwad<br/>
                Sangli, Maharashtra - 416436<br/>
                India
              </span>
            </li>
          </ul>
        </div>
        
        <div className="md:col-span-3">
          <h4 className="text-white text-lg font-bold mb-6">Direct Contact</h4>
          <ul className="space-y-4">
            <li className="flex items-center">
              <Phone className="w-5 h-5 text-blue-500 mr-3" />
              <a href="tel:+919370333337" className="text-sm hover:text-white transition-colors">Mobile: +91-9370333337</a>
            </li>
            <li className="flex items-center">
              <Phone className="w-5 h-5 text-blue-500 mr-3" />
              <a href="tel:+912332643201" className="text-sm hover:text-white transition-colors">Phone: +91-233-2643201</a>
            </li>
            <li className="flex items-center">
              <Printer className="w-5 h-5 text-blue-500 mr-3" />
              <span className="text-sm">Fax: +91-233-2643200</span>
            </li>
            <li className="flex items-center">
              <Mail className="w-5 h-5 text-blue-500 mr-3" />
              <a href="mailto:desaiindustries@gmail.com" className="text-sm hover:text-white transition-colors">desaiindustries@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>&copy; {new Date().getFullYear()} Desai Industries. All rights reserved.</p>
        <div className="flex space-x-6">
          <a href="https://www.desaigroupindia.com" className="hover:text-white transition-colors">www.desaigroupindia.com</a>
        </div>
      </div>
    </footer>
  );
}
