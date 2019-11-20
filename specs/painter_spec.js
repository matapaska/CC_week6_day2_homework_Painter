const assert = require('assert');
const Painter = require('../painter.js');
const Paint = require('../paint.js');
const Room = require('../room.js');

describe('Painter', function (){
  let painter;
  beforeEach(function (){
  painter = new Painter ();
  paint1 = new Paint (30);
  paint2 = new Paint (40);
  room = new Room (50);
  });
  it('Should have no stock at the start', function (){
    const actual = painter.stock;
    assert.deepStrictEqual(actual, []);
  });

  it('Should count number of cans of paint', function (){
    const actual = painter.countCans();
    assert.strictEqual(actual, 0);
  });

  it('Should be able to add a can of paint to stock', function (){
    painter.addCans(paint1);
    const actual = painter.countCans();
    assert.strictEqual(actual, 1);
  });

  it('Should be able to calculate total volume of paint in stock', function (){
    painter.addCans(paint1);
    painter.addCans(paint2);
    const actual = painter.sumVolume();
    assert.strictEqual(actual, 70);
  });
  it('Should be able to check if it has enough paint to paint room', function (){
    painter.addCans(paint1);
    painter.addCans(paint2);
    const actual = painter.enoughPaintForRoom(room);
    assert.strictEqual(actual, true);
  });
});
