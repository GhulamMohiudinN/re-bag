import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  form: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, this.customEmailValidator.bind(this)])
  });

  getError(control: any): string {
    if (control.error?.required && control.touched) {
      return 'This field is required';
    } else if (control.errors?.emailError && control.touched) {
      return 'Please enter a valid email address!';
    } else {
      return '';
    }
  }

  customEmailValidator(control: AbstractControl) {
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/;
    const value = control.value;
    if (!pattern.test(value) && control.touched) {
      return { emailError: true };
    } else {
      return null;
    }
  }
  value:any=true;

  // selectedRadioValue: string = 'email'; 
  // email: boolean = true;
  // display: boolean = false;

  // getInfo(val: string): void {
  //   console.warn(val);
  //   this.selectedRadioValue = val;
  //   this.email = val !== 'number';
  //   this.display = val === 'number';
  // }


  show:boolean=true;
  display:boolean = false;
  getInfo(val: string): void {
    console.warn(val);
    this.show=!true;
    this.display = !false;
  }
 
    constructor() { }

  ngOnInit(): void {
  }
}

