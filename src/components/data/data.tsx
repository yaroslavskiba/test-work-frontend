/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
// import data from '../../data/data';
// import config from '../../data/config';
import FilterMaterial from './select-material';

const Data = () => {
  // const [size, frame, material, fixConfig] = config; // Дата
  // const [list, pipe, fix] = data; // Конфиг

  const [filterMaterial, setFilterMaterial] = useState('');

  return (
    <>
      <h3 className="text">Выберете материал:</h3>
      <FilterMaterial setFilterMaterial={setFilterMaterial} />
    </>
  );
};

export default Data;
