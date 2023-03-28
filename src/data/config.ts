type sizeType = {
  key: string;
  name: string;
  min: number;
  max: number;
  step: number;
};

type frameType = {
  key: string;
  name: string;
  step: number;
};

type materialType = {
  key: string;
  name: string;
};

type fixType = {
  key: string;
  name: string;
  value: number;
};

interface ConfigInterface {
  size: sizeType[];
  frame: frameType[];
  material: materialType[];
  fix: fixType[];
}

const config: ConfigInterface = {
  size: [
    {
      key: 'length',
      name: 'Длина',
      min: 5,
      max: 50,
      step: 0.2,
    },
    {
      key: 'width',
      name: 'Ширина',
      min: 5,
      max: 25,
      step: 0.2,
    },
  ],
  frame: [
    {
      key: 'light',
      name: 'Легкая',
      step: 1.2,
    },
    {
      key: 'standard',
      name: 'Стандартная',
      step: 1,
    },
    {
      key: 'strong',
      name: 'Усиленная',
      step: 0.8,
    },
  ],
  material: [
    {
      key: 'metal',
      name: 'Метал',
    },
    {
      key: 'plastic',
      name: 'Пластик',
    },
  ],
  fix: [
    {
      key: 'plastic',
      name: 'Пластик',
      value: 10,
    },
    {
      key: 'metal',
      name: 'Пластик',
      value: 5,
    },
  ],
};

export default config;
