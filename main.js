function preload()
{
    
}

function setup()
{
    video = createCapture(VIDEO);
    video.size(500,500);
    
    canvas = createCanvas(600,400);
    canvas.position(775,200);
    video.hide();

}

function draw()
{
    image(video,0,0,600,500);
}

