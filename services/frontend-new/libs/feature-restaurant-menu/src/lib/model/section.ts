export class Section {
    book_id: number;
    section_id: string;
    section_name:string

    static fromJson(json){ return Object.assign(Section.placeholder(), json); }
    static placeholder(){ return new Section(); }
}