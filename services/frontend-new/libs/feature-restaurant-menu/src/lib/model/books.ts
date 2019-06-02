export class Book {
    book_id: number;
    book_name: string;
    is_active: boolean;
    static fromJson(json){ return Object.assign(Book.placeholder(), json); }
    static placeholder(){ return new Book(); }
}