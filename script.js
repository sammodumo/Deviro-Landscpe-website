document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll('.hero img');
    var currentImageIndex = 0;

    setInterval(function() {
        // Hide the current image
        images[currentImageIndex].style.opacity = 0;
        
        // Increment current image index
        currentImageIndex++;
        if (currentImageIndex >= images.length) {
            currentImageIndex = 0;
        }

        // Show the next image
        images[currentImageIndex].style.opacity = 1;
    }, 5000); // Change image every 5 seconds (5000 milliseconds)
});

document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll('.hero1 .image-container1 img');
    var currentImageIndex = 0;

    setInterval(function() {
        // Hide the current image
        images[currentImageIndex].style.opacity = 0;
        
        // Increment current image index
        currentImageIndex++;
        if (currentImageIndex >= images.length) {
            currentImageIndex = 0;
        }

        // Show the next image
        images[currentImageIndex].style.opacity = 1;
    }, 5000); // Change image every 5 seconds (5000 milliseconds)
});



function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }

   

   


    
    