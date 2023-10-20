const chalk = require('chalk');
const colors = ['red', 'green', 'yellow', 'blue', 'magenta', 'cyan'];
module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.yellow('[ ❕ ] » ') + data);
			break;
		case "error":
			console.log(chalk.red('[ ❕ ] » ') + data);
			break;
		default:
			console.log(chalk[colors[Math.floor(Math.random() * colors.length)]](`${option} » `) + chalk[colors[Math.floor(Math.random() * colors.length)]](data));
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.yellow('[ 𝗕𝗢𝘀𝘀𝗞𝗲𝗻 ] » ') + data);
			break;
		case "error":
			console.log(chalk.red('[ 𝗕𝗢𝘀𝘀𝗞𝗲𝗻 ] » ') + data);
			break;
		default:
			console.log(chalk[colors[Math.floor(Math.random() * colors.length)]](`[ 𝗕𝗢𝘀𝘀𝗞𝗲𝗻 ] » `) + chalk[colors[Math.floor(Math.random() * colors.length)]](data));
			break;
	}
}
