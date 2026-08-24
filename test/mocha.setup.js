// Don't silently swallow unhandled rejections
process.on('unhandledRejection', (e) => {
	throw e;
});

// enable the should interface with chai
// and load chai-as-promised by default
const chaiAsPromised = require('chai-as-promised');
const { should, use } = require('chai');

should();
use(chaiAsPromised);
