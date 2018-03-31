class Amenaker extends KendaniEak {
    constructor(x,y,index){
        super(x,y,index);
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
   yntrelVandak() {
    this.stanalNorKordinatner()
    for (;true;) {
      var found = random(this.directions);
      if (found[0] >= 0 && found[0] < matrix[0].length && found[1] >= 0 && found[1] < matrix.length && matrix[found[1]][found[0]]!=11 && matrix[found[1]][found[0]]!=22 && matrix[found[1]][found[0]]!=33 && matrix[found[1]][found[0]]!=44 && matrix[found[1]][found[0]]!=4) {
        return found;
      }
    }
  }
eat() {
  var zro=0;
    var norvandak = this.yntrelVandak();
    if (norvandak) {
      if (matrix[norvandak[1]][norvandak[0]] == 1) {
        if(exanak!="dzmer"){
        zro++;
        for (var c in grassArr) {
          if (grassArr[c].x == norvandak[0] && grassArr[c].y == norvandak[1]) {
          grassArr.splice(c, 1);
            break;
          }
        }
      }
      }
      else if (matrix[norvandak[1]][norvandak[0]] == 2) {
         zro++;
        for (var c in xotakerner) {
          if (xotakerner[c].x == norvandak[0] && xotakerner[c].y == norvandak[1]) {
            xotakerner.splice(c, 1);
            break;
          }
        }
      }
      else if (matrix[norvandak[1]][norvandak[0]] == 3) {
         zro++;
        for (var c in xotakernerutoxner) {
          if (xotakernerutoxner[c].x == norvandak[0] && xotakernerutoxner[c].y == norvandak[1]) {
            xotakernerutoxner.splice(c, 1);
            break;
          }
        }
      }
      else if (matrix[norvandak[1]][norvandak[0]] == 5) {
         zro++;
         for(var c in dziapxer){
        if (dziapxer[c].x == norvandak[0] && dziapxer[c].y == norvandak[1]) {
            dziapxer.splice(c, 1);
            break;
          }
        }
      }
      else if(matrix[norvandak[1]][norvandak[0]] == 0){
            zro++;
      }
      if(zro!=0){
      matrix[norvandak[1]][norvandak[0]] = 4;
      matrix[this.y][this.x] = 0;
      this.x = norvandak[0];
      this.y = norvandak[1];
}
zro=0;
    }
  }
    }