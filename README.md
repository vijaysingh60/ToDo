# Task Management Application

## Overview
This Task Management Application is a full-stack project built using **React (TypeScript) for the frontend** and **Node.js (Express, TypeScript) for the backend**. The application allows users to **create, read, update, and delete tasks**, navigate tasks using a **category slider**, and automatically handle **task timeouts**. The backend also features an **async API integration** for fetching streaming data.

Deployment Link - https://to-do-lyart-sigma.vercel.app/

---
## 🎯 **Features**
### ✅ **Frontend (React **
- **Task List**: Displays all tasks.
- **Task Item**: Shows individual task details.
- **Task Form**: Add/edit tasks.
- **Category Slider**: Allows switching between different categories (**"To Do", "In Progress", "Completed", "Timeout"**).
- **State Management**: Utilizes React Hooks & Context API.
- **API Integration**:
  - Fetches data using `async/await`.
  - Handles timeouts and API errors gracefully.
- **Styling**: Custom CSS/Tailwind.
- **Form Handling**: Implements validation and error handling.
- **Timeout Handling**: Moves tasks to the **"Timeout"** category when they exceed their allowed time limit.

### ✅ **Backend (Node.js + Express + TypeScript)**
- **Endpoints:**
  - `GET /tasks` → Fetch all tasks.
  - `GET /tasks/:id` → Fetch a task by ID.
  - `POST /tasks` → Create a new task.
  - `PUT /tasks/:id` → Update a task by ID.
  - `DELETE /tasks/:id` → Delete a task by ID.
  - `GET /streaming` → Fetch streaming data from an external API.
- **Database**:
  - Uses **MongoDB** (or in-memory DB for simplicity).
  - Stores task information and monitors timeout durations.
- **Error Handling**: Implements error validation for all endpoints.
- **Async API Challenge**:
  - Fetches external streaming data (e.g., **Twitch API**).
  - Merges the data with task details.

## 🚀 **Installation & Setup**

### 📌 **Prerequisites**
Ensure you have the following installed:
- **Node.js** (v16+ recommended)
- **npm** or **yarn**
- **MongoDB** (if using a database)

### 🔧 **Backend Setup**
1. Clone the repository:
   ```sh
   git clone https://github.com/vijaysingh60/ToDo.git
   cd ToDo/backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a **.env** file and configure:
   ```env
   PORT=5000
   MONGO_URI=your_mongo_connection_string
   FRONTEND_URL=http://localhost:5173
   ```
4. Start the backend server:
   ```sh
   npm run dev
   ```

### 🔧 **Frontend Setup**
1. Navigate to the frontend folder:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a **.env** file and configure:
   ```env
   VITE_API_URL=http://localhost:5000
   ```
4. Start the frontend development server:
   ```sh
   npm run dev
   ```



---
## 👨‍💻 **Contributors**
- **Vijay Singh** – [GitHub](https://github.com/vijaysingh60)

---
## 📜 **License**
This project is licensed under the **MIT License**.


