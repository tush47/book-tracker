import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';
import { CreateBookDto } from './dto/create-book.dto';
export declare class BooksService {
    private booksRepository;
    constructor(booksRepository: Repository<Book>);
    create(createBookDto: CreateBookDto): Promise<Book>;
    findAll(): Promise<Book[]>;
}
