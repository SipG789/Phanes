// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license === "None") return "none :(";
  return `![License](https://shields.io/badge/license-${license}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// use this license https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.licenses)}

  ## Table of Contents
  -[Description](#description)
  -[Install](#install)
  -[Usage](#usage)
  -[Collaborators](#credits)
  -[Instructions](#test)
  -[Licenses](#licenses)
  -[Questions](#link)

  ### Description
  ${data.description}

  ### Install
  ${data.install}

  ### Usage
  ${data.usage}

  ### Collaborators
  ${data.credits}

  ### Instructions
  ${data.test}

  ### Licenses 
  ${data.licenses}

  ### Questions
  Feel free to contact me at:
  GitHub: "https://github.com/${data.link}"
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
