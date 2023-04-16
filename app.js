(async function () {
    const response = await fetch("./data.json");
    const movies = await response.json();
 

    const inputElem = document.getElementById("dbGenre");
    const yearElem = document.getElementById("dbYear");
    const languageElem = document.getElementById("dbLanguage");
    const ratingElem = document.getElementById("dbRating");
    const listElem = document.getElementById("movies-list");



    // Display Genres

    function displaySearchResults (results) {
       listElem.innerHTML = "";
        results.forEach(function (movie) {
            const tr = document.createElement("tr");    
        //const tr = document.createElement("tr");
     const listItem = `
     <td class="rank">${movie.vote_count} </td>
     
     <td class="title"><img class="img1" src="https://image.tmdb.org/t/p/w45${movie.poster_path}"/> ${movie.title} </td>
     <td class="year">${movie.release_date} </td>
     `;
     tr.innerHTML = listItem;
          //tr.innerHTML = movie.title;

          listElem.appendChild(tr);
        })
      }
    
    // Genres
function search(){
    const query = inputElem.value;
    const results = movies.filter(function (movie) {
        return movie.genres.includes(query);
    });
    displaySearchResults(results);
}


// Display Language
function displayLanguageResults (resultsLanguage) {
    listElem.innerHTML = "";
     resultsLanguage.forEach(function (movie) {
         const tr = document.createElement("tr");    
     //const tr = document.createElement("tr");
  const listItem = `
  <td class="rank">${movie.vote_count} </td>
  
  <td class="title"><img class="img1" src="https://image.tmdb.org/t/p/w45${movie.poster_path}"/> ${movie.title} </td>
  <td class="year">${movie.release_date} </td>
  `;
  tr.innerHTML = listItem;
       //tr.innerHTML = movie.title;

       listElem.appendChild(tr);
     })
   }
function searchLanguage(){
    // Language
    const queryLanguage = languageElem.value;
    const resultsLanguage = movies.filter(function (movie) {
    //     let date = movie.release_date.split("-");
    //     let year = date[0];
    return movie.original_language.includes(queryLanguage);
    

    
    });
    displayLanguageResults(resultsLanguage);
    console.log(resultsLanguage);

}


// Display Rating
function displayRatingResults (resultsRating) {
    listElem.innerHTML = "";
     resultsRating.forEach(function (movie) {
         const tr = document.createElement("tr");    
     //const tr = document.createElement("tr");
  const listItem = `
  <td class="rank">${movie.vote_count} </td>
  
  <td class="title"><img class="img1" src="https://image.tmdb.org/t/p/w45${movie.poster_path}"/> ${movie.title} </td>
  <td class="year">${movie.release_date} </td>
  `;
  tr.innerHTML = listItem;
       //tr.innerHTML = movie.title;

       listElem.appendChild(tr);
     })
   }


// Rating
function searchRating(){
    
    const queryRating = ratingElem.value;
const resultsRating = movies.filter(function (movie) {
 return movie.vote_average == +(queryRating);
   });
displayRatingResults(resultsRating);
   console.log(resultsRating);
}

// Display Year
function displayYearResults (resultsYear) {
    listElem.innerHTML = "";
     resultsYear.forEach(function (movie) {
         const tr = document.createElement("tr");    
     //const tr = document.createElement("tr");
  const listItem = `
  <td class="rank">${movie.vote_count} </td>
  
  <td class="title"><img class="img1" src="https://image.tmdb.org/t/p/w45${movie.poster_path}"/> ${movie.title} </td>
  <td class="year">${movie.release_date} </td>
  `;
  tr.innerHTML = listItem;
       //tr.innerHTML = movie.title;

       listElem.appendChild(tr);
     })
   }





   // Year
 function searchYear(){
    const queryYear = yearElem.value;
     const resultsYear = movies.filter(function (movie) {
         let date = movie.release_date.split("-");
         let year = date[0];
         return year == +(queryYear);
     });
    console.log(resultsYear);
    displayYearResults(resultsYear);
    
    }
    
    



inputElem.addEventListener("change", search);
yearElem.addEventListener("change", searchYear);
languageElem.addEventListener("change", searchLanguage);
ratingElem.addEventListener("change", searchRating);

})();



