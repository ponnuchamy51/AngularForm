import { Component, OnInit } from '@angular/core';
import {NgForm, NgModelGroup} from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contries: any[];
  constructor() {
    this.contries = [
      {
        id: 1,
        name: "India"
      },
      {
        id: 2,
        name: "Australia"
      },
      {
        id: 3,
        name: "Malaysia"
      }
    ]
   }

  ngOnInit() {
  }

  submit(form) {
    console.log(form.value)
  }

}
