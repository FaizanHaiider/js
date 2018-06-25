// add fantasyCard option on context menu
function addToContextMenu() {
    chrome.contextMenus.create({
        title: 'create SoccerCard',
        id: 'opt-SoccerCard',
        contexts: ['selection'] 
    });
}

// initial set up
chrome.runtime.onInstalled.addListener(() => {
    addToContextMenu();
});

// add eventListener
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if(info.menuItemId == 'opt-SoccerCard') {
        searchPlayer(info.selectionText);
    }
});








