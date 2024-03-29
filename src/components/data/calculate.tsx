import React from 'react';
import { SizeType } from './data';
import data from '../../data/data';
import config from '../../data/config';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { calculateResult } from '../../store/slices/resultSlice';
import { isClicked } from '../../store/slices/isClickedSlice';
interface CalculateProps {
  material: string;
  pipe: string;
  list: string;
  frame: string;
  size: SizeType;
}

const CalculateButton = (props: CalculateProps) => {
  const { width, length, errorLength, errorWidth } = props.size;
  const { material, pipe, list, frame } = props;
  const dispatch: AppDispatch = useDispatch();

  const handleClick = () => {
    const area = +width * +length;

    const sheet = data.list.find((item) => item.name === list);
    const sheetsAmount = sheet ? Math.ceil(area / (sheet.width * 1)) : 0;
    const sheetPrice = Math.trunc(sheet ? sheet.price * sheetsAmount : 0);

    const frameCur = config.frame.find((item) => item.key === frame);
    const pipeCur = data.pipe.find((item) => item.name === pipe);
    const horizontalPipes = frameCur
      ? Math.ceil((+width - (pipeCur?.width ?? 0) / 1000) / (frameCur.step + (pipeCur?.width ?? 0) / 1000))
      : 0;
    const verticalPipes = frameCur
      ? Math.ceil((+length - (pipeCur?.width ?? 0) / 1000) / (frameCur.step + (pipeCur?.width ?? 0) / 1000))
      : 0;
    const pipesAmount = (horizontalPipes + verticalPipes) * 2;
    const pipePrice = Math.trunc((pipeCur?.price ?? 0) * pipesAmount);

    const fix = config.fix.find((item) => item.key === material);
    const fixAmount = fix ? Math.ceil(area * fix.value) : 0;
    const fixPrice = Math.trunc(data.fix[0].price * fixAmount);

    const sum = sheetPrice + pipePrice + fixPrice;

    dispatch(
      calculateResult({
        sum,
        list,
        frame,
        pipe,
        area,
        sheetsAmount,
        pipesAmount,
        fixAmount,
        sheetPrice,
        pipePrice,
        fixPrice,
      }),
    );
    if (material && pipe && list && frame && width && length && !errorLength && !errorWidth) {
      dispatch(isClicked(true));
    } else {
      dispatch(isClicked(false));
    }
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
