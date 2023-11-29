function fetchData() {
  fetch("https://api.punkapi.com/v2/beers?page=2&per_page=80")
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      buildTable(result);
      //   beerNames(result);
      buildBeerFilter(result);
    })
    .catch((error) => console.log(error));
  console.log("function beerNames has run");
}
// console.log("fetchData function has run.");
fetchData();

function buildTable(result) {
  const tbody = document.querySelector("tbody");
  // tbody.innerHTML = "";
  result.forEach((b) => {
    //create and append row
    const tr = document.createElement("tr");
    tbody.append(tr);
    //create, fill, and append cells
    const title = document.createElement("td");
    title.innerHTML = b.name;
    const description = document.createElement("td");
    description.innerHTML = b.description;
    const foodPairing = document.createElement("td");
    foodPairing.innerHTML = b.food_pairing;
    tr.append(title, description, foodPairing);
  });
}

//
//
//

function fillBeerOptions(result) {
  const beerSelect = document.getElementById("beerOptions");
  result.forEach((beer) => {
    const name = document.createElement("name");
    name.value = beer.name;
    name.innerHTML = beer.name;
    beerSelect.appendChild(name);
    console.log(name);
  });
}

function buildBeerFilter(beers) {
  const beerFilter = document.getElementById("beer-filters");
  // Create an option for each beer name
  beers.forEach((beer) => {
    const option = document.createElement("option");
    option.value = beer.name;
    option.textContent = beer.name;
    beerFilter.appendChild(option);
  });
}
