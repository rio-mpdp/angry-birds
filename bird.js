class Bird{
    constructor(x,y){
        this.w=50
        this.h=50
    this.body=Matter.Bodies.rectangle(x,y,this.w,this.h,{
     density:3,
     friction:0.8,
     restitution:0.6  
    })
    Matter.World.add(myworld,this.body)
    this.img=loadImage("bird.png")
    this.smoke=loadImage("smoke.png")
    this.arr=[]
    }
    display(){
        if(this.body.position.x>340){  
        this.arr.push([this.body.position.x,this.body.position.y])
        }
    push()
    
    imageMode(CENTER) 
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle)
    image(this.img,0,0,this.w,this.h) 
    pop()
   // console.log(this.arr[0])
    
    for( var i=0;i<this.arr.length;i++) {
        
    image(this.smoke,this.arr[i][0],this.arr[i][1])
   
    }
    }
    }