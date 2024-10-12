import {defineComponent} from "vue";

const CustomInput = defineComponent({
    name: "inputCustom",
    props: ['inputReturnValue'],
    emits: ['update:inputReturnValue'],
    setup(props, {slots, emit}) {
        return () => (
            <>
                <input
                    placeholder={slots.default?.()[0].children}
                    type={"text"}
                    onInput={(value) => {
                        emit('update:inputReturnValue', (value.target as HTMLInputElement).value)
                    }}></input>
            </>
        );
    },
})

export default CustomInput;