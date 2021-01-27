harry_potter = " ";
function preload()
{
    harry_potter = loadSound("music.mp3");
}
function setup()
{
    canvas = createCanvas(700, 600);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}
function draw()
{
    image(video , 0 , 0 , 700 , 600);
}
function play_sound()
{
    harry_potter.play();
}
function stop_sound()
{
    harry_potter.stop();
}