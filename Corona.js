import request from "request";
import cheerio from "cheerio";
import chalk from "chalk";

//request
const URL = "https://www.worldometers.info/coronavirus";
request(URL, cb);
function cb(error, response, html) {
  if (error) {
    console.error("Error:", error); //Print the error if occurred
  } else {
    handleHtml(html); //Print the html for the worldometers Covid Cases
  }
}

function handleHtml(html) {
  let selTool = cheerio.load(html);

  let contentArr = selTool("#maincounter-wrap span");

  let total = selTool(contentArr[0]).text();
  let deaths = selTool(contentArr[1]).text();
  let recovered = selTool(contentArr[2]).text();

  console.log(chalk.gray.bold(`Total Cases :${total}`));
  console.log(chalk.red.bold(`Deaths :${deaths}`));
  console.log(chalk.green.bold(`Recovered :${recovered}`));
}
