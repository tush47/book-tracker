// import { Controller, Get, Post, Body } from '@nestjs/common';
// import { BooksService } from './books.service';
// import { CreateBookDto } from './dto/create-book.dto';
// import { Book } from './entities/book.entity';

// @Controller('books')
// export class BooksController {
//   constructor(private readonly booksService: BooksService) {}

//   @Post()
//   async create(@Body() createBookDto: CreateBookDto): Promise<Book> {
//     return await this.booksService.create(createBookDto);
//   }

//   @Get()
//   async findAll(): Promise<Book[]> {
//     return await this.booksService.findAll();
//   }
// }

import {Get,Post, Body, Controller} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import {Book} from './entities/book.entity'

    @Controller('books')
    export class BooksController {
        constructor(private readonly booksService: BooksService){}

        @Post()
        async create(@Body() createBooksDto: CreateBookDto): Promise<Book>{
            return await this.booksService.create(createBooksDto);
        }
        @Get()
        async findAll(): Promise<Book[]>{
            return await this.booksService.findAll();
        }
    }

