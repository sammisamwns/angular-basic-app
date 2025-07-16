# 📦 Full Stack Application Setup Guide

This guide helps you set up and run the full-stack project consisting of a **Flask backend** and an **Angular frontend**.

---

## 📁 Repository Links

* **Backend (Flask)**: [flask-api-basics](https://github.com/sammisamwns/flask-api-basics)
* **Frontend (Angular)**: [angular-basic-app](https://github.com/sammisamwns/angular-basic-app)

---

## 🛠️ Prerequisites

Ensure you have the following installed:

* Python 3.10+
* Node.js (v18+ recommended)
* Angular CLI (`npm install -g @angular/cli`)
* Git

---

## 📥 Step 1: Clone Both Repositories

```bash
# Clone the Flask backend
git clone https://github.com/sammisamwns/flask-api-basics.git

# Clone the Angular frontend
git clone https://github.com/sammisamwns/angular-basic-app.git
```

---

## 🚀 Step 2: Run Flask API (Backend)

```bash
cd flask-api-basics

# (Optional) Create a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install required dependencies
pip install -r requirements.txt

# Run the Flask API
flask run
```

📌 **Default URL:** [http://127.0.0.1:5000](http://127.0.0.1:5000)

---

## 🌐 Step 3: Run Angular App (Frontend)

In a **new terminal**:

```bash
cd angular-basic-app

# Install Angular dependencies
npm install

# Run the Angular development server
ng serve
```

📌 **Default URL:** [http://localhost:4200](http://localhost:4200)

---

## ✅ Notes

* Make sure Flask is running before accessing Angular — the frontend will try to make API calls to `http://localhost:5000`.
* CORS is already enabled in the Flask API (if not, install `flask-cors` and configure it).
* If you face issues with `*ngIf` or `formGroup`, ensure `CommonModule` and `ReactiveFormsModule` are correctly imported in your component or module files.

---