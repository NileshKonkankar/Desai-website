import React from 'react';
import specImage from '../assets/industrial_chemicals_spec.png';
import SpecPageTemplate from '../components/SpecPageTemplate';

const Chemicals = () => {
  const categories = [
    { title: "Heavy Acids", items: ["Hydrochloric Acid", "Phosphoric Acid", "Sulfuric Acid"] },
    { title: "Alkalines", items: ["Caustic Soda Flakes", "Sodium Bicarbonate", "Potassium Carbonate"] },
    { title: "Oxidizers & Sanitisers", items: ["Liquid Chlorine", "Hydrogen Peroxide"] },
    { title: "Polymers & Resins", items: ["Formaldehyde", "Poly Aluminium Chloride (PAC)", "Washing Soda"] }
  ];

  const genericSpecs = [
    { label: "Purity Range", value: "98.5% - 99.9% Grade Level" },
    { label: "Storage", value: "HDPE Tonnages // MS Tanks // Carboys" },
    { label: "Supply Chain", value: "Ready Inventory // Direct Transport" },
    { label: "Compliance", value: "MSDS Certified // BIS Standards" }
  ];

  const leftColumnCustom = (
    <div className="flex flex-col gap-12">
      {categories.map((cat, idx) => (
        <div key={idx} className="border-t-4 border-[var(--color-iron-900)] pt-6">
          <h3 className="blueprint-label text-[var(--color-signal)] mb-4">{cat.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cat.items.map((item, i) => (
              <div key={i} className="text-xl font-bold uppercase tracking-tight text-[var(--color-iron-900)] flex items-center gap-3">
                <div className="w-2 h-2 bg-[var(--color-signal)]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <SpecPageTemplate
      code="IND-CHEM-02"
      image={specImage}
      title={<>Industrial<br /><span className="text-stroke-bone">Chemicals.</span></>}
      coordinateLabels={["STOCK STATUS: IN-READY", "LAT: 17.6N / LONG: 74.5E"]}
      contentTitle="Corporate Grade"
      contentDescription="All chemical compounds undergo rigorous QC testing at Dr. Kamat's Laboratory to guarantee sub-0.5% impurity levels for high-precision manufacturing."
      leftColumnCustom={leftColumnCustom}
      note={{
        title: "Purity Assurance",
        bgClass: "bg-[var(--color-signal)]",
        labelClass: "text-[var(--color-iron-900)] font-black",
        text: "Supply chain integrity ensures ready inventory and direct transport for critical industrial assets."
      }}
      specTitle="Compound Specs"
      specs={genericSpecs}
      buttonText="Request Purity Report"
      productSlug="industrial-chemicals"
    />
  );
};

export default Chemicals;
