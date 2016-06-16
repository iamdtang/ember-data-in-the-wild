import { test } from 'qunit';
import moduleForAcceptance from 'chapter6/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | contacts/contact', {
  beforeEach() {
    server.createList('contact', 10);
  }
});

test('visiting /contacts/1', function(assert) {
  visit('/contacts/1');

  andThen(function() {
    assert.equal(find('h3').text().trim(), server.db.contacts[0].name);
  });
});
