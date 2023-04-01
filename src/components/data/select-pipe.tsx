import React, { useState } from 'react';

interface SelectPipeProps {
  setPipe: (material: string) => void;
}

function SelectPipe(props: SelectPipeProps) {
  const [selectedPipe, setSelectedPipe] = useState<string>('');

  const handlePipeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPipe(event.target.value);
    props.setPipe(event.target.value);
  };

  return (
    <div className="input-radio-container">
      <label className="label">
        <input
          className="input-radio"
          type="radio"
          value="Труба 20х20"
          checked={selectedPipe === 'Труба 20х20'}
          onChange={handlePipeChange}
        />
        <span className="radio-label text">Труба 20х20</span>
      </label>

      <label className="label">
        <input
          className="input-radio"
          type="radio"
          value="Труба 30х30"
          checked={selectedPipe === 'Труба 30х30'}
          onChange={handlePipeChange}
        />
        <span className="radio-label text">Труба 30х30</span>
      </label>
    </div>
  );
}

export default SelectPipe;
