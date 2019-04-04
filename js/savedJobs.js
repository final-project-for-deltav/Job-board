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
  // var x = document.getElementById("i").parentNode.nodeName;
  var index = e.target.parentNode.parentNode.getAttribute('data-_id');
  if (!savedJobs.includes(Job.all[index])) {
    savedJobs.push(Job.all[index]);
    localStorage.setItem('savedJobs', JSON.stringify(savedJobs));
  }
}
function renderSavedJobs() {
  var jobsDiv = document.getElementById('saved-jobs');
  for (var i = 0; i < savedJobs.length; i++) {
    var card = document.createElement('div');
    card.className = 'card';
    var cardContentsLeft = document.createElement('div');
    cardContentsLeft.className = 'cardContentsLeft';
    var cardContentsRight = document.createElement('div');
    cardContentsRight.className = 'cardContentsRight';
    var cardContentsFull = document.createElement('div');
    cardContentsFull.className = 'cardContentsFull';
   
    var jobTitle = document.createElement('h1');
    var location = document.createElement('p');
    var companyName = document.createElement('h2');
    var jobLink = document.createElement('a');
    var ellink = savedJobs[i].link;
    var linkIcon = document.createElement('i');
    var jobSummary  = document.createElement('p');
    linkIcon.className = 'fas fa-external-link-alt icon';
    jobLink.setAttribute('href', ellink);
    jobLink.setAttribute('target', 'blank');
    jobLink.innerText= 'Apply at Employers Site';
    jobTitle.innerText = savedJobs[i].jobTitle;
    location.innerText = savedJobs[i].location + ", IA";

    companyName.innerText = savedJobs[i].companyName;
    jobSummary.innerText = savedJobs[i].jobSummary;
    jobsDiv.appendChild(card);
    card.appendChild(cardContentsLeft);
    card.appendChild(cardContentsRight);
    card.appendChild(cardContentsFull);
    cardContentsLeft.appendChild(jobTitle);
    cardContentsLeft.appendChild(location);
    cardContentsLeft.appendChild(companyName);
    cardContentsRight.appendChild(jobLink);
    cardContentsFull.appendChild(jobSummary);
    jobLink.appendChild(linkIcon);
   
  }
}
renderSavedJobs();





