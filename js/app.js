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

Job.all = [];

var reliantEnergy = new Job('Reliant Energy', 'Entry Level Web Developer', '$65,000', false, 'Iowa City', 'Reliant Energy is looking for a passionate developer to fill our Full Stack Web Developer role. This position requires a person capable of working in a fast-paced environment as part of a team and can provide creativity and insight to our website development projects.', 'https://reliantenergy.com', 'Reliant Energy is a public utility holding company that incorporated in Milwaukee, Wisconsin in 1978. Reliant Energy generates and distributes electricity as well as transports natural gas in Iowa.');
var redToad = new Job('Red Toad Dynamic Marketing', 'Entry Level Web Developer', '$70,000', true, 'Cedar Rapids', 'Red Toad is seeking an experienced web developer to join our creative team on-site in Waukee, Iowa. Our developers work closely with the designers and project managers to bring the collective vision of the project coordinator, designer, and client to life.', 'https://redtoad.com', 'Red Toad is a digital marketing agency that implements strategies based on the inbound marketing philosophy. We’re a HobSpots Gold partner and ranked in the top 3% of all worldwide HobSpots vendors. Our team consists of some of the most experienced, certified inbound marketers in the business, including web developers, strategists, digital ad specialists, content experts, videographers, and graphic designers.');
var kornellCollege = new Job('Kornell College', 'Full Time Web Developer', '$60,000', false, 'Cedar Rapids', 'Applications are being accepted for a full-time 1.5-year contract web developer. This position will develop and maintain the custom PHP based programming for Kornell College\'s internet and intranet to support the educational and business processes within the college while also interacting with end users to determine program/application requirements and debug existing programs which have reported errors.', 'https://kornellcollege.com', 'Kornell College is committed to fostering a faculty and staff community that reflects its diverse student body. We encourage applications from candidates who share our vision for a campus that embraces differing backgrounds, viewpoints, and identities.');
var greenCompass = new Job('Green Compass', 'Front-End Web Developer', '$60,000', false, 'Des Moines', 'Do you take pride in pushing the boundaries of web design and development? Green Compass is seeking an experienced front-end web developer who is an expert in building responsive websites and web applications using Javascript, HTML5 and CSS', 'https://greencompass.com', 'We are a team of leading digital experts helping brands succeed online through award-winning web design, development and marketing. Based in Des Moines, Iowa, we design websites that boost traffic and conversions, while providing SEO, social media marketing and content marketing that engages your audience.');
var maxAmericanEnergy = new Job('Max American Energy', 'Software Engineer', '$72,000', false, 'Des Moines', 'The software engineer intern participates in the design, programming, testing, documentation, implementation, and support of computer applications and systems.', 'https://reliantenergy.com', 'Max American Energy Company is an energy company based in Des Moines, Iowa. Its service area includes almost two-thirds of Iowa, as well as portions of Illinois, South Dakota, and Nebraska.');
var DeltaZ = new Job('DeltaZ', 'Teacher Assistant', '50,000', false, 'Cedar Rapids', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', 'https://www.google.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam');
var NewMarket = new Job('NewMarket', 'Director Of Marketing', '80,000', true, 'Cedar Rapids', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', 'https://www.google.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam');
var Acme = new Job('Acme', 'UX Designer', '45,000', false, 'Cedar Rapids', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', 'https://www.google.com', '...');
var HelloFresh = new Job('HelloFresh', 'Administrative Assistant', '61,000', true, 'Iowa City', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', 'https://www.google.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam');
var Zappy = new Job('Zappy', 'Recruiter', '83,000', true, 'Des Moines', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', 'https://www.google.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam');







































































