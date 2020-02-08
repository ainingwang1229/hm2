
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);

  // Draw A - F
  printH(10, 10);
  printA(50, 10);
  printP(90, 10);
  printP(130, 10);
  printY(170, 10);
  // printF(310, 10);

  // Draw G - M
  printN(10, 150);
  printE(50, 150);
  printW(90, 150);
  // printJ(190, 150);
  // printK(250, 150);
  // printL(310, 150);
  // printM(370, 150);


  // Draw N - T
  printY(10, 290);
  printE(50, 290);
  printA(90, 290);
  printY(130, 290);
  // printR(250, 290);
  // printS(310, 290);
  // printT(370, 290);

  // // Draw U - Z
  // printU(10, 430);
  // printV(70, 430);
  // printW(130, 430);
  // printX(190, 430);
  // printY(250, 430);
  // printZ(310, 430);


}

// Draw A
function printA(x, y) {
  line(x, y, x, y + 90);
  line(x, y, x + 20, y);
  line(x + 20, y, x + 20, y + 90);
  line(x, y + 30, x + 20, y + 30);
}

// Draw B
function printB(x, y) {
  line(x, y, x, y + 90);
  line(x, y, x + 20, y);
  line(x + 20, y, x + 20, y + 90);
  line(x, y + 30, x + 20, y + 30);
  line(x, y + 90, x + 20, y + 90);
}

// Draw C
function printC(x, y) {
  line(x, y, x, y + 90);
  line(x, y, x + 20, y);
  line(x, y + 90, x + 20, y + 90);
}

// Draw D
function printD(x, y) {
  line(x, y, x, y + 90);
  line(x, y, x + 30, y);
  line(x + 30, y, x + 30, y + 90);
  line(x, y + 90, x + 30, y + 90);
}

// Draw E
function printE(x, y) {
  line(x, y, x, y + 90);
  line(x, y, x + 20, y);
  line(x, y + 30, x + 20, y + 30);
  line(x, y + 90, x + 20, y + 90);
}

// Draw F
function printF(x, y) {
  line(x, y, x, y + 90);
  line(x, y, x + 20, y);
  line(x, y + 30, x + 20, y + 30);
}

// Draw G
function printG(x, y) {
  line(x, y, x, y + 90);
  line(x, y, x + 20, y);
  line(x, y + 90, x + 20, y + 90);
  line(x + 10, y + 70, x + 20, y + 70);
  line(x + 20, y + 70, x + 20, y + 90);
}

// Draw H
function printH(x, y) {
  line(x, y, x, y + 90);
  line(x + 20, y, x + 20, y + 90);
  line(x, y + 30, x + 20, y + 30);
}


// Draw I
function printI(x, y) {
  line(x, y, x + 20, y);
  line(x + 10, y, x + 10, y + 90);
  line(x, y + 90, x + 20, y + 90);
}

// Draw J
function printJ(x, y) {
  line(x, y, x + 20, y);
  line(x + 10, y, x + 10, y + 90);
  line(x - 10, y + 70, x - 10, y + 90);
  line(x - 10, y + 90, x + 10, y + 90);
}

// Draw K
function printK(x, y) {
  line(x, y, x, y + 90);
  line(x + 20, y, x, y + 30);
  line(x, y + 30, x + 20, y + 90);
}

// Draw L
function printL(x, y) {
  line(x, y, x, y + 90);
  line(x, y + 90, x + 20, y + 90);
}

// Draw M
function printM(x, y) {
  line(x, y, x - 10, y + 90);
  line(x, y, x + 10, y + 90);
  line(x + 20, y, x + 10, y + 90);
  line(x + 20, y, x + 30, y + 90);
}

// Draw N
function printN(x, y) {
  line(x, y, x, y + 90);
  line(x + 20, y, x + 20, y + 90);
  line(x, y, x + 20, y + 90)
}

// Draw O
function printO(x, y) {
  line(x, y, x, y + 90);
  line(x, y, x + 20, y);
  line(x + 20, y, x + 20, y + 90);
  line(x, y + 90, x + 20, y + 90);
}

// Draw P
function printP(x, y) {
  line(x, y, x, y + 90);
  line(x, y, x + 20, y);
  line(x + 20, y, x + 20, y + 30);
  line(x, y + 30, x + 20, y + 30);
}

// Draw Q
function printQ(x, y) {
  line(x, y, x, y + 90);
  line(x, y, x + 20, y);
  line(x + 20, y, x + 20, y + 90);
  line(x, y + 90, x + 20, y + 90);
  line(x + 20, y + 90, x + 30, y + 90)
}

// Draw R
function printR(x, y) {
  line(x, y, x, y + 90);
  line(x, y, x + 20, y);
  line(x + 20, y, x + 20, y + 30);
  line(x, y + 30, x + 20, y + 30);
  line(x, y + 30, x + 20, y + 90);
}

// Draw S
function printS(x, y) {
  line(x, y, x, y + 30);
  line(x, y, x + 20, y);
  line(x + 20, y + 30, x + 20, y + 90);
  line(x, y + 30, x + 20, y + 30);
  line(x, y + 90, x + 20, y + 90);
}

// Draw T
function printT(x, y) {
  line(x, y, x + 30, y);
  line(x + 15, y, x + 15, y + 90);
}

// Draw U
function printU(x, y) {
  line(x, y, x, y + 90);
  line(x + 20, y, x + 20, y + 90);
  line(x, y + 90, x + 20, y + 90);
}

// Draw V
function printV(x, y) {
  line(x, y, x + 10, y + 90);
  line(x + 20, y, x + 10, y + 90);
}

// Draw W
function printW(x, y) {
  line(x, y + 90, x - 10, y);
  line(x, y + 90, x + 10, y);
  line(x + 20, y + 90, x + 10, y);
  line(x + 20, y + 90, x + 30, y);

}

// Draw X
function printX(x, y) {
  line(x, y, x + 20, y + 90);
  line(x + 20, y, x, y + 90);
}

// Draw Y
function printY(x, y) {
  line(x+10, y+30, x, y);
  line(x+10, y+30, x + 20, y);
  line(x + 10, y+30, x + 10, y + 90);
}

// Draw Z
function printZ(x, y) {
  line(x, y, x+20, y);
  line(x + 20, y, x, y + 90);
  line(x, y + 90, x + 20, y + 90);
}
