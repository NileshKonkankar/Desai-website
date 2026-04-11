import React from 'react';
import specImage from '../assets/fruit_drying_oil_spec.png';
import SpecPageTemplate from '../components/SpecPageTemplate';

const FruitDryingOil = () => {
  const specs = [
    { label: "Product Form", value: "Premium Liquid Concentrate" },
    { label: "Applications", value: "Raisins, Chillies, Figs (Anjeer)" },
    { label: "Packaging Units", value: "Cans of 20 ltrs, 50 ltrs & 100ltrs" },
    { label: "Key Property", value: "Ethyl Oleate(E)" },
    { label: "Chemical Grade", value: "Food-Safe" }
  ];

  return (
    <SpecPageTemplate
      code="AGRI-SPEC-01"
      image={specImage}
      title={<>Fruit<br /><span className="text-stroke-bone">Drying Oil.</span></>}
      coordinateLabels={["SYSTEM STATUS: ACTIVE", "LAT: 17.4N / LONG: 74.6E"]}
      contentTitle="Operational Context"
      contentDescription="Formulated explicitly for the rapid and safe dehydration of high-value crops. Desai Industries is recognized as one of India's largest suppliers of this specialized processing oil, ensuring antiseptic protection without harmful chemical additives."
      note={{
        title: "Precision Note",
        bgClass: "bg-[var(--color-iron-900)]",
        labelClass: "text-[var(--color-signal)]",
        text: '"Our formulation maintains the structural integrity of the fruit while accelerating the drying cycle, maximizing yield and shelf-life."'
      }}
      specTitle="Technical Specs"
      specs={specs}
      buttonText="Enquire For Bulk Order"
      productSlug="fruit-drying-oil"
    />
  );
};

export default FruitDryingOil;
