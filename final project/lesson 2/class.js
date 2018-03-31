
// class Grass {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//     this.multiply = 0;
//     // this.index=index
//     this.directions = [
//       [this.x - 1, this.y - 1],
//       [this.x, this.y - 1],
//       [this.x + 1, this.y - 1],
//       [this.x - 1, this.y],
//       [this.x + 1, this.y],
//       [this.x - 1, this.y + 1],
//       [this.x, this.y + 1],
//       [this.x + 1, this.y + 1]
//     ];
//   }
//   yntrelVandak(ch) {
//     var found = [];
//     for (var i in this.directions) {
//       var x = this.directions[i][0];
//       var y = this.directions[i][1];
//       if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

//         if (matrix[y][x] == ch) {
//           found.push(this.directions[i]);
//         }
//       }
//     }
//     return found;
//   }
//   bazmanal() {
//     this.multiply++;
//     var norVandak = random(this.yntrelVandak(0));
//     if (this.multiply >= 2 && norVandak) {
//       var norXot = new Grass(norVandak[0], norVandak[1]);
//       grassArr.push(norXot);
//       matrix[norVandak[1]][norVandak[0]] = 1;
//       this.multiply = 0;
//     }
//   }

// }
//class Xotaker {
  // constructor(x, y) {
  //   this.x = x;
  //   this.y = y;
  //   this.energy = 4;
  //   this.directions = [];
  //   // this.index = 2;
  // }

  // stanalNorKordinatner() {
  //   this.directions = [
  //     [this.x - 1, this.y - 1],
  //     [this.x, this.y - 1],
  //     [this.x + 1, this.y - 1],
  //     [this.x - 1, this.y],
  //     [this.x + 1, this.y],
  //     [this.x - 1, this.y + 1],
  //     [this.x, this.y + 1],
  //     [this.x + 1, this.y + 1]
  //   ];
  // }
  // yntrelVandak(ch) {
  //   this.stanalNorKordinatner()
  //   var found = [];
  //   for (var i in this.directions) {
  //     var x = this.directions[i][0];
  //     var y = this.directions[i][1];
  //     if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
  //       if (matrix[y][x] == ch) {
  //         found.push(this.directions[i]);
  //       }
  //     }
  //   }
  //   return found;
  // }
//   sharjvel() {
//     this.stanalNorKordinatner();
//     var datarkvandakner = this.yntrelVandak(0);
//     var norvandak = random(datarkvandakner);
//     if (norvandak) {
//       matrix[this.y][this.x] = 0;
//       matrix[norvandak[1]][norvandak[0]] = 2;
//       this.x = norvandak[0];
//       this.y = norvandak[1];
//       this.energy--;
//     }
//   }
//   eat() {
//     this.stanalNorKordinatner();
//     var datarkvandakner = this.yntrelVandak(1);
//     var norvandak = random(datarkvandakner);
//     if (norvandak) {
//       matrix[this.y][this.x] = 0;
//       matrix[norvandak[1]][norvandak[0]] = 2;
//       this.x = norvandak[0];
//       this.y = norvandak[1];
//       this.energy++;
//       for (var c in grassArr) {
//         if (grassArr[c].x == this.x && grassArr[c].y == this.y) {
//           //console.log("start",grassArr.length);
//           grassArr.splice(c, 1);
//           //console.log("end",grassArr.length);
//           break;
//         }
//       }
//     }
//     else {
//       this.sharjvel();
//     }
//   }

//   bazmanal() {
//     this.energy = 4;
//     var norVandak = random(this.yntrelVandak(0));
//     if (norVandak) {
//       var norXotaker = new Xotaker(norVandak[0], norVandak[1]);
//       xotakerner.push(norXotaker);
//       matrix[norVandak[1]][norVandak[0]] = 2;
//     }
//   }
//   mahanal(i) {
//     matrix[this.y][this.x] = 0;
//     xotakerner.splice(i, 1);
//   }

// }
// class Xotakerutox {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//     this.energy = 20;
//     this.directions = [];
//     // this.index = 2;
//   }

//   stanalNorKordinatner() {
//     this.directions = [
//       [this.x - 1, this.y - 1],
//       [this.x, this.y - 1],
//       [this.x + 1, this.y - 1],
//       [this.x - 1, this.y],
//       [this.x + 1, this.y],
//       [this.x - 1, this.y + 1],
//       [this.x, this.y + 1],
//       [this.x + 1, this.y + 1]
//     ];
//   }
//   yntrelVandak(ch) {
//     this.stanalNorKordinatner()
//     var found = [];
//     for (var i in this.directions) {
//       var x = this.directions[i][0];
//       var y = this.directions[i][1];
//       if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
//         if (matrix[y][x] == ch) {
//           found.push(this.directions[i]);
//         }
//       }
//     }
//     return found;
//   }
//   sharjvel() {
//     this.stanalNorKordinatner();
//     var datarkvandakner = this.yntrelVandak(0);
//     var norvandak = random(datarkvandakner);
//     if (norvandak) {
//       matrix[this.y][this.x] = 0;
//       matrix[norvandak[1]][norvandak[0]] = 3;
//       this.x = norvandak[0];
//       this.y = norvandak[1];
//       this.energy--;
//     }
//   }
//   eatxot() {
//     this.stanalNorKordinatner();
//     var datarkvandakner = this.yntrelVandak(1);
//     var norvandak = random(datarkvandakner);
//     if (norvandak) {
//       matrix[this.y][this.x] = 0;
//       matrix[norvandak[1]][norvandak[0]] = 3;
//       this.x = norvandak[0];
//       this.y = norvandak[1];
//       this.energy -=2;
//       for (var c in grassArr) {
//         if (grassArr[c].x == this.x && grassArr[c].y == this.y) {
//           grassArr.splice(c, 1);
//           break;
//         }
//       }
//     }
//   }
//   eat() {
//     this.stanalNorKordinatner();
//     var datarkvandakner = this.yntrelVandak(2);
//     var norvandak = random(datarkvandakner);
//     var datarkvandakner1 = this.yntrelVandak(0);
//     var norvandak1 = random(datarkvandakner1);
//     if (norvandak) {
//       matrix[this.y][this.x] = 0;
//       matrix[norvandak[1]][norvandak[0]] = 3;
//       this.x = norvandak[0];
//       this.y = norvandak[1];
//       this.energy += 5 ;
//       for (var c in xotakerner) {
//         if (xotakerner[c].x == this.x && xotakerner[c].y == this.y) {
//           xotakerner.splice(c, 1);
//           break;
//         }
//       }
//     }
//     else if (norvandak1) {
//       this.sharjvel();
//     }
//     else {
//       this.eatxot()
//     }
//   }

//   bazmanal() {
//     this.energy = 20;
//     var norVandak = random(this.yntrelVandak(0));
//     if (norVandak) {
//       var norXotakerutox = new Xotakerutox(norVandak[0], norVandak[1]);
//       xotakernerutoxner.push(norXotakerutox);
//       matrix[norVandak[1]][norVandak[0]] = 3;
//     }
//   }
//   mahanal(i) {
//     matrix[this.y][this.x] = 0;
//     xotakernerutoxner.splice(i, 1);
//   }

// }
// class Amenaker {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//     this.directions = [];
//   }
//   stanalNorKordinatner() {
//     this.directions = [
//       [this.x - 1, this.y - 1],
//       [this.x, this.y - 1],
//       [this.x + 1, this.y - 1],
//       [this.x - 1, this.y],
//       [this.x + 1, this.y],
//       [this.x - 1, this.y + 1],
//       [this.x, this.y + 1],
//       [this.x + 1, this.y + 1]
//     ];
//   }
//   yntrelVandak() {
//     this.stanalNorKordinatner()
//     for (; true;) {
//       var found = random(this.directions);
//       if (found[0] >= 0 && found[0] < matrix[0].length && found[1] >= 0 && found[1] < matrix.length && matrix[found[1]][found[0]]!=11 && matrix[found[1]][found[0]]!=22 && matrix[found[1]][found[0]]!=33 && matrix[found[1]][found[0]]!=44 && matrix[found[1]][found[0]]!=4) {
//         return found;
//       }
//     }
//   }
//   eat() {
//     var norvandak = this.yntrelVandak();
//     if (norvandak) {
//       if (matrix[norvandak[1]][norvandak[0]] == 1) {
//         for (var c in grassArr) {
//           if (grassArr[c].x == this.x && grassArr[c].y == this.y) {
//              // console.log("start",grassArr.length);
//           grassArr.splice(c, 1);
//           // console.log("end",grassArr.length);
//             break;
//           }
//         }
//       }
//       else if (matrix[norvandak[1]][norvandak[0]] == 2) {
//         for (var c in xotakerner) {
//           if (xotakerner[c].x == this.x && xotakerner[c].y == this.y) {
//             xotakerner.splice(c, 1);
//             break;
//           }
//         }
//       }
//       else if (matrix[norvandak[1]][norvandak[0]] == 3) {
//         for (var c in xotakernerutoxner) {
//           if (xotakernerutoxner[c].x == this.x && xotakernerutoxner[c].y == this.y) {
//             xotakernerutoxner.splice(c, 1);
//             break;
//           }
//         }
//       }
//       else if (matrix[norvandak[1]][norvandak[0]] == 5) {
//         console.log("a");
//         for (var c in dziapxer) {
//           console.log(dziapxer[c].x , this.x,dziapxer[c].y , this.y);
//           //if (dziapxer[c].x == this.x && dziapxer[c].y == this.y) {
//             dziapxer.splice(c, 1);
//           console.log("c");
//           //   break;
//           // }
//         }
//       }
//       matrix[norvandak[1]][norvandak[0]] = 4;
//       matrix[this.y][this.x] = 0;
//       this.x = norvandak[0];
//       this.y = norvandak[1];

//     }
//   }
// }






// class Dziapix {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//     this.multiply = 0;
//     this.directions = [];
//     this.jkor=[];
//   }
//   stanalNorKordinatner() {
//     this.directions = [
//       [this.x + 1, this.y - 2],
//       [this.x + 1, this.y + 2],
//       [this.x + 2, this.y - 1],
//       [this.x + 2, this.y + 1],
//       [this.x - 1, this.y - 2],
//       [this.x - 1, this.y + 2],
//       [this.x - 2, this.y - 1],
//       [this.x - 2, this.y + 1]
//     ];
//   }
//   yntrelVandak() {
//     this.stanalNorKordinatner()
//     for (; true;) {
//       var found = random(this.directions);
//       if (found[0] >= 0 && found[0] < matrix[0].length && found[1] >= 0 && found[1] < matrix.length) {
//         return found;
//       }
//     }
//   }
//   jardkord(){
//       this.jkor = [
//         [this.x - 3, this.y],
//         [this.x + 3, this.y],
//         [this.x - 1, this.y],
//         [this.x + 2, this.y],
//         [this.x + 1, this.y],
//         [this.x - 2, this.y],
//         [this.x, this.y - 3],
//         [this.x, this.y + 3],
//         [this.x, this.y + 2],
//         [this.x, this.y - 1],
//         [this.x, this.y + 1],
//         [this.x, this.y - 2]
//     ];
//   }
//   sharjvel() {
//     this.multiply++;
//     var norvandak = this.yntrelVandak();
//     if (norvandak && this.multiply >= 10) {
//       if (matrix[norvandak[1]][norvandak[0]] == 1) {
//         //console.log("x");
//         for (var c in grassArr) {
//           //console.log(grassArr[c].x == this.x , grassArr[c].y == this.y);
//           if (grassArr[c].x == this.x && grassArr[c].y == this.y) {
//             grassArr.splice(c, 1);
//             break;
//           }
//         }
//       }
//       else if (matrix[norvandak[1]][norvandak[0]] == 2) {
//         for (var c in xotakerner) {
//           if (xotakerner[c].x == this.x && xotakerner[c].y == this.y) {
//             xotakerner.splice(c, 1);
//             break;
//           }
//         }
//       }
//       else if (matrix[norvandak[1]][norvandak[0]] == 3) {
//         for (var c in xotakernerutoxner) {
//           if (xotakernerutoxner[c].x == this.x && xotakernerutoxner[c].y == this.y) {
//             xotakernerutoxner.splice(c, 1);
//             break;
//           }
//         }
//       }
//       else if (matrix[norvandak[1]][norvandak[0]] == 4) {
//         console.log("a2");
//         for (var c in amenakerner) {
//           if (amenakerner[c].x == this.x && amenakerner[c].y == this.y) {
//             amenakerner.splice(c, 1);
//             console.log("c2");
//             break;
//           }
//         }
//       }
//       matrix[norvandak[1]][norvandak[0]] = 5;
//       matrix[this.y][this.x] = 0;
//       this.x = norvandak[0];
//       this.y = norvandak[1];
//       this.multiply = 0;
//     }
//   }
//   jardel(){
//         this.jardkord();
//        var norvandak =this.jkor;
//        for(var i=0;i<12;i++){
//         if(norvandak[i][0] >= 0 && norvandak[i][0] < matrix[0].length && norvandak[i][1] >= 0 && norvandak[i][1] < matrix.length){
//       if(matrix[norvandak[i][1]][norvandak[i][0]]==1){
//         for (var c in grassArr) {
//         if (grassArr[c].x == norvandak[i][0] && grassArr[c].y == norvandak[i][1]) {
//           grassArr.splice(c, 1);
//           break;
//         }
//         }
//       }
//          else if(matrix[norvandak[i][1]][norvandak[i][0]]==2){
//         for (var c in xotakerner) {
//         if (xotakerner[c].x == norvandak[i][0] && xotakerner[c].y == norvandak[i][1]) {
//           xotakerner.splice(c, 1);
//           break;
//         }
//       }
//       }
//              else if(matrix[norvandak[i][1]][norvandak[i][0]]==3){
//         for (var c in xotakernerutoxner) {
//         if (xotakernerutoxner[c].x == norvandak[i][0] && xotakernerutoxner[c].y == norvandak[i][1]) {
//           xotakernerutoxner.splice(c, 1);
//           break;
//         }
//       }
//       }
//       else if(matrix[norvandak[i][1]][norvandak[i][0]]==4){
//         for (var c in amenakerner) {
//         if (amenakerner[c].x == norvandak[i][0] && amenakerner[c].y == norvandak[i][1]) {
//           amenakerner.splice(c, 1);
//           break;
//         }
//       }
//       }
//       if( matrix[norvandak[i][1]][norvandak[i][0]]!=5 && matrix[norvandak[i][1]][norvandak[i][0]]!=11 && matrix[norvandak[i][1]][norvandak[i][0]]!=22 && matrix[norvandak[i][1]][norvandak[i][0]]!=33 && matrix[norvandak[i][1]][norvandak[i][0]]!=44){
//        matrix[norvandak[i][1]][norvandak[i][0]]=0;
//       }
//     }
//     }
//   }
//  }

 class Kanachg {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.multiply=0;
    // this.index=index
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
    var found = [];
    for (var i in this.directions) {
      var x = this.directions[i][0];
      var y = this.directions[i][1];
      if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

        if (matrix[y][x] == ch) {
          found.push(this.directions[i]);
        }
      }
    }
    return found;
  }
  bazmanal() {
    this.multiply++;
    var norVandak = random(this.yntrelVandak(0));
    if (norVandak && this.multiply >= 2 ) {
      statistika.achacxot++;
      var norXot = new Grass(norVandak[0], norVandak[1],1);
      grassArr.push(norXot);
      matrix[norVandak[1]][norVandak[0]] = 1;
      this.multiply = 0;
    }
  }
}
 class Dexing {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.multiply=0;
    // this.index=index
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
    var found = [];
    for (var i in this.directions) {
      var x = this.directions[i][0];
      var y = this.directions[i][1];
      if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

        if (matrix[y][x] == ch) {
          found.push(this.directions[i]);
        }
      }
    }
    return found;
  }
  bazmanal() {
    if(xotakerner.length<=20){
    this.multiply++;
    var norVandak = random(this.yntrelVandak(0));
    if ( norVandak && this.multiply >= 4) {
      statistika.cnvacxotaker++;
      var norXotaker = new  Xotaker(norVandak[0], norVandak[1],2,Math.floor(random(0,2)));
      xotakerner.push(norXotaker);
     // console.log(xotakerner[xotakerner.length-1].ser);
      matrix[norVandak[1]][norVandak[0]] = 2;
      this.multiply = 0;
    }
    }
  
  }
}
 class Karmirg {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.multiply=0;
    // this.index=index
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
    var found = [];
    for (var i in this.directions) {
      var x = this.directions[i][0];
      var y = this.directions[i][1];
      if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

        if (matrix[y][x] == ch) {
          found.push(this.directions[i]);
        }
      }
    }
    return found;
  }
  bazmanal() {
    if(xotakernerutoxner.length<=8){
    this.multiply++;
    var norVandak = random(this.yntrelVandak(0));
    if (this.multiply >= 5 && norVandak) {
      statistika.cnvacxotakerutox++;
      var norxotakerutox = new Xotakerutox(norVandak[0], norVandak[1],3,Math.floor(random(0,2)));
      xotakernerutoxner.push(norxotakerutox);
      matrix[norVandak[1]][norVandak[0]] = 3;
      this.multiply = 0;
    }
    else if(this.multiply >= 5){
      statistika.cnvacxotakerutox++;
      norVandak = random(this.yntrelVandak(1));
      var norxotakerutox = new Xotakerutox(norVandak[0], norVandak[1],3,Math.floor(random(0,2)));
      xotakernerutoxner.push(norxotakerutox);
      matrix[norVandak[1]][norVandak[0]] = 3;
      this.multiply = 0;
      for (var c in grassArr) {
          if (grassArr[c].x == norVandak[0] && grassArr[c].y == norVandak[1]) {
            grassArr.splice(c, 1);
            break;
          }
        }
    }
    }
  }
}
class Sevg {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.multiply=0;
    this.qanak=0;
    // this.index=index
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
    var found = [];
    for (var i in this.directions) {
      var x = this.directions[i][0];
      var y = this.directions[i][1];
      if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

        if (matrix[y][x] == ch) {
          found.push(this.directions[i]);
        }
      }
    }
    return found;
  }
  bazmanal() {
    if(amenakerner.length<=7){
       this.qanak++;
    //if(this.qanak<10){
 
    this.multiply++;
    var norVandak = random(this.yntrelVandak(0));
    if (this.multiply >= 15 && norVandak) {
      var noramenaker = new Amenaker(norVandak[0], norVandak[1],4);
      amenakerner.push(noramenaker);
      matrix[norVandak[1]][norVandak[0]] = 4;
      this.multiply = 0;
    }
  }
  }
}