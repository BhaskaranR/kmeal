export class Book {
    book_id: number;
    book_name: string;
    is_active: number;
    sections:number[];
    static fromJson(json){ return Object.assign(Book.placeholder(), json); }
    static placeholder(){ return new Book(); }
}