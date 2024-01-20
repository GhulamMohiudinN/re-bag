import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }
}


// email:string='';
  // value: number = 42;
  // color: string;
  // anything='';
  // inputValue(val:string){
  //   console.warn(val);
  //   console.warn(this.email);
  //   if (val !== this.email){
  //     this.color='rgb(121,170,0)';
  //   }
  //   else {
  //     this.color='red';
  //   }
  // }