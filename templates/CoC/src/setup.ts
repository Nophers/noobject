const inquirer = require("inquirer");
const fs = require("fs");

const CURR_DIR = `${__dirname}/data`;
const CHOICES = fs.readdirSync(`${__dirname}/templates`);

const QUESTIONS = [
  {
    name: "api-choice",
    type: "list",
    message: "What would you like to fetch?",
    choices: CHOICES,
  },
  {
    name: "api-tag",
    type: "input",
    message: "Player tag:",
    validate: (input: string) => {
      if (/^([A-Za-z\-\#\d])+$/.test(input)) return true;
      else
        return "Project name may only include letters and numbers";
    },
  },
];

// Send a prompt to choose between player or clan.
inquirer.prompt(QUESTIONS).then((answers: { [x: string]: any; }) => {
  const projectChoice = answers["api-choice"];
  const apitag = answers["api-tag"];
  const templatePath = `${__dirname}/templates/${projectChoice}`;

  // Create the folder choosed by the user
  fs.mkdirSync(`${CURR_DIR}/${apitag}`);

  createDirectoryContents(templatePath, apitag);

  console.log(`✅ | Successfully created Data: ${apitag}`);
});

const createDirectoryContents = (templatePath: string, newProjectPath: string) => {
  const filesToCreate = fs.readdirSync(templatePath);

  filesToCreate.forEach((file: string) => {
    const origFilePath = `${templatePath}/${file}`;

    const stats = fs.statSync(origFilePath);

    if (stats.isFile()) {
      const contents = fs.readFileSync(origFilePath, "utf8");

      if (file === ".npmignore") file = ".gitignore";

      const writePath = `${CURR_DIR}/${newProjectPath}/${file}`;

      // Create the file
      fs.writeFileSync(writePath, contents, "utf8");

      console.log(`Done creating: ${writePath}`);

    } else if (stats.isDirectory()) {
      fs.mkdirSync(`${CURR_DIR}/${newProjectPath}/${file}`);

      createDirectoryContents(
        `${templatePath}/${file}`,
        `${newProjectPath}/${file}`
      );
    }
  });
};