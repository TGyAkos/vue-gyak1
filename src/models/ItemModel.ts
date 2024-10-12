import type {IItem} from "@/types/IItem";

export class ItemModel implements IItem {
    id: number = 0
    price: number = 0
    productName: string = ""
    quantity: number = 0

    constructor() {
    }

    public toString = (): string => {
        return `Item: id: ${this.id}, price: ${this.price}, productName: ${this.productName}, quantity: ${this.quantity}`
    }
}