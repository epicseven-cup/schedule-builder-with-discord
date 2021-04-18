function scalingCanvas(){
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  console.log("windowWidth:"+ windowWidth+ "\n" +"windowHeight:"+windowHeight);

  let canvas = document.getElementById("plateform");

  if (Math.abs(windowWidth-windowHeight)< 200){
    const adjustcanvasWidth = (parseFloat(windowWidth)) * 0.660;
    canvas.style.width = adjustcanvasWidth+"px";
    canvas.style.height = 500+"px";

    autoPushingH()

  }else if(windowWidth < windowHeight){
    const adjustcanvasWidth = (parseFloat(windowWidth)) * 0.6486;
    canvas.style.width = adjustcanvasWidth+"px";
    canvas.style.height = 500+"px";

    autoPushingH()

  }else if (windowHeight < windowWidth){
    const adjustcanvasWidth = (parseFloat(windowHeight)) * 0.80916030534;
    canvas.style.width = adjustcanvasWidth+"px";
    canvas.style.height = 500+"px";

    autoPushingW()

  }
  console.log("Canvas Width:"+ canvas.style.width);
}

function autoPushingH(){
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  // const divHeight = document.getElementsByClassName("outsidePlateform contentImage");
  const midpoint = Math.abs(windowHeight/2 -500)
  let canvas = document.getElementById("plateform");
  canvas.style.transform = "translateY(" + midpoint + "px" + ")"

  console.log(midpoint)
}

function autoPushingW(){
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  // const divHeight = document.getElementsByClassName("outsidePlateform contentImage");
  const midpoint = Math.min(Math.abs(windowHeight*0.9-100),0);
  let canvas = document.getElementById("plateform");
  canvas.style.transform = "translateY(" + midpoint + "px" + ")"

  console.log(midpoint)

}



window.onload = function () {
  // alert("webpage is on")
  scalingCanvas()
};


window.onresize = function(){
  scalingCanvas()
};
