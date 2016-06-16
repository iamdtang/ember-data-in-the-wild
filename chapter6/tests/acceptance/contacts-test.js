import { test } from 'qunit';
import moduleForAcceptance from 'chapter6/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | contacts', {
  beforeEach() {
    server.createList('contact', 10);
  }
});

test('visiting /contacts', function(assert) {
  visit('/contacts');

  andThen(function() {
    assert.equal(find('#contacts li').length, 10);
  });
});
