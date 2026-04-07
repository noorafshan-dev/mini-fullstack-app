# Mini Full-Stack App (Excel → DB → CRUD)

## Overview

This project is a minimal full-stack application that ingests data from an Excel file, stores it in a database, and provides a complete CRUD interface via REST APIs and a simple frontend UI.

The application allows users to:

* View data imported from Excel
* Add new entries
* Edit existing entries
* Delete entries

---

##  Tech Stack

### Backend

* Node.js + Express
* SQLite (database)
* XLSX (Excel parsing)
* Swagger (API documentation)

### Frontend

* React + Vite
* Axios

---

## 📂 Project Structure

```
mini-fullstack-app/
│
├── backend/
├── frontend/
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```
git clone <your-repo-link>
cd mini-fullstack-app
```

---

##  Backend Setup

```
cd backend
npm install
npm start
```

Server will run on:

```
http://localhost:5000
```

---

## 🌐 Frontend Setup

```
cd frontend
npm install
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

## 📊 Excel Data Ingestion

* A sample Excel file (`sample.xlsx`) is provided in the backend.
* The file is parsed using the `xlsx` library.
* Data is converted into JSON and stored in SQLite.

Each row is stored as:

```
{
  id: number,
  data: { ...rowValues }
}
```

---

## 🗄️ Database Schema

Table: `situations`

| Column | Type                  |
| ------ | --------------------- |
| id     | INTEGER (Primary Key) |
| data   | TEXT (JSON string)    |

---

##  API Endpoints

| Method | Endpoint       | Description       |
| ------ | -------------- | ----------------- |
| GET    | /situation     | Get all records   |
| GET    | /situation/:id | Get record by ID  |
| POST   | /situation     | Create new record |
| PUT    | /situation/:id | Update record     |
| DELETE | /situation/:id | Delete record     |
| GET    | /health        | Health check      |

---

## 📘 API Documentation (Swagger)

Swagger UI is available at:

```
http://localhost:5000/api-docs
```

You can:

* View all endpoints
* Test APIs directly from the browser

---

## 🎨 Frontend Features

* Display data in a clean table format
* Add new records via input form
* Edit existing records
* Delete records
* Responsive and simple UI

---

##  Features Implemented

* Excel → Database ingestion
* Full CRUD APIs
* JSON-based data storage
* Swagger API documentation
* Interactive frontend UI

---

## 🤖 AI Usage Log

### Tools Used

* ChatGPT

---

### Prompt 1

"Generate Express CRUD APIs for SQLite with JSON column"

**Usage:**

* Used as a base structure for backend APIs
* Modified controller logic and database integration

---

### Prompt 2

"How to parse Excel file in Node.js using xlsx"

**Usage:**

* Used to implement Excel ingestion logic
* Customized to match database schema

---

### Prompt 3

"Add edit functionality in React CRUD app"

**Usage:**

* Used to implement update feature in frontend
* Adjusted state management and UI behavior

---

### What was written manually

* Project structure
* API integration logic
* UI table layout
* Swagger configuration adjustments

---

## 🧠 Design Decisions

* **SQLite** chosen for simplicity and quick setup
* **JSON column** used for flexible schema
* **Node.js + Express** for rapid backend development
* **React + Vite** for fast frontend setup

---

## 🚀 Future Improvements

* Add advanced validation
* Improve UI styling (Tailwind/Material UI)
* Pagination and search
* Authentication & authorization

---

## 👤 Author

Noorafshan Jawaid
(Frontend Developer | React.js)

---
