import { Component, OnInit } from '@angular/core';
import {NgForm, NgModelGroup} from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submit(form) {
    console.log(form.value)
  }

}
