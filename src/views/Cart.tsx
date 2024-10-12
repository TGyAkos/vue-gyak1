import {defineComponent, inject, provide, Ref, ref} from "vue";
import {CartModel} from "@/models/CartModel";
import CustomInput from "@/components/CustomInput";
import {ItemModel} from "@/models/ItemModel";

const TsxCart = defineComponent({
    name: "tsxCart",
    setup() {
        const cart: Ref<CartModel> = ref(new CartModel());
        const display: Ref<boolean> = ref(false)
        let deletedCart: Ref<boolean> = ref(false)

        const clearCart = () => {
            cart.value = new CartModel();
            deletedCart.value = true
        }

        provide("cart", {
            cart,
            clearCart,
        });

        return () => (
            <div>
                <h1>Cart</h1>
                <TsxCartInput/>
                <TsxCartItems allItems={cart.value.getItems()} v-model={deletedCart}/>
                {cart.value.currentTotal != 0 ? <>
                    {display.value = true}
                    <p>Current total: {cart.value.currentTotal}</p>
                    <button style={`display: ${display.value}`} onClick={() => {
                        clearCart()
                    }}>Delete all
                    </button>
                </> : <></>}
            </div>
        )
    }
})

const TsxCartInput = defineComponent({
    name: "tsxCartInput",
    setup() {
        const {cart, clearCart} = inject("cart") as {
            cart: Ref<CartModel>;
            clearCart: () => void;
        }

        const Item = ref(new ItemModel())

        return () => (
            <>
                <div>Im cart input</div>
                <CustomInput inputReturnValue={Item.value.productName}
                             onUpdate:inputReturnValue={(value) => Item.value.productName = value}
                >
                    Product Name
                </CustomInput>
                <br/>
                <CustomInput inputReturnValue={Item.value.quantity}
                             onUpdate:inputReturnValue={(value) => Item.value.quantity = +value}
                >
                    Quantity
                </CustomInput>
                <br/>
                <CustomInput inputReturnValue={Item.value.price}
                             onUpdate:inputReturnValue={(value) => Item.value.price = +value}
                >
                    Price
                </CustomInput>
                <div>{Item.value.toString()}</div>
                <button onClick={() => {
                    cart.value.addItem(Item)
                }}>
                    Add to cart
                </button>
            </>
        );
    }
})


const TsxCartItems = defineComponent({
    name: "tsxCartItem",
    props: ['allItems', 'modelValue'],
    emits: ['update:modelValue'],
    setup(props, {emit}) {
        return () => (
            <>
                {!props.modelValue.value ?
                    <ul>
                        {props.allItems.map((item) => {
                            return <li key={item.id}>{item.toString()}</li>
                        })}
                    </ul>
                    :
                    <>{emit('update:modelValue', false)}</>
                }
            </>

        );
    },

})

export {TsxCart}