var numbers = [15,22,48,37]
var games = ["Madden NFL 17", "NBA 2k17", "FIFA 17", "Call Of Duty:Black Ops", "NCAA Football 14", "Grand Theft Auto 5", ];
var j = 0

function setup(){
 createCanvas(600,400); 
}

function draw(){
    background(200,100,0); 
    
    fill(150);
    line(300,300,400,200);
    line(200,300,300,200);
    line(100,300,200,200);
    line(0,300,100,200);
    

   
    for(var i = 0; i < 4; i++){
         ellipse((i+1)*100,200,numbers[i],numbers[i]);
}
  
  fill(0,200,200);
  textSize(30);
  text(games[j],200,150);
}

function mousePressed(){
    j = j += 1;
    if(j==games.length){
        j=0;
    }
}