import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  myForm: FormGroup;
  response: any;

  constructor(private fb: FormBuilder, private api: ApiService) {
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
