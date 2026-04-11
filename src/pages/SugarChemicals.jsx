import React from 'react';
import specImage from '../assets/sugar_chemicals_spec.png';
import SpecPageTemplate from '../components/SpecPageTemplate';

const SugarChemicals = () => {
  const specs = [
    { label: "Key Biocide", value: "Sugarocide (Chlorine Dioxide Based)" },
    { label: "Sanitation", value: "Quaternary Ammonium Compound (QUAT)" },
    { label: "Anti-Microbial", value: "Dithio Carbamate Solution" },
    { label: "System Maintenance", value: "pH Booster & Sludge Conditioner" },
    { label: "Application", value: "Bulk Sugar Mill Processing & Refinement" },
    { label: "Compliance", value: "ISO // FDA Compliant Food-Grade Standards" }
  ];

  return (
    <SpecPageTemplate
      code="SUGAR-REF-03"
      image={specImage}
      title={<>Sugar<br /><span className="text-stroke-bone">Chemicals.</span></>}
      coordinateLabels={["REFINEMENT SCALE: GLOBAL", "LAT: 17.3N / LONG: 74.8E"]}
      contentTitle="Clarification Grade"
      contentDescription="Desai Industries delivers high-performance compounds specifically engineered for the rigorous demands of global sugar refinement. Our suite of biocides and conditioners optimize clarification cycles and ensure maximum sanitation in high-volume milling environments."
      note={{
        title: "Industrial Compliance",
        bgClass: "bg-[var(--color-signal)]",
        labelClass: "text-[var(--color-iron-900)] font-black",
        text: "Our sugar processing compounds strictly adhere to FSSAI-grade standards, ensuring zero-contaminant extraction and maximum crystal recovery."
      }}
      specTitle="Refining Specs"
      specs={specs}
      buttonText="Contact Technical Export"
      productSlug="sugar-chemicals"
    />
  );
};

export default SugarChemicals;
