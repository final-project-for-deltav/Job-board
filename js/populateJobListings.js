'use strict';

function randomJob(jobs) {
  var randomNum = Math.floor(Math.random() * jobs.length);
  return jobs[randomNum];
}

function createEl(tag) {
  return document.createElement(tag);
}

function createJobCardDiv(parent, jobs, iterator) {
  var parentEl = document.getElementById(parent);
  var div = createEl('div');
  div.className = 'card-container';
  div.setAttribute('data-_id', jobs[iterator]._id);
  parentEl.appendChild(div);

  createJobCardFace(div.getAttribute('data-_id'), jobs[iterator].jobTitle, jobs[iterator].companyName, jobs[iterator].location, jobs[iterator].compensation, jobs[iterator].reimbursement);
  createJobCardBack(div.getAttribute('data-_id'), jobs[iterator].jobSummary, jobs[iterator].link);
}

function createJobCardFace(parent, title, name, loc, pay, reimbursementAmount) {
  var elements = document.querySelectorAll(`[data-_id='${parent}']`);
  var parentEl = elements[elements.length - 1];
  var cardFace = createEl('div');
  cardFace.className = 'card shadow card-front';
  var jobTitle = createEl('h1');
  var companyName = createEl('h2');
  var locationDiv = createEl('div');
  var location = createEl('h2');
  location.className = 'city';
  var mapMarker = createEl('i');
  mapMarker.className = 'fas fa-map-marker-alt';
  var compensation = createEl('p');
  compensation.className = 'pay';
  var reimbursement = createEl('p');
  reimbursement.className = 'pay';
  var ad = createEl('i');
  ad.className = 'fas fa-ad';

  jobTitle.innerText = title;
  companyName.innerText = name;
  location.innerText = loc;
  compensation.innerText = `Compensation: ${pay}`;
  reimbursement.innerText = `Loan Reimbursement: ${reimbursementAmount}`;

  parentEl.appendChild(cardFace);
  cardFace.appendChild(jobTitle);
  cardFace.appendChild(companyName);
  cardFace.appendChild(locationDiv);
  locationDiv.appendChild(mapMarker);
  locationDiv.appendChild(location);
  cardFace.appendChild(compensation);
  cardFace.appendChild(reimbursement);
  if (parentEl.parentNode.id === 'sponsored-cards') {
    cardFace.appendChild(ad);
  }
}

function createJobCardBack(parent, desc, link) {
  var elements = document.querySelectorAll(`[data-_id='${parent}']`);
  var parentEl = elements[elements.length - 1];
  var cardBack = createEl('div');
  cardBack.className = 'card shadow card-back';
  var jobDutiesHeading = createEl('h3');
  jobDutiesHeading.classList.add('job-duties-heading');
  var jobSummary = createEl('p');
  var jobLink = createEl('a');
  jobLink.setAttribute('href', link);
  jobLink.setAttribute('target', 'blank');

  jobDutiesHeading.innerText = 'Position Summary';
  jobSummary.innerText = desc;
  jobLink.innerText = 'Apply Here';

  parentEl.appendChild(cardBack);
  cardBack.appendChild(jobDutiesHeading);
  cardBack.appendChild(jobSummary);
  cardBack.appendChild(jobLink);
}

function renderJobCards(sponsored) {
  var jobs = sponsored ? [] : Job.all;
  if (sponsored) {
    while (jobs.length < 3) {
      var job = randomJob(Job.all);
      if (!jobs.includes(job) && job.sponsored) {
        jobs.push(job);
      }
    }
  }
  jobs.sort(function(a, b) { return new Date(b.date) - new Date(a.date); });
  for (var i = 0; i < jobs.length; i++) {
    createJobCardDiv(sponsored ? 'sponsored-cards' : 'job-cards', jobs, i);
  }
  if (sponsored) {
    var cardContainers = Object.values(document.getElementsByClassName('card-container'));
    for (var i = 0; i < cardContainers.length; i++) {
      cardContainers[i].classList.add('sponsored-job');
    }
  }
}

renderJobCards(true);
renderJobCards(false);