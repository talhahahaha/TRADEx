1# TRADEx

TRADEx is a full-stack trading platform project with a modular architecture, featuring a backend API, a React-based frontend landing site, and a React dashboard for authenticated users. The project supports user authentication, holdings, positions, and order management.

## Tech Stack

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (via Mongoose)
  - JWT (jsonwebtoken) for authentication
  - bcryptjs for password hashing
  - dotenv for environment variable management
  - CORS, body-parser

- **Frontend (Landing Page):**
  - React
  - React Router DOM
  - Bootstrap (for UI styling)

- **Dashboard:**
  - React
  - React Router DOM
  - Axios (for API requests)
  - Material UI (MUI) for UI components
  - Chart.js & react-chartjs-2 for data visualization
  - @emotion/react & @emotion/styled for styling

## Project Structure

```
TRADEx/
├── backend/      # Node.js/Express API, MongoDB models, auth
├── frontend/     # React landing page (public site)
├── dashboard/    # React dashboard for logged-in users
```

### Backend
- `index.js`: Main server file, API endpoints for holdings, positions, orders, and user authentication
- `model/`: Mongoose models (Holdings, Positions, Orders, User)
- `schemas/`: Mongoose schemas
- `.env`: Environment variables (MongoDB URI, JWT secret, etc.)

### Frontend
- `src/landing_page/`: React components for landing, signup, about, products, pricing, support
- `src/index.js`: Routing setup

### Dashboard
- `src/components/`: Dashboard React components (Holdings, Orders, Positions, WatchList, etc.)
- `src/index.js`: Dashboard entry point and routing

## Setup Instructions

### Prerequisites
- Node.js & npm
- MongoDB (local or cloud)

### Backend
1. `cd backend`
2. `npm install`
3. Create a `.env` file with:
   ```
   MONGO_URL=mongodb://localhost:27017/tradex
   JWT_SECRET=your_jwt_secret
   PORT=3002
   ```
4. `npm start`

### Frontend
1. `cd frontend`
2. `npm install`
3. `npm start`

### Dashboard
1. `cd dashboard`
2. `npm install`
3. `npm start`

## Usage
- Visit the frontend landing page at `http://localhost:3000/`
- Sign up via the signup page
- Log in to access the dashboard (http://localhost:3001/ or as configured)
- The backend API runs on `http://localhost:3002/`

## Features
- User registration and login (JWT-based)
- Holdings, positions, and orders management
- Interactive dashboard with charts and Material UI
- Modular, scalable codebase

## Author
- talhahahaha

