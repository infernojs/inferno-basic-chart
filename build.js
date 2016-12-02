const rollup = require('rollup').rollup;
const babel = require('rollup-plugin-babel');
const path = require('path');

const config = {
	format: 'umd',
	dest: path.resolve('dist/inferno-basic-chart.js'),
	sourceMap: false,
	moduleName: 'Inferno.BasicChart',
	moduleGlobal: 'Inferno.BasicChart'
};

rollup({
	entry: 'src/index.js',
	plugins: [
		babel({
			exclude: 'node_modules/**'
		})
	]
}).then(({ write }) => write(config)).catch(e => {
	console.error(e);
});