# AI Prompt UI

A modern Angular-based frontend application that provides a clean interface for interacting with AI models through a Flask backend.

## Features

- ✨ **Modern UI Design**: Clean, responsive interface with gradient backgrounds
- 📝 **Prompt Input**: Large textarea for entering AI prompts
- ⚡ **Real-time Loading**: Animated spinner during AI processing
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile devices
- 🔄 **Error Handling**: Graceful error display for failed requests
- 🎨 **Beautiful Styling**: Modern CSS with smooth animations

## Prerequisites

- Node.js (v16 or higher)
- Angular CLI
- Flask backend running on `http://localhost:5000`

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Open your browser:**
   Navigate to `http://localhost:4200`

## Backend Integration

This frontend expects a Flask backend running on `http://localhost:5000` with the following endpoint:

```python
@app.route('/generate', methods=['POST'])
def generate():
    data = request.get_json()
    prompt = data.get("prompt", "")
    
    # Your AI processing logic here
    response = process_ai_prompt(prompt)
    
    return jsonify({
        'response': response
    })
```

## Usage

1. Enter your prompt in the textarea
2. Click "Generate Response" 
3. Wait for the AI to process your request
4. View the generated response

## Development

- **Build for production:** `npm run build`
- **Run tests:** `npm test`
- **Watch for changes:** `npm run watch`

## Project Structure

```
src/app/
├── app.ts              # Main component with form logic
├── app.html            # Template with form UI
├── app.css             # Styling for the interface
├── app.config.ts       # Angular configuration
├── ai.service.ts       # HTTP service for API calls
└── app.spec.ts         # Unit tests
```

## Technologies Used

- **Angular 20**: Modern framework with standalone components
- **TypeScript**: Type-safe development
- **RxJS**: Reactive programming for HTTP requests
- **CSS3**: Modern styling with gradients and animations
