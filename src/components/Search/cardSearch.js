import React from "react";

const cardSearch = ({ items, searchTerm }) => {
  const filteredResults = items.filter((item) => {
    const valuesToSearch = Object.values(item).join(" ").toLowerCase();
    return valuesToSearch.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="cards-recommended">
      {filteredResults.map((item, index) => (
        // Renderizza qui i tuoi risultati nella tua componente Card (CardRecommended o altro)
        <div className="card" key={index}>
          {/* Renderizza i dettagli del risultato */}
        </div>
      ))}
    </div>
  );
};

export default cardSearch;
