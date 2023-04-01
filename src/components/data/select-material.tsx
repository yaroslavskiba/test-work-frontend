import React, { useState } from 'react';

interface SelectMaterialProps {
  setMaterial: (material: string) => void;
}

function SelectMaterial(props: SelectMaterialProps) {
  const [selectedMaterial, setSelectedMaterial] = useState<string>('');

  const handleMaterialChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedMaterial(event.target.value);
    props.setMaterial(event.target.value);
  };

  return (
    <div className="input-radio-container">
      <label className="label">
        <input
          className="input-radio"
          type="radio"
          value="plastic"
          checked={selectedMaterial === 'plastic'}
          onChange={handleMaterialChange}
        />
        <span className="radio-label text">Пластик</span>
      </label>

      <label className="label">
        <input
          className="input-radio"
          type="radio"
          value="metal"
          checked={selectedMaterial === 'metal'}
          onChange={handleMaterialChange}
        />
        <span className="radio-label text">Метал</span>
      </label>
    </div>
  );
}

export default SelectMaterial;
