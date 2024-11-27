function playSound(key, id) {
  const audio = document.getElementById(key);
  audio.currentTime = 0; // Rewind to the start
  audio.play();
  document.getElementById("display").innerText = id; // Update display
}

document.addEventListener("keydown", (event) => {
  const key = event.key.toUpperCase();
  const drumPads = {
    Q: "Heater 1",
    W: "Heater 2",
    E: "Heater 3",
    A: "Heater 4",
    S: "Clap",
    D: "Open-HH",
    Z: "Kick-n'-Hat",
    X: "Kick",
    C: "Closed-HH",
  };
  if (drumPads[key]) {
    playSound(key, drumPads[key]);
  }
});
