<!--21130513_TranHoangSon_0816438935_DH21DTD-->

/* Khai báo các const và gán các biến*/
const blackColor='rgba(33, 30, 78, 0.99)';
const strokeColor='rgba(187, 186, 191, 0.4)';
const purpleColor='#8927d2';
const greenColor='#228b22';
const redColor='#FF4136';
const orangeColor= '#f85d09';
const blueColor='#0067c8';
const yellowColor='#fee321';
const cyanColor='#00cee5';
let isMusicPlaying=false;
const numberColumns = 10;
const numberRows = 20;
const blockLength = 30;
let refreshInterval; // Biến global để lưu trữ interval
let boxCover= document.querySelector(".box_cover");
let boxCover2=document.querySelector(".box_cover2");
let menu_pop_up= document.querySelector(".container_pop_up");
let menu_content_pop_up= document.querySelector(".content_pop_up");
let container_board= document.getElementById('container_board');
let level_pop_up= document.getElementById('level_pop_up');
let game_over= document.getElementById("game_over");
const blockColors = [
  redColor,
  orangeColor,
  greenColor,
  purpleColor,
  blueColor,
  cyanColor,
  yellowColor,
  blackColor,

];

/*
Mảng các khối gach tetris
Số 1 thường biểu diễn phần của khối gạch.
Số 7 thường biểu diễn các ô trống.
* * */
const layoutBrick = [
  [
      //Chữ J
    [
      [1, 7, 7],
      [1, 1, 1],
      [7, 7, 7],
    ],
    [
      [7, 1, 1],
      [7, 1, 7],
      [7, 1, 7],
    ],
    [
      [7, 7, 7],
      [1, 1, 1],
      [7, 7, 1],
    ],
    [
      [7, 1, 7],
      [7, 1, 7],
      [1, 1, 7],
    ],
  ],
  [
      //Chữ L
    [
      [7, 1, 7],
      [7, 1, 7],
      [7, 1, 1],
    ],
    [
      [7, 7, 7],
      [1, 1, 1],
      [1, 7, 7],
    ],
    [
      [1, 1, 7],
      [7, 1, 7],
      [7, 1, 7],
    ],
    [
      [7, 7, 1],
      [1, 1, 1],
      [7, 7, 7],
    ],
  ],
  [
      //Chữ S
    [
      [1, 7, 7],
      [1, 1, 7],
      [7, 1, 7],
    ],
    [
      [7, 1, 1],
      [1, 1, 7],
      [7, 7, 7],
    ],
    [
      [7, 1, 7],
      [7, 1, 1],
      [7, 7, 1],
    ],
    [
      [7, 7, 7],
      [7, 1, 1],
      [1, 1, 7],
    ],
  ],
  [
      //Chữ Z
    [
      [7, 1, 7],
      [1, 1, 7],
      [1, 7, 7],
    ],
    [
      [1, 1, 7],
      [7, 1, 1],
      [7, 7, 7],
    ],
    [
      [7, 7, 1],
      [7, 1, 1],
      [7, 1, 7],
    ],
    [
      [7, 7, 7],
      [1, 1, 7],
      [7, 1, 1],
    ],
  ],
  [
      //Chữ I
    [
      [7, 7, 7, 7],
      [1, 1, 1, 1],
      [7, 7, 7, 7],
      [7, 7, 7, 7],
    ],
    [
      [7, 7, 1, 7],
      [7, 7, 1, 7],
      [7, 7, 1, 7],
      [7, 7, 1, 7],
    ],
    [
      [7, 7, 7, 7],
      [7, 7, 7, 7],
      [1, 1, 1, 1],
      [7, 7, 7, 7],
    ],
    [
      [7, 1, 7, 7],
      [7, 1, 7, 7],
      [7, 1, 7, 7],
      [7, 1, 7, 7],
    ],
  ],
  [
      //Chữ O
    [
      [7, 7, 7, 7],
      [7, 1, 1, 7],
      [7, 1, 1, 7],
      [7, 7, 7, 7],
    ],
    [
      [7, 7, 7, 7],
      [7, 1, 1, 7],
      [7, 1, 1, 7],
      [7, 7, 7, 7],
    ],
    [
      [7, 7, 7, 7],
      [7, 1, 1, 7],
      [7, 1, 1, 7],
      [7, 7, 7, 7],
    ],
    [
      [7, 7, 7, 7],
      [7, 1, 1, 7],
      [7, 1, 1, 7],
      [7, 7, 7, 7],
    ],
  ],
  [
      // Chữ T
    [
      [7, 1, 7],
      [1, 1, 1],
      [7, 7, 7],
    ],
    [
      [7, 1, 7],
      [7, 1, 1],
      [7, 1, 7],
    ],
    [
      [7, 7, 7],
      [1, 1, 1],
      [7, 1, 7],
    ],
    [
      [7, 1, 7],
      [1, 1, 7],
      [7, 1, 7],
    ],
  ],
];
const layoutBrick_temp = [
  [
    //Chữ J
    [
      [1, 7, 7],
      [1, 1, 1],
      [7, 7, 7],
    ],
    [
      [7, 1, 1],
      [7, 1, 7],
      [7, 1, 7],
    ],
    [
      [7, 7, 7],
      [1, 1, 1],
      [7, 7, 1],
    ],
    [
      [7, 1, 7],
      [7, 1, 7],
      [1, 1, 7],
    ],
  ],
  [
    //Chữ L
    [
      [7, 1, 7],
      [7, 1, 7],
      [7, 1, 1],
    ],
    [
      [7, 7, 7],
      [1, 1, 1],
      [1, 7, 7],
    ],
    [
      [1, 1, 7],
      [7, 1, 7],
      [7, 1, 7],
    ],
    [
      [7, 7, 1],
      [1, 1, 1],
      [7, 7, 7],
    ],
  ],
  [
    //Chữ S
    [
      [1, 7, 7],
      [1, 1, 7],
      [7, 1, 7],
    ],
    [
      [7, 1, 1],
      [1, 1, 7],
      [7, 7, 7],
    ],
    [
      [7, 1, 7],
      [7, 1, 1],
      [7, 7, 1],
    ],
    [
      [7, 7, 7],
      [7, 1, 1],
      [1, 1, 7],
    ],
  ],
  [
    //Chữ Z
    [
      [7, 1, 7],
      [1, 1, 7],
      [1, 7, 7],
    ],
    [
      [1, 1, 7],
      [7, 1, 1],
      [7, 7, 7],
    ],
    [
      [7, 7, 1],
      [7, 1, 1],
      [7, 1, 7],
    ],
    [
      [7, 7, 7],
      [1, 1, 7],
      [7, 1, 1],
    ],
  ],
  [
    //Chữ I
    [
      [7, 7, 7, 7],
      [1, 1, 1, 1],
      [7, 7, 7, 7],
      [7, 7, 7, 7],
    ],
    [
      [7, 7, 1, 7],
      [7, 7, 1, 7],
      [7, 7, 1, 7],
      [7, 7, 1, 7],
    ],
    [
      [7, 7, 7, 7],
      [7, 7, 7, 7],
      [1, 1, 1, 1],
      [7, 7, 7, 7],
    ],
    [
      [7, 1, 7, 7],
      [7, 1, 7, 7],
      [7, 1, 7, 7],
      [7, 1, 7, 7],
    ],
  ],
  [
    //Chữ O
    [
      [7, 7, 7, 7],
      [7, 1, 1, 7],
      [7, 1, 1, 7],
      [7, 7, 7, 7],
    ],
    [
      [7, 7, 7, 7],
      [7, 1, 1, 7],
      [7, 1, 1, 7],
      [7, 7, 7, 7],
    ],
    [
      [7, 7, 7, 7],
      [7, 1, 1, 7],
      [7, 1, 1, 7],
      [7, 7, 7, 7],
    ],
    [
      [7, 7, 7, 7],
      [7, 1, 1, 7],
      [7, 1, 1, 7],
      [7, 7, 7, 7],
    ],
  ],
  [
    // Chữ T
    [
      [7, 1, 7],
      [1, 1, 1],
      [7, 7, 7],
    ],
    [
      [7, 1, 7],
      [7, 1, 1],
      [7, 1, 7],
    ],
    [
      [7, 7, 7],
      [1, 1, 1],
      [7, 1, 7],
    ],
    [
      [7, 1, 7],
      [1, 1, 7],
      [7, 1, 7],
    ],
  ],
];

// Gán chức năng cho phím
const keyPress = {
  LEFT: 'ArrowLeft',
  RIGHT: 'ArrowRight',
  UP: 'ArrowUp',
  DOWN: 'ArrowDown',
};

//Màu mặc định của bảng khi các ô chưa được làm đầy bởi các block
const emptyColor = 7;
const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');
ctx.canvas.width = numberColumns * blockLength;
ctx.canvas.height = numberRows * blockLength;

//Chức năng trở lại menu chính
document.getElementById("main_menu").addEventListener("click",()=>{
  menu_pop_up.style.display='block';
  menu_content_pop_up.style.display='block';
  game_over.style.display="none";

})
//Chức năng chơi lại màn
document.getElementById("again_btn").addEventListener("click",()=>{
  game_over.style.display="none";
  board.reset();
  document.getElementById('score').innerHTML = "0";
  if(level=="5"|| level=="6"){
    board.placeFixedBlock();
  }
  // Xử lý rơi, mỗi 1s thực hiện moveDown 1 ô, với điều kiện game chưa kết thúc
  // Xử lý thời gian rơi tách biệt cho từng level, sau khi người dùng chọn level khác thì thời gian rơi được reset
  refreshInterval = setInterval(() => {
    if (!board.gameOver) {
      brick.moveDown();
      //Ở level 4 thì tính năng xoay bị khóa
      if(level=="4"){
        brick.rotate();
      }
    } else {
      clearInterval(refreshInterval);
    }
  }, 1000);
  //Khi game kết thúc vẽ lại bảng
  board.gameOver=false;
  board.isPlaying=true;
  randomNewBrick();
})

// Chức năng chọn  level
document.getElementById('level_game').addEventListener('click',()=>{
  menu_content_pop_up.style.display="none";
  level_pop_up.style.display="block";
})

// Chức năng thoát chọn level
document.getElementById('exit_level').addEventListener('click',()=>{
  menu_content_pop_up.style.display='block';
  level_pop_up.style.display='none';
})

// Chức năng chọn âm thanh và nhạc
document.getElementById("music_button").addEventListener('click',()=>{
  if(!isMusicPlaying){
    board.gameAudio.volume=0.5;
    board.clearAudio.volume=1;
    board.gameAudio.play();
    isMusicPlaying=true;
    board.gameAudio.loop=true;

  }
  else {
    board.gameAudio.pause();
    board.clearAudio.volume=0;
    board.gameAudio.currentTime=0;
    board.gameAudio.loop=true;
    isMusicPlaying=false;
  }
});

// Chức năng hiển thị menu
document.getElementById("menu_button").addEventListener('click',()=>{
  menu_pop_up.style.display='block';
  menu_content_pop_up.style.display='block';
})

// Chức năng thoát menu
document.getElementById("exit").addEventListener('click',()=>{
  menu_pop_up.style.display='none';
})

//Constructor của ctx
class Board {
  constructor(ctx) {
    this.ctx = ctx;
    this.grid = this.loadNewBoard();
    this.score = 0;
    this.gameOver = false;
    this.isPlaying = false;
    this.clearAudio = new Audio('../sounds/ClearRow.wav');
    this.gameAudio= new Audio('../sounds/TetrisGame.mp3');
  }

  // Đặt thêm các khối gạch cho level 5 và 6
  placeFixedBlock() {
  /*  Vẽ lại vị trí các khối gạch để tăng độ khó
    Ví dụ: Đặt một khối gạch cố định ở hàng thứ 15 và cột thứ 5*/

    this.grid[5][7] = 5;
    this.grid[6][7] = 5;
    this.grid[7][7] = 5;

    this.grid[10][2] = 5;
    this.grid[11][2] = 5;
    this.grid[12][2] = 5;
    this.drawBoard();

  }
  reset() {
    this.score = 0;
    this.grid = this.loadNewBoard();
    this.gameOver = false;
    this.drawBoard();
  }

  // Xây dựng 1 bảng ban đầu  20 hàng, mỗi hàng tương ứng với 10 cột, chạy với mã màu trắng
  loadNewBoard() {
    return Array.from({ length: numberRows }, () => Array(numberColumns).fill(emptyColor));
  }


  // Vẽ ra 1 khối màu theo tọa độ trục X và Y và mã màu theo mảng đã khai báo
  drawCell(xAxis, yAxis, colorId) {
    this.ctx.fillStyle =
      blockColors[colorId] || blockColors[emptyColor];

    // Xác định vị trí block để vẽ
    this.ctx.fillRect(
      xAxis * blockLength,
      yAxis * blockLength,
      blockLength,
      blockLength
    );
    // Vẽ viền cho block
    this.ctx.strokeStyle = strokeColor;
    this.ctx.strokeRect(
      xAxis * blockLength,
      yAxis * blockLength,
      blockLength,
      blockLength
    );
  }


  // Vẽ lại bảng khi bắt đầu hoặc qua vòng khác bằng cách duyệt qua tung block
  drawBoard() {
    //Chạy qua từng block trong bảng
    for (let row = 0; row < this.grid.length; row++) {
      for (let col = 0; col < this.grid[0].length; col++) {
        this.drawCell(col, row, this.grid[row][col]);
      }
    }
  }


 /* Xử lý các hàng đã hoàn thành trong game
 * Khi một hàng được lắp đầy bởi các khối block thì sẽ được xử lý*/
  deleteRow() {
    const latestGrid = board.grid.filter((row) => { // row => []
      return row.some(col => col === emptyColor);
    });

    const newScore = numberRows - latestGrid.length; // => newScore = tong cong hang da hoan thanh
   // Xử lý hàng mới bằng cách vẽ lại màu mặc định của bảng
    const newRows = Array.from({ length: newScore }, () => Array(numberColumns).fill(emptyColor));

    // Khi môt hang được xử lý thì người chơi sẽ được 100 điểm
    if (newScore) {
      board.grid = [...newRows, ...latestGrid];
      this.addScore(newScore * 100);

      this.clearAudio.play();
      console.log({latestGrid});
    }
  }

  //Xử lý điểm cứ 1 hàng được lắp đầy gạch sẽ được công thêm vào 100 điểm
  addScore(newScore) {
    this.score+= newScore;
    document.getElementById('score').innerHTML = this.score;
  }


  /*Xử lý khi game kết thúc, cập nhật lại các thuộc tính*/
  processGameOver() {
    this.gameOver = true;
    this.isPlaying = false;
    game_over.style.display="block";
  }
}

class Brick {
  constructor(id) {
    this.id = id;
    this.layout = layoutBrick[id];
    this.layout2=layoutBrick_temp[id];
    this.activeIndex = 0;
    this.colPos = 3;     // khoảng cách khối gạch rơi cách mép côt trái  bằng 3
    this.rowPos = -2;    // cho khối gạch tạo ra cao thêm 2 ô để xử lý va chạm khi game kết thúc
  }

  /*Vẽ 1 khối gạch, chạy hai vòng lặp để duyệt qua tất cả các cell, bỏ qua các khối gạch màu trắng
  Vị trí cell cần vẽ là khoảng cách từ gốc tọa độ + vị trí của cell trong khối gạch mảng hai chiều*/
  draw() {
    for (let row = 0; row < this.layout[this.activeIndex].length; row++) {
      for (let col = 0; col < this.layout[this.activeIndex][0].length; col++) {
        if (this.layout[this.activeIndex][row][col] !== emptyColor) {
          board.drawCell(col + this.colPos, row + this.rowPos, this.id);
        }
      }
    }
  }

  /*Phương thức dùng để xóa khối gạch cũ sau khi di chuyển khối gạch sang vị trí mới, tương tự như draw nhưng
  thành colorid thành màu trắng*/
  clear() {
    for (let row = 0; row < this.layout[this.activeIndex].length; row++) {
      for (let col = 0; col < this.layout[this.activeIndex][0].length; col++) {
        if (this.layout[this.activeIndex][row][col] !== emptyColor) {
          board.drawCell(col + this.colPos, row + this.rowPos, emptyColor);
        }
      }
    }
  }

  /*Chức năng di chuyển khối gạch qua trái  khi không có va chạm so với vị trí tương lai của khối gạch*/
  moveLeft() {
    if (
      !this.detectCollision (
        this.rowPos,
        this.colPos - 1,
        this.layout[this.activeIndex]
      )
    ) {
      this.clear(); //Vì canvas vẽ cố định, nên cần phương thức xóa ảnh khối gạch cũ sau khi di chuyển sang vị trí mới
      this.colPos--;
      this.draw();
    }
  }

  /*Chức năng di chuyển khối gạch qua phải  khi không có va chạm so với vị trí tương lai của khối gạch*/
  moveRight() {
    if (
      !this.detectCollision (
        this.rowPos,
        this.colPos + 1,
        this.layout[this.activeIndex]
      )
    ) {
      this.clear();
      this.colPos++;
      this.draw();
    }
  }


  /*Chức năng di chuyển khối gạch xuống khi không có va chạm so với vị trí tương lai của khối gạch*/
  moveDown() {
    if (
      !this.detectCollision (
        this.rowPos + 1,
        this.colPos,
        this.layout[this.activeIndex]
      )
    ) {
      this.clear();
      this.rowPos++;
      this.draw();

      return;
    }

    this.processLanding();
    randomNewBrick();
  }

  /*Xử lý sự kiện xoay khối, chia cho module 4 để lấy ra các vị trí block từ 0 đến 3 khai báo ở const*/
  rotate() {
    // Nếu phát hiện va chạm thì không thể xoay khối
    if (
      !this.detectCollision (
        this.rowPos,
        this.colPos,
        this.layout[(this.activeIndex + 1) % 4]
      )
    ) {
      this.clear();
      this.activeIndex = (this.activeIndex + 1) % 4;
      this.draw();
    }
  }

/*  Xử lý va chạm xem vị trí tương lai khối brick có va chạm với brick khác hoặc va chạm mép tường
* Truyền vào ba tham số để xác định v trí tương lai và layout của khối gạch sau khi xoay có vi phạm với
* khối gạch khác hoặc tường hay không*/
  detectCollision (nextRow, nextCol, nextLayout) {
    // if (nextCol < 0) return true;

    for (let row = 0; row < nextLayout.length; row++) {
      for (let col = 0; col < nextLayout[0].length; col++) {
        if (nextLayout[row][col] !== emptyColor && nextRow >= 0) {
          //Kiểm tra vị trí tương lai khối gach chạm vào mép tường
          if (
            col + nextCol < 0 ||  col + nextCol >= numberColumns ||  row + nextRow >= numberRows ||
              //Kiểm tra xem vị trí tương lai của khối gạch có chạm vào khối khác không
            board.grid[row+nextRow][col+nextCol] !== emptyColor
          )
            return true;
        }
      }
    }

    return false;
  }


  // Kiểm tra 1 viên gạch sau khi đã đáp xuông
  processLanding() {
    /*Kiểm tra gạch đã chạm đỉnh, nếu có thì trò chơi sẽ kết thúc*/
    if (this.rowPos <= 0) {
      board.processGameOver();
      return;
    }
    // Duyệt qua các block để cập nhật vị trí các block sau khi 1 khối gạch đã rơi xong
    for (let row = 0; row < this.layout[this.activeIndex].length; row++) {
      for (let col = 0; col < this.layout[this.activeIndex][0].length; col++) {
        if (this.layout[this.activeIndex][row][col] !== emptyColor) {
          board.grid[row + this.rowPos][col + this.colPos] = this.id;
        }
      }
    }

    //kiểm tra lại xem có hàng nào hoàn thành, nếu có thì gị hàm deleteRow rồi vẽ lại bảng

    board.deleteRow();
    board.drawBoard();
  }
}

/*Tạo ra khối gạch bất kì sau khi xử lý xong khối gạch hiện tại*/
function randomNewBrick() {
  //ramdom so tu 0 ->1, xong nhan 10 r moduler với 7 để lấy khối gạch từ 0->6 trong mảng
  brick = new Brick(Math.floor(Math.random() * 10) % 7);
}

board = new Board(ctx);
board.drawBoard();
let level =1;

document.addEventListener('keydown', (e) => {
  //Kiem tra game chua ket thuc va dang duoc chơi
  if (!board.gameOver && board.isPlaying) {
    console.log({ e });
    // Gán các chức năng điểu khiển khối gạch cho phím điều hướng
    switch (e.code) {
      case keyPress.LEFT:
        brick.moveLeft();
        break;
      case keyPress.RIGHT:
        brick.moveRight();
        break;
      case keyPress.DOWN:
        brick.moveDown();
        break;
      case keyPress.UP:
        if (level != 4){
          brick.rotate();

        }
        break;
      default:
        break;
    }
  }
});



// Hàm để dừng vòng lặp setInterval
function stopRefreshInterval() {
  clearInterval(refreshInterval);
}

/*Phần xử lý các level, tùy vào level sẽ gán giá trị khác nhau vào biến level, tùy chỉnh trạng thái của block
để hiện màn che hay không, một số level cao sẽ thêm và sửa các chức năng riêng, gọi hàm thời gian rơi ở mỗi level*/

//Xử lý khi bắt đầu trò chơi level 1
document.getElementById('level1').addEventListener('click', () => {
  layoutBrick[5]=layoutBrick_temp[5];
  layoutBrick[4]=layoutBrick_temp[4];
  document.getElementById('score').innerHTML = "0";
  boxCover.style.display = "none";
  boxCover2.style.display='none';
  menu_pop_up.style.display='none';
  level_pop_up.style.display='none';
  document.getElementById("level").innerHTML="1";
  level=1;

  board.reset();
  board.isPlaying = true;
  stopRefreshInterval();
  randomNewBrick();

  //Xử lý rơi, mỗi 1s thực hiện moveDown 1 ô, với điều kiện game chưa kết thúc
   refreshInterval = setInterval(() => {
    if (!board.gameOver) {
      brick.moveDown();
    } else {
      clearInterval(refreshInterval);
    }
  }, 1000);
})





//Xử lý khi bắt đầu trò chơi level 2
document.getElementById('level2').addEventListener('click', () => {
  layoutBrick[5]=layoutBrick_temp[5];
  layoutBrick[4]=layoutBrick_temp[4];
  document.getElementById('score').innerHTML = "0";
  menu_pop_up.style.display='none';
  level_pop_up.style.display='none';
  document.getElementById("level").innerHTML="2";

  board.reset();
  board.isPlaying = true;
  level=2;
  stopRefreshInterval();
  randomNewBrick();
  boxCover.style.display='block';
  boxCover2.style.display="none";

  //Xử lý rơi, mỗi 1s thực hiện moveDown 1 ô, với điều kiện game chưa kết thúc
  refreshInterval = setInterval(() => {
    if (!board.gameOver) {
      brick.moveDown();
    } else {
      clearInterval(refreshInterval);
    }
  }, 1000);
})

//Xử lý khi bắt đầu trò chơi level 3
document.getElementById('level3').addEventListener('click', () => {
  layoutBrick[5]=layoutBrick_temp[5];
  layoutBrick[4]=layoutBrick_temp[4];
  document.getElementById('score').innerHTML = "0";
  menu_pop_up.style.display='none';
  level_pop_up.style.display='none';
  document.getElementById("level").innerHTML="3";
  boxCover.style.display='block';
  boxCover2.style.display="block";
  board.reset();
  board.isPlaying = true;
  level=3;
  stopRefreshInterval();
  randomNewBrick();

  //Xử lý rơi, mỗi 1s thực hiện moveDown 1 ô, với điều kiện game chưa kết thúc
  refreshInterval = setInterval(() => {
    if (!board.gameOver) {
      brick.moveDown();
    } else {
      clearInterval(refreshInterval);
    }
  }, 1000);
})

//Xử lý khi bắt đầu level 4
document.getElementById('level4').addEventListener('click', () => {
  layoutBrick[5]=layoutBrick_temp[5];
  layoutBrick[4]=layoutBrick_temp[4];
  document.getElementById('score').innerHTML = "0";
  boxCover.style.display = "block";
  boxCover2.style.display="none";
  boxCover.style.animation= "fade 3s linear infinite";
  menu_pop_up.style.display='none';
  level_pop_up.style.display='none';
  document.getElementById("level").innerHTML="4";
  board.reset();
  board.isPlaying = true;
  stopRefreshInterval();
  randomNewBrick();
  level = 4

  //Xử lý rơi, mỗi 1s thực hiện moveDown 1 ô, với điều kiện game chưa kết thúc
  refreshInterval = setInterval(() => {
    if (!board.gameOver) {
      brick.moveDown();
      brick.rotate();
    } else {
      clearInterval(refreshInterval);
    }
  }, 1000);
})

//Xử lý khi bắt đầu trò chơi level 5
document.getElementById('level5').addEventListener('click', () => {
  layoutBrick[5]=layoutBrick_temp[5];
  layoutBrick[4]=layoutBrick_temp[4];
  document.getElementById('score').innerHTML = "0";
  boxCover.style.animation="fade1 3s linear infinite";
  boxCover.style.display = "block";
  boxCover2.style.display="none"
  menu_pop_up.style.display='none';
  level_pop_up.style.display='none';
  document.getElementById("level").innerHTML="5";
  level=5;

  board.reset();
  board.isPlaying = true;
  stopRefreshInterval();
  randomNewBrick();
  board.placeFixedBlock();

  //Xử lý rơi, mỗi 1s thực hiện moveDown 1 ô, với điều kiện game chưa kết thúc
  refreshInterval = setInterval(() => {
    if (!board.gameOver) {

      brick.moveDown();
    } else {
      clearInterval(refreshInterval);
    }
  }, 1000);
})

//Xử lý khi bắt đầu trò chơi level 6
document.getElementById('level6').addEventListener('click', () => {
  //Thay thế các khối gạch bằng các khối có độ phức tạp cao hơn
  layoutBrick[5]=
      [
          [
    [1, 7, 7],
    [1, 1, 7],
    [1, 1, 1],
  ],
      [
        [ 1, 1, 1],
        [ 1, 1, 7],
        [ 1, 7, 7],

      ],
      [
        [ 1, 1, 1],
        [ 7, 1, 1],
        [ 7, 7, 1],

      ],
      [
        [ 7, 7, 1],
        [ 7, 1, 1],
        [ 1, 1, 1],

      ],
];
  layoutBrick[4]=
      [
          [
      [7, 1, 7],
      [1, 1, 1],
      [7, 1, 7],
  ],
      [
        [7, 1, 7],
        [1, 1, 1],
        [7, 1, 7],

      ],
      [
        [7, 1, 7],
        [1, 1, 1],
        [7, 1, 7],

      ],
      [
        [7, 1, 7],
        [1, 1, 1],
        [7, 1, 7],
      ],
];
  document.getElementById('score').innerHTML = "0";
  boxCover.style.display = "block";
  boxCover2.style.display="block"
  menu_pop_up.style.display='none';
  level_pop_up.style.display='none';
  document.getElementById("level").innerHTML="6";
  level=6

  board.reset();
  board.isPlaying = true;
  stopRefreshInterval();
  randomNewBrick();
  board.placeFixedBlock();

  //Xử lý rơi, mỗi 1s thực hiện moveDown 1 ô, với điều kiện game chưa kết thúc
  refreshInterval = setInterval(() => {
    if (!board.gameOver) {
      brick.moveDown();
    } else {
      clearInterval(refreshInterval);
    }
  }, 1000);
})

console.table(board.grid);
