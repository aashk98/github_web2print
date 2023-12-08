function openPrintDialog() {
  window.print();
}

//BUTTON click me


// JavaScript function to handle the animation
function animateButton() {
    var button = document.getElementById("animatedButton");
  
    // Toggle the background color between two values
    button.style.backgroundColor = (button.style.backgroundColor === "red") ? "white" : "red";
  }
  

  function animateButton() {
    var button = document.getElementById("animatedButton");
  
    // Apply the shrink effect
    button.style.transform = "scale(0.8)";
    button.style.opacity = 0.6;
  
    // Wait for a moment (you can adjust the duration)
    setTimeout(function () {
      // Pop back to the original size
      button.style.transform = "scale(1)";
      button.style.opacity = 1; // Restore original opacity
    }, 300);
  }

  function toggleAnimation() {
    var button = document.getElementById("animatedButton");
  
    // Toggle the looping-animation class to start or stop the animation
    if (button.classList.contains("looping-animation")) {
      button.classList.remove("looping-animation");
    } else {
      button.classList.add("looping-animation");
    }
  }
  

//SHAPE moving

  // Function to scale the shapes
function scaleShapes() {
  const circle = document.getElementById('circle');
  const rectangle = document.getElementById('rectangle');

  // Animation properties
  const scaleValue = 1.5; // Scale factor
  const animationDuration = 200; // Animation duration in milliseconds

  function scale() {
    // Scale the circle
    circle.style.transform = `scale(${scaleValue})`;

    // Scale the rectangle
    rectangle.style.transform = `scale(${scaleValue})`;

    // Reset the scale after the animation duration
    setTimeout(() => {
      circle.style.transform = 'scale(2)';
      rectangle.style.transform = 'scale(2)';
      requestAnimationFrame(scale);
    }, animationDuration);
  }

  // Start the animation
  scale();
}

// Call the scaleShapes function when the document is ready
document.addEventListener('DOMContentLoaded', scaleShapes);




document.addEventListener('mousemove', function (e) {
    var eye = document.querySelector('.eye');
    var pupil = document.querySelector('.pupil');
  
    var eyeRect = eye.getBoundingClientRect();
    var eyeCenterX = eyeRect.left + eyeRect.width / 2;
    var eyeCenterY = eyeRect.top + eyeRect.height / 2;
  
    var angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
    var distance = Math.min(eyeRect.width / 4, eyeRect.height / 4);
  
    var pupilX = distance * Math.cos(angle);
    var pupilY = distance * Math.sin(angle);
  
    pupil.style.transform = 'translate(-50%, -50%) translate(' + pupilX + 'px, ' + pupilY + 'px)';
  });
  


document.addEventListener("DOMContentLoaded", function () {
  const animationContainer = document.getElementById("animationContain");

  function cloneCircle() {
      const newCircle = document.createElement("div");
      newCircle.className = "circle";
      animationContainer.appendChild(newCircle);

      setTimeout(() => {
          newCircle.remove(); // Remove the cloned circle after the animation
      }, 2000); // Adjust the timing based on the cloneAnimation duration
  }

  setInterval(cloneCircle, 2000); // Adjust the timing based on the cloneAnimation duration
});





document.addEventListener("DOMContentLoaded", function () {
    const colorSwitch = document.getElementById("colorSwitch");

    colorSwitch.addEventListener("change", function () {
        document.body.classList.switch("dark-mode");
    });
});