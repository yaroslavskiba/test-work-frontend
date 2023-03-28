import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Data from './components/data';
import Result from './components/result';
import './index.css';

export type ResultData = {
  pipeName: string;
  sheetsAmount: number;
  pipesAmount: number;
  fixAmount: number;
  selectListState: string;
  sheetPrice: number;
  pipePrice: number;
  fixPrice: number;
};

const App = () => {
  const [result, setResult] = useState<ResultData | null>(null);
  console.log(result);
  return (
    <>
      <header className="header">
        <h1 className="header-text">Калькулятор расчета каркаса с покрытием листов</h1>
      </header>
      <main className="main">
        <div className="data">
          <Data setResult={setResult} />
        </div>
        <div className="result">
          <Result result={result} />
        </div>
      </main>
      <footer className="footer">
        <p className="footer-text">Павел Воробьёв</p>
      </footer>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
