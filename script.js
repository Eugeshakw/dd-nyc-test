
document.addEventListener("DOMContentLoaded", function () {
    const parallaxElement = document.getElementById("parallaxElement");
  
    window.addEventListener("scroll", function () {
      const scrollPosition = window.scrollY;
      const translateYValue = Math.max(-50, -scrollPosition / 2);
      parallaxElement.style.transform = "translateY(" + translateYValue + "px)";
    });
  });




