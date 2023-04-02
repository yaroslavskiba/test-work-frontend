/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import SelectMaterial from './select-material';
import SelectPipe from './select-pipe';

import data, { listType } from '../../data/data';
import SelectList from './select-list';
import InputSize from './input-width-length';
import CalculateButton from './calculate';
import SelectFrame from './select-frame';

export type ListType = {
  value: string;
  label: string;
};

export type SizeType = {
  width: string;
  length: string;
  errorWidth: string;
  errorLength: string;
};

const Data = () => {
  const [material, setMaterial] = useState<string>('');
  const [pipe, setPipe] = useState<string>('');
  const [list, setList] = useState<string>('');
  const [frame, setFrame] = useState<string>('');
  const [size, setSize] = useState<SizeType>({
    width: '',
    length: '',
    errorWidth: '',
    errorLength: '',
  });

  const [filteredMaterial, setFilteredMaterial] = useState<ListType[]>([]);

  useEffect(() => {
    const current = data.list.filter((item: listType) => item.material === material);
    const currentList = current.map((item: listType, index: number) => {
      return {
        value: `list${index}`,
        label: item.name,
      };
    });
    setFilteredMaterial(currentList);
  }, [material]);

  return (
    <>
      <div className="section">
        <h3 className="text">Выберите материал:</h3>
        <SelectMaterial setMaterial={setMaterial} />
      </div>
      <div className="section" style={{ display: material ? 'block' : 'none' }}>
        {material && (
          <>
            <h3 className="text">Выберите лист:</h3>
            <SelectList filteredMaterial={filteredMaterial} setList={setList} />
          </>
        )}
      </div>
      <div className="section">
        <InputSize setSize={setSize} size={size} />
      </div>
      <div className="section">
        <h3 className="text">Выберите тип трубы:</h3>
        <SelectPipe setPipe={setPipe} />
      </div>
      <div className="section">
        <h3 className="text">Выберите прочность:</h3>
        <SelectFrame setFrame={setFrame} />
        <CalculateButton material={material} pipe={pipe} list={list} size={size} frame={frame} />
      </div>
    </>
  );
};

export default Data;
