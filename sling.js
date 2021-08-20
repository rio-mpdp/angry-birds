class Sling{
  constructor(a,b){
    this.sling=Matter.Constraint.create({
        bodyA:a,
        pointB:b,
        stiffness:0,
        length:40 
        })
        Matter.World.add(myworld,this.sling)
        this.s1=loadImage("sling1.png")
        this.s2=loadImage("sling2.png")
        this.s3=loadImage("sling3.png")

  } 
  display(){
      if(this.sling.bodyA!=null){ 
        push()
  var a=this.sling.bodyA.position
  var b=this.sling.pointB
  //line(a.x,a.y,b.x,b.y)
  stroke(color(48,22,8))
  strokeWeight(3)
line(a.x-20,a.y,b.x-10,b.y)
line(a.x+10,a.y,b.x+15,b.y)
image(this.s3,a.x-25,a.y,15,20)
pop()
}
  image(this.s1,270,400,50,100) 
  image(this.s2,240,400,50,60) 
  }
  fly(){
  this.sling.bodyA=null  

  }
  attach(b){
this.sling.bodyA=b
  }
}