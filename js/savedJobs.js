var savedJobs = localStorage['savedJobs'] ? JSON.parse(localStorage['savedJobs']) : [];

function addheart() {
  var heart = document.createElement('i');
  heart.className = 'fas fa-heart fa-2x';
  var cardBacks = document.getElementsByClassName('card-back');
  var cardFronts = document.getElementsByClassName('card-front');
  for (var i = 0; i < cardBacks.length; i++) {
    heart.classList.add('heart-back');
    heart.classList.remove('heart-front');
    cardBacks[i].appendChild(heart.cloneNode(true));
    heart.classList.add('heart-front');
    heart.classList.remove('heart-back');
    cardFronts[i].appendChild(heart.cloneNode(true));
  }
  var hearts = Object.values(document.getElementsByClassName('fa-heart'));
  for (var i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener('click', savedJobHandler);
  }
}

addheart();

function checkSavedJobs() {
  var hearts = Object.values(document.getElementsByClassName('fa-heart'));
  hearts.forEach(function(heart) {
    var index = parseInt(heart.parentNode.parentNode.getAttribute('data-_id'));
    for (var job of savedJobs) {
      if (job._id === index) {
        heart.classList.add('saved');
      }
    }
  });
}

checkSavedJobs();

function savedJobHandler(e) {
  if (e.target.classList.contains('saved')) {
    e.target.classList.remove('saved');
    e.target.parentNode.previousSibling.getElementsByClassName('heart-front')[0].classList.remove('saved');
  } else {
    e.target.classList.add('saved');
    e.target.parentNode.previousSibling.getElementsByClassName('heart-front')[0].classList.add('saved');
  }
  var index = e.target.parentNode.parentNode.getAttribute('data-_id');
  if (e.target.classList.contains('saved')) {
    if (!savedJobs.includes(Job.all[index])) {
      savedJobs.push(Job.all[index]);
      localStorage.setItem('savedJobs', JSON.stringify(savedJobs));
    }
  } else {
    var updatedSavedJobs = savedJobs.filter(job => savedJobs.indexOf(job) !== savedJobs.indexOf(Job.all[index]));
    savedJobs = updatedSavedJobs;
    localStorage.setItem('savedJobs', JSON.stringify(updatedSavedJobs));
  }
}

function renderSavedJobs() {
  var jobsDiv = document.getElementById('saved-jobs');
  if (jobsDiv) {
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
      location.innerText = savedJobs[i].location + ', IA';

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
}
renderSavedJobs();

