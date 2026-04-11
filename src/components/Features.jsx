import { Building2, Truck, Award, Zap } from 'lucide-react';

const features = [
  {
    name: 'Legacy Since 1974',
    description: 'Over 4 decades of established trust in Sangli, serving leading industrial and commercial clients.',
    icon: Building2,
  },
  {
    name: 'Warehousing & Transport',
    description: 'We provide extensive warehousing and dedicated transportation services to our esteemed clients.',
    icon: Truck,
  },
  {
    name: 'Authorized Dealers',
    description: 'Representing renowned companies like Solaris ChemTech and Polycab Wires.',
    icon: Award,
  },
  {
    name: 'Diverse Capabilities',
    description: 'Catering to the Textile Industry, Sugar Industry, Water Purification Plants, Milk Dairy, and Electrical Contractors.',
    icon: Zap,
  },
];

export default function Features() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-blue-700 font-semibold tracking-wide uppercase">Why Choose Desai Industries</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            A Proven Supply Chain Partner
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            From basic heavy chemicals and sugar treatment compounds to high-tension electrical cables, our infrastructure guarantees reliable delivery.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-slate-50 rounded-2xl px-6 pb-8 h-full border border-slate-100 hover:border-blue-200 transition-colors hover:shadow-md">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-xl shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-bold text-slate-900 tracking-tight">{feature.name}</h3>
                    <p className="mt-4 text-base text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
