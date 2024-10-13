import {UserModel} from "@/models/UserModel";

export class UserListModel {
    idCounter: number = 0
    userModels: Array<UserModel> = new Array<UserModel>()

    addUser(user: UserModel) {
        user = this.convertToObject(user)
        user.id = this.idCounter
        user.phoneNumber = user.phoneNumber ?? 0
        this.userModels.push(user)
        this.idCounter++
    }

    convertToObject(user: UserModel): UserModel {
        return Object.assign(new UserModel(), JSON.parse(JSON.stringify(user))) as UserModel
    }
}