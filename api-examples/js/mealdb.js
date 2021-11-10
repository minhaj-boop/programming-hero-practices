const alert = document.getElementById('alert');
const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value = '';
    // const alert = document.getElementById('alert');
    if(searchText == '') {
        alert.textContent ='';
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="alert alert-warning d-flex align-items-center" role="alert">
            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use       xlink:href="#exclamation-triangle-fill"/></svg>
            <div>
                please write someting to search!
            </div>
        </div>
        `;
        alert.appendChild(div);   
    } else {
        alert.textContent ='';
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        // console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals));
    }
}

const displaySearchResult = meals => {
    console.log(meals);
    const searchResult = document.getElementById('search-result');
    // const alert = document.getElementById('alert');
    searchResult.textContent = '';
    if(meals == null) {
        alert.textContent ='';
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="alert alert-warning d-flex align-items-center" role="alert">
            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use       xlink:href="#exclamation-triangle-fill"/></svg>
            <div>
                No search result found!
            </div>
        </div>
        `;
        alert.appendChild(div);
        // console.log(meals.length);
    } else {
        alert.textContent ='';
        meals.forEach(meal => {
            // console.log(meal);
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
            <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                </div>
            </div>
            `;
            searchResult.appendChild(div);
        });
    }
}

const loadMealDetail = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetail(data.meals[0]));
}

const displayMealDetail = meal => {
    console.log(meal);
    const mealDetails = document.getElementById('meal-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
        <div class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
              <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    `;
    mealDetails.appendChild(div);

}
