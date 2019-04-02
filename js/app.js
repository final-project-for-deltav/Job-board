'use strict';

function Job(companyName, jobTitle, compensation, sponsored, location, jobSummary, link, aboutCompany) {
    this.companyName = companyName,
    this.jobTitle = jobTitle
    this.compensation = compensation,
    this.sponsored = sponsored,
    this.location = location,
    this.jobSummary = jobSummary,
    this.aboutCompany = aboutCompany,
    this.link = link,
    Job.all.push(this);
};
























































var DeltaZ = new Job ('DeltaZ', 'Teacher Assistant', '50,000', 'false', 'Cedar Rapids', '...', 'https://www.google.com', '...');
var NewMarket = new Job ('NewMarket', 'Director Of Marketing', '80,000', 'true', 'Cedar Rapids', '...', 'https://www.google.com', '...');
var Acme = new Job ('Acme', 'UX Designer', '45,000', 'false', 'Cedar Rapids', '...', 'https://www.google.com', '...');
var HelloFresh = new Job ('HelloFresh', 'Administrative Assistant', '61,000', 'true', 'Iowa City', '...', 'https://www.google.com', '...');
var Zappy = new Job ('Zappy', 'Recruiter', '83,000', 'true', 'Des Moines', '...', 'https://www.google.com', '...');

