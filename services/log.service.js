import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (error) => {
	console.log(chalk.bgRed('ERROR') + ' ' + error)
}

const printSuccess = (success) => {
	console.log(chalk.bgGreen('SUCCESS') + ' ' + success)
}

const printHelp = () => {
	console.log(
		dedent`
		${chalk.bgCyan(' HELP ')}
		Без параметров - вывод погоды
		-s [CITY] для установки города
		-h для вывода помощи
		-t [API_KEY] для сохранения погоды
		`
		
	);
}

const printWeather = async (data) => {
	
	console.log(
		dedent`
		-------------------------
		${chalk.bgGrey(' Город: ')} ${data.name}
		-------------------------
		${chalk.bgMagentaBright(' В городе: ')} ${data.weather[0].description}
		-------------------------
		${chalk.bgGreenBright(' Температура: ')} ${data.main.temp}°C  (ощущается как) ${data.main.feels_like}°C
		-------------------------
		`
	);
}



export {printError, printSuccess, printHelp, printWeather}