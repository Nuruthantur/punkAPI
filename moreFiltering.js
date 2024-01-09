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

function buildTable(result) {
  const tbody = document.getElementById("content");
  tbody.innerHTML = "";
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

function fillBeerNames(result) {
  const beerSelect = document.getElementById("beerNameSelect");
  const compStrings = result.map((beer) => beer.name);
  const uniqueValues = new Set(compStrings);
  uniqueValues.forEach((beer) => {
    const option = document.createElement("option");
    option.value = beer;
    option.innerHTML = beer;
    beerSelect.appendChild(option);
  });
}

function fillFoodPairings(result) {
  const foodPairingSelect = document.getElementById("foodPairingSelect");
  const foodPairingString = result.map((beer) => beer.food_pairing);
  const uniqueValues = new Set(foodPairingString);
  uniqueValues.forEach((beer) => {
    const option = document.createElement("option");
    option.value = beer;
    option.innerHTML = beer;
    foodPairingSelect.appendChild(option);
  });
}

/////////////////////////

function createListeners(beerArray) {
  // PUTTING THE INPUTS IN  //
  const beerSelect = document.getElementById("beerNameSelect");
  const beerFoodPairing = document.getElementById("foodPairingSelect");
  const allInputs = [beerSelect, beerFoodPairing];

  // SELECT LISTENER FOR beerName !!!
  beerSelect.addEventListener("change", (event) => {
    checkingAllValues(allInputs);
    const resultBeer = filterArrayByName(event.target.value, beerArray);
    if (beerFoodPairing.value !== "") {
      const resultBeerAndFood = filterArrayByFood(
        beerFoodPairing.value,
        resultBeer
      );
      checkForFood(resultBeerAndFood);
    } else {
      buildTable(resultBeer);
    }
  });

  //    FOOD PAIRING SELECT LISTENER    //
  beerFoodPairing.addEventListener("change", (event) => {
    checkingAllValues(allInputs);
    const resultFood = filterArrayByFood(event.target.value, beerArray);
    if (beerSelect.value !== "") {
      const resultFoodAndBeer = filterArrayByName(beerSelect.value, resultFood);
      checkForFood(resultFoodAndBeer);
    } else {
      checkForFood(resultFood);
      // buildTable(resultFood);
    }
  });

  //    CLEAR BUTTON GOES HERE    //
  const button = document.getElementById("clearButton");
  button.addEventListener("click", () => {
    beerFoodPairing.value = "all";
    beerSelect.value = "all";
    buildTable(beerArray);
  });
}

function filterArrayByName(selectedValue, beerArray) {
  if (selectedValue === "all") {
    return beerArray;
  } else {
    const filteredByName = beerArray.filter((b) => {
      return b.name === selectedValue;
    });
    return filteredByName;
  }
}

// YOU NEED TO LOOP BECAUSE IT'S AN ARRAY AND NOT A STRING!
function filterArrayByFood(selectedValue, beerArray) {
  if (selectedValue === "all") {
    return beerArray;
  } else {
    const filteredByFood = beerArray.filter((b) => {
      return b.food_pairing === selectedValue;
    });
    return filteredByFood;
  }
}

// const filteredBeers = filterArrayByFood(selectedValue, beerArray);
// const filteredBeersString = filteredBeers.join(", "); // Convert the array to a string with comma separation
// console.log(filteredBeersString);

// function 2 for filtering by food

// function filterArrayByFood(selectedFood, beerArray) {
//   const filteredByFood = beerArray.filter((g) => {});
// }

function checkForFood(result) {
  if (result.length === 0) {
    noData();
  } else {
    buildTable(result);
  }
}

function checkingAllValues(allInputs) {
  const allValues = allInputs.map((input) => input.value);
  console.log(allValues);
}
