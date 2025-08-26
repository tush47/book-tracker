# Supabase Setup Guide for Book Tracker App

## 🚀 Quick Start

### 1. Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up or log in
3. Click "New Project"
4. Choose your organization
5. Enter project details:
   - **Name**: `book-tracker-app`
   - **Database Password**: Choose a strong password
   - **Region**: Choose closest to you
6. Click "Create new project"
7. Wait for the project to be created (2-3 minutes)

### 2. Get Your Database Connection Details

1. In your Supabase dashboard, go to **Settings** → **Database**
2. Scroll down to **Connection string**
3. Copy the **URI** connection string
4. It will look like: `postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres`

### 3. Configure Your Backend

Create a `.env` file in the `backend` directory:

```bash
cd backend
```

Create `.env` file with your Supabase connection:

```env
# Supabase Configuration
DATABASE_URL=postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres

# Backend Configuration
PORT=3000
NODE_ENV=development
```

**Replace the placeholders:**
- `[YOUR-PASSWORD]`: The database password you set
- `[YOUR-PROJECT-REF]`: Your project reference (found in the URL)

### 4. Test the Connection

```bash
cd backend
npm run start:dev
```

You should see the NestJS application start without database connection errors.

### 5. Create the Database Table

The table will be created automatically when you first add a book, but you can also create it manually in the Supabase dashboard:

1. Go to **Table Editor** in your Supabase dashboard
2. Click **New Table**
3. Table name: `books`
4. Columns:
   - `id` (int8, primary key, auto-increment)
   - `title` (varchar, not null)
   - `author` (varchar, not null)
   - `createdAt` (timestamptz, default: now())
   - `updatedAt` (timestamptz, default: now())

### 6. Start Your Application

```bash
# Terminal 1: Start Backend
cd backend
npm run start:dev

# Terminal 2: Start Frontend
cd frontend
npm run dev
```

## 🔧 Environment Variables

### Backend (.env)
```env
# Supabase Database
DATABASE_URL=postgresql://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres

# Application
PORT=3000
NODE_ENV=development
```

## 📊 Supabase Dashboard Features

Once set up, you can use these Supabase features:

### Table Editor
- View all your books
- Edit data directly
- See table structure

### SQL Editor
- Run custom queries
- View query results
- Export data

### API Documentation
- View auto-generated API docs
- Test endpoints directly

## 🔒 Security Features

Supabase provides:
- **Row Level Security (RLS)**: Control access to data
- **Authentication**: Built-in auth system
- **Real-time subscriptions**: Live data updates
- **Backup**: Automatic backups

## 🚨 Troubleshooting

### Connection Issues
1. **Check your DATABASE_URL**: Make sure it's correct
2. **Verify password**: Ensure the password is correct
3. **Check project status**: Make sure your project is active

### SSL Issues
- Supabase requires SSL in production
- The configuration handles this automatically

### Table Not Found
- The table will be created automatically on first use
- Or create it manually in the Table Editor

## 🎯 Benefits of Using Supabase

1. **Managed Database**: No need to manage PostgreSQL yourself
2. **Dashboard**: Visual interface for your data
3. **Real-time**: Built-in real-time subscriptions
4. **Authentication**: Ready-to-use auth system
5. **API**: Auto-generated REST API
6. **Backups**: Automatic backups
7. **Scaling**: Handles scaling automatically

## 📈 Next Steps

Once your basic app is working, you can explore:
- **Real-time subscriptions**: Live updates when data changes
- **Authentication**: Add user login/signup
- **Row Level Security**: Control data access
- **Storage**: Add book cover images
- **Edge Functions**: Serverless functions
