const Paint = function(volume){
  this.volume = volume;
}

Paint.prototype.isItEmpty = function(){
  if (this.volume === 0){
    return true;
  }
  else {
    return false;
  }
}

Paint.prototype.emptyItself = function (){
   let empty = this.volume - this.volume;
   return empty;
}



module.exports = Paint;
