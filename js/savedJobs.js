function addheart() {
  var heart = document.createElement('i');
  heart.className = 'fas fa-heart';
  var hearts = document.getElementsByClassName('fa-heart');
  var cardBacks = document.getElementsByClassName('card-back');
  var hearts = document.getElementsByClassName('fa-heart');

//   console.log(cards);
  for (var i = 0; i < cardBacks.length; i++) {
    cardBacks[i].appendChild(heart.cloneNode(true));
    hearts[i].addEventListener('click', savedJobHandler);
  }
}

addheart();


var savedJobs = JSON.parse(localStorage.getItem('savedJobs')) || [];

function savedJobHandler(e) {
  // var x = document.getElementById("i").parentNode.nodeName;
  var index = e.target.parentNode.parentNode.getAttribute('data-_id');
  if (!savedJobs.includes(Job.all[index])) {
    savedJobs.push(Job.all[index]);
    localStorage.setItem('savedJobs', JSON.stringify(savedJobs));
  }
  console.log(savedJobs);







