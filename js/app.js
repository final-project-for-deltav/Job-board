"use strict";

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


