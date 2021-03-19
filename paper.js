 class Paper{
     constructor(x,y){
        var options={
         isStatic:false,
        restitution:0.3,
         friction:0.5,
         density:1.2
       }

       this.body=Bodies.circle(300,3,3,[options])
       World.add(world,this.body)
      } 

      display(){
         var pos=this.body.position;
         fill(254,0,253)
         ellipse(pos.x,pos.y )
      }
   }

     
     
     
 
