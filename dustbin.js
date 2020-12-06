class dustbin{



    constructor(x,y,width,height){


        var options={
            isStatic:true
           }
       
         this.body= Bodies.rectangle(x,y,width,height,options);
         this.body.width=width;
         this.body.height=height;
         this.image=loadImage("dustbingreen.png");
         World.add(world,this.body);
         





    }

 display(){
   
    strokeWeight(0);
    stroke("white");
    fill("white");

    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);




 }




}





































