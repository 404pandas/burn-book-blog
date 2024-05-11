const handlebars = require('handlebars');

// Define the custom "log" helper
handlebars.registerHelper('log', function(context) {
  console.log(context);
});
