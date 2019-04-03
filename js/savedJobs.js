var savedjobs = [];



function addheart() {
  var heart = document.createElement('i');
  heart.className = 'fas fa-heart fa-2x';
//   heart.addEventListener('click', savedJobHandler);
  var cards = document.getElementsByClassName('card');

  console.log(cards);
  for (var i = 0; i < cards.length; i++) {
    cards[i].appendChild(heart.cloneNode(true));

  }
}

addheart();




//when the heart is clicked 

// var savedjobs = [];

// savedJobHandler(e) {
//     savedjobs.push();
// }





