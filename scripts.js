// Retrieve the button elements
const kickButton = document.getElementById("kick");
const rideButton = document.getElementById("ride");
const snareButton = document.getElementById("snare");
const tomButton = document.getElementById("tom");
const hihatButton = document.getElementById("hihat");

// Retrieve the sound elements
const kickSound = document.getElementById("kick-sound");
const rideSound = document.getElementById("ride-sound");
const snareSound = document.getElementById("snare-sound");
const tomSound = document.getElementById("tom-sound");
const hihatSound = document.getElementById("hihat-sound");

// Helper function to reset and play any sound
function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}

// Attach click event listeners to each button
kickButton.addEventListener("click", function() {
  playSound(kickSound);
});

rideButton.addEventListener("click", function() {
  playSound(rideSound);
});

snareButton.addEventListener("click", function() {
  playSound(snareSound);
});

tomButton.addEventListener("click", function() {
  playSound(tomSound);
});

hihatButton.addEventListener("click", function() {
  playSound(hihatSound);
});

// Attach a keydown event listener to the document
document.addEventListener("keydown", function(event) {
  const key = event.key.toLowerCase();

  if (key === "a") {
    playSound(kickSound);
  } else if (key === "s") {
    playSound(rideSound);
  } else if (key === "d") {
    playSound(snareSound);
  } else if (key === "f") {
    playSound(tomSound);
  } else if (key === "g") {
    playSound(hihatSound);
  }
});
s