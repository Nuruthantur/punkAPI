async function fetchData() {
  const response = await fetch(
    "https://api.punkapi.com/v2/beers?page=2&per_page=80"
  );
  const data = await response.json();
  console.log(data);
  const searchableTable = document.getElementById("searchable-table");
  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-button");

  // clear table data
  searchableTable.innerHTML = "";

  // create table rows
  data.forEach((item) => {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    const descriptionCell = document.createElement("td");
    const foodPairingCell = document.createElement("td");

    nameCell.textContent = item.name;
    descriptionCell.textContent = item.description;
    foodPairingCell.textContent = item.food_pairing;

    row.appendChild(nameCell);
    row.appendChild(descriptionCell);
    row.appendChild(foodPairingCell);

    searchableTable.appendChild(row);
    searchInput.addEventListener("input", updateFilteredData);
    searchButton.addEventListener("click", updateFilteredData);
  });

  // Add event listener for the search bar
  // searchInput.addEventListener("input", updateFilteredData);
  // searchButton.addEventListener("click", updateFilteredData);

  function updateFilteredData() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredData = data.filter((item) => {
      const nameContainsTerm = item.name.toLowerCase().includes(searchTerm);
      const descriptionContainsTerm = item.description
        .toLowerCase()
        .includes(searchTerm);
      // const pairingContainsTerm = item.food_pairing
      //   .toLowerCase()
      //   .includes(searchTerm);

      return nameContainsTerm || descriptionContainsTerm; //|| pairingContainsTerm
    });

    searchableTable.innerHTML = "";
    filteredData.forEach((item) => {
      const row = document.createElement("tr");
      const nameCell = document.createElement("td");
      const descriptionCell = document.createElement("td");
      const foodPairingCell = document.createElement("td");

      nameCell.textContent = item.name;
      descriptionCell.textContent = item.description;
      foodPairingCell.textContent = item.food_pairing;

      row.appendChild(nameCell);
      row.appendChild(descriptionCell);
      row.appendChild(foodPairingCell);

      searchableTable.appendChild(row);
    });
  }
}

fetchData();
