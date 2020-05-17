import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggle,
  update,
  timeout,
  selectFocus,
  selectRest,
  selectInterval,
} from "./pokusSlice";
import styles from "./Pokus.module.css";

import Button from "./components/Button";
import CountDown from "../../CountDown";
import LightLayout from "./components/LightLayout";

export function Pokus() {
  const focus = useSelector(selectFocus);
  const rest = useSelector(selectRest);
  const interval = useSelector(selectInterval);
  const dispatch = useDispatch();

  // Could be used later to change number of lights,
  // for now it's hardcoded
  const numLights = 8;

  return (
    // TODO: when LightLayout is off, the Pokus is misaligned
    <>
      <div className={styles.lens}>
        <Button onClick={() => dispatch(toggle())} />
        <LightLayout
          rest={rest}
          numLights={numLights}
          interval={parseFloat(interval)}
          on={rest}
        />
        <LightLayout
          rest={rest}
          numLights={numLights}
          interval={parseFloat(interval)}
          on={focus}
        />
      </div>
      <div className={styles.shadow} />
      <CountDown
        initialTimeRemaining={rest ? interval / 5 : interval}
        focus={focus}
        rest={rest}
        focusing={focus || rest}
        handleChange={(event) => dispatch(update(event.target.value))}
        completeCallback={() => dispatch(timeout())}
      />
    </>
  );
}
