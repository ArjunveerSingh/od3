objects=[];
function preload(){
    i1=loadImage("bottle.jpg");
}


function draw(){
    if(s != ""){
    for(i=0; i<objects.length;i++){

        document.getElementById("status").innerHTML="Status= Object Detected";
        fill("#FF0000");
p= floor(objects[i].confidence *100);
text(objects[i].label+""+p+"%",objects[i].x+15,objects[i].y+15);
noFill();
stroke("#FF0000");
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }
    }
}

function back(){
    window.location("index.html")
}