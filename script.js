const noMessages = [
  "Are you sure?",
  "It’s okay to think 🤍",
  "Take your time",
  "No pressure, really",
  "I’ll respect your answer",
  "Just wanted to ask 💭"
];

let index = 0;

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const music = document.getElementById("bgMusic");

// Start music on first interaction (phone-safe)
function startMusic() {
  if (music.paused) {
    music.play().catch(() => {});
  }
}

document.body.addEventListener("click", startMusic, { once: true });

noBtn.addEventListener("click", () => {
  startMusic();
  noBtn.textContent = noMessages[index];
  index = (index + 1) % noMessages.length;

  const size = parseFloat(window.getComputedStyle(yesBtn).fontSize);
  yesBtn.style.fontSize = `${size * 1.15}px`;
});

yesBtn.addEventListener("click", () => {
  startMusic();
  window.location.href = "yes.html";
});
