let services = document.getElementById("services");
let servicesContent = document.getElementById("services-content");
let team = document.getElementById("team");
let teamContent = document.getElementById("team-content");

let portfolio = document.getElementById("portfolio");
let portfolioContent = document.getElementById("portfolio-content");

let skills = document.getElementById("skills");
let skillsContent = document.getElementById("skills-content");

let aboutus = document.getElementById("aboutus");
let aboutusContent = document.getElementById("aboutus-content");
let contact = document.getElementById("contact");
let getInTouchContent = document.getElementById("get-in-touch-content");

let flexbox3 = document.getElementById("flexbox3");

/*scrol function */

window.addEventListener("scroll", services_fun);
window.addEventListener("scroll", team_fun);
window.addEventListener("scroll", portfolio_fun);
window.addEventListener("scroll", skills_fun);
window.addEventListener("scroll", about_fun);
window.addEventListener("scroll", get_fun);

function services_fun() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  const serviceStart = servicesContent.getBoundingClientRect().top;
  if (serviceStart < triggerBottom) {
    fromTopServices();
  } else {
    servicesContent.classList.remove("from-top");
  }
}

function team_fun() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  const teamStart = teamContent.getBoundingClientRect().top;
  if (teamStart < triggerBottom) {
    fromTopTeam();
  } else {
    teamContent.classList.remove("from-top");
  }
}
function portfolio_fun() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  const portolioStart = portfolioContent.getBoundingClientRect().top;
  if (portolioStart < triggerBottom) {
    fromTopPortfolio();
  } else {
    portfolioContent.classList.remove("from-top");
  }
}
function skills_fun() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  const skillsStart = skillsContent.getBoundingClientRect().top;
  if (skillsStart < triggerBottom) {
    fromTopSkills();
    circleAnimation();
  } else {
    skillsContent.classList.remove("from-top");
    blueprogressrightprogressbar.classList.remove("prog-left-prog-bar");
    yellowprogressrightprogressbar.classList.remove("prog-left-prog-bar");
    pinkprogressrightprogressbar.classList.remove("prog-left-prog-bar");
    greenprogressrightprogressbar.classList.remove("prog-left-prog-bar");
    blueProgressBar.classList.remove("blue-progress-bar");
    yellowProgressBar.classList.remove("yellow-progress-bar");
    pinkProgressBar.classList.remove("pink-progress-bar");
    greenProgressBar.classList.remove("green-progress-bar");
  }
}
function about_fun() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  const aboutStart = aboutusContent.getBoundingClientRect().top;
  if (aboutStart < triggerBottom) {
    fromTopAboutUs();
  } else {
    aboutusContent.classList.remove("from-top");
  }
}
function get_fun() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  const getInStart = getInTouchContent.getBoundingClientRect().top;
  if (getInStart < triggerBottom) {
    fromTopGetInTouch();
  } else {
    getInTouchContent.classList.remove("from-top");
  }
}

/*scroll function end*/
let blueprogressrightprogressbar = document.getElementById(
  "blue-progress-right-progress-bar"
);

let yellowprogressrightprogressbar = document.getElementById(
  "yellow-progress-right-progress-bar"
);
let pinkprogressrightprogressbar = document.getElementById(
  "pink-progress-right-progress-bar"
);

let greenprogressrightprogressbar = document.getElementById(
  "green-progress-right-progress-bar"
);

let blueProgressBar = document.getElementById("blue-progress-bar");
let yellowProgressBar = document.getElementById("yellow-progress-bar");

let pinkProgressBar = document.getElementById("pink-progress-bar");

let greenProgressBar = document.getElementById("green-progress-bar");

services.addEventListener("mouseover", fromTopServices);
skills.addEventListener("mouseover", fromTopSkills);
team.addEventListener("mouseover", fromTopTeam);
portfolio.addEventListener("mouseover", fromTopPortfolio);
aboutus.addEventListener("mouseover", fromTopAboutUs);
contact.addEventListener("mouseover", fromTopGetInTouch);
skills.addEventListener("mouseover", circleAnimation);
function fromTopServices() {
  servicesContent.classList.add("from-top");
}

function fromTopTeam() {
  teamContent.classList.add("from-top");
}
function fromTopSkills() {
  skillsContent.classList.add("from-top");
}

function fromTopPortfolio() {
  portfolioContent.classList.add("from-top");
}

function fromTopGetInTouch() {
  getInTouchContent.classList.add("from-top");
}

function fromTopAboutUs() {
  aboutusContent.classList.add("from-top");
}
function circleAnimation() {
  blueprogressrightprogressbar.classList.add("prog-left-prog-bar");
  yellowprogressrightprogressbar.classList.add("prog-left-prog-bar");
  pinkprogressrightprogressbar.classList.add("prog-left-prog-bar");
  greenprogressrightprogressbar.classList.add("prog-left-prog-bar");
  blueProgressBar.classList.add("blue-progress-bar");
  yellowProgressBar.classList.add("yellow-progress-bar");
  pinkProgressBar.classList.add("pink-progress-bar");
  greenProgressBar.classList.add("green-progress-bar");
}
