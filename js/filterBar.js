'use strict';

// GRAB THE filter-by__city ELEMENT AND ASSIGN IT TO filterByCity
var filterByCity = document.getElementById("filter-by__city").addEventListener("change", filterByCityHandler);
// ADD change EVENT LISTENER TO TRIGGER filterByCityHandler


// CREATE filterByCityHandler
function filterByCityHandler(event){
  var x = document.getElementById("filter-by__city");
  var selectedCity = x.options[x.selectedIndex].text;
  var allCards = Object.values(document.getElementsByClassName('city'));
  var cardsWithSelectedCity;
    if (selectedCity !== 'All') {
      cardsWithSelectedCity = allCards.filter(card => card.innerText === selectedCity);
      for (var i = 0; i < allCards.length; i++) {
        if (!cardsWithSelectedCity.includes(allCards[i])) {
          allCards[i].parentNode.parentNode.parentNode.classList.add('hide');
        }
        else {
         allCards[i].parentNode.parentNode.parentNode.classList.remove('hide');
        }
      }
    }
    else {
      for (var i = 0; i < allCards.length; i++) {
      allCards[i].parentNode.parentNode.parentNode.classList.remove('hide');
    }
  }
}
  // GRAB THE filterByCity SELECTED OPTION TEXT AND ASSIGN TO selectedCity
  // GRAB ALL ELEMENTS ON THE PAGE WITH CLASS city AND ASSIGN TO allCards
  // DECLARE cardsWithSelectedCity
  // CHECK IF selectedCity DOESN'T EQUAL 'All'
    // filter allCards WHERE card.innerText === selectedCity AND ASSIGN TO cardsWithSelectedCity
    // LOOP OVER allCards ARRAY
      // IF cardsWithSelectedCity DOESN'T HAVE card IN allCards
        // ADD CLASS 'hide' TO THE card's card-container PARENT
      // OTHERWISE
        // REMOVE CLASS 'hide' FROM THE card's card-container PARENT
    // IF selectedCity EQUALS 'All'
    // LOOP OVER allCards ARRAY
      // REMOVE CLASS 'hide' FROM THE card's card-container PARENT