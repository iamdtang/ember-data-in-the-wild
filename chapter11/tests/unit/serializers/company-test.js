import { moduleForModel, test } from 'ember-qunit';

moduleForModel('company', 'Unit | Serializer | company', {
  // Specify the other units that are required for this test.
  needs: ['serializer:company']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
