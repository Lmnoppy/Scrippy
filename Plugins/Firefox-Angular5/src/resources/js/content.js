/***************************************************************************
Copyright © 2016, 2017 Gary
This file is part of Scrippy

    Scrippy is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Scrippy is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>
***************************************************************************/

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
//Decode String
var decodeText = "";
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
/**********Quick XSS**********/
var quickXss1 = "<script /*%00*/>/*%00*/alert(1)/*%00*/</script /*%00*/";
var quickXss2 = "XSS Payload";
var quickXss3 = "XSS Payload";
var quickXss4 = "XSS Payload";
var quickXss5 = "XSS Payload";
var quickXss6 = "XSS Payload";
var quickXss7 = "XSS Payload";
var quickXss8 = "XSS Payload";
var quickXss9 = "XSS Payload";
var quickXss10 = "XSS Payload";
/**********Favourites**********/
var fav1 = inputValues();
var fav2 = inputValues();
var fav3 = inputValues();
var fav4 = inputValues();
var fav5 = inputValues();
var fav6 = inputValues();
var fav7 = inputValues();
var fav8 = inputValues();
var fav9 = inputValues();
var fav10 = inputValues();
/***************************************************************************
 GET STORED STIRINGS/PAYLOADS FROM OPTIONS PAGE STORAGE

 *Input function gets the input values from the options
 *and sets the global vars to equal the items in the chrome.storage
 ***************************************************************************/
// Restores values stored in storage.
function inputValues() {
    browser.storage.local.get({
            storedMyFav1: ''
            , storedMyFav2: ''
            , storedMyFav3: ''
            , storedMyFav4: ''
            , storedMyFav5: ''
            , storedMyFav6: ''
            , storedMyFav7: ''
            , storedMyFav8: ''
            , storedMyFav9: ''
            , storedMyFav10: ''
        , }, //function that places the values stored in storage and puts them in the input boxes
        function (items) {
            fav1 = items.storedMyFav1;
            fav2 = items.storedMyFav2;
            fav3 = items.storedMyFav3;
            fav4 = items.storedMyFav4;
            fav5 = items.storedMyFav5;
            fav6 = items.storedMyFav6;
            fav7 = items.storedMyFav7;
            fav8 = items.storedMyFav8;
            fav9 = items.storedMyFav9;
            fav10 = items.storedMyFav10;
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
    }
}, true);
/***************************************************************************
    ON MESSANGER LISTENER

    *Listens for message to be recived - on doing so checks menu
     and fires correct menu var
***************************************************************************/
//Context Menu ID that was clicked
browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
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
    else if (request.menuId == "50") {
        sendResponse({
            gotIt: "Got it"
        });
        document.getElementById(clickedEl).value = quickXss1;
    }
    else if (request.menuId == "51") {
        sendResponse({
            gotIt: "Got it"
        });
        document.getElementById(clickedEl).value = quickXss2;
    }
    else if (request.menuId == "52") {
        sendResponse({
            gotIt: "Got it"
        });
        document.getElementById(clickedEl).value = quickXss3;
    }
    else if (request.menuId == "53") {
        sendResponse({
            gotIt: "Got it"
        });
        document.getElementById(clickedEl).value = quickXss4;
    }
    else if (request.menuId == "54") {
        sendResponse({
            gotIt: "Got it"
        });
        document.getElementById(clickedEl).value = quickXss5;
    }
    else if (request.menuId == "60") {
        sendResponse({
            gotIt: "Got it"
        });
        getSelectionText();
        decodeBase64();
        document.getElementById(clickedEl).value = decodeText;
    }
    else if (request.menuId == "61") {
        sendResponse({
            gotIt: "Got it"
        });
        getSelectionText();
        decodeURL();
        document.getElementById(clickedEl).value = decodeText;
    }
    else {
        sendResponse({
            something: "Dont got it"
        });
    }
});
/***************************************************************************
    ENCODE & Decode

    *Get selected string
    *Encode/Decode base64 encoding
    *Encode/Decode URL encoding
    *paste over highlighted string
****************************************************************************/
//Get selected string
//http://stackoverflow.com/a/5379408/2213003
function getSelectionText() {
    var text = "";
    var activeEl = document.activeElement;
    var activeElTagName = activeEl ? activeEl.tagName.toLowerCase() : null;
    if (
        (activeElTagName == "textarea" || activeElTagName == "input") && /^(?:text|textarea|search|password|tel|url)$/i.test(activeEl.type) && (typeof activeEl.selectionStart == "number")) {
        selectedText = activeEl.value.slice(activeEl.selectionStart, activeEl.selectionEnd);
    }
    else if (window.getSelection) {
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
//Decode to Base64
function decodeBase64() {
    //Do encoding on selected text
    decodeText = window.atob(selectedText);
    return decodeText;
}
//Decode to URL
function decodeURL() {
    decodeText = decodeURIComponent(selectedText);
    return decodeText;
}
