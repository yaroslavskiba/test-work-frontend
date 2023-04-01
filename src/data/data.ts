export type fixType = {
  name: string;
  unit: string;
  price: number;
};

export type pipeType = {
  name: string;
  unit: string;
  width: number;
  price: number;
};

export type listType = {
  name: string;
  material: string;
  unit: string;
  width: number;
  price: number;
};

interface DataInterface {
  list: listType[];
  pipe: pipeType[];
  fix: fixType[];
}

const data: DataInterface = {
  list: [
    {
      name: 'Лист-1 0.5 ширина 1.8м',
      material: 'plastic',
      unit: 'м2',
      width: 1.8,
      price: 12,
    },
    {
      name: 'Лист-2 0.5 ширина 1.5м',
      material: 'plastic',
      unit: 'м2',
      width: 1.5,
      price: 15,
    },
    {
      name: 'Лист-3 0.5 ширина 1.2м',
      material: 'plastic',
      unit: 'м2',
      width: 1.2,
      price: 15,
    },
    {
      name: 'Лист-4 0.7 ширина 1.8м',
      material: 'plastic',
      unit: 'м2',
      width: 1.8,
      price: 17,
    },
    {
      name: 'Лист-5 0.7 ширина 1.5м',
      material: 'plastic',
      unit: 'м2',
      width: 1.5,
      price: 20,
    },
    {
      name: 'Лист-6 0.7 ширина 1.2м',
      material: 'plastic',
      unit: 'м2',
      width: 1.2,
      price: 22,
    },

    {
      name: 'Лист-7 0.3 ширина 1м',
      material: 'metal',
      unit: 'м2',
      width: 1,
      price: 25,
    },
    {
      name: 'Лист-8 0.3 ширина 0.75м',
      material: 'metal',
      unit: 'м2',
      width: 0.75,
      price: 20,
    },
    {
      name: 'Лист-9 0.3 ширина 0.5м',
      material: 'metal',
      unit: 'м2',
      width: 0.5,
      price: 15,
    },
    {
      name: 'Лист-10 0.5 ширина 1м',
      material: 'metal',
      unit: 'м2',
      width: 1,
      price: 30,
    },
    {
      name: 'Лист-11 0.5 ширина 0.75м',
      material: 'metal',
      unit: 'м2',
      width: 0.75,
      price: 26,
    },
    {
      name: 'Лист-12 0.5 ширина 0.5м',
      material: 'metal',
      unit: 'м2',
      width: 0.5,
      price: 22,
    },
  ],
  pipe: [
    {
      name: 'Труба 20х20',
      unit: 'мп',
      width: 20,
      price: 18,
    },
    {
      name: 'Труба 30х30',
      unit: 'мп',
      width: 30,
      price: 18,
    },
  ],
  fix: [
    {
      name: 'Саморез',
      unit: 'шт',
      price: 1.1,
    },
  ],
};

export default data;
