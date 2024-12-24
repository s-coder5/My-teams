// Select the video element by its ID
const videoElement = document.getElementById("video");

// Check if the browser supports the mediaDevices API
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  // Request video access from the user's camera
  navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
      // Set the video element's source to the camera stream
      videoElement.srcObject = stream;
      videoElement.play(); // Play the video stream
    })
    .catch((error) => {
      // Handle errors like camera not being available or permission denied
      console.error("Error accessing the camera:", error);
      alert("Unable to access the camera. Please check your permissions or device.");
    });
} else {
  // Notify if the browser does not support the mediaDevices API
  console.error("Camera access is not supported by your browser.");
  alert("Your browser does
