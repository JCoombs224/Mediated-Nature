var tree = document.getElementById("tree");
var seasonSpinner = document.getElementById("season");
var seasonBtn = document.getElementById("seasonBtn");
var season = "summer";

const spinAnim = [
    {transform: 'rotate(0deg)'},
    {transform: 'rotate(45deg)'}
];

const spinTiming = {
    duration: 2000,
    fill: 'forwards',
    iterations: Infinity
  }

function removeClass() {
    tree.classList.remove("winter");
    tree.classList.remove("spring");
    tree.classList.remove("summer");
    tree.classList.remove("autumn");
}

function nextSeason() {
    if(season == "winter") {
        spring();
    }
    else if(season == "spring") {
        summer();
    }
    else if(season == "summer") {
        autumn();
    }
    else if(season == "autumn") {
        winter();
    }
    seasonBtn.disabled = true;
    seasonSpinner.style.animationPlayState = "running";
    setTimeout(() => {
        seasonSpinner.style.animationPlayState = "paused";
        seasonBtn.disabled = false;
    }, 2000);
}

function winter() {
    season = "winter";
    tree.classList.remove("autumn");
    tree.classList.add("winter");
}
function spring() {
    season = "spring";
    tree.classList.remove("winter");
    tree.classList.add("spring");
}
function summer() {
    season = "summer";
    tree.classList.remove("spring");
    tree.classList.add("summer");
}
function autumn() {
    season = "autumn";
    tree.classList.remove("summer");
    tree.classList.add("autumn");
}

  