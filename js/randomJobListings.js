'use strict';

function randomJob(jobs) {
  var randomNum = Math.ceil(Math.random() * jobs.length);
  return jobs[randomNum];
}

function createEl(tag) {
  return document.createElement(tag);
}

function createJobCard(parent, title, name, loc, pay, desc, link) {
  var parentEl = document.getElementById(parent);
  var div = createEl('div');
  div.className = 'card third shadow';
  var jobTitle = createEl('h1');
  var companyName = createEl('h2');
  var location = createEl('h2');
  location.className = 'city';
  var mapMarker = createEl('i');
  mapMarker.className = 'fas fa-map-marker-alt';
  var compensation = createEl('p');
  compensation.className = 'pay';
  var jobSummary = createEl('p');
  var jobLink = createEl('a');
  var ad = createEl('i');
  ad.className = 'fas fa-ad';

  jobTitle.innerText = title;
  companyName.innerText = name;
  location.appendChild(mapMarker);
  location.innerText = loc;
  compensation.innerText = pay;
  jobSummary.innerText = desc;
  jobLink.innerText = link;

  parentEl.appendChild(div);
  div.appendChild(jobTitle);
  div.appendChild(companyName);
  div.appendChild(location);
  div.appendChild(compensation);
  div.appendChild(jobSummary);
  div.appendChild(jobLink);
  if (parentEl === 'sponsored-cards') {
    div.appendChild(ad);
  }
}

function renderJobCard() {
  
}