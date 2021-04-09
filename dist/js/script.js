let myCanvas, myRange;
let x = 1;
let y = 1;
let offset = 4;
let easing = 0.08;

let smallLogoSize = 60;
let largeLogoSize = 110;
let myLogoSize = largeLogoSize;

let slideIndex = 0;
let myInterval = 5;


// window.addEventListener("load", initialise);


document.getElementById("brand").style.height = myLogoSize +'px';
window.onscroll = function() {scrollFunction()};
function scrollFunction() {

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    myLogoSize = smallLogoSize;
    document.getElementById("brand").style.height = myLogoSize +'px';
    resizeCanvas(myLogoSize, myLogoSize);
    offset = 4*(smallLogoSize/largeLogoSize);
  } else {
    myLogoSize = largeLogoSize;
    document.getElementById("brand").style.height = myLogoSize +'px';
    resizeCanvas(myLogoSize, myLogoSize);
    offset = 4;
  }
}


showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("jum-image");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dotactive", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " dotactive";
  setTimeout(showSlides, (myInterval*1000));
}


function setup() {
  // createCanvas(windowWidth, windowHeight);
  myCanvas = createCanvas(myLogoSize, myLogoSize);
  myCanvas.parent("brand");
	myRange = width*0.2;
}

function draw() {
  background(255);
	noFill();

  let targetX = mouseX;
  let dx = targetX - x;
  x += dx * easing;
  let targetY = mouseY;
  let dy = targetY - y;
  y += dy * easing;

  let x1 = map(x, -windowWidth, windowWidth, myRange*0.2, (height-myRange)*1.2);
	let y1 = map(y, 0, windowHeight, myRange, width-myRange);

  strokeWeight(offset);
  stroke(255);

  fill(0, 0, 0, 180);
  beginShape();
	vertex(width, 0);
	vertex(width, x1);
	vertex(y1, width-y1);
	endShape(CLOSE);

  fill(0, 0, 0, 130);
  beginShape();
	vertex(y1, width-y1);
  vertex(width, x1);
  vertex(0, height);
	endShape(CLOSE);

  fill(0, 0, 0, 85);
  beginShape();
	vertex(0, x1);
  vertex(width, 0);
  vertex(0, height);
	endShape(CLOSE);

	noFill();
	strokeWeight(offset);
	rect(offset/2, offset/2, width-(offset), height-(offset));
}


function projFunction() {
  document.getElementById("proj-dropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    document.getElementById("proj-dropdown").classList.remove("show");
  }
}


filterSelection("all")

function filterSelection(c) {
  var c, x, i;

  if (c =="all") {
    showAll()
  } else if (c =="comps") {
    hideAll();
    frzAdd(c)
  } else if (c =="barch") {
    hideAll();
    frzAdd(c)
  } else if (c =="small") {
    hideAll();
    frzAdd(c)
  } else if (c =="exps") {
    hideAll();
    frzAdd(c)
  } else if (c =="book") {
    hideAll();
    frzAdd(c)
  }

}

function showAll() {
  var x, i;
  x = document.querySelectorAll('.clmn');
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "block";
  }
}

function hideAll() {
  var x, i;
  x = document.querySelectorAll('.clmn');
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
}

function frzAdd(a) {
  var x, i;
  x = document.querySelectorAll('.' + a);
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "block";
  }
}
