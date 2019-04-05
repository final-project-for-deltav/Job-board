'use strict';

function Job(companyName, jobTitle, compensation, sponsored, location, jobSummary, link, aboutCompany, reimbursement) {
  this._id = Job.all.length,
  this.companyName = companyName,
  this.jobTitle = jobTitle,
  this.compensation = compensation,
  this.reimbursement = reimbursement,
  this.sponsored = sponsored,
  this.location = location,
  this.jobSummary = jobSummary,
  this.aboutCompany = aboutCompany,
  this.link = link,
  this.date = new Date(),
  Job.all.push(this);
}

Job.all = localStorage['Job.all'] ? JSON.parse(localStorage['Job.all']) : [];

if (Job.all.length < 1) {
  var reliantEnergy = new Job(
    'Reliant Energy',
    'Entry Level Web Developer',
    '$65000.00 yearly',
    false,
    'Iowa City',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'https://reliantenergy.com',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    '$10000.00 yearly'
  );

  var redToad = new Job(
    'Red Toad Dynamic Marketing',
    'Entry Level Web Developer',
    '$70000.00 monthly',
    true,
    'Cedar Rapids',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum porta massa, eget placerat risus dapibus vitae. In volutpat aliquam neque, at interdum elit porttitor a. Phasellus id posuere.',
    'https://redtoad.com',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum porta massa, eget placerat risus dapibus vitae. In volutpat aliquam neque, at interdum elit porttitor a. Phasellus id posuere.',
    '$500.00 once'
  );

  var kornellCollege = new Job(
    'Kornell College',
    'Full Time Web Developer',
    '$60000.00 yearly',
    false,
    'Cedar Rapids',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum porta massa, eget placerat risus dapibus vitae. In volutpat aliquam neque, at interdum elit porttitor a. Phasellus id posuere.',
    'https://kornellcollege.com',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum porta massa, eget placerat risus dapibus vitae. In volutpat aliquam neque, at interdum elit porttitor a. Phasellus id posuere.',
    '$1000.00 monthly'
  );

  var greenCompass = new Job(
    'Green Compass',
    'Front-End Web Developer',
    '$60000.00 yearly',
    false,
    'Des Moines',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum porta massa, eget placerat risus dapibus vitae. In volutpat aliquam neque.',
    'https://greencompass.com',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum porta massa, eget placerat risus dapibus vitae. In volutpat aliquam neque.',
    '$10000.00 monthly'
  );
  var maxAmericanEnergy = new Job(
    'Max American Energy',
    'Software Engineer',
    '$72000.00 yearly',
    false,
    'Des Moines',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum porta massa, eget placerat risus dapibus vitae. In volutpat aliquam neque, at interdum elit porttitor a. Phasellus id posuere.',
    'https://reliantenergy.com',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum porta massa, eget placerat risus dapibus vitae. In volutpat aliquam neque, at interdum elit porttitor a. Phasellus id posuere.',
    '$10000.00 once'
  );

  var DeltaZ = new Job(
    'DeltaZ',
    'Teacher Assistant',
    '$50000.00 yearly',
    false,
    'Cedar Rapids',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    'https://www.google.com',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    '$10000.00 yearly'
  );

  var NewMarket = new Job(
    'NewMarket',
    'Director Of Marketing',
    '$80000.00 yearly',
    true,
    'Cedar Rapids',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan placerat eros, et finibus diam hendrerit quis. Sed quam nunc, lobortis id.',
    'https://www.google.com',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan placerat eros, et finibus diam hendrerit quis. Sed quam nunc, lobortis id.',
    '$10000.00 yearly'
  );

  var Acme = new Job(
    'Acme',
    'UX Designer',
    '$45000.00 yearly',
    false,
    'Cedar Rapids',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan placerat eros, et finibus diam hendrerit quis. Sed quam nunc, lobortis id.',
    'https://www.google.com',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan placerat eros, et finibus diam hendrerit quis. Sed quam nunc, lobortis id.',
    '$10000.00 yearly'
  );

  var HelloFresh = new Job(
    'HelloFresh',
    'Administrative Assistant',
    '$61000.00 yearly',
    true,
    'Iowa City',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum laoreet libero, et posuere.',
    'https://www.google.com',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum laoreet libero, et posuere.',
    '$10000.00 yearly'
  );

  var Zappy = new Job(
    'Zappy',
    'Recruiter',
    '$83000.00 yearly',
    true,
    'Des Moines',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum laoreet libero, et posuere.',
    'https://www.google.com',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum laoreet libero, et posuere.',
    '$10000.00 yearly'
  );
}