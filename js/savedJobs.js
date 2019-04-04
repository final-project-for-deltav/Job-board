var savedjobs = [];

function addheart() {
  var heart = document.createElement('i');
  heart.className = 'fas fa-heart fa-2x';
  hearts = document.getElementsByClassName("fa-heart")
  hearts[i].addEventListener('click', savedJobHandler);
  var cardBacks = document.getElementsByClassName('card-back');
  console.log(cards);
  for (var i = 0; i < cards.length; i++) {
    cards[i].appendChild(heart.cloneNode(true));
  }
} 

addheart();

var savedjobs = [];

function savedJobHandler(e) {
  var kippy = e.target.parentNode
  var index = parseInt(kippy.getAttribute('data-_id'))
  Job.all[index]
};