import React from 'react';
import ReactDOM from 'react-dom/client';
import Data from './components/data/data';
import './index.css';
import Result from './components/result/result';
import { Provider } from 'react-redux';
import store from './store/store';

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
  return (
    <>
      <header className="header">
        <h1 className="header-text">Калькулятор расчета каркаса с покрытием листов</h1>
      </header>
      <main className="main">
        <div className="data">
          <Data />
        </div>
        <div className="result">
          <Result />
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
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
);
