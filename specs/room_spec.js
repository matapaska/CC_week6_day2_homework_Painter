const assert = require('assert');
const Room = require('../room.js');

describe('Room', function (){
  let room;
  beforeEach(function(){
    room = new Room (60, 0);
  });
  it('Should have area', function (){
    const actual = room.area;
    assert.strictEqual(actual, 60);
  });
  it('Should not be painted at the start', function (){
    const actual = room.painted;
    assert.strictEqual(actual, 0)
  });
  it('Should be able to be painted', function (){
    const actual = room.paintRoom();
    assert.strictEqual(actual, 1)
  });
});
