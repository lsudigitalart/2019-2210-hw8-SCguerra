var gif;

function preload() {
  gif = createImg("water.gif");
  music = loadSound ("Guitar Prelude.mp3");
}
function setup() {
    createCanvas(605, 342);
    music.play();
    volume(0.2);
  }

  var myX = 0;

  function draw() {
    gif.position(10, 10);
    tint(255, 127);
    background(255);
    creature(myX, 250, 500);
    ellipse(400, 400, 50, 50);
    myX += 3;
    
  }
  
  function creature(cX, cY, cD){
      var r = random(200);
      circle(cX, cY, cD);
      return r;
  }
  

