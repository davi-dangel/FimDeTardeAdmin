export class User{
    public Id: string
    public Name: string
    public Email: string
    public Password: string | null | undefined

    constructor(id: string | null, name: string, email: string, password: string | null | undefined) {
        this.Id = id
        this.Name = name
        this.Email = email
        this.Password = password
    }

}