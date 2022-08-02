import { useState } from "react";
import Button from "components/Button";
import Input from "components/Input/Input";
import Typography from "components/Typography";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { decrement, increment, incrementByAmount, selectCount } from "reducers/counter";
import styles from "./Present.module.css";

export default function Present() {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const [incrementAmount, setIncrementAmount] = useState<number>(0);
  return (
    <div className={styles.containerStyle}>
      <Typography variant="h1">
        The current number is
        {count}
      </Typography>
      <Input
        name="amount"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(Number(e.target.value))}
        type="number"
      />
      <Button onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}>Increment by amount</Button>
      <Button variant="primary" size="small" outline onClick={() => dispatch(increment())}>
        Increment
      </Button>
      <Button variant="secondary" size="large" pill onClick={() => dispatch(decrement())}>
        Decrement
      </Button>
    </div>
  );
}
