class Dziapix extends KendaniEak {
    constructor(x,y,index){
        super(x,y,index);
        this.multiply = 0;
    this.directions = [];
    this.jkor=[];
    }
stanalNorKordinatner() {
    this.directions = [
      [this.x + 1, this.y - 2],
      [this.x + 1, this.y + 2],
      [this.x + 2, this.y - 1],
      [this.x + 2, this.y + 1],
      [this.x - 1, this.y - 2],
      [this.x - 1, this.y + 2],
      [this.x - 2, this.y - 1],
      [this.x - 2, this.y + 1]
    ];
  }
  yntrelVandak() {
    this.stanalNorKordinatner()
    for (; true;) {
      var found = random(this.directions);
      if (found[0] >= 0 && found[0] < matrix[0].length && found[1] >= 0 && found[1] < matrix.length && matrix[found[1]][found[0]]!=11 && matrix[found[1]][found[0]]!=22 && matrix[found[1]][found[0]]!=33 && matrix[found[1]][found[0]]!=44) {
        return found;
      }
    }
  }
  jardkord(){
      this.jkor = [
        [this.x - 3, this.y],
        [this.x + 3, this.y],
        [this.x - 1, this.y],
        [this.x + 2, this.y],
        [this.x + 1, this.y],
        [this.x - 2, this.y],
        [this.x, this.y - 3],
        [this.x, this.y + 3],
        [this.x, this.y + 2],
        [this.x, this.y - 1],
        [this.x, this.y + 1],
        [this.x, this.y - 2]
    ];
  }
  sharjvel() {
    if(exanak=="ashun"){
    this.multiply+=5;
      }
      else{
        this.multiply++;
      }
    var norvandak = this.yntrelVandak();
    if (norvandak && this.multiply >= 10) {
      if (matrix[norvandak[1]][norvandak[0]] == 1) {
        //console.log("x");
        for (var c in grassArr) {
          //console.log(grassArr[c].x == this.x , grassArr[c].y == this.y);
          if (grassArr[c].x == norvandak[0] && grassArr[c].y == norvandak[1]) {
            grassArr.splice(c, 1);
            break;
          }
        }
      }
      else if (matrix[norvandak[1]][norvandak[0]] == 2) {
        for (var c in xotakerner) {
          if (xotakerner[c].x == norvandak[0] && xotakerner[c].y ==norvandak[1]) {
            xotakerner.splice(c, 1);
            break;
          }
        }
      }
      else if (matrix[norvandak[1]][norvandak[0]] == 3) {
        for (var c in xotakernerutoxner) {
          if (xotakernerutoxner[c].x == norvandak[0] && xotakernerutoxner[c].y == norvandak[1]) {
            xotakernerutoxner.splice(c, 1);
            break;
          }
        }
      }
      else if (matrix[norvandak[1]][norvandak[0]] == 4) {
        for (var c in amenakerner) {
          if (amenakerner[c].x == norvandak[0] && amenakerner[c].y == norvandak[1]) {
            amenakerner.splice(c, 1);
            break;
          }
        }
      }
      matrix[norvandak[1]][norvandak[0]] = 5;
      matrix[this.y][this.x] = 0;
      this.x = norvandak[0];
      this.y = norvandak[1];
      this.multiply = 0;
    }
  }
  jardel(){
        this.jardkord();
       var norvandak =this.jkor;
       for(var i=0;i<12;i++){
        if(norvandak[i][0] >= 0 && norvandak[i][0] < matrix[0].length && norvandak[i][1] >= 0 && norvandak[i][1] < matrix.length){
      if(matrix[norvandak[i][1]][norvandak[i][0]]==1){
        for (var c in grassArr) {
        if (grassArr[c].x == norvandak[i][0] && grassArr[c].y == norvandak[i][1]) {
          grassArr.splice(c, 1);
          break;
        }
        }
      }
         else if(matrix[norvandak[i][1]][norvandak[i][0]]==2){
        for (var c in xotakerner) {
        if (xotakerner[c].x == norvandak[i][0] && xotakerner[c].y == norvandak[i][1]) {
          xotakerner.splice(c, 1);
          break;
        }
      }
      }
             else if(matrix[norvandak[i][1]][norvandak[i][0]]==3){
        for (var c in xotakernerutoxner) {
        if (xotakernerutoxner[c].x == norvandak[i][0] && xotakernerutoxner[c].y == norvandak[i][1]) {
          xotakernerutoxner.splice(c, 1);
          break;
        }
      }
      }
      else if(matrix[norvandak[i][1]][norvandak[i][0]]==4){
        for (var c in amenakerner) {
        if (amenakerner[c].x == norvandak[i][0] && amenakerner[c].y == norvandak[i][1]) {
          amenakerner.splice(c, 1);
          break;
        }
      }
      }
      if( matrix[norvandak[i][1]][norvandak[i][0]]!=5 && matrix[norvandak[i][1]][norvandak[i][0]]!=11 && matrix[norvandak[i][1]][norvandak[i][0]]!=22 && matrix[norvandak[i][1]][norvandak[i][0]]!=33 && matrix[norvandak[i][1]][norvandak[i][0]]!=44){
       matrix[norvandak[i][1]][norvandak[i][0]]=0;
      }
    }
    }
  }
 }

    