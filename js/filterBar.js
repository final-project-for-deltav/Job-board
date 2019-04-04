'use strict';

// GRAB THE filter-by__city ELEMENT AND ASSIGN IT TO filterByCity
// ADD change EVENT LISTENER TO TRIGGER filterByCityHandler

// CREATE filterByCityHandler
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