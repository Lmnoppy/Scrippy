/***************************************************************************
    GLOBALY VARS
    
    *Var for element that user clicked
    *Vars for menu and the selected strings/payloads
***************************************************************************/
//element clicked on the current tab.
var clickedEl = null;
//String to be encoded
var selectedText = "";
//Encoded String
var encodedText = "";
/**********Quick SQL**********/
var quickSQL1 = "'OR 1=1";
var quickSQL2 = "'ORDER BY";
var quickSQL3 = "'SELECT @@version";
var quickSQL4 = "'SELECT schema_name FROM information_schema.schemata;";
var quickSQL5 = "'UNION ALL SELECT LOAD_FILE(‘/etc/passwd’)";
var quickSQL6 = "Some sort of string here";
var quickSQL7 = "Some sort of string here";
var quickSQL8 = "Some sort of string here";
var quickSQL9 = "Some sort of string here";
var quickSQL10 = "Some sort of string here";
/**********Fav SQL**********/
var fav1 = inputValues();
var fav2 = inputValues();
var fav3 = inputValues();
var fav4 = inputValues();
var fav5 = inputValues();
/***************************************************************************
 GET STORED STIRINGS/PAYLOADS FROM OPTIONS PAGE STORAGE

 *Input function gets the input values from the options
 *and sets the global vars to equal the items in the chrome.storage
 ***************************************************************************/
// Restores values stored in storage.
function inputValues() {
    chrome.storage.local.get({
            storedMyFav1: ''
            , storedMyFav2: ''
            , storedMyFav3: ''
            , storedMyFav4: ''
            , storedMyFav5: ''
        , }, //function that places the values stored in chrome.storage and puts them in the input boxes
        function (items) {
            fav1 = items.storedMyFav1;
            fav2 = items.storedMyFav2;
            fav3 = items.storedMyFav3;
            fav4 = items.storedMyFav4;
            fav5 = items.storedMyFav5;
        });
}
/***************************************************************************
    GET RIGHT CLICKED ELEMENT
    
    *on mouse click update clicked element
***************************************************************************/
// listener to determine what element the user right clicked on
document.addEventListener("mousedown", function (event) {
    //right click
    if (event.button == 2) {
        clickedEl = event.target.id;
        console.log("the event target is " + event.target + " The classname is " + clickedEl);
    }
}, true);
/***************************************************************************
    ON MESSANGER LISTENER
    
    *Listens for message to be recived - on doing so checks menu 
     and fires correct menu var
***************************************************************************/
//Context Menu ID that was clicked
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.menuId == "20") {
        //Send response to background js
        sendResponse({
            gotIt: "Got it"
        });
        //insert string on current element
        document.getElementById(clickedEl).value = quickSQL1;
    }
    else if (request.menuId == "21") {
        //Send response to background js
        sendResponse({
            gotIt: "Got it"
        });
        //insert string on current element
        document.getElementById(clickedEl).value = quickSQL2;
    }
    else if (request.menuId == "22") {
        //Send response to background js
        sendResponse({
            gotIt: "Got it"
        });
        //Send response to background js
        sendResponse({
            gotIt: "Got it"
        });
        //insert string on current element
        document.getElementById(clickedEl).value = quickSQL3;
    }
    else if (request.menuId == "23") {
        //Send response to background js
        sendResponse({
            gotIt: "Got it"
        });
        //insert string on current element
        document.getElementById(clickedEl).value = quickSQL4;
    }
    else if (request.menuId == "24") {
        //Send response to background js
        sendResponse({
            gotIt: "Got it"
        });
        //insert string on current element
        document.getElementById(clickedEl).value = quickSQL5;
    }
    else if (request.menuId == "25") {
        //Send response to background js
        sendResponse({
            gotIt: "Got it"
        });
        //insert string on current element
        document.getElementById(clickedEl).value = quickSQL6;
    }
    else if (request.menuId == "26") {
        //Send response to background js
        sendResponse({
            gotIt: "Got it"
        });
        //insert string on current element
        document.getElementById(clickedEl).value = quickSQL7;
    }
    else if (request.menuId == "27") {
        //Send response to background js
        sendResponse({
            gotIt: "Got it"
        });
        //insert string on current element
        document.getElementById(clickedEl).value = quickSQL8;
    }
    else if (request.menuId == "28") {
        //Send response to background js
        sendResponse({
            gotIt: "Got it"
        });
        //insert string on current element
        document.getElementById(clickedEl).value = quickSQL9;
    }
    else if (request.menuId == "29") {
        //Send response to background js
        sendResponse({
            gotIt: "Got it"
        });
        //insert string on current element
        document.getElementById(clickedEl).value = quickSQL10;
    }
    else if (request.menuId == "30") {
        //Send response to background js
        sendResponse({
            gotIt: "Got it"
        });
        //insert string on current element
        document.getElementById(clickedEl).value = fav1;
    }
    else if (request.menuId == "31") {
        //Send response to background js
        sendResponse({
            gotIt: "Got it"
        });
        //insert string on current element
        document.getElementById(clickedEl).value = fav2;
    }
    else if (request.menuId == "32") {
        //Send response to background js
        sendResponse({
            gotIt: "Got it"
        });
        //insert string on current element
        document.getElementById(clickedEl).value = fav3;
    }
    else if (request.menuId == "33") {
        //Send response to background js
        sendResponse({
            gotIt: "Got it"
        });
        //insert string on current element
        document.getElementById(clickedEl).value = fav4;
    }
    else if (request.menuId == "34") {
        //Send response to background js
        sendResponse({
            gotIt: "Got it"
        });
        //insert string on current element
        document.getElementById(clickedEl).value = fav5;
    }
    else if (request.menuId == "35") {
        //Send response to background js
        sendResponse({
            gotIt: "Got it"
        });
        //insert string on current element
        document.getElementById(clickedEl).value = fav6;
    }
    else if (request.menuId == "36") {
        //Send response to background js
        sendResponse({
            gotIt: "Got it"
        });
        //insert string on current element
        document.getElementById(clickedEl).value = fav7;
    }
    else if (request.menuId == "37") {
        //Send response to background js
        sendResponse({
            gotIt: "Got it"
        });
        //insert string on current element
        document.getElementById(clickedEl).value = fav8;
    }
    else if (request.menuId == "38") {
        //Send response to background js
        sendResponse({
            gotIt: "Got it"
        });
        //insert string on current element
        document.getElementById(clickedEl).value = fav9;
    }
    else if (request.menuId == "39") {
        //Send response to background js
        sendResponse({
            gotIt: "Got it"
        });
        //insert string on current element
        document.getElementById(clickedEl).value = fav10;
    }
    else if (request.menuId == "40") {
        sendResponse({
            gotIt: "Got it"
        });
        getSelectionText();
        encodeBase64();
        document.getElementById(clickedEl).value = encodedText;
    }
    else if (request.menuId == "41") {
        sendResponse({
            gotIt: "Got it"
        });
        getSelectionText();
        encodeURL();
        document.getElementById(clickedEl).value = encodedText;
    }
    else {
        sendResponse({
            something: "Dont got it"
        });
    }
});

/***************************************************************************
 * ENCODE
 *      Get selected string
 *      Encode to base 64
 *      Encode to URL encoding
 *      paste over highlighted string
 *      
 * ***************************************************************************/
//Get selected string
//http://stackoverflow.com/a/5379408/2213003
function getSelectionText() {
    var text = "";
    var activeEl = document.activeElement;
    var activeElTagName = activeEl ? activeEl.tagName.toLowerCase() : null;
    if (
      (activeElTagName == "textarea" || activeElTagName == "input") &&
      /^(?:text|textarea|search|password|tel|url)$/i.test(activeEl.type) &&
      (typeof activeEl.selectionStart == "number")
    ) {
        selectedText = activeEl.value.slice(activeEl.selectionStart, activeEl.selectionEnd);
    } else if (window.getSelection) {
        selectedText = window.getSelection().toString();
    }
    return selectedText;
}


//Encode to Base64
function encodeBase64() {
    //Do encoding on selected text
    encodedText = window.btoa(selectedText);
    return encodedText;
}
//Encode to URL
function encodeURL() {
    encodedText = encodeURIComponent(selectedText);
    return encodedText;
}