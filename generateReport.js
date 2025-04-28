const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: './reports/cucumber-report.json',  
  output: './reports/cucumber-report.html',     
  reportSuiteAsScenarios: true,
  launchReport: true,  // Opcional: si deseas abrir automáticamente el reporte en el navegador
};

reporter.generate(options);
