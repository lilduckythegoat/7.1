LeftWristX = 0;
LeftWristY = 0;
RightWristX = 0;
RightWristY = 0;

song1 = 0;
song2 = 0;
function preload() {
    song1 = loadSound("red.mp3");
    song2 = loadSound("left.mp3") 
}

function setup() {
    canvas = createCanvas(590, 450);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Inisilised');
}
function draw() {
    image(video, 0, 40, 560, 420);
}

function gotPoses(results) {
    console.log(results);
    if (results.length > 0) {
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);


        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
    }
}