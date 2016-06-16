import { moduleFor, test } from 'ember-qunit';

moduleFor('adapter:my-json-api', 'Unit | Adapter | my json api', {
  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']
  beforeEach() {
    server.createList('contact', 10);
  }
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let adapter = this.subject();
  assert.ok(adapter);
});

// test('findAll()', function(assert) {
//   let adapter = this.subject();
//
//   let store = {};
//   let type = {}
//
//   return adapter.findAll().then((response) => {
//     assert.deepEqual(response, {
//       contact: [
//
//       ]
//     });
//   });
// });
