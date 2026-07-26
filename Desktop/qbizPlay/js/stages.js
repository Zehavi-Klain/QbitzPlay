const startButton = document.getElementById("startButton");
const selectLevel = document.getElementById("select-level");

startButton.onclick = startGame;

function startGame() {
    const level = Number(selectLevel.value);

    // if (level === 0) {
    //     alert("בחרי רמת קושי לפני תחילת המשחק.");
    //     return;
    // }

    localStorage.setItem("currentLevel", level);
    window.location.href = "game.html";
}