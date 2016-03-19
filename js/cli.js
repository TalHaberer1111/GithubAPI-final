var prompt = require('prompt');
prompt.start();

prompt.get(['goal', 'name'], function(err, result) {
    console.log(result);
});
