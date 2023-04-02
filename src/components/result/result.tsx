import React from 'react';
import { AppDispatch, useAppSelector } from '../../store/store';
import { basketAdd } from '../../store/slices/basketSlice';
import { useDispatch } from 'react-redux';

const Result = () => {
  const isClicked = useAppSelector((state) => state.isClicked);
  const resaultCalculate = useAppSelector((state) => state.resultList);
  const dispatch: AppDispatch = useDispatch();

  const handleClickAdd = () => {
    dispatch(basketAdd(resaultCalculate));
  };

  return (
    <>
      {isClicked === true ? (
        <>
          <div className="result-container">
            <p className="text">Площадь: {resaultCalculate.area} м&#178;</p>

            <table className="result-table">
              <tbody>
                <tr>
                  <td>Наименование</td>
                  <td>ед.</td>
                  <td>кол-во</td>
                  <td>сумма</td>
                </tr>
                <tr>
                  <td>{resaultCalculate.list}</td>
                  <td>м2</td>
                  <td>{resaultCalculate.sheetsAmount}</td>
                  <td>{resaultCalculate.sheetPrice}</td>
                </tr>
                <tr>
                  <td>{resaultCalculate.pipe}</td>
                  <td>мп</td>
                  <td>{resaultCalculate.pipesAmount}</td>
                  <td>{resaultCalculate.pipePrice}</td>
                </tr>
                <tr>
                  <td>Саморез</td>
                  <td>шт</td>
                  <td>{resaultCalculate.fixAmount}</td>
                  <td>{resaultCalculate.fixPrice}</td>
                </tr>
              </tbody>
            </table>

            <p className="text">Итого: {resaultCalculate.sum} руб.</p>

            <button className="main-button" onClick={handleClickAdd}>
              Добавить в корзину
            </button>
          </div>
        </>
      ) : (
        <h3 className="result-title">Заполните форму и нажмите на кнопку &quot;Посчитать&quot;</h3>
      )}
    </>
  );
};

export default Result;
