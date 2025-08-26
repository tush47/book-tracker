import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { Book } from './books/entities/book.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL, // Supabase connection string
      // Fallback to individual config for local development
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432'),
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_NAME || 'booktracker',
      entities: [Book],
      synchronize: process.env.NODE_ENV !== 'production', // Only use in development
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
    }),
    BooksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
