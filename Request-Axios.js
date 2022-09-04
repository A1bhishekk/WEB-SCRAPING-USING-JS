import axios from "axios";
import * as cheerio from "cheerio";
import chalk from "chalk";
import fs from "fs";

//Create CSV file
const writeStream = fs.createWriteStream('corona.csv');
//request using Axios
const URL = "https://www.worldometers.info/coronavirus";
axios.get(URL)
.then((response) =>{
    const $=cheerio.load(response.data);
    let contentArr = $("#maincounter-wrap span");
    
  let total = $(contentArr[0]).text();
  let deaths = $(contentArr[1]).text();
  let recovered = $(contentArr[2]).text();

  console.log(chalk.gray.bold(`Total Cases :${total}`));
  console.log(chalk.red.bold(`Deaths :${deaths}`));
  console.log(chalk.green.bold(`Recovered :${recovered}`));

  //Write row to CSV
  writeStream.write(`${total}, ${deaths}, ${recovered}`);
})
.catch(err=>console.log(err));  // catch error