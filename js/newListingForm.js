'use strict';

var postJobForm = document.getElementById('post-job-form');

function collectFormData() {
  var data = [
    document.getElementById('company-name').value,
    document.getElementById('job-title').value,
    '$' + parseFloat(document.getElementById('compensation-amount').value).toFixed(2) + ' ' + document.getElementById('compensation-frequency').value,
    document.getElementById('sponsored').checked,
    document.getElementById('city').value,
    document.getElementById('job-summary').value,
    document.getElementById('application-link').value,
    document.getElementById('about-company').value
  ];
  return data;
}

function formHandler(e) {
  e.preventDefault();
  var newJobData = collectFormData();
  new Job(...newJobData);
  localStorage['Job.all'] = JSON.stringify(Job.all);
  postJobForm.reset();
}

postJobForm.addEventListener('submit', formHandler);