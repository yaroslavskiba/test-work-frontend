import React from 'react';
import { SizeType } from './data';
import data from '../../data/data';
import config from '../../data/config';
// import { useDispatch } from 'react-redux';
// import { AppDispatch } from '../../store/store';
interface CalculateProps {
  material: string;
  pipe: string;
  list: string;
  frame: string;
  size: SizeType;
}

const CalculateButton = (props: CalculateProps) => {
  const { width, length, errorLength, errorWidth } = props.size;
  // const dispatch: AppDispatch = useDispatch();

  const handleClick = () => {
    const area = +width * +length;

    const sheet = data.list.find((item) => item.name === props.list);
    const sheetsAmount = sheet ? Math.ceil(area / (sheet.width * 1)) : 0;
    const sheetPrice = sheet ? sheet.price * sheetsAmount : 0;

    const frame = config.frame.find((item) => item.key === props.frame);
    const pipe = data.pipe.find((item) => item.name === props.pipe);
    const horizontalPipes = frame ? Math.ceil(+width / (frame.step - (pipe?.width ?? 0) / 1000)) : 0;
    const verticalPipes = frame ? Math.ceil(+length / (frame.step - (pipe?.width ?? 0) / 1000)) : 0;
    const pipesAmount = (horizontalPipes + verticalPipes) * 2;
    const pipePrice = (pipe?.price ?? 0) * pipesAmount;

    const fix = config.fix.find((item) => item.key === props.material);
    const fixAmount = fix ? Math.ceil(area * fix.value) : 0;
    const fixPrice = data.fix[0].price * fixAmount;

    console.log(area, sheetsAmount, sheetPrice, pipesAmount, pipePrice, fixAmount, fixPrice);
  };

  return (
    <>
      {errorLength !== '' || errorWidth !== '' ? (
        <button className="main-button" disabled>
          Посчитать
        </button>
      ) : (
        <button className="main-button" onClick={handleClick}>
          Посчитать
        </button>
      )}
    </>
  );
};

export default CalculateButton;
