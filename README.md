# Book Tracker App

A full-stack application for tracking your book collection, built with Next.js, NestJS, and PostgreSQL.

## Features

- Add new books with title and author
- View all books in your collection
- Modern, responsive UI with TailwindCSS
- RESTful API with validation
- PostgreSQL database for data persistence

## Tech Stack

- **Frontend**: Next.js 14, TypeScript, TailwindCSS
- **Backend**: NestJS, TypeScript, TypeORM
- **Database**: Supabase (PostgreSQL)
- **Validation**: class-validator, class-transformer

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Supabase account (free tier available)

## Setup Instructions

### 1. Database Setup (Supabase)

Follow the detailed setup guide in [SUPABASE_SETUP.md](./SUPABASE_SETUP.md)

**Quick steps:**
1. Create a Supabase project at [https://supabase.com](https://supabase.com)
2. Get your database connection string
3. Create `.env` file in the backend directory with your connection details

### 2. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create environment file with your Supabase connection
# Copy your DATABASE_URL from Supabase dashboard
echo "DATABASE_URL=postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres
PORT=3000
NODE_ENV=development" > .env

# Start the development server
npm run start:dev
```

The backend will be available at `http://localhost:3000`

### 3. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

The frontend will be available at `http://localhost:3001`

## API Endpoints

- `GET /books` - Get all books
- `POST /books` - Add a new book

### Example POST request:
```json
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald"
}
```

## Project Structure

```
book-tracker-app/
├── backend/
│   ├── src/
│   │   ├── books/
│   │   │   ├── entities/
│   │   │   ├── dto/
│   │   │   ├── books.controller.ts
│   │   │   ├── books.service.ts
│   │   │   └── books.module.ts
│   │   ├── app.module.ts
│   │   └── main.ts
│   └── package.json
├── frontend/
│   ├── src/
│   │   └── app/
│   │       └── page.tsx
│   └── package.json
└── README.md
```

## Development

### Backend Development
- The backend uses TypeORM for database operations
- Validation is handled by class-validator
- CORS is enabled for frontend communication

### Frontend Development
- Built with Next.js 14 App Router
- Uses TailwindCSS for styling
- Implements client-side state management with React hooks

## Troubleshooting

1. **Database Connection Issues**: 
   - Check your Supabase project status
   - Verify DATABASE_URL in `.env` file
   - Ensure your project is active
2. **Port Conflicts**: The backend runs on port 3000, frontend on 3001
3. **CORS Issues**: The backend has CORS enabled for localhost:3001
4. **Supabase Issues**: 
   - Check the [SUPABASE_SETUP.md](./SUPABASE_SETUP.md) guide
   - Verify your connection string format

## Next Steps

Potential enhancements:
- User authentication
- Book categories/tags
- Reading progress tracking
- Book ratings and reviews
- Search and filtering
- Book cover images
