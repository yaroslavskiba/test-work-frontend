import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Data from './components/data/data';
import './index.css';
import Result from './components/result/result';
import { Provider } from 'react-redux';
import store, { useAppSelector } from './store/store';
import { BsBasket } from 'react-icons/bs';
import Modal from 'react-modal';
import ModalBasket from './components/modal';

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
  const basket = useAppSelector((state) => state.basket);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  return (
    <>
      <header className="header">
        <h1 className="header-text">Калькулятор расчета каркаса с покрытием листов</h1>
        <button className="icon-button" onClick={() => setModalIsOpen(true)}>
          <BsBasket />
          <span className="count-item-basket">{basket.length}</span>
        </button>
      </header>
      <main className="main">
        <Modal
          isOpen={modalIsOpen}
          className="modal-window-component"
          overlayClassName="modal-overlay-component"
          onRequestClose={() => setModalIsOpen(false)}
        >
          <ModalBasket setModalIsOpen={setModalIsOpen} />
        </Modal>
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
