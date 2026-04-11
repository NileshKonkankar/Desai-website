import { Download, ChevronRight } from 'lucide-react';

const categories = [
  { name: 'Industrial Chemicals', description: 'Hydrochloric Acid, Caustic Soda, Hydrogen Peroxide, and more.', color: 'bg-blue-100 text-blue-800' },
  { name: 'Sugar Chemicals', description: 'Sugarocide, Quaternary Ammonium, pH Boosters, and Sludge Conditioners.', color: 'bg-emerald-100 text-emerald-800' },
  { name: 'Wire & Cables', description: 'Submersible, Power, Telecom, LAN, CCTV, and Coaxial cables.', color: 'bg-indigo-100 text-indigo-800' },
  { name: 'Fruit Drying Oil', description: 'Specialty solutions tailored for agricultural and commercial fruit drying.', color: 'bg-amber-100 text-amber-800' },
];

export default function CatalogTeaser() {
  return (
    <div id="catalog" className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Comprehensive Product Portfolio
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Desai Industries supplies an unparalleled range of products catering to heavy chemicals, agriculture, sugar processing, and complex electrical installations.
            </p>
            <div className="mt-8">
              <button type="button" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-blue-700 hover:bg-blue-800 transition-colors">
                <Download className="mr-2 -ml-1 h-5 w-5" aria-hidden="true" />
                Download Full Catalog
              </button>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0 lg:w-1/2 lg:pl-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {categories.map((category) => (
                <div key={category.name} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-all cursor-pointer group hover:border-blue-300">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${category.color} mb-4`}>
                    Category
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 flex items-center justify-between">
                    {category.name}
                    <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </h3>
                  <p className="mt-2 text-sm text-slate-500">{category.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
