var myworld,myengine,body,ball,a,p,ground,box1,box2,pig1,log1,bird,edges,box3,pig2,log2,box4,thread,
box5,box6,pig3,log3,box8,pig4,log4,box7,m,n,bg
function preload(){
m=loadImage("bg.png")
n=loadImage("bg2.jpg")


}
function setup(){
createCanvas(1200,700)
myengine=Matter.Engine.create()
myworld=myengine.world;
bg=m
ground=new Ground(width/2,height-10,width,20)
g2=new Ground(150,600,300,200)
box1=new Box(850,350)
box2=new Box(850,400)
pig1=new Pig(850,300)
pig2=new Pig(850,450)
log1=new Log(900,650,295,PI)
log2=new Log(800,650,295,PI)
box4=new Box(750,400)
box3=new Box(750,350)
box5=new Box(850,250)
box6=new Box(750,250)
pig3=new Pig(750,300)
pig4=new Pig(750,450)
log3=new Log(700,650,295,PI)
bird=new Bird(100,600)
log4=new Log(200,100,50,PI/2)
thread=new Sling(bird.body,{x:280,y:420})
}
function draw(){
background(bg)
Matter.Engine.update(myengine)
text(mouseX+ ","+mouseY,mouseX,mouseY)
//console.log(bird.arr)
gettime()
ground.display()
box1.display()
box2.display()
pig1.display()
pig2.display()
bird.display()
box3.display()
log1.display()
thread.display()
log2.display()
box4.display()
box5.display()
box6.display()
pig3.display()
pig4.display()
g2.display()
log3.display()
}
function mouseDragged() {
Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
 thread.fly()
}
function keyPressed(){
 if(keyCode==32) {
  thread.attach(bird.body)  
  bird.arr=[] 
 }  
}
async function gettime(){
var response= await(await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")).json()
var time= response.datetime.slice(11,13)
if(time>=6&&time<=19){
bg=m
} else {
bg=n
}
}