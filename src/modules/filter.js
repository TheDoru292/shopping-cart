function sortByRatingUp(array, num = 10) {
  let newArray = array.sort((item, prev) =>
    item.rating > prev.rating ? -1 : 1
  );
  return newArray.slice(0, num);
}

function sortByRatingDown(array, num = 10) {
  let newArray = array.sort((item, prev) =>
    item.rating > prev.rating ? 1 : -1
  );
  return newArray.slice(0, num);
}

function sortByPriceUp(array, num = 10) {
  let newArray = array.sort((item, prev) => (item.price > prev.price ? -1 : 1));
  return newArray.slice(0, num);
}

function sortByPriceDown(array, num = 10) {
  let newArray = array.sort((item, prev) => (item.price > prev.price ? 1 : -1));
  return newArray.slice(0, num);
}

function sortBySoldUp(array, num = 10) {
  let newArray = array.sort((item, prev) => (item.sold > prev.sold ? -1 : 1));
  return newArray.slice(0, num);
}

function sortBySoldDown(array, num = 10) {
  let newArray = array.sort((item, prev) => (item.sold > prev.sold ? 1 : -1));
  return newArray.slice(0, num);
}

function filterByCategory(array, categoryName) {
  console.log(array, categoryName);
  let newArray = array.filter((item) => item.category === categoryName);
  return newArray;
}

function getRandomItems(array, num = 10) {
  let shuffled = array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return shuffled.slice(0, num);
}

export {
  sortBySoldUp,
  sortBySoldDown,
  filterByCategory,
  sortByPriceUp,
  sortByPriceDown,
  sortByRatingUp,
  sortByRatingDown,
  getRandomItems,
};
