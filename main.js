function setup(){
    canvas=createCanvas(400, 400);
    canvas.position(700, 145)

    video=createCapture(VIDEO);
    video.size(600, 300);
    video.position(80, 200);
    poseNet=ml5.poseNet(video, modelLoaded);
}

function modelLoaded(){
    console.log("Pose Net is initialized")
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
    console.log(results);
}

