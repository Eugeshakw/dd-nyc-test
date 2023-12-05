




  const parallaxElement = document.getElementById("parallaxElement");
  
document.addEventListener("DOMContentLoaded", function () {
  
    window.addEventListener("scroll", function () {
      const scrollPosition = window.scrollY;
      const translateYValue = Math.max(-50, -scrollPosition / 2);
      parallaxElement.style.transform = "translateY(" + translateYValue + "px)";
    });
  });



  
  document.addEventListener('DOMContentLoaded', function() {
    

  function applyStyle() {
    if (window.innerWidth >= 1920) {
        function interpolateValue(x, xMin, xMax, yMin, yMax) {
        return ((x - xMin) * (yMax - yMin)) / (xMax - xMin) + yMin;
        }
            
        function updateListItemWidth() {
            const screenWidth = window.innerWidth;
            const minHeight = screenWidth + interpolateValue(screenWidth, 1920, 2500, 865, 1107);
            const newHeight = minHeight / 3.256;
            parallaxElement.style.minHeight  = newHeight + "px";

        }
        updateListItemWidth();
        window.addEventListener("resize", updateListItemWidth);
    }         
}
applyStyle();
window.addEventListener('resize', applyStyle);

function newStyle() {
  if (window.innerWidth >= 1920) {

    function interpolateValue(x, xMin, xMax, yMin, yMax) {
      return ((x - xMin) * (yMax - yMin)) / (xMax - xMin) + yMin;
    }

    function updateListItemWidth() {
      const screenWidth = window.innerWidth;
      const minHeight = interpolateValue(screenWidth, 1920, 2500, 310, 248);
      const newHeight = minHeight / 1;
      parallaxElement.style.top = newHeight + "px";
    }

    updateListItemWidth();
    window.addEventListener("resize", updateListItemWidth);
  }
}




newStyle()
window.addEventListener('resize', newStyle);
})



