'use strict';

function Job(companyName, jobTitle, compensation, sponsored, location, jobSummary, link, aboutCompany) {
  this.companyName = companyName,
  this.jobTitle = jobTitle,
  this.compensation = compensation,
  this.sponsored = sponsored,
  this.location = location,
  this.jobSummary = jobSummary,
  this.aboutCompany = aboutCompany,
  this.link = link,
  Job.all.push(this);
}

Job.all = localStorage['Job.all'] ? JSON.parse(localStorage['Job.all']) : [];

if (Job.all.length < 1) {
  var reliantEnergy = new Job(
    'Reliant Energy',
    'Entry Level Web Developer',
    '$65,000',
    false,
    'Iowa City',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum porta massa, eget placerat risus dapibus vitae. In volutpat aliquam neque, at interdum elit porttitor a. Phasellus id posuere.',
    'https://reliantenergy.com',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum porta massa, eget placerat risus dapibus vitae. In volutpat aliquam neque, at interdum elit porttitor a. Phasellus id posuere.'
  );

  var redToad = new Job(
    'Red Toad Dynamic Marketing',
    'Entry Level Web Developer',
    '$70,000',
    true,
    'Cedar Rapids',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum porta massa, eget placerat risus dapibus vitae. In volutpat aliquam neque, at interdum elit porttitor a. Phasellus id posuere.',
    'https://redtoad.com',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum porta massa, eget placerat risus dapibus vitae. In volutpat aliquam neque, at interdum elit porttitor a. Phasellus id posuere.'
  );

  var kornellCollege = new Job(
    'Kornell College',
    'Full Time Web Developer',
    '$60,000',
    false,
    'Cedar Rapids',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum porta massa, eget placerat risus dapibus vitae. In volutpat aliquam neque, at interdum elit porttitor a. Phasellus id posuere.',
    'https://kornellcollege.com',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum porta massa, eget placerat risus dapibus vitae. In volutpat aliquam neque, at interdum elit porttitor a. Phasellus id posuere.'
  );

  var greenCompass = new Job(
    'Green Compass',
    'Front-End Web Developer',
    '$60,000',
    false,
    'Des Moines',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum porta massa, eget placerat risus dapibus vitae. In volutpat aliquam neque, at interdum elit porttitor a. Phasellus id posuere.',
    'https://greencompass.com',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum porta massa, eget placerat risus dapibus vitae. In volutpat aliquam neque, at interdum elit porttitor a. Phasellus id posuere.'
  );
  var maxAmericanEnergy = new Job(
    'Max American Energy',
    'Software Engineer',
    '$72,000',
    false,
    'Des Moines',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum porta massa, eget placerat risus dapibus vitae. In volutpat aliquam neque, at interdum elit porttitor a. Phasellus id posuere.',
    'https://reliantenergy.com',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum porta massa, eget placerat risus dapibus vitae. In volutpat aliquam neque, at interdum elit porttitor a. Phasellus id posuere.'
  );

  var DeltaZ = new Job(
    'DeltaZ',
    'Teacher Assistant',
    '50,000',
    false,
    'Cedar Rapids',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    'https://www.google.com',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
  );

  var NewMarket = new Job(
    'NewMarket',
    'Director Of Marketing',
    '80,000',
    true,
    'Cedar Rapids',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan placerat eros, et finibus diam hendrerit quis. Sed quam nunc, lobortis id.',
    'https://www.google.com',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan placerat eros, et finibus diam hendrerit quis. Sed quam nunc, lobortis id.'
  );

  var Acme = new Job(
    'Acme',
    'UX Designer',
    '45,000',
    false,
    'Cedar Rapids',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan placerat eros, et finibus diam hendrerit quis. Sed quam nunc, lobortis id.',
    'https://www.google.com',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan placerat eros, et finibus diam hendrerit quis. Sed quam nunc, lobortis id.'
  );

  var HelloFresh = new Job(
    'HelloFresh',
    'Administrative Assistant',
    '61,000',
    true,
    'Iowa City',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum laoreet libero, et posuere.',
    'https://www.google.com',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum laoreet libero, et posuere.'
  );

  var Zappy = new Job(
    'Zappy',
    'Recruiter',
    '83,000',
    true,
    'Des Moines',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum laoreet libero, et posuere.',
    'https://www.google.com',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum laoreet libero, et posuere.'
  );
}