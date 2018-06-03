import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {

  constructor() { }

  ngOnInit() {

      browser.contextMenus.create({
          "id": "1"
          , "title": "Scrippy"
          , "contexts": ["all"]
        }
      );

      /**********Create Parent items 1 - 19**********/
      browser.contextMenus.create({
        "id": "1"
        , "title": "Scrippy"
        , "contexts": ["all"]
      });
      browser.contextMenus.create({
        "id": "2"
        , "title": "SQL"
        , "parentId": "1"
        , "contexts": ["all"]
      });
      browser.contextMenus.create({
        "id": "4"
        , "title": "XSS"
        , "parentId": "1"
        , "contexts": ["all"]
      });
      browser.contextMenus.create({
        "id": "8"
        , "title": "Command"
        , "parentId": "1"
        , "contexts": ["all"]
      });
      browser.contextMenus.create({
        "id": "3"
        , "title": "Favourite Injections"
        , "parentId": "1"
        , "contexts": ["all"]
      });
      browser.contextMenus.create({
        "id": "6"
        , "title": "Encode"
        , "parentId": "1"
        , "contexts": ["all"]
      });
      browser.contextMenus.create({
        "id": "7"
        , "title": "Decode"
        , "parentId": "1"
        , "contexts": ["all"]
      });
      /**********SQL 20-29**********/
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
    /*  /!**********Favourite Injections 30-39**********!/
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
      browser.contextMenus.create({
        "id": "35"
        , "title": items.storedMyFav6Title
        , "parentId": "3"
        , "contexts": ["all"]
      });
      browser.contextMenus.create({
        "id": "36"
        , "title": items.storedMyFav7Title
        , "parentId": "3"
        , "contexts": ["all"]
      });
      browser.contextMenus.create({
        "id": "37"
        , "title": items.storedMyFav8Title
        , "parentId": "3"
        , "contexts": ["all"]
      });
      browser.contextMenus.create({
        "id": "38"
        , "title": items.storedMyFav9Title
        , "parentId": "3"
        , "contexts": ["all"]
      });
      browser.contextMenus.create({
        "id": "39"
        , "title": items.storedMyFav10Title
        , "parentId": "3"
        , "contexts": ["all"]
      });*/
      /**********Encode 40-49**********/
      browser.contextMenus.create({
        "id": "40"
        , "title": "Base64"
        , "parentId": "6"
        , "contexts": ["selection"]
      });
      browser.contextMenus.create({
        "id": "41"
        , "title": "URL"
        , "parentId": "6"
        , "contexts": ["selection"]
      });
      /**********XSS 50-59**********/
      browser.contextMenus.create({
        "id": "50"
        , "title": "Alert"
        , "parentId": "4"
        , "contexts": ["all"]
      });
      browser.contextMenus.create({
        "id": "51"
        , "title": "XSS 2"
        , "parentId": "4"
        , "contexts": ["all"]
      });
      browser.contextMenus.create({
        "id": "52"
        , "title": "XSS 3"
        , "parentId": "4"
        , "contexts": ["all"]
      });
      browser.contextMenus.create({
        "id": "53"
        , "title": "XSS 4"
        , "parentId": "4"
        , "contexts": ["all"]
      });
      browser.contextMenus.create({
        "id": "54"
        , "title": " XSS 5"
        , "parentId": "4"
        , "contexts": ["all"]
      });
      /**********Decode 60-69**********/
      browser.contextMenus.create({
        "id": "60"
        , "title": "Decode Base64"
        , "parentId": "7"
        , "contexts": ["selection"]
      });
      browser.contextMenus.create({
        "id": "61"
        , "title": "Decode URL"
        , "parentId": "7"
        , "contexts": ["selection"]
      });
    }
}
