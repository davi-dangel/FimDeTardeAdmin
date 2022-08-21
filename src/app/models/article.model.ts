export class Article{
    public Title : string
    public Author : string
    public Text: string[]

    constructor(title: string, author: string, text: string[]){
        this.Title = title
        this.Author = author
        this.Text = text
    }
}