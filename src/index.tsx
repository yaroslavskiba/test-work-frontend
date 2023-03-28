import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import data from './data/data';
import config from './data/config';
import './index.css';

const App = () => {
  return (
    <>
      <header className="header">
        <h1 className="header-text">Калькулятор расчета каркаса с покрытием листов</h1>
      </header>
      <main className="main">
        <div className="data">
          <form>
            <select>
              <option value="">Select material...</option>
            </select>
          </form>
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
