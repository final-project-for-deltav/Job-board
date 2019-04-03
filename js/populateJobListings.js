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

  createJobCardFace(div.getAttribute('data-_id'), jobs[iterator].jobTitle, jobs[iterator].companyName, jobs[iterator].location, jobs[iterator].compensation);
  createJobCardBack(div.getAttribute('data-_id'), jobs[iterator].jobSummary, jobs[iterator].link);
}

function createJobCardFace(parent, title, name, loc, pay) {
  var elements = document.querySelectorAll(`[data-_id='${parent}']`);
  var parentEl = elements[elements.length - 1];
  var cardFace = createEl('div');
  cardFace.className = 'card shadow';
  var jobTitle = createEl('h1');
  var companyName = createEl('h2');
  var locationDiv = createEl('div');
  var location = createEl('h2');
  location.className = 'city';
  var mapMarker = createEl('i');
  mapMarker.className = 'fas fa-map-marker-alt';
  var compensation = createEl('p');
  compensation.className = 'pay';
  var ad = createEl('i');
  ad.className = 'fas fa-ad';

  jobTitle.innerText = title;
  companyName.innerText = name;
  location.innerText = loc;
  compensation.innerText = pay;

  parentEl.appendChild(cardFace);
  cardFace.appendChild(jobTitle);
  cardFace.appendChild(companyName);
  cardFace.appendChild(locationDiv);
  locationDiv.appendChild(mapMarker);
  locationDiv.appendChild(location);
  cardFace.appendChild(compensation);
  if (parent === 'sponsored-cards') {
    cardFace.appendChild(ad);
  }
  var cardFrontHeight = cardFace.clientHeight;
  cardFace.style.height = `${cardFrontHeight}px`;
}

function createJobCardBack(parent, desc, link) {
  var elements = document.querySelectorAll(`[data-_id='${parent}']`);
  var parentEl = elements[elements.length - 1];
  var cardBack = createEl('div');
  cardBack.className = 'card shadow';
  var jobSummary = createEl('p');
  var jobLink = createEl('a');
  jobLink.setAttribute('href', link);
  jobLink.setAttribute('target', 'blank');

  jobSummary.innerText = desc;
  jobLink.innerText = 'Apply Here';

  parentEl.appendChild(cardBack);
  cardBack.appendChild(jobSummary);
  cardBack.appendChild(jobLink);

  var cardFront = cardBack.previousSibling;
  var cardFrontHeight = cardFront.clientHeight;
  cardBack.style.height = `${cardFrontHeight}px`;
  cardBack.style.backfaceVisibility = 'hidden';
  cardBack.style.WebkitBackfaceVisibility = 'hidden';
  cardBack.style.transform = `translateY(-${parent === 'sponsored-cards' ? parentEl.clientHeight : (cardFrontHeight + 15)}px) rotateY(180deg)`;
  parentEl.style.height = `${cardFrontHeight}px`;
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
}

renderJobCards(true);
renderJobCards(false);