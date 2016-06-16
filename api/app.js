var express = require('express');
var app = express();

app.get('/api/v1/cats', function(req, res) {
  res.json({
    "data": [{
      "type": "cat",
      "id": 1,
      "attributes": {
        "name": "Frisky",
        "age": 10,
        "adopted": true,
        "birthday": "2005-11-05T13:15:30Z"
      }
    }]
  });
});

app.listen(8000);
