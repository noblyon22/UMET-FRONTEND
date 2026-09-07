# UMET — Ultimate Move Expense Tracker · Frontend

A React + TypeScript frontend for the Ultimate Move Expense Tracker (UMET) application.

## Tech Stack

- **React 18** with TypeScript
- **Vite** — build tool & dev server
- **React Router v6** — client-side routing
- **Axios** — HTTP client
- **Recharts** — data visualisation

## Getting Started

### Prerequisites

- Node.js >= 18
- The UMET backend running (default: `http://localhost:7980`)

### Installation

```bash
npm install
```

### Environment

Copy `.env.example` to `.env` and update the values:

```bash
cp .env.example .env
```

| Variable            | Description                    | Default                  |
| ------------------- | ------------------------------ | ------------------------ |
| `VITE_API_BASE_URL` | Backend base URL               | `http://localhost:7980`  |

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build

```bash
npm run build
```

## API Endpoints Consumed

| Domain        | Method | Path                                   |
| ------------- | ------ | -------------------------------------- |
| Auth          | POST   | `/api/auth/register`                   |
| Auth          | POST   | `/api/auth/login`                      |
| Auth          | POST   | `/api/auth/logout`                     |
| Auth          | GET    | `/api/auth/me`                         |
| Users         | GET    | `/api/users/me`                        |
| Users         | PATCH  | `/api/users/me`                        |
| Users         | POST   | `/api/users/me/change-password`        |
| Categories    | GET    | `/api/categories`                      |
| Categories    | POST   | `/api/categories`                      |
| Payment Methods | GET  | `/api/payment-methods`                 |
| Expenses      | GET    | `/api/expenses`                        |
| Expenses      | POST   | `/api/expenses`                        |
| Expenses      | GET    | `/api/expenses/:id`                    |
| Expenses      | PUT    | `/api/expenses/:id`                    |
| Expenses      | DELETE | `/api/expenses/:id`                    |
| Income        | GET    | `/api/income`                          |
| Income        | POST   | `/api/income`                          |
| Income        | GET    | `/api/income/:id`                      |
| Income        | PUT    | `/api/income/:id`                      |
| Income        | DELETE | `/api/income/:id`                      |
| Budgets       | GET    | `/api/budgets`                         |
| Budgets       | POST   | `/api/budgets`                         |
| Dashboard     | GET    | `/api/dashboard/summary`               |
| Dashboard     | GET    | `/api/dashboard/monthly`               |
| Dashboard     | GET    | `/api/dashboard/categories`            |
| Dashboard     | GET    | `/api/dashboard/budgets`               |
| Health        | GET    | `/health`                              |

## Project Structure

```
src/
├── assets/          # Images, icons, logos
├── components/      # Reusable UI components
│   ├── common/      # Button, Input, Select, Modal, Loader, EmptyState
│   ├── layout/      # Navbar, Sidebar, Header, PageLayout
│   ├── dashboard/   # Dashboard-specific widgets
│   ├── expenses/    # Expense components
│   ├── income/      # Income components
│   ├── budgets/     # Budget components
│   └── categories/  # Category components
├── context/         # React context providers
├── hooks/           # Custom React hooks
├── pages/           # Route-level page components
├── routes/          # Route definitions & guards
├── services/        # Axios API service modules
├── styles/          # Global CSS
├── types/           # TypeScript interfaces & types
└── utils/           # Utility helpers
```
