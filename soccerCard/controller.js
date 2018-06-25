// custom player object
function Player(img, name, dob, team) {
    this.img = img;
    this.name = name;
    this.dob = dob;
    this.team = team;
}


//  create player object
function createPlayerObj(response) {
    // no active players 
    let result_bool = 0;
    let responseLength = Object.keys(response).length; 

    // get first active player
    for(var i = 0; i < responseLength; i++) {
        if(response.player[i].strTeam.includes("_Retired")) {
            continue;
        } else {
            result_bool = 1; // active player found
            break;
        }
    }

    if(result_bool == 0) {
        return null;
    }

    let newPlayer =  new Player(response.player[i].strCutout, response.player[i].strPlayer, response.player[i].dateBorn, response.player[i].strTeam);
    createCard(newPlayer);
}


// api call to thesportsdb player search
function searchPlayer(playerName) {
    let newPlayer;
    var url = "https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=" + playerName;

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            newPlayer = createPlayerObj(response);
        }
    };

    xhr.open("GET", url, true);
    xhr.send();
    return newPlayer;
}