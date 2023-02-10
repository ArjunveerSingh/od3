s="";
function preload(){
    i1=loadImage("bottle.jpg");
    i2= loadImage("cell.jpg");
}

function setup(){
    canvas= createCanvas(640,420);
    canvas.center();
    od= ml5.objectDetector('cocossd',ml);
    document.getElementById("status").innerHTML="Detecting Objects";
}

function ml(){
    console.log("Model Loaded!")
    s=true;
    od.detect(i1,gr);
}

function gr(error,results){
if (error){
    console.log(error);
}
console.log(results);
objects=results;
}