class Bin{
    constructor(x,y){
        this.width=700;
        this.height=50;
       
        this.bin= createSprite(x,y, this.width,this.height);
        this.bin.addImage(trashCanPicture);
        this.bin.scale=0.3;
    }

}