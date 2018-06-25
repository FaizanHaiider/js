function createCard(newPlayer) {
    let containerDiv = '<div class="w3-container">';
    let cardDiv = '<div class="w3-card-4" style="width:50%">';
    let imgTag = '<img src="' + newPlayer.img + '" style="width:80%"';
    let contentDiv = '<div class="w3-container w3-center">';
    let nameTag = '<p>' + newPlayer.name + '</p>';
    let dobTag = '<p>' + newPlayer.dob + '</p>';
    let teamTag = '<p>' + newPlayer.team + '</p>';
    let endingTag = '</div></div></div>';
    let finalElement = containerDiv + cardDiv + imgTag + contentDiv + nameTag + dobTag + teamTag + endingTag;

    let newItem = document.createElement('div');
    newItem.id = 'new-SoccerCard';
    document.body.appendChild(newItem);
    document.getElementById('new-SoccerCard').innerHTML = finalElement;
}
