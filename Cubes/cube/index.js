(function() {
  var rotateY = 0,
    rotateX = 0;

  document.addEventListener('mousedown', rotateCube);
  function rotateCube(evt) {
    const windowHeight = document.body.clientHeight;
    const windowWidth = document.body.clientWidth;
    const startMouseX = evt.clientX;
    const startMouseY = evt.clientY;
    const Xcenter = windowHeight / 2;
    const Ycenter = windowWidth / 2;
    function rotate(e) {
      

  
      document.querySelector('.cube').style.transform =
      "rotateX(" + -e.pageY/3 + "deg) rotateY(" + -e.pageX/3 + "deg)"
    }

    document.onmousemove = function(e) {
      rotate(e);
    };

    document.onmouseup = function() {
      document.onmousemove = null;
      document.onmouseup = null;
    };
    // if (evt.pageX > Xcenter) rotateX -= 4
    // else if (evt.pageX < Xcenter) rotateX += 4
    // // else if (e.keyCode === 39) rotateY += 4
    // // else if (e.keyCode === 40) rotateX -= 4

    console.log(evt.pageX);

  }
})();
