import { computed, nextTick, reactive, watch } from 'vue'

const counterData = reactive({
    count: 0,
    title: 'My Counter'
});

export const useCounter = () => {

    watch(() => counterData.count, (newValue, oldValue) => {
        if (newValue === 20) {
            alert('Congrats!  You reached 20!')
        }
    });

    const oddOrEven = computed(() => {
        return counterData.count % 2 === 0 ? 'even' : 'odd';
    });

    const increaseCounter = async (amount, e) => {
        counterData.count += amount
        await nextTick();
        console.log('Counter DOM update completed');

        // Alternative syntax uses callback.
        // nextTick(() => {
        //   console.log('Counter DOM update completed');
        // });
    }

    const decreaseCounter = (amount) => {
        counterData.count -= amount
    }

    return { counterData, oddOrEven, increaseCounter, decreaseCounter };
}