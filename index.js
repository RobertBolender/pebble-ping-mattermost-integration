var express = require('express'),
    app = express(),
    request = require('request');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/score/:winner/:winnerScore/:loser/:loserScore', function (req, res) {
  res.send('Congratulations ' + req.params.winner + '!\n');
  var data = 'payload={"text": "| Player | Score |\\n|:-------|:--------|\\n| ' +
    req.params.winner + ' | ' + req.params.winnerScore  + ' :fireworks: |\\n| ' +
    req.params.loser  + ' | ' + req.params.loserScore   + ' |"}';
  request.post(process.env.WEBHOOK_URL).form(data);
});

app.listen(5000, function(){
  console.log('App listening on port 5000!');
});
