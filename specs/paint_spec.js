const assert = require('assert');
const Paint = require('../paint.js')

describe('Paint', function(){
  let paint;
  beforeEach(function (){
    paint = new Paint (20);
  });
  it('Should have a volume', function (){
    const actual = paint.volume;
    assert.strictEqual(actual, 20);
  });

  it('Should check if it is empty', function (){
    const actual = paint.isItEmpty();
    assert.strictEqual(actual, false);
  });
  it('Should empty itself', function (){
    const actual = paint.emptyItself();
    assert.strictEqual(actual, 0);
  });
});
