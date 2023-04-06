/* eslint-disable i18next/no-literal-string */
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';
import { Button } from '@/shared/ui/Button';

export const Counter = () => {
    const counterValue = useCounterValue();
    const { increment, decrement } = useCounterActions();

    const incrementHandle = () => {
        increment();
    };
    const decrementHandle = () => {
        decrement();
    };
    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button
                data-testid="increment-btn"
                onClick={incrementHandle}
            >
                Increment
            </Button>
            <Button
                data-testid="decrement-btn"
                onClick={decrementHandle}
            >
                Decrement
            </Button>
        </div>
    );
};

export default Counter;
