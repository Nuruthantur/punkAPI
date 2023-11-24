// WRITING A FUNCTION TO RESIZE THE CAROUSEL HEIGHT ???
// UPDATE: DIDN'T WORK LOL

// function adjustCarouselHeight() {
//   // Get the window height
//   const windowHeight = window.innerHeight;
//   // Calculate the carousel height as 80% of the window height
//   const carouselHeight = windowHeight * 0.9;
//   // Set the height of the carousel inner container
//   const carouselInnerElement = document.querySelector(".carousel-inner");
//   carouselInnerElement.style.height = `${carouselHeight}px`;
// }

// ADD EVENT LISTENER TO RESIZE AUTOMATICALLY
// window.addEventListener("resize", adjustCarouselHeight);
// adjustCarouselHeight();

// console.log("this is all the beer data", punkData);
// console.log("this is all the beer data", beerArray);

// function fetchData() {
//   fetch("https://api.punkapi.com/v2/beers?page=2&per_page=80")
//     .then(function (response) {
//       console.log("response", response);
//       return response.json();
//     })
//     .then(function (result) {
//       console.log("result", result);
//       generateTable(result);
//     })
//     .catch(function (error) {
//       console.log("error", error);
//     });

// fetch("https://api.punkapi.com/v2/beers?page=2&per_page=80")
//   .then((res) => res.json())
//   .then((res) => {
//     generateCards(res);
//   })
//   .catch((e) => console.log(e));

fetch("https://api.punkapi.com/v2/beers?page=2&per_page=80")
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    // generateCards(res);
    // getRandomImage(res);
    // addListeners(res);
  })
  .catch((e) => console.log(e));

console.log("fetchData function has run.");

// fetch("https://api.punkapi.com/v2/beers/random")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     // updateCarouselContent(data);
//   });

// window.addEventListener("load", () => {
//   fetch("https://api.punkapi.com/v2/beers/random")
//     .then((response) => response.json())
//     .then((data) => {
//       // updateCarouselContent(data);
//     });
// });

// CREATING A TABLE FOR ALL OBJECTS

function generateTable(punkData) {
  const container = document.getElementById("container");
  const table = document.createElement("table");
  const heading = document.createElement("tr");
  table.appendChild(heading);
  const h1 = document.createElement("th");
  h1.innerHTML = "Name";
  const h2 = document.createElement("th");
  h2.innerHTML = "Description";
  const h3 = document.createElement("th");
  h3.innerHTML = "ABV";
  const h4 = document.createElement("th");
  h4.innerHTML = "Image";
  heading.append(h1, h2, h3, h4);
  container.appendChild(table);
  for (let i = 0; i < punkData.length; i++) {
    const row = document.createElement("tr");
    table.appendChild(row);
    const nameCell = document.createElement("td");
    nameCell.innerHTML = punkData[i].name;
    console.log(punkData[i].name);
    const descriptionCell = document.createElement("td");
    descriptionCell.innerHTML = punkData[i].description;
    console.log(punkData[i].description);
    const abvCell = document.createElement("td");
    abvCell.innerHTML = punkData[i].abv;
    const imageCell = document.createElement("td");
    const img = document.createElement("img");
    img.setAttribute("src", punkData[i].image_url);
    imageCell.appendChild(img);
    row.append(nameCell, descriptionCell, abvCell, imageCell);
  }
}

// generateTable();

// CREATING CARDS FROM HERE

// function generateCards() {
//   const container = document.getElementById("row");
//   punkData.forEach(function (punkData) {
//     const card = document.createElement("div");
//     card.classList.add("card");
//     card.setAttribute("style", "width: 18rem"); //"width: 18rem" "col-sm-6"
//     container.appendChild(card);
//     const img = document.createElement("img");
//     img.classList.add("card-img-top");
//     img.setAttribute("src", punkData.image_url);
//     const body = document.createElement("div");
//     body.classList.add("card-body");
//     card.append(img, body);
//     const title = document.createElement("h5");
//     title.classList.add("card-title");
//     title.innerText = punkData.name;
//     const paragraph = document.createElement("p");
//     paragraph.classList.add("card-description");
//     paragraph.innerText = punkData.description;
//     const link = document.createElement("a");
//     link.setAttribute("href", "name.html?code=" + punkData.name);
//     link.classList.add("btn");
//     link.classList.add("btn-primary");
//     link.innerText = "More Information";
//     body.append(title, paragraph, link);
//   });
// }

// generateCards();

// write an if loop for keywords so that you can search for good food pairings

// FILTER FOR RANDOM BEER IMAGE

// function getRandomImage(data) {
//   const randomItem = Math.floor(Math.random() * data.length);
//   const randomImageURL = data[randomItem].image_url;
//   const image = new Image();
//   image.src = randomImageURL;
// document.body.appendChild(image);
// }
// console.log(getRandomImage);

// creation of random item

// getRandomItem(data) => Math.floor(Math.random() * data.length);

// fetch("https://test.api.goes.here")
//   .then((response) => response.json())
//   .then((data) => {
//     // Select a random item from the fetched data
//     const randomIndex = Math.floor(Math.random() * data.length);
//     const randomItem = data[randomIndex];

//     // Update the carousel content
//     const carousel = document.querySelector(".carousel");
//     const slideContent = document.createElement("div");
//     slideContent.classList.add("carousel-item");

//     // Create carousel slide content
//     const imageURL = randomItem.imageURL;
//     const image = new Image();
//     image.src = imageURL;
//     image.alt = randomItem.description;

//     const caption = document.createElement("p");
//     caption.textContent = randomItem.name;

//     slideContent.appendChild(image);
//     slideContent.appendChild(caption);

//     carousel.appendChild(slideContent);
//   });

// FETCH RANDOM ENDPOINT

// fetch("https://api.punkapi.com/v2/beers/random")
//   .then((response) => response.json())
//   .then((data) => {
//     const card = document.createElement("div");
//     card.classList.add("card");

//     const cardBody = document.createElement("div");
//     cardBody.classList.add("card-body");

//     const cardTitle = document.createElement("h5");
//     cardTitle.classList.add("card-title");
//     cardTitle.textContent = data.title; // Assuming the API response includes a 'title' property

//     const cardImagePlaceholder = document.createElement("img");
//     cardImagePlaceholder.classList.add("card-img-top");
//     cardImagePlaceholder.alt = "Try a new one"; // Set an alternative text for the image

//     // Update the image placeholder with the fetched image URL
//     cardImagePlaceholder.src = data.image_url; // Assuming the API response includes an 'imageUrl' property

//     cardBody.appendChild(cardTitle);
//     cardBody.appendChild(cardImagePlaceholder);

//     card.appendChild(cardBody);

//     const cardContainer = document.getElementById("card-container");
//     cardContainer.appendChild(card);
//   });

// fetch("https://api.punkapi.com/v2/beers/random")
//   .then((response) => response.json())
//   .then((response) => {
//     console.log(response);
//     for (let i = 0; i < 3; i++) {
//       document.getElementById("tags" + i).innerHTML = response[i].tags;
//       //   const quote = document.getElementById("quote" + i);
//       //   quote.innerHTML = response[i].content;
//       //   console.log(quote);
//       document.getElementById("name" + i).innerHTML = response[i].name;
//       document.getElementById("description" + i).innerHTML =
//         response[i].description;
//       document.getElementById("image" + i).innerHTML = response[i].image_url;
//     }
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// function generateCards() {
//   const container = document.getElementById("row");
//   punkData.forEach(function (punkData) {
//     const card = document.createElement("div");
//     card.classList.add("card");
//     card.setAttribute("style", "width: 18rem"); //"width: 18rem" "col-sm-6"
//     container.appendChild(card);
//     const img = document.createElement("img");
//     img.classList.add("card-img-top");
//     img.setAttribute("src", punkData.image_url);
//     const body = document.createElement("div");
//     body.classList.add("card-body");
//     card.append(img, body);
//     const title = document.createElement("h5");
//     title.classList.add("card-title");
//     title.innerText = punkData.name;
//     const paragraph = document.createElement("p");
//     paragraph.classList.add("card-description");
//     paragraph.innerText = punkData.description;
//     const link = document.createElement("a");
//     link.setAttribute("href", "name.html?code=" + punkData.name);
//     link.classList.add("btn");
//     link.classList.add("btn-primary");
//     link.innerText = "More Information";
//     body.append(title, paragraph, link);
//   });
// }

//
//
//
//
//

const cardData = [];
for (let i = 0; i < 3; i++) {
  fetch("https://api.punkapi.com/v2/beers/random");
}

function fetchData() {
  fetch()
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    });
}
