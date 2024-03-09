

function searchCity(city) {
    let apiKey = "dfd0t6478f0367aa31fdf9o1c7ab1790";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    console.log(apiUrl); 
}

function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchInput.value;
}

let searchForElement = document.querySelector(".search-form");
searchForElement.addEventListener("submit", handleSearchSubmit);
