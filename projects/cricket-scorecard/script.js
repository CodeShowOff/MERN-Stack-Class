let batsmen = {
    A1:{runs:0,balls:0},
    A2:{runs:0,balls:0},
    A3:{runs:0,balls:0},
    A4:{runs:0,balls:0},
    A5:{runs:0,balls:0},
    A6:{runs:0,balls:0},
    A7:{runs:0,balls:0},
    A8:{runs:0,balls:0},
    A9:{runs:0,balls:0},
    A10:{runs:0,balls:0},
    A11:{runs:0,balls:0}
};

let bowlers = {
    B1:{balls:0,runs:0,wickets:0},
    B2:{balls:0,runs:0,wickets:0},
    B3:{balls:0,runs:0,wickets:0},
    B4:{balls:0,runs:0,wickets:0},
    B5:{balls:0,runs:0,wickets:0},
    B6:{balls:0,runs:0,wickets:0},
    B7:{balls:0,runs:0,wickets:0},
    B8:{balls:0,runs:0,wickets:0},
    B9:{balls:0,runs:0,wickets:0},
    B10:{balls:0,runs:0,wickets:0},
    B11:{balls:0,runs:0,wickets:0}
};

let totalRuns = 0;
let totalBalls = 0;
let lastAction = null;

function updateDisplay(){
    document.getElementById("score").innerText = totalRuns + "/" + getWickets();
    document.getElementById("overs").innerText = Math.floor(totalBalls/6) + "." + (totalBalls%6);
}

function getWickets(){
    let w=0;
    for(let b in bowlers) w += bowlers[b].wickets;
    return w;
}

function addBall(runType){
    let bat = document.getElementById("batSelect").value;
    let bow = document.getElementById("bowlSelect").value;

    if(runType==="W"){
        batsmen[bat].balls++;
        bowlers[bow].balls++;
        bowlers[bow].wickets++;
        lastAction={bat, bow, type:"W"};
    }
    else if(runType==="WD" || runType==="NB"){
        totalRuns++;
        bowlers[bow].runs++;
        lastAction={bat, bow, type:runType};
    }
    else{
        let r = parseInt(runType);
        batsmen[bat].runs += r;
        batsmen[bat].balls++;
        totalRuns += r;
        bowlers[bow].runs += r;
        bowlers[bow].balls++;
        lastAction={bat, bow, type:"R", runs:r};
    }

    if(runType!=="WD" && runType!=="NB" && runType!=="W") totalBalls++;
    updateDisplay();
}

function undo(){
    if(!lastAction) return;

    let a = lastAction;

    if(a.type==="R"){
        batsmen[a.bat].runs-=a.runs;
        batsmen[a.bat].balls--;
        bowlers[a.bow].runs-=a.runs;
        bowlers[a.bow].balls--;
        totalRuns-=a.runs;
        totalBalls--;
    }
    else if(a.type==="WD" || a.type==="NB"){
        totalRuns--;
        bowlers[a.bow].runs--;
    }
    else if(a.type==="W"){
        batsmen[a.bat].balls--;
        bowlers[a.bow].balls--;
        bowlers[a.bow].wickets--;
        totalBalls--;
    }

    lastAction=null;
    updateDisplay();
}

function newMatch(){
    for(let x in batsmen){
        batsmen[x].runs=0;
        batsmen[x].balls=0;
    }
    for(let x in bowlers){
        bowlers[x].runs=0;
        bowlers[x].balls=0;
        bowlers[x].wickets=0;
    }
    totalRuns=0;
    totalBalls=0;
    lastAction=null;
    updateDisplay();
}

function saveMatch(){
    let data = {
        batsmen,bowlers,totalRuns,totalBalls
    };
    localStorage.setItem("matchData", JSON.stringify(data));
    alert("Saved");
}
