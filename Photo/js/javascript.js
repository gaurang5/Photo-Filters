var canvas1;
var canvas2;

var oimg = null; //original image
var img1 = null; //GrayScale
var img2 = null; //Red
var img3 = null; //Green
var img4 = null; //Blue
var img5 = null; //Rainbow
var img6 = null; //Window
var img7 = null; //Blurr

function display(){
  var fileinput = document.getElementById("fileinput");
  canvas1 = document.getElementById("div1");
  canvas2 = document.getElementById("div2");
  
  oimg = new SimpleImage(fileinput); //original image
  img1 = new SimpleImage(fileinput); //GrayScale
  img2 = new SimpleImage(fileinput); //Red
  img3 = new SimpleImage(fileinput); //Green
  img4 = new SimpleImage(fileinput); //Blue
  img5 = new SimpleImage(fileinput); //Rainbow
  img6 = new SimpleImage(fileinput); //Window
  img7 = new SimpleImage(fileinput); //Blurr
  oimg.drawTo(canvas1);
}

function imgload(){
  if(oimg == null || !oimg.complete()){
    alert("Image not Loaded");
  }
  else if (img1 == null || !img1.complete()){
    alert("Image not Loaded");
  }
  else if (img2 == null || !img2.complete()){
    alert("Image not Loaded");
  }
  else if (img3 == null || !img3.complete()){
    alert("Image not Loaded");
  }
  else if (img4 == null || !img4.complete()){
    alert("Image not Loaded");
  }
  else if (img5 == null || !img5.complete()){
    alert("Image not Loaded");
  }
  else if (img6 == null || !img6.complete()){
    alert("Image not Loaded");
  }
  else if (img7 == null || !img7.complete()){
    alert("Image not Loaded");
  }
}

function Grayscale(){
  imgload();
  
  for (var pixel of img1.values()){
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  img1.drawTo(canvas2);
}

function Red(){
  imgload();
  
  for (var pixel of img2.values()){
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (avg < 128){
      pixel.setRed(avg*2);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }
    else{
      pixel.setRed(255);
      pixel.setGreen(avg*2 - 255);
      pixel.setBlue(avg*2 - 255);
    }
  }
  img2.drawTo(canvas2);
}

function Green(){
  imgload();

  for (var pixel of img3.values()){
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (avg < 128){
      pixel.setRed(0);
      pixel.setGreen(avg*2);
      pixel.setBlue(0);
    }
    else{
      pixel.setRed(avg*2 - 255);
      pixel.setGreen(255);
      pixel.setBlue(avg*2 - 255);
    }
  }
  img3.drawTo(canvas2);
}

function Blue(){
  imgload();
  
  for (var pixel of img4.values()){
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (avg < 128){
      pixel.setRed(0);
      pixel.setGreen(0);
      pixel.setBlue(avg*2);
    }
    else{
      pixel.setRed(avg*2 - 255);
      pixel.setGreen(avg*2 - 255);
      pixel.setBlue(255);
    }
  }
  img4.drawTo(canvas2);
}

function Rainbow(){
  imgload();
  
  var imgh = img5.getHeight();
  for (var pixel of img5.values()){
    var pixh = pixel.getY();
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 7;
    if ((pixh < imgh/7) && (avg < 128)){
      pixel.setRed(avg*2);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }
    else if ((pixh < imgh/7) && (avg >= 128)){
      pixel.setRed(255);
      pixel.setGreen(avg * 2 - 255);
      pixel.setBlue(avg * 2 - 255);
    }
    if ((pixh < 2*imgh/7) && (pixh > imgh/7) && (avg < 128)){
      pixel.setRed(2 * avg);
      pixel.setGreen(0.8 * avg);
      pixel.setBlue(0);
    }
    else if ((pixh <= 2*imgh/7) && (pixh > imgh/7) && (avg >= 128)){
      pixel.setRed(255);
      pixel.setGreen(1.2 * avg - 51);
      pixel.setBlue(2 * avg - 255);
    }
    if ((pixh <= 3*imgh/7) && (pixh > 2*imgh/7) && (avg < 128)){
      pixel.setRed(2 * avg);
      pixel.setGreen(2 * avg);
      pixel.setBlue(0);
    }
    else if ((pixh <= 3*imgh/7) && (pixh > 2*imgh/7) && (avg >= 128)){
      pixel.setRed(255);
      pixel.setGreen(255);
      pixel.setBlue(2 * avg - 255);
    }
    if ((pixh <= 4*imgh/7) && (pixh > 3*imgh/7) && (avg < 128)){
      pixel.setRed(0);
      pixel.setGreen(2 * avg);
      pixel.setBlue(0);
    }
    else if ((pixh <= 4*imgh/7) && (pixh > 3*imgh/7) && (avg >= 128)){
      pixel.setRed(2 * avg - 255);
      pixel.setGreen(255);
      pixel.setBlue(2 * avg - 255);
    }
    if ((pixh <= 5*imgh/7) && (pixh> 4*imgh/7) && (avg < 128)){
      pixel.setRed(0);
      pixel.setGreen(0);
      pixel.setBlue(2 * avg);
    }
    else if ((pixh <= 5*imgh/7) && (pixh > 4*imgh/7) && (avg >= 128)){
      pixel.setRed(2 * avg - 255);
      pixel.setGreen(2 * avg - 255);
      pixel.setBlue(255);
    }
    if ((pixh <= 6*imgh/7) && (pixh > 5*imgh/7) && (avg < 128)){
      pixel.setRed(0.8 * avg);
      pixel.setGreen(0);
      pixel.setBlue(2 * avg);
    }
    else if ((pixh <= 6*imgh/7) && (pixh > 5*imgh/7) && (avg >= 128)){
      pixel.setRed(1.2 * avg - 51);
      pixel.setGreen(2 * avg - 255);
      pixel.setBlue(255);
    }
    else if ((pixh >= 6*imgh/7) && (avg < 128)){
      pixel.setRed(1.6 * avg);
      pixel.setGreen(0);
      pixel.setBlue(1.6 * avg);
    }
    else if ((pixh >= 6*imgh/7) && (avg >= 128)){
      pixel.setRed(0.4 * avg + 153);
      pixel.setGreen(2 * avg - 255);
      pixel.setBlue(0.4 * avg + 153);
    }
  }
  img5.drawTo(canvas2);
}

function Window(){
  imgload();
  
  var w = img6.getWidth();
  var h = img6.getHeight();
  var th = w*0.0125;
  var xx = (w-4*th)/3;
  var yy = (h-3*th)/2;
  for (var pixel of img6.values()) {
    if (pixel.getY() < th || pixel.getY() >= h-th) {
      pixel.setRed(0);
      pixel.setGreen(0);
      pixel.setBlue(0);
      }
    if (pixel.getX() < th || pixel.getX() >= w-th ) {
      pixel.setRed(0);
      pixel.setGreen(0);
      pixel.setBlue(0);
      }
    if (pixel.getX() > xx && pixel.getX() < xx+th ) {
      pixel.setRed(0);
      pixel.setGreen(0);
      pixel.setBlue(0);
      }
    if (pixel.getX() > 2*xx+th && pixel.getX() < 2*xx+2*th ) {
      pixel.setRed(0);
      pixel.setGreen(0);
      pixel.setBlue(0);
      }
    if (pixel.getY() > yy && pixel.getY() < yy+th) {
      pixel.setRed(0);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }
  }
  img6.drawTo(canvas2);
}

function Blurr(){
  imgload();
  
  for(var pixel of img7.values()){
    var rndm = Math.random();
    var x = pixel.getX();
    var y = pixel.getY();
    if(rndm < 0.5){
      img7.setPixel(x,y,pixel);
    }
    else{
      getnewPixel(x,y);
    }
  }
  img7.drawTo(canvas2);
}

function getnewPixel(x,y){
  var h = img7.getHeight();
  var w = img7.getWidth();
  var rndmX = Math.floor(Math.random()*10);
  var rndmY = Math.floor(Math.random()*10);
  if(rndmX > w-1){
    rndmX = w-1;
  }
  else if(rndmX < 0){
    rndmX = 0;
  }
  if(rndmY > h-1){
    rndmY = h-1
  }
  else if(rndmY < 0){
    rndmY = 0;
  }
  var newPixel = img7.getPixel(rndmX,rndmY);
  img7.setPixel(x,y,newPixel);
  return;
  }

function Reset(){
  imgload();
  
  img1 = new SimpleImage(fileinput); //GrayScale
  img2 = new SimpleImage(fileinput); //Red
  img3 = new SimpleImage(fileinput); //Green
  img4 = new SimpleImage(fileinput); //Blue
  img5 = new SimpleImage(fileinput); //Rainbow
  img6 = new SimpleImage(fileinput); //Window
  img7 = new SimpleImage(fileinput); //Blurr

  oimg.drawTo(canvas2);
}