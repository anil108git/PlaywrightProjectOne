const fs = require('fs');
const path = require('path');

function loadTestData(name) {
  const env = process.env.ENV || 'dev';
  const envDir = `${env}_testData`;
  const envPath = path.resolve(__dirname, envDir, `${name}.json`);

  if (fs.existsSync(envPath)) {
    return require(envPath);
  }

  const defaultPath = path.resolve(__dirname, `${name}.json`);
  if (fs.existsSync(defaultPath)) {
    return require(defaultPath);
  }

  throw new Error(`Unable to load test data. Tried: ${path.join(envDir, `${name}.json`)} and ${name}.json`);
}

module.exports = { loadTestData };