function scalingCanvas(){
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  console.log("windowWidth:"+ windowWidth+ "\n" +"windowHeight:"+windowHeight);

  let canvas = document.getElementById("plateform");

  // let canvasWidth = canvas.clientWidth;
  // let canvasHeight = canvas.clientHeight;
  if (Math.abs(windowWidth-windowHeight)< 80){
    const adjustcanvasWidth = (parseFloat(windowWidth)) * 0.660;
    canvas.style.width = adjustcanvasWidth+"px";
    canvas.style.height = 500+"px";


    // const percentDown = adjustcanvasWidth/windowHeight * 100 //1762
    // console.log(percentDown)
    // canvas.style.marginTop = percentDown + "%";

  }else if(windowWidth < windowHeight){
    const adjustcanvasWidth = (parseFloat(windowWidth)) * 0.6486;
    canvas.style.width = adjustcanvasWidth+"px";
    canvas.style.height = 500+"px";

    // const percentDown = (windowHeight/500 * 2)*6.5   //1762
    // console.log(percentDown)
    // canvas.style.marginTop = percentDown + "%";


  }else if (windowHeight < windowWidth){
    const adjustcanvasWidth = (parseFloat(windowHeight)) * 0.80916030534;
    canvas.style.width = adjustcanvasWidth+"px";
    canvas.style.height = 500+"px";


    // const percentDown = adjustcanvasWidth/windowHeight  //1762
    // console.log(percentDown)
    // canvas.style.marginTop = percentDown + "%";

  }
  // console.log(canvas.style.width)
  console.log("Canvas Width:"+ canvas.style.width);

// TODO: Need help to convert the div element into correct size when the height and width is similar

//get the actual length of the background image each time it resize than mins the percent of the length

}






window.onload = function () {
  // alert("webpage is on")
  scalingCanvas()
};


window.onresize = function(){
  scalingCanvas()
};
