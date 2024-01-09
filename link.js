async function fetchData() {
  try {
    const response = await fetch(
      "https://api.punkapi.com/v2/beers?page=2&per_page=80"
    );
    const result = await response.json();
    console.log(result);
    buildTable(result);
    fillBeerNames(result);
    fillFoodPairings(result);
    createListeners(result);
    // filterData(result);
  } catch (error) {
    console.log(error);
  }
}
fetchData();
