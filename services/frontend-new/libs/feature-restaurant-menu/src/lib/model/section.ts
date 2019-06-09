export class Section {
    section_id: number;
    section_name:string;
    is_active:boolean;

    static fromJson(json){ return Object.assign(Section.placeholder(), json); }
    static placeholder(){ return new Section(); }
}