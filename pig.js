class Pig extends Parent{
    constructor(x,y){
   super(x,y,60,60)
        this.img=loadImage("enemy.png")
        this.t=255
    }
   display(){
       if(this.body.speed<10){
           super.display()
       }else {
           push()
         Matter.World.remove(myworld,this.body)  
         tint(255,this.t)
         image(this.img,this.body.position.x,this.body.position.y,60,60)
         this.t-=5
         pop()
       }

       
   }
    
    }