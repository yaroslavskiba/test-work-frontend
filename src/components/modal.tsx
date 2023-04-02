import React, { Fragment } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useAppSelector } from '../store/store';
import { paramType } from '../store/slices/basketSlice';

interface Props {
  setModalIsOpen: (value: boolean) => void;
}

const ModalBasket = ({ setModalIsOpen }: Props) => {
  const basket: paramType[] = useAppSelector((state) => state.basket);
  return (
    <>
      <div className="modal">
        <div className="modal-header">
          <span className="text">Корзина:</span>
          <button className="icon-button" onClick={() => setModalIsOpen(false)}>
            <AiOutlineClose />
          </button>
        </div>
        <table className="result-table">
          <tbody>
            <tr>
              <td>Наименование</td>
              <td>ед.</td>
              <td>кол-во</td>
              <td>сумма</td>
            </tr>
            {basket.map((item, index) => {
              return (
                <Fragment key={index}>
                  <tr>
                    <td>{item.list}</td>
                    <td>м2</td>
                    <td>{item.sheetsAmount}</td>
                    <td>{item.sheetPrice}</td>
                  </tr>
                  <tr>
                    <td>{item.pipe}</td>
                    <td>мп</td>
                    <td>{item.pipesAmount}</td>
                    <td>{item.pipePrice}</td>
                  </tr>
                  <tr>
                    <td>Саморез</td>
                    <td>шт</td>
                    <td>{item.fixAmount}</td>
                    <td>{item.fixPrice}</td>
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
        </table>
        <p className="text">Сумма: {basket.reduce((acc, item) => acc + (item.sum ?? 0), 0)} руб.</p>
      </div>
    </>
  );
};

export default ModalBasket;
