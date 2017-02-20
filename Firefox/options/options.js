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
    var Fav6 = document.getElementById('6').value;
    var Fav7 = document.getElementById('7').value;
    var Fav8 = document.getElementById('8').value;
    var Fav9 = document.getElementById('9').value;
    var Fav10 = document.getElementById('10').value;
    var Fav1Title = document.getElementById('90').value;
    var Fav2Title = document.getElementById('91').value;
    var Fav3Title = document.getElementById('92').value;
    var Fav4Title = document.getElementById('93').value;
    var Fav5Title = document.getElementById('94').value;
    var Fav6Title = document.getElementById('95').value;
    var Fav7Title = document.getElementById('96').value;
    var Fav8Title = document.getElementById('97').value;
    var Fav9Title = document.getElementById('98').value;
    var Fav10Title = document.getElementById('99').value;
    //takes the vars and stores the values in chrome storage
    browser.storage.local.set({
        storedMyFav1: Fav1
        , storedMyFav2: Fav2
        , storedMyFav3: Fav3
        , storedMyFav4: Fav4
        , storedMyFav5: Fav5
        , storedMyFav1: Fav6
        , storedMyFav2: Fav7
        , storedMyFav3: Fav8
        , storedMyFav4: Fav9
        , storedMyFav5: Fav10
        , storedMyFav1Title: Fav1Title
        , storedMyFav2Title: Fav2Title
        , storedMyFav3Title: Fav3Title
        , storedMyFav4Title: Fav4Title
        , storedMyFav5Title: Fav5Title
        , storedMyFav6Title: Fav6Title
        , storedMyFav7Title: Fav7Title
        , storedMyFav8Title: Fav8Title
        , storedMyFav9Title: Fav9Title
        , storedMyFav10Title: Fav10Title
    , }, function () {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function () {
            status.textContent = '';
        }, 750);
    });
}
// Restores values stored in storage.
function restore_options() {
    browser.storage.local.get({
            storedMyFav1: 'Fav'
            , storedMyFav2: 'Fav'
            , storedMyFav3: 'Fav'
            , storedMyFav4: 'Fav'
            , storedMyFav5: 'Fav'
            , storedMyFav6: 'Fav'
            , storedMyFav7: 'Fav'
            , storedMyFav8: 'Fav'
            , storedMyFav9: 'Fav'
            , storedMyFav10: 'Fav'
            , storedMyFav1Title: 'Fav'
            , storedMyFav2Title: 'Fav'
            , storedMyFav3Title: 'Fav'
            , storedMyFav4Title: 'Fav'
            , storedMyFav5Title: 'Fav'
            , storedMyFav6Title: 'Fav'
            , storedMyFav7Title: 'Fav'
            , storedMyFav8Title: 'Fav'
            , storedMyFav9Title: 'Fav'
            , storedMyFav10Title: 'Fav'
        }, //function that places the values stored in storage and puts them in the input boxes
        function (items) {
            document.getElementById('1').value = items.storedMyFav1;
            document.getElementById('2').value = items.storedMyFav2;
            document.getElementById('3').value = items.storedMyFav3;
            document.getElementById('4').value = items.storedMyFav4;
            document.getElementById('5').value = items.storedMyFav5;
            document.getElementById('6').value = items.storedMyFav6;
            document.getElementById('7').value = items.storedMyFav7;
            document.getElementById('8').value = items.storedMyFav8;
            document.getElementById('9').value = items.storedMyFav9;
            document.getElementById('10').value = items.storedMyFav10;
            document.getElementById('90').value = items.storedMyFav1Title;
            document.getElementById('91').value = items.storedMyFav2Title;
            document.getElementById('92').value = items.storedMyFav3Title;
            document.getElementById('93').value = items.storedMyFav4Title;
            document.getElementById('94').value = items.storedMyFav5Title;
            document.getElementById('95').value = items.storedMyFav6Title;
            document.getElementById('96').value = items.storedMyFav7Title;
            document.getElementById('97').value = items.storedMyFav8Title;
            document.getElementById('98').value = items.storedMyFav9Title;
            document.getElementById('99').value = items.storedMyFav10Title;
        });
}