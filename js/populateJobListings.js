'use strict';

function randomJob(jobs) {
  var randomNum = Math.floor(Math.random() * jobs.length);
  return jobs[randomNum];
}

function createEl(tag) {
  return document.createElement(tag);
}

function createJobCard(parent, title, name, loc, pay, desc, link) {
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
  var jobSummary = createEl('p');
  var jobLink = createEl('a');
  jobLink.setAttribute('href', link);
  var ad = createEl('i');
  ad.className = 'fas fa-ad';

  jobTitle.innerText = title;
  companyName.innerText = name;
  location.innerText = loc;
  compensation.innerText = pay;
  jobSummary.innerText = desc;
  jobLink.innerText = 'Apply Here';

  parentEl.appendChild(div);
  div.appendChild(jobTitle);
  div.appendChild(companyName);
  div.appendChild(locationDiv);
  locationDiv.appendChild(mapMarker);
  locationDiv.appendChild(location);
  div.appendChild(compensation);
  div.appendChild(jobSummary);
  div.appendChild(jobLink);
  if (parent === 'sponsored-cards') {
    div.appendChild(ad);
  }
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
  console.log(jobs);
  jobs.sort(function(a, b) { return new Date(b.date) - new Date(a.date); });
  console.log(jobs);
  for (var i = 0; i < jobs.length; i++) {
    createJobCard(sponsored ? 'sponsored-cards' : 'job-cards', jobs[i].jobTitle, jobs[i].companyName, jobs[i].location, jobs[i].compensation, jobs[i].jobSummary, jobs[i].link);
  }
}

renderJobCards(true);
renderJobCards(false);