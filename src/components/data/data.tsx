/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import SelectMaterial from './select-material';
import SelectPipe from './select-pipe';

import data, { listType } from '../../data/data';
import config from '../../data/config';
import SelectList from './select-list';

export type ListType = {
  value: string;
  label: string;
};

const Data = () => {
  const [material, setMaterial] = useState<string>('');
  const [pipe, setPipe] = useState<string>('');
  const [list, setList] = useState<string>('');

  console.log(material, pipe, list);

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
      <h3 className="text">Выберите материал:</h3>
      <SelectMaterial setMaterial={setMaterial} />
      {material && (
        <>
          <h3 className="text">Выберите лист:</h3>
          <SelectList filteredMaterial={filteredMaterial} setList={setList} />
        </>
      )}
      <h3 className="text">Выберите тип трубы:</h3>
      <SelectPipe setPipe={setPipe} />
    </>
  );
};

export default Data;
