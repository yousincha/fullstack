const continents = [
  {
    _id: 1,
    name: "Africa",
  },
  {
    _id: 2,
    name: "Europe",
  },
  {
    _id: 3,
    name: "Asia",
  },
  {
    _id: 4,
    name: "North America",
  },
  {
    _id: 5,
    name: "South America",
  },
  {
    _id: 6,
    name: "Australia",
  },
  {
    _id: 7,
    name: "Antarctica",
  },
];

const prices = [
  {
    _id: 0,
    name: "모두",
    array: [],
  },
  {
    _id: 1,
    name: "0~49만원",
    array: [0, 490000],
  },
  {
    _id: 2,
    name: "50~99만원",
    array: [500000, 990000],
  },
  {
    _id: 3,
    name: "100~149만원",
    array: [1000000, 1490000],
  },
  {
    _id: 4,
    name: "150~199만원",
    array: [1500000, 1990000],
  },
  {
    _id: 5,
    name: "200만원 이상",
    array: [2000000, 10000000],
  },
];
export { continents, prices };
