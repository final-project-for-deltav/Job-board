function addheart() {
  var heart = document.createElement('i');
  heart.className = 'fas fa-heart fa-2x';
  var cards = document.getElementsByClassName('card');
  var hearts = document.getElementsByClassName('fa-heart');

  for (var i = 0; i < cards.length; i++) {
    cards[i].appendChild(heart.cloneNode(true));
    hearts[i].addEventListener('click', savedJobHandler);
  }
}

addheart();


var savedjobs = [];

function savedJobHandler(e) {
  
}





