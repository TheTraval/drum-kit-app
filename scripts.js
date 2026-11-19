
// Retrieve the button elements
const kickButton = document.getElementById("kick");
const rideButton = document.getElementById("ride");
const snareButton = document.getElementById("snare");
const tomButton = document.getElementById("tom");
const hihatButton = document.getElementById("hihat");

// Retrieve the sound elements
const sounds = {
  kick: document.getElementById("kick-sound"),
  ride: document.getElementById("ride-sound"),
  snare: document.getElementById("snare-sound"),
  tom: document.getElementById("tom-sound"),
  hihat: document.getElementById("hihat-sound"),
  boom: document.getElementById("boom-sound"),
  clap: document.getElementById("clap-sound"),
  openhat: document.getElementById("openhat-sound"),
  tink: document.getElementById("tink-sound")
};

// Helper function to play sounds
function playSound(sound) {
  if (sound) {
    sound.currentTime = 0;
    sound.play();
  }
}

// Button click events
kickButton.addEventListener("click", function() {
  playSound(sounds.kick);
});

rideButton.addEventListener("click", function() {
  playSound(sounds.ride);
});

snareButton.addEventListener("click", function() {
  playSound(sounds.snare);
});

tomButton.addEventListener("click", function() {
  playSound(sounds.tom);
});

hihatButton.addEventListener("click", function() {
  playSound(sounds.hihat);
});

// Keyboard controls
document.addEventListener("keydown", function(event) {
  const key = event.key.toLowerCase();

  if (key === "a") {
    playSound(sounds.kick);
  } else if (key === "s") {
    playSound(sounds.ride);
  } else if (key === "d") {
    playSound(sounds.snare);
  } else if (key === "f") {
    playSound(sounds.tom);
  } else if (key === "g") {
    playSound(sounds.hihat);
  } else if (key === "h") {
    playSound(sounds.boom);
  } else if (key === "j") {
    playSound(sounds.clap);
  } else if (key === "k") {
    playSound(sounds.openhat);
  } else if (key === "l") {
    playSound(sounds.tink);
  }
});
