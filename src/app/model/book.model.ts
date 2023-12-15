export class Book {
    name: string;
    author: string;
    associations: string[];
    summary: string;
    link: string;

    constructor(name: string, author: string, associations: string[], summary: string, link: string) {
        this.name = name;
        this.author = author;
        this.associations = associations;
        this.summary = summary;
        this.link = link;
    }
}
