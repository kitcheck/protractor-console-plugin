var env = require('./environment.js');

exports.config = {
  seleniumAddress: env.seleniumAddress,
  framework: 'jasmine',
  specs: ['fail_warning_spec.js'],
  baseUrl: env.baseUrl,
  plugins: [{
    path: '../index.js',
    failOnWarning: true,
    failOnError: false
  }]
};
