import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { AiService } from './ai.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, HttpClientTestingModule],
      providers: [AiService]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('AI Prompt Generator');
  });

  it('should have submitPrompt method', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(typeof app.submitPrompt).toBe('function');
  });
});
