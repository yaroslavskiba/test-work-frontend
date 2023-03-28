/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import Data from './components/data';
import './index.css';

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
        <div className="result"></div>
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
