var socket = io.connect();
var grassArr = [];
function bodi(img) {
	document.body.style.backgroundImage = img;
	 document.body.style.backgroundSize="100%";
}
var statistika={
	achacxot:0,
	cnvacxotaker:0,
	cnvacxotakerutox:0,
}
var arr=[" ","green","yellow","red","black","blue"];
var c = 0;
var indexx=1;
var side = 30;
var generatorner = [];
var matrix = [];
var dziapxer = [];
var click=1;
var amenakerner = [];
var xotakerner = [];
var xotakernerutoxner = [];
var a = 0;
var gic = 0;
var exanak = prompt("exanak");
var exanakner = ["garun", "amar", "ashun", "dzmer"];
var ex;
var mull = 0, lx, ly;
for (var i in exanakner) {
	if (exanak == exanakner[i]) {
		ex = i;
		break;
	}
	if (i == 3) {
		ex = 0;
		exanak = exanakner[ex];
	}
}

function setup() {
	fillmatrix(20, 20);
	frameRate(20);
	createCanvas(matrix[0].length * side + 550, matrix.length * side);
	background('rgba(255,255,255,0)');
	line(matrix[0].length * side, 0, matrix[0].length * side, matrix.length * side);
	for (var y = 0; y < matrix.length; ++y) {
		for (var x = 0; x < matrix[y].length; ++x) {
			if (matrix[y][x] == 1) {
				var gr = new Grass(x, y, 1);
				grassArr.push(gr);
			}
			else if (matrix[y][x] == 2) {
				xotakerner.push(new Xotaker(x, y, 2, Math.floor(random(0, 2))));
			}
			else if (matrix[y][x] == 3) {
				xotakernerutoxner.push(new Xotakerutox(x, y, 3, Math.floor(random(0, 2))));
			}
			else if (matrix[y][x] == 4) {
				amenakerner.push(new Amenaker(x, y));
			}
			else if (matrix[y][x] == 5) {
				dziapxer.push(new Dziapix(x, y));
			}
			else if (matrix[y][x] == 11) {
				generatorner.push(new Kanachg(x, y));
			}
			else if (matrix[y][x] == 22) {
				generatorner.push(new Dexing(x, y));
			}
			else if (matrix[y][x] == 33) {
				generatorner.push(new Karmirg(x, y));
			}
			else if (matrix[y][x] == 44) {
				generatorner.push(new Sevg(x, y));
			}
		}
	}

}

	function keyPressed() {
  if (keyCode ==32) {
    click*=-1;
  }
}
function sarqel(inde){
	indexx=inde;
}
function mousePressed() {
	var x=Math.floor(mouseX/30);
	var y=Math.floor(mouseY/30);
	if(matrix[y][x]!=11 && matrix[y][x]!=22 && matrix[y][x]!=33 && matrix[y][x]!=44 && x>=0 && y>=0 && x<matrix[0].length && y<matrix.length){
	  if (matrix[y][x] == 1) {
        for (var c in grassArr) {
          if (grassArr[c].x == x && grassArr[c].y ==y) {
          grassArr.splice(c, 1);
            break;
          }
        }
      }
      else if (matrix[y][x] == 2) {
        for (var c in xotakerner) {
          if (xotakerner[c].x == x && xotakerner[c].y == y) {
            xotakerner.splice(c, 1);
            break;
          }
        }
      }
      else if (matrix[y][x] == 3) {
        for (var c in xotakernerutoxner) {
          if (xotakernerutoxner[c].x == x && xotakernerutoxner[c].y == y) {
            xotakernerutoxner.splice(c, 1);
            break;
          }
        }
      }
      else if (matrix[y][x] == 5) {
         for (var c in dziapxer) {
          if (dziapxer[c].x == x && dziapxer[c].y == y) {
            dziapxer.splice(c, 1);
            break;
          }
        }
      }
       else if (matrix[y][x] == 4) {
        for (var c in amenakerner) {
          if (amenakerner[c].x == x && amenakerner[c].y == y) {
            amenakerner.splice(c, 1);
            break;
          }
        }
      }
      matrix[y][x]=indexx;
     if (indexx == 1) {
				var gr = new Grass(x, y, 1);
				grassArr.push(gr);
			}
			else if (indexx == 2) {
				xotakerner.push(new Xotaker(x, y, 2, Math.floor(random(0, 2))));
			}
			else if (indexx == 3) {
				xotakernerutoxner.push(new Xotakerutox(x, y, 3, Math.floor(random(0, 2))));
			}
			else if (indexx == 4) {
				amenakerner.push(new Amenaker(x, y));
			}
			else if (indexx == 5) {
				dziapxer.push(new Dziapix(x, y));
			}
		}
  }

function draw() {
	if (frameCount%30 == 0) {
		socket.emit("send obj", statistika);
	}
	// console.log(grassArr.length);
	//console.log(statistika.achacxot,statistika.cnvacxotaker,statistika.cnvacxotakerutox);
	noStroke();
	fill('rgba(32,32,32,0.2)')
	rect(610, 150, 450, 200);
	fill("red");
	textSize(150);
	text(exanak, 620, 300);
	if (exanak == "amar") {
		bodi("url('http://download.loveradio.ru/pub/1013612.jpg')");
	}
	if (exanak == "dzmer") {
		bodi("url('https://shabat.am/img/artpic/maxresdefault(1)59.jpg')");
	}
	if (exanak == "garun") {
		bodi("url('http://itd2.mycdn.me/image?id=770991724984&t=20&plc=WEB&tkn=*6tChfXzHVilGwJo4U3P0mKZ2Tus");
	}
	if (exanak == "ashun") {
		bodi("url('http://www.fresher.ru/mary/10-2016/osen-luchshie-fotografii-so-vsego-mira/big/20.jpg	')");
	}
	fill('rgba(32,32,32,0.2)')
	rect(600,20,1500,120);
	fill("green")
	rect(600,20,grassArr.length*2,30);
	fill("yellow")
	rect(600,50,xotakerner.length*10,30);
	fill("red")
	rect(600,80,xotakernerutoxner.length*15,30);
	fill("black")
	rect(600,110,amenakerner.length*20,30);
	fill('rgba(150,20,50,0.5)')
	rect(610,413,350,15);
	fill(arr[indexx]);
	rect(550+(6-indexx)*70,415,45,10);
	textSize(32);
	fill("white");
	text(grassArr.length,1000,50);
	textSize(32);
	fill("white");
	text(xotakerner.length,1000,80);
	textSize(32);
	fill("white");
	text(xotakernerutoxner.length,1000,110);
	textSize(32);
	fill("white");
	text(amenakerner.length,1000,140);
	a++;
	if (a > 50) {
		if (++ex == 4) {
			ex = 0;
		}
		exanak = exanakner[ex];
		a = 0;
	 }
	// mull++;
	// if (mull > 25) {
	// 	if (mull ==26) {
	// 		lx = Math.floor(random(0, matrix[0].length));
	// 		ly = Math.floor(random(0, matrix.length));
	// 	}
	// 	for (var x = 0; x < matrix[0].length; x++) {
	// 		line(lx * side + 15, 0, lx * side + 15, matrix.length * side);
	// 		if (matrix[ly][x] == 1) {
	// 			for (var c in grassArr) {
	// 				if (grassArr[c].x == x && grassArr[c].y == ly) {
	// 					grassArr.splice(c, 1);
	// 					break;
	// 				}
	// 			}
	// 		}
	// 		else if (matrix[ly][x] == 2) {
	// 			for (var c in xotakerner) {
	// 				if (xotakerner[c].x == x && xotakerner[c].y == ly) {
	// 					xotakerner.splice(c, 1);
	// 					break;
	// 				}
	// 			}
	// 		}
	// 		else if (matrix[ly][x] == 3) {
	// 			for (var c in xotakernerutoxner) {
	// 				if (xotakernerutoxner[c].x == x && xotakernerutoxner[c].y == ly) {
	// 					xotakernerutoxner.splice(c, 1);
	// 					break;
	// 				}
	// 			}
	// 		}
	// 		else if (matrix[ly][x] == 4) {
	// 			for (var c in amenakerner) {
	// 				if (amenakerner[c].x == x && amenakerner[c].y == ly) {
	// 					amenakerner.splice(c, 1);
	// 					break;
	// 				}
	// 			}
	// 		}
	// 		else if (matrix[ly][x] == 5) {
	// 			for (var c in dziapxer) {
	// 				if (dziapxer[c].x == x && dziapxer[c].y == ly) {
	// 					dziapxer.splice(c, 1);
	// 					break;
	// 				}
	// 			}
	// 		}
	// 		if (matrix[ly][x] != 11 && matrix[ly][x] != 22 && matrix[ly][x] != 33 && matrix[ly][x] != 44) {
	// 			matrix[ly][x] = 101;
	// 		}
	// 	}


	// 	for (var y = 0; y < matrix.length; y++) {
	// 		if (matrix[y][lx] == 1) {
	// 			for (var c in grassArr) {
	// 				if (grassArr[c].x == lx && grassArr[c].y == y) {
	// 					grassArr.splice(c, 1);
	// 					break;
	// 				}
	// 			}
	// 		}
	// 		else if (matrix[y][lx] == 2) {
	// 			for (var c in xotakerner) {
	// 				if (xotakerner[c].x == lx && xotakerner[c].y == y) {
	// 					xotakerner.splice(c, 1);
	// 					break;
	// 				}
	// 			}
	// 		}
	// 		else if (matrix[y][lx] == 3) {
	// 			for (var c in xotakernerutoxner) {
	// 				if (xotakernerutoxner[c].x == lx && xotakernerutoxner[c].y == y) {
	// 					xotakernerutoxner.splice(c, 1);
	// 					break;
	// 				}
	// 			}
	// 		}
	// 		else if (matrix[y][lx] == 4) {
	// 			for (var c in amenakerner) {
	// 				if (amenakerner[c].x == lx && amenakerner[c].y == y) {
	// 					amenakerner.splice(c, 1);
	// 					break;
	// 				}
	// 			}
	// 		}
	// 		else if (matrix[y][lx] == 5) {
	// 			for (var c in dziapxer) {
	// 				if (dziapxer[c].x == lx && dziapxer[c].y == y) {
	// 					dziapxer.splice(c, 1);
	// 					break;
	// 				}
	// 			}
	// 		}
	// 		if (matrix[y][lx] != 11 && matrix[y][lx] != 22 && matrix[y][lx] != 33 && matrix[y][lx] != 44) {
	// 			if (matrix[y][lx] == 101) {
	// 				matrix[y][lx] = 102;
	// 			}
	// 			else {
	// 				matrix[y][lx] = 100;
	// 			}
	// 		}

	// 		if (mull > 30) {
	// 			mull = 0;
	// 		}
	// 	}
	// }

			lx =Math.floor(mouseX/30);
			ly = Math.floor(mouseY/30);
			if(lx>=0 && lx<20 && ly>=0 && ly<20 && click>0){
		for (var x = 0; x < matrix[0].length; x++) {
			if (matrix[ly][x] == 1) {
				for (var c in grassArr) {
					if (grassArr[c].x == x && grassArr[c].y == ly) {
						grassArr.splice(c, 1);
						break;
					}
				}
			}
			else if (matrix[ly][x] == 2) {
				for (var c in xotakerner) {
					if (xotakerner[c].x == x && xotakerner[c].y == ly) {
						xotakerner.splice(c, 1);
						break;
					}
				}
			}
			else if (matrix[ly][x] == 3) {
				for (var c in xotakernerutoxner) {
					if (xotakernerutoxner[c].x == x && xotakernerutoxner[c].y == ly) {
						xotakernerutoxner.splice(c, 1);
						break;
					}
				}
			}
			else if (matrix[ly][x] == 4) {
				for (var c in amenakerner) {
					if (amenakerner[c].x == x && amenakerner[c].y == ly) {
						amenakerner.splice(c, 1);
						break;
					}
				}
			}
			else if (matrix[ly][x] == 5) {
				for (var c in dziapxer) {
					if (dziapxer[c].x == x && dziapxer[c].y == ly) {
						dziapxer.splice(c, 1);
						break;
					}
				}
			}
			if (matrix[ly][x] != 11 && matrix[ly][x] != 22 && matrix[ly][x] != 33 && matrix[ly][x] != 44) {
				matrix[ly][x] = 101;
			}
		}


		for (var y = 0; y < matrix.length; y++) {
			if (matrix[y][lx] == 1) {
				for (var c in grassArr) {
					if (grassArr[c].x == lx && grassArr[c].y == y) {
						grassArr.splice(c, 1);
						break;
					}
				}
			}
			else if (matrix[y][lx] == 2) {
				for (var c in xotakerner) {
					if (xotakerner[c].x == lx && xotakerner[c].y == y) {
						xotakerner.splice(c, 1);
						break;
					}
				}
			}
			else if (matrix[y][lx] == 3) {
				for (var c in xotakernerutoxner) {
					if (xotakernerutoxner[c].x == lx && xotakernerutoxner[c].y == y) {
						xotakernerutoxner.splice(c, 1);
						break;
					}
				}
			}
			else if (matrix[y][lx] == 4) {
				for (var c in amenakerner) {
					if (amenakerner[c].x == lx && amenakerner[c].y == y) {
						amenakerner.splice(c, 1);
						break;
					}
				}
			}
			else if (matrix[y][lx] == 5) {
				for (var c in dziapxer) {
					if (dziapxer[c].x == lx && dziapxer[c].y == y) {
						dziapxer.splice(c, 1);
						break;
					}
				}
			}
			if (matrix[y][lx] != 11 && matrix[y][lx] != 22 && matrix[y][lx] != 33 && matrix[y][lx] != 44) {
				if (matrix[y][lx] == 101) {
					matrix[y][lx] = 102;
				}
				else {
					matrix[y][lx] = 100;
				}
			}
		}
	}











	for (var y = 0; y < matrix.length; y++) {

		for (var x = 0; x < matrix[y].length; x++) {
			if (matrix[y][x] == 1 && exanak == "amar") {
				fill("#ffca37");
				rect(x * side, y * side, side, side);
			}
			else if (matrix[y][x] == 1 && exanak == "dzmer") {
				fill("#00ffbb");
				rect(x * side, y * side, side, side);
			}
			else if (matrix[y][x] == 1 && exanak == "garun") {
				fill("#00ff00");
				rect(x * side, y * side, side, side);
			}
			else if (matrix[y][x] == 1 && exanak == "ashun") {
				fill("#994700");
				rect(x * side, y * side, side, side);
			}
			else if (matrix[y][x] == 0) {
				fill("#acacac");
				rect(x * side, y * side, side, side);
			}
			else if (matrix[y][x] == 2) {
				fill("yellow");
				rect(x * side, y * side, side, side);
			}
			else if (matrix[y][x] == 3) {
				fill("red");
				rect(x * side, y * side, side, side);
			}
			else if (matrix[y][x] == 4) {
				fill("black");
				rect(x * side, y * side, side, side);
			}
			else if (matrix[y][x] == 5) {
				fill("blue");
				rect(x * side, y * side, side, side);
			}
			else if (matrix[y][x] == 11) {
				fill("darkgreen");
				rect(x * side, y * side, side, side);
			}
			else if (matrix[y][x] == 22) {
				fill("darkorange");
				rect(x * side, y * side, side, side);
			}
			else if (matrix[y][x] == 33) {
				fill("darkred");
				rect(x * side, y * side, side, side);
			}
			else if (matrix[y][x] == 44) {
				fill("#333333");
				rect(x * side, y * side, side, side);
			}
			else if (matrix[y][x] == 101) {
				gic++;
				fill('#acacac');
				rect(x * side, y * side, side, side);
				fill("red");
				rect(x * side, y * side + 10, 30, 10);
				if (gic >= 1) {
					matrix[y][x] = 0;
					gic = 0;
				}
			}
			else if (matrix[y][x] == 100) {
				gic++;
				fill('#acacac');
				rect(x * side, y * side, side, side);
				fill("red");
				rect(x * side + 10, y * side, 10, 30);
				if (gic >= 1) {
					matrix[y][x] = 0;
					gic = 0;
				}
			}

			else if (matrix[y][x] == 102) {
				gic++;
				fill('#acacac');
				rect(x * side, y * side, side, side);
				fill("red");
				rect(x * side, y * side + 10, 30, 10);
				fill("red");
				rect(x * side + 10, y * side, 10, 30);
				if (gic >= 1) {
					matrix[y][x] = 0;
					gic = 0;
				}
			}
		}

	}
	for (var i in grassArr) {
		grassArr[i].bazmanal();
	}
	for (var i in xotakerner) {
		xotakerner[i].eat();
	}
	for (var i in xotakerner) {
		xotakerner[i].bazmanal();

		xotakerner[i].mahanal(i);
	}
	for (var i in xotakernerutoxner) {
		xotakernerutoxner[i].eat();
	}
	for (var i in xotakernerutoxner) {
		if (xotakernerutoxner[i].energy >= 35) {
			xotakernerutoxner[i].bazmanal();
		}
		else if (xotakernerutoxner[i].energy <= 0) {
			xotakernerutoxner[i].mahanal(i);
		}
	}
	for (var i in amenakerner) {
		amenakerner[i].eat();
	}
	for (var i in dziapxer) {
		dziapxer[i].sharjvel();
	}
	for (var i in dziapxer) {
		dziapxer[i].jardel();
	}
	for (var i in generatorner) {
		generatorner[i].bazmanal();
	}
}
function fillmatrix(n, m) {
	for (var y = 0; y < n; y++) {
		matrix.push([]);
		for (var x = 0; x < m; x++) {
			if (y == x && y + x == 4) {
				matrix[y][x] = 11;
			}
			else if (y == x && y + x == 34) {
				matrix[y][x] = 22;
			}
			else if (y - x == 15 && y + x == 19) {
				matrix[y][x] = 33;
			}
			else if (y == x && y == 9) {
				matrix[y][x] = 5;
			}
			else if (x - y == 15 && y + x == 19) {
				matrix[y][x] = 44;
			}
			else {
				matrix[y][x] = 0;
			}
			// 			if (((j <= 2 && y < 15) || (j <= 4 && y >= 15)) && k <= 2 && d <= 1 && p <= 1) {
			// 				matrix[y][x] = Math.floor(random(0, 6));
			// 			}
			// 			else if (((j <= 2 && y < 15) || (j <= 4 && y >= 15)) && k <= 2 && d <= 1) {
			// 				matrix[y][x] = Math.floor(random(0, 5));
			// 			}
			// 			else if (((j <= 2 && y < 15) || (j <= 4 && y >= 15)) && k <= 2) {
			// 				matrix[y][x] = Math.floor(random(0, 4));
			// 			}
			// 			else if ((j <= 2 && y < 15) || j <= 4 && y >= 15) {
			// 				matrix[y][x] = Math.floor(random(0, 3));
			// 			}
			// 			else {
			// 				matrix[y][x] = Math.floor(random(0, 2));
			// 			}
			// 			if (matrix[y][x] == 2) {
			// 				j++;
			// 			}
			// 			else if (matrix[y][x] == 3) {
			// 				k++;
			// 			}
			// 			else if (matrix[y][x] == 4) {
			// 				d++;
			// 			}
			// 			else if (matrix[y][x] == 5) {
			// 				p++;
			// 			}
		}
	}
}























// function setup(){
//   createCanvas(710, 400, WEBGL);
// }

// function draw(){
//   background(250);
//   rotateY(frameCount * 0.01);

//   for(var j = 0; j < 5; j++){
//     push();
//     for(var i = 0; i < 80; i++){
//       translate(sin(frameCount * 0.001 + j) * 100, sin(frameCount * 0.001 + j) * 100, i * 0.1);
//       rotateZ(frameCount * 0.002);
//       push();
//       sphere(8, 6, 4); 
//       pop();
//     }
//     pop();
//   }
// }