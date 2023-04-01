import React, { useState } from 'react';

interface SelectMaterialProps {
  setFrame: (frame: string) => void;
}

function SelectFrame(props: SelectMaterialProps) {
  const [selectedFrame, setSelectedFrame] = useState<string>('none');

  const handleFrameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFrame(event.target.value);
    props.setFrame(event.target.value);
  };

  return (
    <div className="input-radio-container">
      <label className="label">
        <input
          className="input-radio"
          type="radio"
          value="light"
          checked={selectedFrame === 'light'}
          onChange={handleFrameChange}
        />
        <span className="radio-label text">Легкая</span>
      </label>

      <label className="label">
        <input
          className="input-radio"
          type="radio"
          value="standart"
          checked={selectedFrame === 'standart'}
          onChange={handleFrameChange}
        />
        <span className="radio-label text">Стандартная</span>
      </label>

      <label className="label">
        <input
          className="input-radio"
          type="radio"
          value="strong"
          checked={selectedFrame === 'strong'}
          onChange={handleFrameChange}
        />
        <span className="radio-label text">Усиленная</span>
      </label>
    </div>
  );
}

export default SelectFrame;
