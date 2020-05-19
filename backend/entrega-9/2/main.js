const os = require("os");
const chalk = require("chalk");

const totalMemory = os.totalmem();
const freeMemory = os.freemem();
const freePercent = (freeMemory * 100) / totalMemory;
const fixedFreePercent = freePercent.toFixed(2) + "%";


if (freePercent > 75) {
  console.log(chalk.green(fixedFreePercent));
} else if (freePercent > 50) {
  console.log(chalk.blue(fixedFreePercent));
} else {
  console.log(chalk.red(fixedFreePercent));
}