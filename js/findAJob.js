'use strict';

var findAJobButton = document.getElementById('find-a-job');
findAJobButton.addEventListener('click', scrollToJobs);

function scrollToJobs() {
  var jobSectionStart = document.getElementById('job-section-start');
  jobSectionStart.scrollIntoView();
}