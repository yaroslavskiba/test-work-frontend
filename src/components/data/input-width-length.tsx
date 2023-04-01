import React from 'react';
import { SizeType } from './data';
import config from '../../data/config';

interface InputSizeProps {
  setSize: (size: SizeType) => void;
  size: SizeType;
}

const InputSize = (props: InputSizeProps) => {
  const configWidth = { min: config.size[0].min, max: config.size[0].max };
  const configLength = { min: config.size[1].min, max: config.size[1].max };

  const handleChangeWidth = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (inputValue === '') {
      props.setSize({ ...props.size, width: '', errorWidth: '' });
    } else if (!/^\d+$/.test(inputValue)) {
      props.setSize({ ...props.size, errorWidth: 'Введенное значение должно быть числом', width: inputValue });
    } else {
      const newWidth = inputValue;
      if (+newWidth < configWidth.min || +newWidth > configWidth.max) {
        props.setSize({
          ...props.size,
          errorWidth: `Введенное значение должно быть не меньше ${configWidth.min} и не больше ${configWidth.max}`,
          width: newWidth,
        });
      } else {
        props.setSize({ ...props.size, width: newWidth, errorWidth: '' });
      }
    }
  };

  const handleChangeLength = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (inputValue === '') {
      props.setSize({ ...props.size, length: '', errorLength: '' });
    } else if (!/^\d+$/.test(inputValue)) {
      props.setSize({ ...props.size, errorLength: 'Введенное значение должно быть числом', length: inputValue });
    } else {
      const newLength = inputValue;
      if (+newLength < configLength.min || +newLength > configLength.max) {
        props.setSize({
          ...props.size,
          errorLength: `Введенное значение должно быть не меньше ${configLength.min} и не больше ${configLength.max}`,
          length: newLength,
        });
      } else {
        props.setSize({ ...props.size, length: newLength, errorLength: '' });
      }
    }
  };

  return (
    <div className="input-text-container">
      <div>
        {props.size.errorWidth && <p className="error">{props.size.errorWidth}</p>}
        <p className="text">Длина:</p>
        <input
          type="text"
          className="input-text"
          value={props.size.width}
          onChange={handleChangeWidth}
          placeholder={`${configWidth.min}`}
        />
      </div>
      <div>
        {props.size.errorLength && <p className="error">{props.size.errorLength}</p>}
        <p className="text">Ширина:</p>
        <input
          type="text"
          className="input-text"
          value={props.size.length}
          onChange={handleChangeLength}
          placeholder={`${configLength.min}`}
        />
      </div>
    </div>
  );
};

export default InputSize;
