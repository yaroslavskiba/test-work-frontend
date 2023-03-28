import React, { useState } from 'react';
import data from '../data/data';
import config from '../data/config';

const Data = () => {
  const selectLists = data.list;
  const [width, length] = config.size;
  const [widthInput, setWidthInput] = useState(String(width.min));
  const [lengthInput, setLengthInput] = useState(String(length.min));
  const [errorInputWidth, setErrorInputWidth] = useState('');
  const [errorInputLength, setErrorInputLength] = useState('');

  const handleWidth = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWidthInput(e.target.value);
    const current = Number(e.target.value);
    if (Number.isNaN(current)) {
      setErrorInputWidth('Ширина должна быть числом');
    } else if (current < width.min || current > width.max) {
      setErrorInputWidth(`Ширина должна быть от ${width.min} до ${width.max}`);
    } else {
      setErrorInputWidth('');
    }
  };

  const handleLength = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLengthInput(e.target.value);
    const current = Number(e.target.value);
    if (Number.isNaN(current)) {
      setErrorInputLength('Длина должна быть числом');
    } else if (current < length.min || current > length.max) {
      setErrorInputLength(`Длина должна быть от ${length.min} до ${length.max}`);
    } else {
      setErrorInputLength('');
    }
  };
  return (
    <form className="form-input">
      <p className="text">Выберете материал:</p>
      <select className="data-select">
        <option className="data-select-item" value="start">
          Выберите материал...
        </option>
        {selectLists.map((listItem) => (
          <option className="data-select-item" key={listItem.width + '-' + listItem.material} value={listItem.name}>
            {listItem.name}
          </option>
        ))}
      </select>
      <p className="text">Ширина:</p>
      {errorInputWidth === '' ? null : <p className="error-input">{errorInputWidth}</p>}
      <input className="input-text" type="text" onChange={handleWidth} value={widthInput} />
      <p className="text">Длина:</p>
      {errorInputLength === '' ? null : <p className="error-input">{errorInputLength}</p>}
      <input className="input-text" type="text" onChange={handleLength} value={lengthInput} />
    </form>
  );
};

export default Data;
