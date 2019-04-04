'use strict';

var filterByCity = document.getElementById('filter-by__city');
filterByCity.addEventListener('change', filterByCityHandler);

// CREATE filterByCityHandler
function filterByCityHandler(event){
  var selectedCity = filterByCity.options[filterByCity.selectedIndex].text;
  var allCards = Object.values(document.getElementById('job-cards').getElementsByClassName('city'));
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