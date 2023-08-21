const themeBtn = document.querySelector(".header__theme");
const list = document.querySelector(".main__list");

// themeBtn.addEventListener("click", () => {
//   document.body.classList.toggle("dark");
// });

const renderCountries = (array) => {
  array.forEach((element) => {
    const li = document.createElement("li");
    li.classList.add("main__item");

    const img = document.createElement("img");
    img.setAttribute("src", `/img/${element.img}`);
    img.classList.add("item__img");

    const h3 = document.createElement("h3");
    h3.classList.add("item__title");
    h3.textContent = element.name;

    const div = document.createElement("div");
    div.classList.add("item__textbox");

    const population = document.createElement("p");
    population.classList.add("item__population");
    population.innerHTML = `<strong>Population:</strong> ${element.population}`;

    const region = document.createElement("p");
    region.classList.add("item__region");
    region.innerHTML = `<strong>Region:</strong> ${element.region}`;

    const capital = document.createElement("p");
    capital.classList = document.createElement("p");
    capital.innerHTML = `<strong>Capital:</strong> ${element.capital}`;

    div.append(population, region, capital);
    li.append(img, h3, div);
    list.append(li);
  });
};

renderCountries(countries);

if (localStorage.getItem("mode") == "dark") {
  darkMode();
} else {
  noDark();
}

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    darkMode();
  } else {
    noDark();
  }
});

function darkMode() {
  document.body.classList.add("dark");
  localStorage.setItem("mode", "dark");
}

function noDark() {
  document.body.classList.remove("dark");
  localStorage.setItem("mode", "light");
}
