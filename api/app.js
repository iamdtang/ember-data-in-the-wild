var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors());

app.get('/api/v1/cats', function(req, res) {
  res.json({
    data: [
      {
        type: 'cat',
        id: 1,
        attributes: {
          name: 'Frisky',
          age: 10,
          adopted: true,
          birthday: '2005-11-05T13:15:30Z'
        },
        relationships: {
          home: {
            data: { id: 1, type: 'home' }
          },
          toys: {
            data: [
              { id: 1, type: 'toy' },
              { id: 2, type: 'toy' },
              { id: 3, type: 'toy' }
            ]
          }
        }
      }
    ]
  });
});

app.delete('/api/v1/cats/:id', function(req, res) {
  res.write('Success');
  res.end();
});

app.get('/api/v1/toys/:id', function(req, res) {
  var id = req.params.id;
  res.json({
    data: {
      type: 'toy',
      id: id,
      attributes: {
        name: 'Toy ' + id
      }
    }
  });
});

app.get('/api/v1/homes/:id', function(req, res) {
  res.json({
    data: {
      type: 'home',
      id: 1,
      attributes: {
        street: '123 Purrfect Avenue'
      }
    }
  });
});

app.listen(8000, function() {
  console.log('Listening on port 8000');
});
