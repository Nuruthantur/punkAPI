async function fetchData() {
  try {
    const response = await fetch(
      "https://api.punkapi.com/v2/beers?page=2&per_page=80"
    );
    const result = await response.json();
    console.log(result);
    buildTable(result);
    // fillBeerNames(result);
    // fillFoodPairings(result);
    // createListeners(result);
    // filterData(result);
  } catch (error) {
    console.log(error);
  }
}
fetchData();

function buildTable(result) {
  const tbody = document.getElementById("content");
  // tbody.innerHTML = "";
  result.forEach((beer) => {
    //  CREATE AND APPEND ROW
    const tr = document.createElement("tr");
    tbody.appendChild(tr);
    // create, fill, APPEND!!!
    const name = document.createElement("td");
    name.innerHTML = beer.name;
    const description = document.createElement("td");
    description.innerHTML = beer.description;
    const pairings = document.createElement("td");
    pairings.innerHTML = beer.food_pairing;
    tr.append(name, description, pairings);
  });
}

function filterSearchBar() {}

function noData() {
  const tbody = document.getElementById("content");
  tbody.innerHTML = "";
  const tr = document.createElement("tr");
  tbody.appendChild(tr);
  const message = document.createElement("td");
  message.innerHTML = "no data available :'(";
  message.setAttribute("colspan", "3");
  tr.appendChild(message);
}

// function fillBeerNames(result) {
//   const beerSelect = document.getElementById("beerNameSelect");
//   const compStrings = result.map((beer) => beer.name);
//   const uniqueValues = new Set(compStrings);
//   uniqueValues.forEach((beer) => {
//     const option = document.createElement("option");
//     option.value = beer;
//     option.innerHTML = beer;
//     beerSelect.appendChild(option);
//   });
// }

// function fillFoodPairings(result) {
//   const foodPairingSelect = document.getElementById("foodPairingSelect");
//   const foodPairingString = result.map((beer) => beer.food_pairing);
//   const uniqueValues = new Set(foodPairingString);
//   uniqueValues.forEach((beer) => {
//     const option = document.createElement("option");
//     option.value = beer;
//     option.innerHTML = beer;
//     foodPairingSelect.appendChild(option);
//   });
// }
