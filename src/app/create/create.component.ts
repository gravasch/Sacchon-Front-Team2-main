import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})

export class CreateComponent implements OnInit {
  response: any;
  createForm!: FormGroup;



  ngOnInit(): void {
    this.createForm = this.fb.group({
      username: [''],
      first_name: [''],
      last_name: [''],
      address: [''],
      city: [''],
      birth_date: [''],
      diabetes_type: ['Type 1']
    });
  }

  constructor(
    private service: UserService,
    private fb: FormBuilder,
    private http: HttpClient
  ) { }


  createUser() {
    const data = this.createForm.value;
    this.http.post('http://localhost:9001/patient', data).subscribe({
      next: res => {
        this.response = res;
        this.createForm.reset();
      },
      error: err => console.error(err)
    });
  }


  resetForm() {
    this.createForm.reset();
    this.createForm.markAsPristine();
    this.createForm.markAsUntouched();
  }

  get username() {
    return this.createForm.get('username');
  }

  get first_name() {
    return this.createForm.get('first_name');
  }

  get last_name() {
    return this.createForm.get('last_name');
  }

  get address() {
    return this.createForm.get('address');
  }

  get city() {
    return this.createForm.get('city');
  }

  get birth_date() {
    return this.createForm.get('birth_date');
  }

  get diabetes_type() {
    return this.createForm.get('diabetes_type');
  }

}
