import Mirage from 'ember-cli-mirage';

export default function() {
  this.namespace = 'api';
  
  this.get('/contacts');
  this.get('/contacts/:id');
  this.post('/contacts');
  this.put('/contacts/:id');
  this.del('/contacts/:id', function() {
    return new Mirage.Response(200, {}, null);
  });
}
