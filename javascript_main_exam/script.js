const view = document.getElementById("display");
const input = document.getElementById("input");
const search = document.getElementById("search");
const favorite = document.getElementById("favorite");

let allCountries = [];
let favorites = [];

function fetchData() {
  fetch("https://restcountries.com/v3.1/all?fields=name,capital,flags,currencies")
    .then((res) => res.json())
    .then((data) => {
      allCountries = data;
      display(allCountries);
    });
}

function display(data) {
  view.innerHTML = "";
  data.forEach((country) => {
    const col = document.createElement("div");
    col.className = "col-md-4";

    const card = document.createElement("div");
    card.className = "card p-2 h-100";

    const img = document.createElement("img");
    img.src = country.flags.png;
    img.alt = country.name.common;
    img.className = "card-img-top";

    const body = document.createElement("div");
    body.className = "card-body";

    const title = document.createElement("h5");
    title.textContent = country.name.common;
    title.className = "card-title";

    const capital = document.createElement("p");
    capital.textContent = "Capital: " + country.capital;
    capital.className = "card-text";

    const btn = document.createElement("button");
    btn.className = "btn btn-success mt-2";
    btn.textContent = "Add to Favorite";
    btn.onclick = () => add(country);

    body.appendChild(title);
    body.appendChild(capital);
    body.appendChild(btn);
    card.appendChild(img);
    card.appendChild(body);
    col.appendChild(card);
    view.appendChild(col);
  });
}

function renderFavorites() {
  favorite.innerHTML = "";
  favorites.forEach((country) => {
    const div = document.createElement("div");
    div.className = "fav-card";

    const name = document.createElement("h5");
    name.textContent = country.name.common;

    const img = document.createElement("img");
    img.src = country.flags.png;
    img.alt = country.name.common;
    img.style.width = "100%";
    img.style.height = "auto";
    img.classList.add("mb-2");

    const capital = document.createElement("p");
    capital.textContent = "Capital: " + country.capital;

    const btn = document.createElement("button");
    btn.textContent = "Remove";
    btn.className = "btn btn-danger btn-sm mt-2";
    btn.onclick = () => remove(country);

    div.appendChild(name);
    div.appendChild(img);
    div.appendChild(capital);
    div.appendChild(btn);

    favorite.appendChild(div);
  });
}

function add(country) {
  if (favorites.some(fav => fav.name.common === country.name.common)) {
    alert("Already in favorites!");
    return;
  }
  favorites.push(country);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  renderFavorites();
}

function remove(country) {
  favorites = favorites.filter(fav => fav.name.common !== country.name.common);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  renderFavorites();
}

search.addEventListener("click", () => {
  const value = input.value.trim().toLowerCase();
  if (value === "") {
    display(allCountries);
    return;
  }
  const filtered = allCountries.filter((country) =>
    country.name.common.toLowerCase().includes(value)
  );
  if (filtered.length === 0) {
    view.innerHTML = `<h3 class="text-danger">No matching country found!</h3>`;
  } else {
    display(filtered);
  }
  input.value = "";
});

if (localStorage.getItem("favorites")) {
  favorites = JSON.parse(localStorage.getItem("favorites"));
  renderFavorites();
}

fetchData();
