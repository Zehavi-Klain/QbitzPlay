const level = Number(localStorage.getItem("currentLevel"));
console.log(level);
let check = 0;
let currentIndex = 0;


let img
let count = 0;
let idImg
const currentLevel = levels[level];

const solutions  = currentLevel.solutions;
const images = currentLevel.images;
const timerSeconds = currentLevel.time;
const imageDisplay = document.getElementById("imageDisplay");



function Around5(s) 
{
    img = document.getElementById(s)
    idImg = s;
    if (count < 3 && (s < 20)) {
        idImg++;
        img.setAttribute("src", `../images/${idImg}.png`)
        img.setAttribute("id", idImg)
        count++;
    } else {
        if (count === 3) {
            count = 0;
            s = 5;
            idImg = 5;
            img.setAttribute("src", `../images/${s}.png`);
            img.setAttribute("id", s);
        }
    }
}

function StartPlay() {
    CardsFunc()
    Timer()
}

function CardsFunc() {
    if (currentIndex < images.length) {
        imageDisplay.style.height = "20vw";
        imageDisplay.src = images[currentIndex];
        imageDisplay.style.display = "block";
        currentIndex++;
    } else {
        imageDisplay.style.display = "none";
        TheBest();
        window.location.href = "win.html";
    }

    check++;
}

let intervalId;

function Timer() {
    clearInterval(intervalId);

    t = timerSeconds;

    intervalId = setInterval(() => {
        t--;
        document.querySelector("#timer").textContent = t;

        if (t === 0) {
            t = timerSeconds;
            IsDied();
            CardsFunc();
            cleanTheTable();
        }
    }, 1000);
}
let table = document.getElementById("table");
let td = table.getElementsByTagName('td');

function CheckIfWin() {
    let currentPlay, img, strCard = "",
        nameImg, tr;
    let flagNull = true;
    for (let i = 0; i < td.length; i++) {
        let img = td[i].querySelector('img');
        if (img === null) {
            flagNull = false;
            break;
        }
        nameImg = img.getAttribute('src');
        let imageName, index;
        imageName = nameImg.split('/');
        console.log(nameImg);
        index = imageName[2][0];
        strCard += index;
    }
    if (flagNull) {
        console.log("strCard:", strCard);
console.log("solution:", solutions[currentIndex - 1]);
        const comparison = solutions[currentIndex - 1].localeCompare(strCard);

        if (comparison === 0) {
            alert("👍👍👍👍  כל הכבוד!! הנך רשאי לעבור לקלף הבא");
            UpPoints();
        } else {
            IsDied();
            alert("👎👎👎👎   אויי!! לא נורא יש לך נסיון נוסף")
        }

    } else
    if (!flagNull) {
        IsDied();
        alert("👎👎👎👎   אויי!! לא נורא יש לך נסיון נוסף")
    }
}
function cleanTheTable() {
    for (let i = 0; i < td.length; i++) {
        let img = td[i].querySelector('img');
        if (img !== null) {
            img.remove();
        }
    }
}

function Winner() {
    CheckIfWin();
    cleanTheTable();
    CardsFunc();
    TheBest();
    t = timerSeconds;;
}
let dragImages = document.querySelectorAll("#dragContainer img");

let ID = 20;
for (let i = 0; i < dragImages.length; i++) {
    dragImages[i].addEventListener("dragstart", function (event) {
        event.dataTransfer.setData("text", event.target.id);
    });
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("text");
    let draggedImg = document.getElementById(data);
    let cloneImg = draggedImg.cloneNode(false);
    let x = Number(ID++);
    cloneImg.setAttribute("id", x);
    event.target.appendChild(cloneImg);

}
function drag(event) {
    event.dataTransfer.setData("text", event.target.src);
    event.target.id = "true";
}

function allowDropTrashcan(event) {
    event.preventDefault();
}

function dropRemove(event) {
    event.preventDefault();
    const imageUrl = event.dataTransfer.getData("text");
    var trashcan = document.getElementById('trashcan');
    var imagesTable = document.getElementById('table');
    var images = imagesTable.getElementsByTagName('img');
    for (var i = 0; i < images.length; i++) {
        if (images[i].src.includes(imageUrl) && images[i].id === "true") {
            trashcan.appendChild(images[i]); // מזיז את התמונה לפח האשפה
            break; // יוצא מלולאה לאחר שמצאנו והעברנו את התמונה
        }
    }
}
let i = 0;
let life = document.querySelectorAll("#life img");

function IsDied() {
    if (i <= 2) {

        life[i].remove();
        i++;
    }
    if (i > 2) {
        window.location.href = "gameover.html"

    }
}
let point = 0;

function UpPoints() {
    pointsDiv = document.getElementById('pointsDiv');
    points = document.getElementById('points');
    point += 50;
    points = points.innerHTML = point;
}

function returnToPlay() {
    window.location.href = "stages.html"
}

let max;
let countTrue;
let divBest=document.getElementById("theBest")
function TheBest() {
    if (localStorage.getItem("maxSi") === undefined) {
        countTrue = 0;
        max = 0;
        localStorage.setItem("maxSi", max);
    }

    if (point >= localStorage.getItem("maxSi")) {
        max = point;
        localStorage.setItem("maxSi", max);
        divBest.innerHTML="השיא שלך הגבוה ביותר מכל מי ששיחק עד כה, " + max;
    }
    else {
        let xx = localStorage.getItem("maxSi") - point;
        divBest.innerHTML=`נשארו לך עוד ${xx} נקודות כדי לעבור את השיא `;
    }

}