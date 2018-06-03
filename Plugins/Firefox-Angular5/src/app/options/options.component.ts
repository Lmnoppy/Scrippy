import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule,} from "@angular/forms";

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {

  optionsform: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.optionsform = new FormGroup({

        menuItem1: new FormGroup({
          title1: new FormControl(),
          payload1: new FormControl()
        }),

        menuItem2: new FormGroup({
          title2: new FormControl(),
          payload2: new FormControl()
        })
    })

  }

}
