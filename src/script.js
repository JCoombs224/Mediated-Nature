var tree = document.getElementById("tree");
var seasonSpinner = document.getElementById("season");
var seasonBtn = document.getElementById("seasonBtn");
var playing = false;

var season = "summer";

document.addEventListener("load", function(){
    new Image('tree-winter.png');
    new Image('tree-spring.png');
    new Image('tree-summer.png');
    new Image('tree-autumn.png');
});

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

async function toggleAnim() {
    if(playing) {
        location.reload();
    }
    playing = true;
    seasonBtn.disabled = true;
    //tree.style.transitionTimingFunction = 'ease-in';
    seasonSpinner.style.animationPlayState = "running";
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
    
    while(playing) {  
        await play();
    }
}

function play() {
    return new Promise(resolve => {
        setTimeout(() => {
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
            resolve();
        }, 2000);
    })
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

  