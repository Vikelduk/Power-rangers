var canvas = new fabric.Canvas('myCanvas');

blockY=1;
blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

function newImage(getImage)
{
   fabric.Image.fromURL(getImage, function(Img) {
    block_image_object = Img;

    block_image_object.scaleToWidth(blockImageWidth);
    block_image_object.scaleToHeight(blockImageHeight);
    block_image_object.set({
            top: blockY,
            left: blockX
    });
   canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

   if(keyPressed == '69')
   {
       blockX = 1;
       newImage('rr1.png');
       console.log('e');
   }
   if(keyPressed == '86')
   {
       blockX = 200;
       newImage('gr.png');
       console.log('v');
   }
   
   if(keyPressed == '65')
   {
       blockX =350;
       newImage('yr.png');
       console.log('a');
   }
   if(keyPressed == '82')
   {
       blockX = 600;
       newImage('pr.png');
       console.log('r');
   }
   if(keyPressed == '73')
   {
       blockX = 700;
       newImage('br.png');
       console.log('i');
   }
   
}
