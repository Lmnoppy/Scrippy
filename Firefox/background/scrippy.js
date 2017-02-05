/***************************************************************************
    CONTEXT MENU
    
    *Create context menu items
    *Get favorites form storage 
***************************************************************************/
// Restores values stored in chrome.storage.
document.addEventListener('DOMContentLoaded', menuTitles);

function menuTitles() {
    browser.storage.local.get({
            storedMyFav1Title: 'Fav 1'
            , storedMyFav2Title: 'Fav 2'
            , storedMyFav3Title: 'Fav 3'
            , storedMyFav4Title: 'Fav 4'
            , storedMyFav5Title: 'Fav 5'
        , }, //function that gets menu titles form chrome storage and sets the global vars to that value
        function (items) {
            // Create context menu type variable so that its easily changed for all of them - not set currently
            var type = ["all"];
            // Create Parent items 1 - 19
            browser.contextMenus.create({
                "id": "1"
                , "title": "Scrippy"
                , "contexts": ["all"]
            });
            browser.contextMenus.create({
                "id": "2"
                , "title": "Quick SQL"
                , "parentId": "1"
                , "contexts": ["all"]
            });
            browser.contextMenus.create({
                "id": "3"
                , "title": "Fav SQL"
                , "parentId": "1"
                , "contexts": ["all"]
            });
            browser.contextMenus.create({
                "id": "4"
                , "title": "Encode"
                , "parentId": "1"
                , "contexts": ["all"]
            });
            /**********Quick SQL 20-29**********/
            browser.contextMenus.create({
                "id": "20"
                , "title": "'OR 1=1"
                , "parentId": "2"
                , "contexts": ["all"]
            });
            browser.contextMenus.create({
                "id": "21"
                , "title": "'ORDER BY"
                , "parentId": "2"
                , "contexts": ["all"]
            });
            browser.contextMenus.create({
                "id": "22"
                , "title": "'SELECT @@version"
                , "parentId": "2"
                , "contexts": ["all"]
            });
            browser.contextMenus.create({
                "id": "23"
                , "title": "'SELECT schema_name..."
                , "parentId": "2"
                , "contexts": ["all"]
            });
            browser.contextMenus.create({
                "id": "24"
                , "title": "'UNION ALL SELECT LOAD_FILE(‘/etc/passwd’)"
                , "parentId": "2"
                , "contexts": ["all"]
            });
            /**********Fav SQL 30-39**********/
            browser.contextMenus.create({
                "id": "30"
                , "title": items.storedMyFav1Title
                , "parentId": "3"
                , "contexts": ["all"]
            });
            browser.contextMenus.create({
                "id": "31"
                , "title": items.storedMyFav2Title
                , "parentId": "3"
                , "contexts": ["all"]
            });
            browser.contextMenus.create({
                "id": "32"
                , "title": items.storedMyFav3Title
                , "parentId": "3"
                , "contexts": ["all"]
            });
            browser.contextMenus.create({
                "id": "33"
                , "title": items.storedMyFav4Title
                , "parentId": "3"
                , "contexts": ["all"]
            });
            browser.contextMenus.create({
                "id": "34"
                , "title": items.storedMyFav5Title
                , "parentId": "3"
                , "contexts": ["all"]
            });
            /**********Encode 40-49**********/
            browser.contextMenus.create({
                "id": "40"
                , "title": "Base64"
                , "parentId": "4"
                , "contexts": ["selection"]
            });
            browser.contextMenus.create({
                "id": "41"
                , "title": "URL"
                , "parentId": "4"
                , "contexts": ["selection"]
            });
        });
}
/***************************************************************************
    ON CLICK LISTENER - SEND MESSAGE TO CONTENT.JS 
    
    *Create on click event listener
    *Create message and send menu id clicked to content.js
***************************************************************************/
// Create an on click event listener that calls a function when triggered 
browser.contextMenus.onClicked.addListener(function (info, tab) {
    console.log("Menu item ID: " + info.menuItemId + " was clicked");
    console.log("info: " + JSON.stringify(info));
    browser.tabs.query({
        active: true
        , currentWindow: true
    }, function (tabs) {
        browser.tabs.sendMessage(tabs[0].id, {
            menuId: info.menuItemId
        }, function (response) {
            if (typeof response !== "undefined" && response.gotIt == "Got it") {
                console.log("Got it!");
            }
            else {
                //console.log("somethings up...")
            }
        });
    });
});