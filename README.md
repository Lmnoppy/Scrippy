# NO LONGER IN DEVELOPMENT
This was a small project I made to help my self learn JS. Since leaving education and starting full time employment, i am not able to maintain this project. I will be removing the plugins from the Mozilla and Chrome stores, however, the code will remain on GitHub. it needs to be updated in places and extended in others. Please feel free to fork, clone, create Pull requests under the terms of the Licence attached.

Thank you.

## Scrippy
Scrippy is a Chrome and Firefox browser add-on that stores SQL statements to aid in the testing of websites for code injection vulnerabilities. Think cheat sheets but all you do is right click for them.  

This tool is made for web developers, pen testers and hobbyist security researchers that want to test sites for injection vulnerabilities. You must have a legal right to do so as not having this right can lead to a criminal conviction. by using this tool you acknowledge that you take sole responsibility for your actions and that there is no warranty with this product either explicit or implied. 

Scrippy is currently in beta and falls under the [GPLv3](http://www.gnu.org/licenses/gpl.html "GPLv3") and comes WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

Yes updated payloads coming...one day, promise, feel free to submit some.

## Download and install

 [![Firefox](firefoxpng.png)](https://addons.mozilla.org/en-US/firefox/addon/scrippy/) [![Chrome](chromelogo.png)](https://chrome.google.com/webstore/detail/scrippy/iihdoobgnenacmgkoghchfionpnleoea "Scrippy on Chrome Extension Store")


Either go to the market places linked in the images above or download a compressed copy from top of the page. Instructions on how to install it manually can be found here (Still to be done)[Wiki](https://github.com/Lmnoppy/Scrippy/wiki "Scrippy Wiki").

## How to use Scrippy

// To be done, would be better if it was in the wiki
// The long and short of it is, right click an input box on a website, like username input or password input select scrippy -> then what ever option you would like - simple. 

## Current Issues
The current context menu does not allow for Scrippy to be used on the URL bar. This is due to the limitation/sandbox of the web style plugins. 

Seems to be a bug when right clicking some input fields, the quick selections and favs do not work. [#22](https://github.com/Lmnoppy/Scrippy/issues/22 "On some input... #22")  

## Help
Although i am slowly building this myself as a learning experience, i'd appreciate help in pull requests, comments on the code, better ways to do things etc...

## On Going work

#### Refactor code:
Core code base needs to be refactored 

## Next realease  
Branch/code name: timeyWimey

#### Documentation:
*   How to install
*   How to use
*   Examples and demos

#### SQL:
*   Add more/better payloads to the popup menu
*   Decide what payloads should be in "quick sql" 

#### XSS:
*    Set Favorites in options/popup menu page
*    Click popup menu -> XSS payloads -> list of Payloads

#### Encoding:
*   Extend to other types of encoding

## Future plans

#### SQL Map intergration:
ON HOLD - Due to the sandbox that web extensions are placed in.
Branch/code name: RedRadius

*    Right click on input -> SQL Map here -> open SQL mapper - With current element and basic command inputed.
*    Get current element 
*    Open SQL Mapper
*    Input command         
