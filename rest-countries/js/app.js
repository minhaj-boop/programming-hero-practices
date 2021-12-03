const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}

loadCountries();

const displayCountries = countries => {
    console.log(countries);

    const container = document.getElementById('countries');
    const countryHTML = countries.map(country => getCountryHTML(country));
    container.innerHTML = countryHTML.join(' ');
}

const getCountryHTML = country => {
    // {{common: country.name.common } capital, svg} = country;
    return `
        <div class="country">
            <h2>${country.name.common}</h2>
            <h4>${country.capital}</h4>
            <img src="${country.flags.svg}">
        </div>
    `
}