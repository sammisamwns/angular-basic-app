import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user-form.component.html',
})
export class UserFormComponent {
  userForm: FormGroup;
  submitted = false;
  responseMsg = '';

  constructor(private fb: FormBuilder, private api: ApiService) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      city: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.userForm.valid) {
      this.api.submitUser(this.userForm.value).subscribe({
        next: (res) => {
          this.responseMsg = 'Form submitted successfully!';
        },
        error: (err) => {
          this.responseMsg = 'Error submitting form.';
          console.error(err);
        }
      });
    }
  }
} 