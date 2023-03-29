import React, { useState } from 'react';

interface FilterMaterialProps {
  setFilterMaterial: (material: string) => void;
}

function FilterMaterial(props: FilterMaterialProps) {
  const [selectedMaterial, setSelectedMaterial] = useState<string>('');

  const handleMaterialChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedMaterial(event.target.value);
    props.setFilterMaterial(event.target.value);
  };

  return (
    <div className="input-radio-container">
      <label className="label">
        <input
          className="input-radio"
          type="radio"
          value="Пластик"
          checked={selectedMaterial === 'Пластик'}
          onChange={handleMaterialChange}
        />
        <span className="radio-label text">Пластик</span>
      </label>

      <label className="label">
        <input
          className="input-radio"
          type="radio"
          value="Метал"
          checked={selectedMaterial === 'Метал'}
          onChange={handleMaterialChange}
        />
        <span className="radio-label text">Метал</span>
      </label>
    </div>
  );
}

export default FilterMaterial;
