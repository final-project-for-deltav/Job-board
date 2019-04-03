var savedjobs = [];



function addheart() {
  var heart = document.createElement('i');
  heart.className = 'fas fa-heart fa-2x';
  var hearts = document.getElementsByClassName('fa-heart');
  var cards = document.getElementsByClassName('card');

//   console.log(cards);
  for (var i = 0; i < cards.length; i++) {
    cards[i].appendChild(heart.cloneNode(true));
    hearts[i].addEventListener('click', savedJobHandler);
  }
}

addheart();


var savedjobs = [];

function savedJobHandler(e) {
  // var x = document.getElementById("i").parentNode.nodeName;
  var y = e.target.parentNode.parentNode.getAttribute('data-_id');
  console.log(e.target.parentNode.parentNode.getAttribute('data-_id'));
 
//   savedjobs.push(jobs.id);
}





