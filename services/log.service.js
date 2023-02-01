import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (err) => {
  console.log(chalk.bgRed('Error'), err);
};

const printSuccess = (msg) => {
  console.log(chalk.bgGreen('Success'), msg);
};

const printHelp = () => {
  console.log(
    dedent(`${chalk.bgCyan(' HELP ')}
		Without any parameters - weather forecast
		-s [CITY] for setting city
		-h for help
		-t [APY_KEY] for saving token`)
  );
};

export { printError, printSuccess, printHelp };
