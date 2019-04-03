'use strict';

function randomJob(jobs) {
  var randomNum = Math.floor(Math.random() * jobs.length);
  return jobs[randomNum];
}

function createEl(tag) {
  return document.createElement(tag);
}

function createJobCardFace(parent, _id, title, name, loc, pay) {
  var parentEl = document.getElementById(parent);
  var div = createEl('div');
  div.className = 'card shadow';
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

  div.setAttribute('data-_id', _id);
  jobTitle.innerText = title;
  companyName.innerText = name;
  location.innerText = loc;
  compensation.innerText = pay;

  parentEl.appendChild(div);
  div.appendChild(jobTitle);
  div.appendChild(companyName);
  div.appendChild(locationDiv);
  locationDiv.appendChild(mapMarker);
  locationDiv.appendChild(location);
  div.appendChild(compensation);
  if (parent === 'sponsored-cards') {
    div.appendChild(ad);
  }
  var cardFrontHeight = div.clientHeight;
  div.style.height = `${cardFrontHeight}px`;
}

function createJobCardBack(parent, _id, desc, link) {
  var parentEl = document.getElementById(parent);
  var div = createEl('div');
  div.className = 'card shadow';
  var jobSummary = createEl('p');
  var jobLink = createEl('a');
  jobLink.setAttribute('href', link);
  jobLink.setAttribute('target', 'blank');

  div.setAttribute('data-_id', _id);
  var cardFronts = document.querySelectorAll(`[data-_id='${_id}']`);
  var currentCardFront = cardFronts[cardFronts.length - 1];
  var cardFrontHeight = currentCardFront.clientHeight;
  div.style.height = `${cardFrontHeight}px`;
  div.style.backfaceVisibility = 'hidden';
  div.style.WebkitBackfaceVisibility = 'hidden';
  if (parent === 'sponsored-cards') {
    div.style.transform = `translateY(-${parentEl.clientHeight}px) rotateY(180deg)`;
  } else {
    div.style.transform = `translateY(-${(cardFrontHeight + 15)}px) rotateY(180deg)`;
  }

  jobSummary.innerText = desc;
  jobLink.innerText = 'Apply Here';

  parentEl.appendChild(div);
  div.appendChild(jobSummary);
  div.appendChild(jobLink);
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
    createJobCardFace(sponsored ? 'sponsored-cards' : 'job-cards', jobs[i]._id, jobs[i].jobTitle, jobs[i].companyName, jobs[i].location, jobs[i].compensation);
    createJobCardBack(sponsored ? 'sponsored-cards' : 'job-cards', jobs[i]._id, jobs[i].jobSummary, jobs[i].link);
  }
}

renderJobCards(true);
renderJobCards(false);