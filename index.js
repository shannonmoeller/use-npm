const isYarnNotNpm = /yarn/.test(process.env.npm_execpath || '');
const defaultMessage = `
  This project uses npm instead of yarn.

  To install dependencies:
  $ npm install

  To install a new package (also adds to package.json):
  $ npm install --save [packagename]

  To update a package:
  $ npm update [packagename]

  For more help, see https://docs.npmjs.com/cli/npm.
`;

function useNpm(message) {
	if (isYarnNotNpm && process.env.DISABLE_USE_NPM !== 'true') {
		console.error(message || defaultMessage);
		process.exit(1);
	}
}

module.exports = useNpm;
