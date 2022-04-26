import { getStores, Point, InputStores } from "./calculateDistance";

const defaultStores: InputStores = [
  {
    name: "NFS Alexania",
    number: 6322,
    latitude: "40",
    longitude: "88",
    adress: "BR 060- km22 – Zona Rural",
  },
  {
    name: "NCS Araguaia",
    number: 6326,
    latitude: "18",
    longitude: "56",
    adress: "Rua 44, 399 Setor Central",
  },
  {
    name: "NFS Catarina",
    number: 6335,
    latitude: "99",
    longitude: "2",
    adress:
      "Rodovia Castelo Branco - KM 60 - Loja 45/46 - Bairro: Dona Catarina",
  },
  {
    name: "NFS Minas",
    number: 63,
    latitude: "62",
    longitude: "25",
    adress: "Rua dos Tupis -  Loja 45/46 - Bairro: Centro",
  },
];

test("getStores returns the correct stores with a known entry", () => {
  const clientPosition: Point = [20, 32];
  const inputStores: InputStores = defaultStores.slice(0, 3);
  const plan: Point = [100, 100];
  const expectedResult = [
    [18, 56],
    [40, 88],
    [99, 2],
  ];

  const stores = getStores(inputStores, clientPosition, plan);
  const result = stores.map((store) => store.position);
  expect(result).toEqual(expectedResult);
});

test("getStores can return less than 3 stores as result", () => {
  const clientPosition: Point = [20, 32];
  const inputStores: InputStores = defaultStores.slice(0, 2);
  const plan: Point = [100, 100];
  const expectedResult = [
    [18, 56],
    [40, 88],
  ];

  const stores = getStores(inputStores, clientPosition, plan, 5);
  const result = stores.map((store) => store.position);
  expect(result).toEqual(expectedResult);
});

test("getStores can return more than 3 stores as result", () => {
  const clientPosition: Point = [20, 32];
  const inputStores: InputStores = defaultStores;
  const plan: Point = [100, 100];
  const expectedResult = [
    [18, 56],
    [62, 25],
    [40, 88],
    [99, 2],
  ];

  const stores = getStores(inputStores, clientPosition, plan, 4);
  const result = stores.map((store) => store.position);
  expect(result).toEqual(expectedResult);
});

test("when the stores are out the plan an empty array is returned", () => {
  const clientPosition: Point = [3, 3];
  const inputStores: InputStores = [
    {
      name: "NFS Alexania",
      number: 6322,
      latitude: "40",
      longitude: "88",
      adress: "BR 060- km22 – Zona Rural",
    },
    {
      name: "NCS Araguaia",
      number: 6326,
      latitude: "18",
      longitude: "56",
      adress: "Rua 44, 399 Setor Central",
    },
  ];
  const plan: Point = [5, 2];
  const expectedResult: Array<number> = [];

  const stores = getStores(inputStores, clientPosition, plan);
  const result = stores.map((store) => store.position);
  expect(result).toEqual(expectedResult);
});
