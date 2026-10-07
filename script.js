function openSection(section) {

    if (section === "lore") {
        window.location.href = "lore.html";
    }

    if (section === "memories") {
    window.location.href = "memories.html";
    }

    if (section === "music") {
    window.location.href = "music.html";
    }

    if (section === "mood") {
    window.location.href = "mood.html";
    }
  if (section === "growth") {
    window.location.href = "growth.html";
  }
  if (section === "me") {
    window.location.href = "me.html";
  }
  if (section === "calendar") {
    window.location.href = "calendar.html";
  }
}
const vibes = [
    "figuring it out, but cute ♡",
    "romanticizing my little life ✦",
    "brain: 47 tabs open",
    "soft era loading...",
    "doing my best today ♡",
    "main character, slightly confused",
    "cozy but chaotic ☁",
    "just here, existing beautifully",
    "tiny steps, big dreams ✦"
];

function changeVibe() {

    const randomVibe =
        vibes[Math.floor(Math.random() * vibes.length)];

    document.getElementById("dailyVibe").textContent =
        randomVibe;

}
function enterWorld() {

    localStorage.setItem("worldEntered", "true");

    const intro =
        document.getElementById("introScreen");

    intro.style.opacity = "0";

    setTimeout(() => {
        intro.style.display = "none";
    }, 500);

}

if (localStorage.getItem("worldEntered") === "true") {

    document.getElementById("introScreen").style.display =
        "none";

}
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("service-worker.js");
    });
}
