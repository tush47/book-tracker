#!/bin/bash

echo "🚀 Setting up Book Tracker App with Supabase..."

echo ""
echo "📋 Prerequisites:"
echo "1. Make sure you have a Supabase account"
echo "2. Create a new project at https://supabase.com"
echo "3. Get your database connection string"
echo ""

# Check if .env file exists
if [ -f "backend/.env" ]; then
    echo "✅ Backend .env file already exists"
else
    echo "📝 Creating backend .env file..."
    echo "Please enter your Supabase DATABASE_URL:"
    echo "Format: postgresql://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres"
    read -p "DATABASE_URL: " database_url
    
    if [ -z "$database_url" ]; then
        echo "❌ DATABASE_URL is required. Please run this script again."
        exit 1
    fi
    
    # Create .env file
    cat > backend/.env << EOF
# Supabase Configuration
DATABASE_URL=$database_url

# Backend Configuration
PORT=3000
NODE_ENV=development
EOF
    
    echo "✅ Backend .env file created"
fi

echo ""
echo "🎉 Setup complete! To start the application:"
echo ""
echo "1. Start the backend:"
echo "   cd backend && npm run start:dev"
echo ""
echo "2. Start the frontend (in a new terminal):"
echo "   cd frontend && npm run dev"
echo ""
echo "3. Open http://localhost:3001 in your browser"
echo ""
echo "📚 For detailed setup instructions, see SUPABASE_SETUP.md"
