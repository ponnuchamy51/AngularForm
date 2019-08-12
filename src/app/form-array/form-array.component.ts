import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {
  form;
  constructor() {
    this.form = new FormGroup({
      topics: new FormArray([])
    })
   }
   ngOnInit() {
  }

   addTopics(control: HTMLInputElement)
   {
     console.log(control)
     console.log("KEY pressed");
     (this.form.get('topics') as FormArray).push(new FormControl(control.value ))
     control.value = ""
     console.log(this.form.value);

   }
   get topics()
   {
     return this.form.get('topics') as FormArray
   }

  
}
