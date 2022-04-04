song ="";
scoreleftWrist = 0; 
leftWristX = 0;
leftWristY = 0;
rightWristX =0;
rightWristY = 0

function preload() 
{
    song = loadSound("main song.mp3")
}
function setup()
{
    canvas = createCanvas(700,600);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
poseNet = ml5.poseNet(video , modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('PoseNet Is Initialized')
}
function draw()
{
    image(video, 0, 0, 700, 600);
    fill("#FF0000");
    stroke("#FF0000")
    
    circle(leftWristX,leftWristY,20);
    InNumberleftWristY = Number(leftWristY);
    remove_decimals = floor (InNumberleftWristY);
    volume = remove_decimals/500;
    document.getElementById("volume").innerHTML ="Volume = " + volume;
    song.setVolume(volume);
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);

}
        function gotPoses(results){
        if(results.length > 0)
        {
        console.log(results);
        leftWrist =results[0].pose.leftWrist.x;
        leftWrist =results[0].pose.leftWrist.y;;
        console.log("leftWristX =" + leftWrist +"leftWristY" + leftWristY)   ;

        rightWrist =results[0].pose.rightWrist.x;
        rightWrist =results[0].pose.rightWrist.y;
        console.log("rightWristX"+rightWrist+"rightWristY"+rightWristY);
        }
}

