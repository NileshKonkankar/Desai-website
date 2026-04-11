import React from 'react';
import specImage from '../assets/wire_cables_spec.png';
import SpecPageTemplate from '../components/SpecPageTemplate';

const WireCables = () => {
  const categories = [
    { title: "Power Transmission", items: ["LT / HT / EHV Power Cables", "Submersible Cables", "Aerial Bunched Cables"] },
    { title: "Industrial Wiring", items: ["Single & Multicore Flexible", "Control cables", "Instrumentation Cables"] },
    { title: "Communication", items: ["LAN & CCTV Cables", "Telephone Cables", "Coaxial & Speaker Cables"] }
  ];

  const genericSpecs = [
    { label: "Voltage Range", value: "Up to 33KV EHV Ratings" },
    { label: "Standards", value: "IS-694 // IS-1554 // IS-7098 Compliance" },
    { label: "Certification", value: "Authorized Channel Partner Status" },
    { label: "Application", value: "Hostile Industrial Environments" }
  ];

  const leftColumnCustom = (
    <>
      <div className="flex flex-wrap gap-8 mb-12">
        <div className="flex-1 min-w-[200px] border-4 border-[var(--color-iron-900)] p-6 bg-[var(--color-iron-900)] text-[var(--color-bone)] group hover:bg-[var(--color-signal)] transition-colors">
          <span className="blueprint-label text-[var(--color-signal)] group-hover:text-[var(--color-iron-900)]">DISTRIBUTOR</span>
          <h4 className="text-3xl font-black mt-2">FINOLEX</h4>
        </div>
        <div className="flex-1 min-w-[200px] border-4 border-[var(--color-iron-900)] p-6 group hover:border-[var(--color-signal)] transition-all">
          <span className="blueprint-label text-[var(--color-iron-900)]/40 group-hover:text-[var(--color-signal)]">DISTRIBUTOR</span>
          <h4 className="text-3xl font-black mt-2">SCHNEIDER</h4>
        </div>
      </div>

      <div className="p-8 border-t-4 border-[var(--color-iron-900)]">
        <h3 className="blueprint-label text-[var(--color-signal)] mb-4">Core Capability</h3>
        <ul className="flex flex-col gap-3">
          {categories.map((cat, idx) => (
            <li key={idx} className="flex flex-col border-b border-[var(--color-iron-900)]/10 pb-4 last:border-0">
              <span className="text-[10px] uppercase font-[var(--font-tech)] opacity-70 mb-1 tracking-wider">{cat.title}</span>
              <span className="text-lg font-bold uppercase tracking-tight">{cat.items.join(" // ")}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );

  return (
    <SpecPageTemplate
      code="ELEC-WIRE-04"
      image={specImage}
      title={<>Wire<br />& <span className="text-stroke-bone">Cables.</span></>}
      coordinateLabels={["AUTHORIZED PARTNER", "LAT: 17.5N / LONG: 74.9E"]}
      contentTitle="Authorized Delivery"
      contentDescription="As Authorized Distributors for industry giants Finolex and Schneider, Desai Industries supplies high-integrity transmission solutions specifically engineered for modern industrial plants and hostile environmental conditions."
      leftColumnCustom={leftColumnCustom}
      note={{
        title: "Compliance Note",
        bgClass: "bg-[var(--color-signal)]",
        labelClass: "text-[var(--color-iron-900)] font-black",
        text: "All conductors and insulation materials strictly adhere to BIS standards, ensuring life-safety and energy efficiency in high-load transmission cycles."
      }}
      specTitle="Conductor Specs"
      specs={genericSpecs}
      buttonText="Request Technical Quote"
      productSlug="wire-cables"
    />
  );
};

export default WireCables;
