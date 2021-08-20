class Log /*extends Parent*/{
    constructor(x,y,h,a){
    
    //super(x,y,30,h)
    this.w=20
        this.h=h
    this.body=Matter.Bodies.rectangle(x,y,this.w,this.h)
   Matter.Body.setAngle(this.body,a)
    Matter.World.add(myworld,this.body)
this.img=loadImage("wood2.png")

    }
    display(){
        push()
        imageMode(CENTER) 
        
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        image(this.img,0,0,this.w,this.h) 
        
        pop()
        }
}