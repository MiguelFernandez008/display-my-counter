import React, { cloneElement, Fragment, isValidElement } from "react";
import { useCounter } from "./Logic";
import styles from "./style.module.scss";

const Counter = ({ CustomComponent }) => {
  const { counter, increment, decrement } = useCounter();

  if (CustomComponent !== undefined && !isValidElement(CustomComponent))
    return <p className={styles["ctr--error"]}>Error: Not a valid element</p>;

  if (CustomComponent)
    return cloneElement(CustomComponent, { counter, increment, decrement });

  return (
    <Fragment>
      <p className={styles["ctr--counter"]}>{counter}</p>
      <div className={styles["ctr--buttons"]}>
        <button
          className={styles["ctr--button"]}
          type="button"
          onClick={increment}
        >
          +
        </button>
        <button
          className={styles["ctr--button"]}
          type="button"
          onClick={decrement}
        >
          -
        </button>
      </div>
    </Fragment>
  );
};

export default Counter;
