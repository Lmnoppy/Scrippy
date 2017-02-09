/***************************************************************************
 Options menu

 *Get values (statements) that users want in their right click options
 *Save these values in the chrome.storage api using sync
 ***************************************************************************/

//On DOM load run function restore_options - restore previous stored options
document.addEventListener('DOMContentLoaded', restore_options);
//On button click, run the save_options function
document.getElementById('save').addEventListener('click', save_options);

//save_options function  that gets values of input boxes, stores these in vars
//and then stores them in chrome.storage as well as displaying a options saved status. 
function save_options() {
    //vars contain the values on the input boxes
    var Fav1 = document.getElementById('1').value;
    var Fav2 = document.getElementById('2').value;
    var Fav3 = document.getElementById('3').value;
    var Fav4 = document.getElementById('4').value;
    var Fav5 = document.getElementById('5').value;

    var Fav1Title = document.getElementById('90').value;
    var Fav2Title = document.getElementById('91').value;
    var Fav3Title = document.getElementById('92').value;
    var Fav4Title = document.getElementById('93').value;
    var Fav5Title = document.getElementById('94').value;
    
    //takes the vars and stores the values in chrome storage
    chrome.storage.sync.set({
        storedMyFav1: Fav1,
        storedMyFav2: Fav2,
        storedMyFav3: Fav3,
        storedMyFav4: Fav4,
        storedMyFav5: Fav5,

        storedMyFav1Title: Fav1Title,
        storedMyFav2Title: Fav2Title,
        storedMyFav3Title: Fav3Title,
        storedMyFav4Title: Fav4Title,
        storedMyFav5Title: Fav5Title,

    }, function () {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function () {
            status.textContent = '';
        }, 750);
    });
}

// Restores values stored in chrome.storage.
function restore_options() {
    chrome.storage.sync.get({
        storedMyFav1: 'Fav',
        storedMyFav2: 'Fav',
        storedMyFav3: 'Fav',
        storedMyFav4: 'Fav',
        storedMyFav5: 'Fav',

        storedMyFav1Title: 'Fav',
        storedMyFav2Title: 'Fav',
        storedMyFav3Title: 'Fav',
        storedMyFav4Title: 'Fav',
        storedMyFav5Title: 'Fav',
    }, 
        //function that places the values stored in chrome.storage and puts them in the input boxes
        function (items) {
            document.getElementById('1').value = items.storedMyFav1;
            document.getElementById('2').value = items.storedMyFav2;
            document.getElementById('3').value = items.storedMyFav3;
            document.getElementById('4').value = items.storedMyFav4;
            document.getElementById('5').value = items.storedMyFav5;

            document.getElementById('90').value = items.storedMyFav1Title;
            document.getElementById('91').value = items.storedMyFav2Title;
            document.getElementById('92').value = items.storedMyFav3Title;
            document.getElementById('93').value = items.storedMyFav4Title;
            document.getElementById('94').value = items.storedMyFav5Title;
    });
}