function fetchData() {
  fetch("https://api.punkapi.com/v2/beers?page=2&per_page=80")
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      buildTable(result);
      beerNames(result);
      buildBeerFilter(result);
    })
    .catch((error) => console.log(error));
  console.log("function beerNames has run");
}
console.log("fetchData function has run.");
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

// //
// //  BEEROPTIONS FUNCTION
// //

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

// Fetch data from the API
async function fetchData() {
  const url = "https://api.punkapi.com/v2/beers?page=2&per_page=80";
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// Filter data based on the search input
function filterData(searchTerm, data) {
  const filteredData = data.filter((i) => {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  });
}

// Update the results list dynamically
function updateResultsList(filteredData) {
  const resultsList = document.getElementById("results-list");
  resultsList.innerHTML = "";

  for (const item of filteredData) {
    const resultItem = `<li>${item.title}</li>`;
    resultsList.innerHTML += resultItem;
  }
}

// Handle search input events
const searchInput = document.getElementById("search-input");
const resultsList = document.getElementById("results-list");

searchInput.addEventListener("keyup", async (e) => {
  const searchTerm = e.target.value;
  const filteredData = await filterData(searchTerm, await fetchData());
  await updateResultsList(filteredData);
});

// const apiUrl = "https://api.example.com/cards";

// fetch(apiUrl)
//   .then((response) => response.json())
//   .then((data) => {
//     const cardsContainer = document.getElementById("cards-container");

//     for (const card of data.cards) {
//       const cardElement = document.createElement("div");
//       cardElement.className = "card";

//       const cardTitle = document.createElement("h2");
//       cardTitle.textContent = card.title;
//       cardElement.appendChild(cardTitle);

//       // Add other card elements like description, image, etc.

//       cardsContainer.appendChild(cardElement);
//     }
//   });
