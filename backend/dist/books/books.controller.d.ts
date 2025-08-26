import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './entities/book.entity';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    create(createBooksDto: CreateBookDto): Promise<Book>;
    findAll(): Promise<Book[]>;
}
