/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import data from '../data/data';
import config from '../data/config';

const Data = () => {
  const selectLists = data.list; // Дата
  const selectMaterial = config.material; // Конфиг
  const selectFrame = config.frame; // Прочность
  const [width, length] = config.size; //Размеры для ограничений ввода

  const [widthInput, setWidthInput] = useState(String(width.min)); //значение инпута ширины
  const [lengthInput, setLengthInput] = useState(String(length.min)); // значение инпута длины

  const [errorInputWidth, setErrorInputWidth] = useState(''); // Ошибка поля ширины
  const [errorInputLength, setErrorInputLength] = useState(''); // Ошибка поля длины

  const [selectMaterialState, setSelectMaterialState] = useState('start'); // выбор материала для фильтрации
  const [selectListState, setSelectListState] = useState(''); // выбранный материал

  const [selectRadioState, setSelectRadioState] = useState('none'); // Состояние для хранения выбранной кнопки прочности

  // Функиция обработки значения в поле ввода ширины
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

  // Функиция обработки значения в поле ввода длины
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

  // Функиция выборки материала для фильтрации
  const handleSelectMaterial = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === 'Пластик') {
      setSelectMaterialState('plastic');
      return;
    }
    setSelectMaterialState('metal');
  };

  // Функиция сохранения выбранного изделия
  const handleSelectList = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectListState(e.target.value);
  };

  // Функиция выбора параметра прочности изделия
  const handleSelectRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectRadioState(e.target.value);
  };

  return (
    <form className="form-input">
      <p className="text">Выберете материал:</p>
      <select className="data-select" onChange={handleSelectMaterial}>
        <option className="data-select-item" value="start">
          Выберите материал...
        </option>
        {selectMaterial.map((listItem, index) => (
          <option className="data-select-item" key={listItem.key + '-' + index} value={listItem.name}>
            {listItem.name}
          </option>
        ))}
      </select>
      {selectMaterialState !== 'start' ? (
        <select className="data-select" onChange={handleSelectList}>
          <option className="data-select-item" value="start">
            Выберите изделие...
          </option>
          {selectLists
            .filter((filterItem) => {
              return filterItem.material === selectMaterialState;
            })
            .map((listItem, index) => (
              <option className="data-select-item" key={listItem.width + '-' + index} value={listItem.name}>
                {listItem.name}
              </option>
            ))}
        </select>
      ) : null}
      <p className="text">Ширина:</p>
      {errorInputWidth === '' ? null : <p className="error-input">{errorInputWidth}</p>}
      <input className="input-text" type="text" onChange={handleWidth} value={widthInput} />
      <p className="text">Длина:</p>
      {errorInputLength === '' ? null : <p className="error-input">{errorInputLength}</p>}
      <input className="input-text" type="text" onChange={handleLength} value={lengthInput} />
      <p className="text">Прочность:</p>
      <div className="radio-container">
        <label className="radio-button">
          <input
            type="radio"
            value="none"
            checked={selectRadioState === 'none'}
            onChange={(e) => handleSelectRadio(e)}
          />
          <span className="checkmark"></span>
          Не выбрано
        </label>
        <label className="radio-button">
          <input
            type="radio"
            value={selectFrame[0].key}
            checked={selectRadioState === selectFrame[0].key}
            onChange={(e) => handleSelectRadio(e)}
          />
          <span className="checkmark"></span>
          {selectFrame[0].name}
        </label>
        <label className="radio-button">
          <input
            type="radio"
            value={selectFrame[1].key}
            checked={selectRadioState === selectFrame[1].key}
            onChange={(e) => handleSelectRadio(e)}
          />
          <span className="checkmark"></span>
          {selectFrame[1].name}
        </label>
        <label className="radio-button">
          <input
            type="radio"
            value={selectFrame[2].key}
            checked={selectRadioState === selectFrame[2].key}
            onChange={(e) => handleSelectRadio(e)}
          />
          <span className="checkmark"></span>
          {selectFrame[2].name}
        </label>
      </div>
    </form>
  );
};

export default Data;
