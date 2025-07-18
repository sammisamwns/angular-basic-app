import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Api } from './services/api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('flask-integrated-app');
  myForm: FormGroup;
  response: any;

  constructor(private fb: FormBuilder, private api: Api) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    const name = this.myForm.value.name;
    const email = this.myForm.value.email;

    this.api.getSubmission(name, email).subscribe({
      next: (res) => this.response = res,
      error: (err) => this.response = err.error
    });
  }
}
