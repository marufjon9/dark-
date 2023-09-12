const themeBtn = document.querySelector(".header__theme");
const list = document.querySelector(".main__list");
const formInput = document.querySelector(".form__input");
const form = document.querySelector(".main__form");
const select = document.querySelector(".form__select");

const URL = "https://restcountries.com/v3.1/all";

async function getFlags(URL) {
  try {
    const res = await fetch(URL);
    const data = await res.json();
    renderCountries(data);
  } catch (error) {
    console.log(error);
  }
}

getFlags(URL);

const renderCountries = (array) => {
  list.innerHTML = "";
  array.forEach((element) => {
    const li = document.createElement("li");
    li.classList.add("main__item");

    const imgWrapper = document.createElement("div");
    imgWrapper.classList.add("img-wrapper");

    const img = document.createElement("img");
    img.setAttribute("src", `${element.flags.png}`);
    img.classList.add("item__img");

    const h3 = document.createElement("h3");
    h3.classList.add("item__title");
    h3.textContent = element.name.common;

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

    imgWrapper.append(img);

    div.append(population, region, capital);
    li.append(imgWrapper, h3, div);
    list.append(li);
  });
};

// renderCountries(countries);

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
  themeBtn.textContent = "Light Mode";
}

function noDark() {
  document.body.classList.remove("dark");
  localStorage.setItem("mode", "light");
  themeBtn.textContent = "Dark Mode";
}

// form.addEventListener("", function (e) {
//   e.preventDefault();

//   const inputValue = formInput.value.trim();

//   if (inputValue && select) {
//     getFlags(`https://restcountries.com/v3.1/name/${inputValue}`);
//   }
// });

function renderSingle() {
  const inputValue = formInput.value.trim();

  if (inputValue && select) {
    getFlags(`https://restcountries.com/v3.1/name/${inputValue}`);
  }
  if (inputValue == "") {
    getFlags(URL);
  }
}

function single() {
  const selectValue = select.value;

  if (selectValue) {
    getFlags(`https://restcountries.com/v3.1/region/${selectValue}`);
  }
}
