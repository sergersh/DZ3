import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | xxx/xedit', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:xxx/xedit');
    assert.ok(route);
  });
});
