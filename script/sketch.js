var video;
var slider;
let inconsolata;

var sketchWidth;
var sketchHeight;
function setup() {
  sketchWidth = document.getElementById("main").offsetWidth;
  sketchHeight = document.getElementById("main").offsetHeight;
  pixelDensity(.4);
  var canvas = createCanvas(sketchWidth-2, sketchHeight, WEBGL);
 canvas.parent("camera");

 canvas.style("z-index","1");
  background(0,60,60);
  canvas.id('p5canvas');
  video = createCapture(VIDEO);
  video.size(sketchWidth-2, sketchHeight);
  video.id('p5video');

  video.hide();

  var seriously = new Seriously();

  var src = seriously.source('#p5video');
  var target = seriously.target('#p5canvas');

  var blur = seriously.effect('blur');
  blur.amount = .2;
  blur.source = src;
  target.source =  blur;
 
  seriously.go();

}


