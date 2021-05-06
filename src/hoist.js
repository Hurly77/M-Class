function bigFunc (arr) {
  // here the entire function is Hoisted

  const getAllTitles = (array) => {
    const titles = [];

    array.map((game) => {
      titles.push(game.title);
    });
    return titles;
  };

  function orderByPrice (filter) {
    if (filter === 'down') {
      return () => {
        arr.sort((a, b) => b.price - a.price);
      };
    } else {
      return function () {
        return arr.sort((a, b) => a.price - b.price);
      };
    }
  }

  let ordered = orderByPrice('down');
  let games = getAllTitles(ordered);

  return games;
}

bigFunc(realsingSoon);
