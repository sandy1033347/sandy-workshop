let mapArray, ctx, currentImgMain;
let imgMountain, imgMain, imgEnemy;
const gridLength = 200;
imgMain = new Image();
imgMain.src = "images/spriteSheet.png";

currentImgMain = {
    "x":0,"y":0
};


imgMain.onload = function(){
    ctx.drawImage(imgMain,0,0,80,130,currentImgMain.x,currentImgMain.y, gridLength, gridLength);
  };

var sources = {
    imgMain: "images/spriteSheet.png",
    imgMountain: "images/material.png",
    imgEnemy: "images/Enemy.png",
}

function loadImages(sources,callback){
    var images = {};
    var loadImages = 0;
    var numImages = 0;

    for(var src in sources){
        numImages++;
    }
    for(var src in sources){
        images[src] = new Image();
        images[src].onload = function(){
            if(++loadImages >= numImages){
                callback(images);
            }
        };
        images[src].src = sources[src];
    }
}

//init
$(function(){
    // 0:can walk , 1:障礙, 2:終點 ,3:敵人
    mapArray = [
        [0,1,1],
        [0,0,0],
        [3,1,2],
    ]});

    
    ctx = $("#myCanvas")[0].getContext("2d"); 
    //[0] jquery語法無法使用js的指令,故要加上[0]去指定唯一值



    loadImages(sources,function(images){
        ctx.drawImage(imgMain,0,0,80,130,currentImgMain.x,currentImgMain.y,gridLength,gridLength);
        for(var x in mapArray){
            for(var y in mapArray){
                if(mapArray[x][y]==1){
                    ctx.drawImage(images.imgMountain,32,65,32,32,y*gridLength,x*gridLength,gridLength,gridLength)
                }
                else if(mapArray[x][y]==3){
                    ctx.drawImage(images.imgEnemy,7,40,104,135,y*gridLength,x*gridLength,gridLength,gridLength)
                }
            }
        }
    })

    $(document).on("keydown", function(event){

        console.log(event.code); //event code 會有"key"A / event key 僅會顯示A
        let targetImg, targetBlock, cutImagePositionX;
        targetImg = {
            "x":-1,
            "y":-1
        }

        targetBlock = {
            "x":-1,
            "y":-1
        }
        event.preventDefault();

        switch(event.code){
            case "ArrowLeft" :
                targetImg.x = currentImgMain.x-gridLength;
                targetImg.y = currentImgMain.y;
                cutImagePositionX = 175; //face left
                break;
            case "ArrowUp" :
                targetImg.x = currentImgMain.x;
                targetImg.y = currentImgMain.y-gridLength;
                cutImagePositionX = 355; //face up
                break;
                
            case "ArrowRight" :
                targetImg.x = currentImgMain.x+gridLength;
                targetImg.y = currentImgMain.y;
                cutImagePositionX = 540; //face right
                break;
                
            case "ArrowDown" :
                targetImg.x = currentImgMain.x;
                targetImg.y = currentImgMain.y+gridLength;
                cutImagePositionX = 0; //face down
                break;
            default:
                return;
        }

        if(targetImg.x<=400 && targetImg.x>=0 && targetImg.y<=400 && targetImg.y>=0){
            //in the map > coordinate > 2d array
            targetBlock.x = targetImg.y/gridLength;
            targetBlock.y = targetImg.x/gridLength;

            ctx.clearRect(currentImgMain.x,currentImgMain.y,gridLength,gridLength)

            if(targetBlock.x!=-1 && targetBlock.y!=-1){
                switch(mapArray[targetBlock.x][targetBlock.y]){
                    case 0: //can go
                        $("#talkBox").text("");
                        currentImgMain.x = targetImg.x;
                        currentImgMain.y = targetImg.y;
                    break;

                    case 1: //mountain 不可移動
                        $("#talkBox").text("有山");
                    break;

                    case 2: //final stop
                        $("#talkBox").text("抵達終點");
                        currentImgMain.x = targetImg.x;
                        currentImgMain.y = targetImg.y;
                    break;

                    case 3: //enemy 不可移動
                        $("#talkBox").text("Hello");
                    break;
                }

            }else{
                $("#talkBox").text("邊界");
            }

            //redraw
            ctx.drawImage(imgMain,cutImagePositionX,0,80,130,currentImgMain.x,currentImgMain.y,gridLength,gridLength);

        }
        else{
            targetBlock.x = -1;
            targetBlock.y = -1;
        }


    });
