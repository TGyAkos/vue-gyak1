export class UserModel {
    id: number = 0
    name: string = ""
    email: string = ""
    phoneNumber: number
    age: number

    public toString = (): string => {
        return `
            User: id: ${this.id}, 
            name: ${this.name}, 
            email: ${this.email}, 
            phoneNumber: ${this.phoneNumber}, 
            age: ${this.age}
        `
    }
}