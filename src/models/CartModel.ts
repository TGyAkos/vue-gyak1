import {ItemModel} from "@/models/ItemModel";

export class CartModel {
    idCounter: number = 0
    items: Array<ItemModel> = new Array<ItemModel>()
    currentTotal: number = 0

    constructor() {
    }

    getItems() {
        return this.items
    }

    addItem(item: ItemModel) {
        item = this.convertToObject(item)
        item.id = this.idCounter
        this.items.push(item as ItemModel)
        this.currentTotal += item.price * item.quantity
        this.idCounter++
    }

    removeItem(item: ItemModel) {
        this.items = this.items.delete(itemId)
        item = this.convertToObject(item)
        this.currentTotal -= item.price
    }

    convertToObject(item: any): ItemModel {
        return Object.assign(new ItemModel(), JSON.parse(JSON.stringify(item.value))) as ItemModel
    }
}