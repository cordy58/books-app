export class Book {
    name: string;
    author: string;
    associations: string[];
    summary: string;

    constructor(name: string, author: string, associations: string[], summary: string) {
        this.name = name;
        this.author = author;
        this.associations = associations;
        this.summary = summary;
    }
}
