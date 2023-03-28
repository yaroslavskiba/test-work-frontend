import React from 'react';
import { ResultData } from '../index';

type Props = {
  result: ResultData | null;
};

const Result = ({ result }: Props) => {
  return (
    <table className="result-table">
      <tbody>
        <tr>
          <td className="result-table-item">Наименование</td>
          <td className="result-table-item">Ед.</td>
          <td className="result-table-item">Кол-во</td>
          <td className="result-table-item">Сумма</td>
        </tr>
        <tr>
          <td className="result-table-item">{result?.selectListState}</td>
          <td className="result-table-item">м2</td>
          <td className="result-table-item">{result?.sheetsAmount}</td>
          <td className="result-table-item">{result?.sheetPrice}</td>
        </tr>
        <tr>
          <td className="result-table-item">{result?.pipeName}</td>
          <td className="result-table-item">мп</td>
          <td className="result-table-item">{result?.pipesAmount}</td>
          <td className="result-table-item">{result?.pipePrice}</td>
        </tr>
        <tr>
          <td className="result-table-item">Саморез</td>
          <td className="result-table-item">шт</td>
          <td className="result-table-item">{result?.fixAmount}</td>
          <td className="result-table-item">{result?.fixPrice}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Result;
