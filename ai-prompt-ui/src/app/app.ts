import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AiService } from './ai.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AI Prompt Generator');
  
  promptText: string = '';
  responseText: string = '';
  loading: boolean = false;

  constructor(private aiService: AiService) {}

  submitPrompt() {
    if (!this.promptText.trim()) {
      return;
    }
    
    this.loading = true;
    this.responseText = '';
    
    this.aiService.sendPrompt(this.promptText).subscribe({
      next: (res) => {
        this.responseText = res.response || 'No response received';
        this.loading = false;
      },
      error: (err) => {
        this.responseText = 'Error occurred: ' + (err.message || 'Unknown error');
        this.loading = false;
      }
    });
  }
}
