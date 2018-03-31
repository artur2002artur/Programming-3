class Xotaker extends KendaniEak {
    constructor(x,y,index,ser){
        super(x,y,index);
        this.energy = 4;
        this.ser=ser;

    }
   stanalNorKordinatner() {
       this.directions = [
           [this.x - 1, this.y - 1],
           [this.x, this.y - 1],
           [this.x + 1, this.y - 1],
           [this.x - 1, this.y],
           [this.x + 1, this.y],
           [this.x - 1, this.y + 1],
           [this.x, this.y + 1],
           [this.x + 1, this.y + 1]
       ];
   }
   yntrelVandak(ch) {
       this.stanalNorKordinatner();
       return super.yntrelVandak(ch);
   }
  sharjvel() {
    this.stanalNorKordinatner();
    var datarkvandakner = this.yntrelVandak(0);
    var norvandak = random(datarkvandakner);
    if (norvandak) {
      matrix[this.y][this.x] = 0;
      matrix[norvandak[1]][norvandak[0]] = 2;
      this.x = norvandak[0];
      this.y = norvandak[1];
      this.energy--;
    }
  }
  eat() {
    this.stanalNorKordinatner();
    var datarkvandakner = this.yntrelVandak(1);
    var norvandak = random(datarkvandakner);
    if (norvandak) {
      matrix[this.y][this.x] = 0;
      matrix[norvandak[1]][norvandak[0]] = 2;
      this.x = norvandak[0];
      this.y = norvandak[1];
      this.energy++;
      for (var c in grassArr) {
        if (grassArr[c].x == this.x && grassArr[c].y == this.y) {
          
          grassArr.splice(c, 1);
          
          break;
        }
      }
    }
    else {
      this.sharjvel();
    }
  }

  bazmanal() {
    if (this.energy >= 10 && exanak!="dzmer") {
    this.stanalNorKordinatner();
    var bazmanaluvandakner = this.yntrelVandak(2);
    var norvandak = random(bazmanaluvandakner);
    if(norvandak){
    var ind;
    for( var i in xotakerner){
      if(xotakerner[i].x==norvandak[0] && xotakerner[i].y==norvandak[1]){
        ind =i;

        break;
      }
    }
    if(xotakerner[ind].ser!=this.ser){
      statistika.cnvacxotaker++;
    this.energy = 4;
    var norVandak = random(this.yntrelVandak(0));
    if (norVandak) {
      var norXotaker = new Xotaker(norVandak[0], norVandak[1],2,Math.floor(random(0,2)));
      xotakerner.push(norXotaker);
      matrix[norVandak[1]][norVandak[0]] = 2;
    }
  }
}
}
  }
  mahanal(i) {
    if(xotakerner[i].energy <= 0) {
    matrix[this.y][this.x] = 0;
    xotakerner.splice(i, 1);
  }
}
}

