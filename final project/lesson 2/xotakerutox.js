class Xotakerutox extends KendaniEak {
    constructor(x,y,index,ser){
        super(x,y,index);
        this.energy = 10;
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
      matrix[norvandak[1]][norvandak[0]] = 3;
      this.x = norvandak[0];
      this.y = norvandak[1];
      this.energy--;
    }
  }
  eatxot() {
    this.stanalNorKordinatner();
    var datarkvandakner = this.yntrelVandak(1);
    var norvandak = random(datarkvandakner);
    if (norvandak) {
      matrix[this.y][this.x] = 0;
      matrix[norvandak[1]][norvandak[0]] = 3;
      this.x = norvandak[0];
      this.y = norvandak[1];
      if(exanak=="amar" || exanak=="dzmer"){
      this.energy --;
    }
      for (var c in grassArr) {
        if (grassArr[c].x == this.x && grassArr[c].y == this.y) {
          grassArr.splice(c, 1);
          break;
        }
      }
    }
  }
   eat() {
    this.stanalNorKordinatner();
    var datarkvandakner = this.yntrelVandak(2);
    var norvandak = random(datarkvandakner);
    var datarkvandakner1 = this.yntrelVandak(0);
    var norvandak1 = random(datarkvandakner1);
    if (norvandak) {
      matrix[this.y][this.x] = 0;
      matrix[norvandak[1]][norvandak[0]] = 3;
      this.x = norvandak[0];
      this.y = norvandak[1];
      this.energy += 5 ;
      for (var c in xotakerner) {
        if (xotakerner[c].x == this.x && xotakerner[c].y == this.y) {
          xotakerner.splice(c, 1);
          break;
        }
      }
    }
    else if (norvandak1) {
      this.sharjvel();
    }
    else {
      this.eatxot()
    }
  }
   bazmanal() {
     this.stanalNorKordinatner();
    var bazmanaluvandakner = this.yntrelVandak(3);
    var norvandak = random(bazmanaluvandakner);
    if(norvandak){
      var ind;
      for( var i in xotakernerutoxner){
        if(xotakernerutoxner[i].x==norvandak[0] && xotakernerutoxner[i].y==norvandak[1]){
           ind =i;
           break;
      }
    }
  if(xotakerner[ind].ser!=this.ser){
    var norVandak = random(this.yntrelVandak(0));
    if (norVandak) {
      statistika.cnvacxotakerutox++;
        this.energy = 20;
      var norXotakerutox = new Xotakerutox(norVandak[0], norVandak[1],3,Math.floor(random(0,2)));
      xotakernerutoxner.push(norXotakerutox);
      matrix[norVandak[1]][norVandak[0]] = 3;
    }
  }
}
  }
  mahanal(i) {
    matrix[this.y][this.x] = 0;
    xotakernerutoxner.splice(i, 1);
  }

}