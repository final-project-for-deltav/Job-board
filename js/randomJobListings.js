'use strict';

function randomJob(jobs) {
  var randomNum = Math.ceil(Math.random() * jobs.length);
  return jobs[randomNum];
}

function createEl(tag) {
  return document.createElement(tag);
}

function createJobCard() {
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
  var link = createEl('a');
  var ad = createEl('i');
  ad.className = 'fas fa-ad';
}

function renderJobCard() {

}