'use strict';

function savedJobsCounter() {
  var savedJobs = localStorage['savedJobs'] ? JSON.parse(localStorage['savedJobs']) : [];
  var counter = document.getElementById('saved-jobs-count');
  if (savedJobs !== null && counter !== null) {
    counter.innerText = savedJobs.length;
  }
}

savedJobsCounter();