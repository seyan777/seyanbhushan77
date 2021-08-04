class drop{
    constructor(){
        this.rain = Bodies.circle(x,y,5,options)
    }
    update(){
        if(this.position.y>height){
            matter.Body.setposition(this.rain,{x:random (0,400)})
            
        }
    }
    display (){

    }
}