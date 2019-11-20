const Room = function(area, painted){
  this.area = area;
  this.painted = painted;
}

Room.prototype.paintRoom = function (){
let painted_room
if(this.painted === 0){
 painted_room = this.painted += 1;
  }
else {painted_room = this.painted};
return painted_room;
};

module.exports = Room;
