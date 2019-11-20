const Painter = function(){
  this.stock = [];
}

Painter.prototype.countCans = function (){
  return this.stock.length;
}

Painter.prototype.addCans = function (paint){
  this.stock.push(paint);
}

Painter.prototype.sumVolume = function (){
  var paint_volume = 0;
  for (const paint of this.stock){
    paint_volume += paint.volume
  }
  return paint_volume;
}

Painter.prototype.enoughPaintForRoom = function (room){
  var _this = this;
  if(_this.sumVolume() >= room.area){
    return true;
  }
  else {
    return false;
  }
}



module.exports = Painter;
