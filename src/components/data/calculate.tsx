import React from 'react';
// import { SizeType } from './data';
// import data from '../../data/data';
// import config from '../../data/config';

// interface CalculateProps {
//   material: string;
//   pipe: string;
//   list: string;
//   size: SizeType;
// }
const CalculateButton = (/*props: CalculateProps*/) => {
  // const [width, length, errorLength, errorWidth] = props.size;

  // const handleClick = () => {
  //   const area = +width * +length;

  //   const sheet = data.list.find((item) => item.name === props.list);
  //   const sheetsAmount = sheet ? Math.ceil(area / (sheet.width * 1)) : 0;
  //   const sheetPrice = sheet ? sheet.price * sheetsAmount : 0;

  //   // const frame = selectFrame.find((item) => item.key === selectRadioState);
  //   // const pipe = area > 100 ? data.pipe[0] : data.pipe[1];
  //   // const pipeName = pipe.name;
  //   // const horizontalPipes = frame ? Math.ceil(+widthInput / (frame.step - pipe.width / 1000)) : 0;
  //   // const verticalPipes = frame ? Math.ceil(+lengthInput / (frame.step - pipe.width / 1000)) : 0;
  //   // const pipesAmount = (horizontalPipes + verticalPipes) * 2;
  //   // const pipePrice = pipe.price * pipesAmount;

  //   // const fix = config.fix[0];
  //   // const fixAmount = Math.ceil(area * fix.value);
  //   // const fixPrice = data.fix[0].price * fixAmount;
  // };

  return (
    <>
      <button className="main-button" /*onClick={handleClick}*/>Посчитать</button>
    </>
  );
};

export default CalculateButton;
