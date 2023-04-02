import React, { useState } from 'react';
import Select from 'react-select';
import { ListType } from './data';

type SelectListProps = {
  filteredMaterial: ListType[];
  setList: (list: string) => void;
};

const SelectList = (props: SelectListProps) => {
  const [selectedOption, setSelectedOption] = useState<ListType | null>(null);

  const handleSelect = (selectedOption: ListType | null) => {
    setSelectedOption(selectedOption);
    if (selectedOption) {
      props.setList(selectedOption.label);
    } else {
      props.setList('');
    }
  };

  return (
    <>
      <Select
        isClearable
        value={selectedOption}
        onChange={handleSelect}
        options={props.filteredMaterial}
        placeholder="Выберите лист..."
        styles={{
          control: (base, { isFocused }) => ({
            ...base,
            width: '250px',
            borderRadius: 0,
            backgroundColor: 'inherit',
            border: '1px solid #000',
            boxShadow: isFocused ? '0 0 0 2px #f2f2f2' : 'none',
          }),
          option: (base, { isFocused }) => ({
            ...base,
            backgroundColor: isFocused ? '#f2f2f2' : 'inherit',
            color: '#324040',
          }),
        }}
      />
    </>
  );
};

export default SelectList;
