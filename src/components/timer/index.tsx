import { useEffect, useRef, useState } from "react";
import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/ITask";
import Button from "../button";
import Clock from "./clock";
import style from "./timer.module.scss";

interface Props {
  selected: ITask | undefined;
  endTask: () => void;
}

export default function Timer({ selected, endTask }: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected]);

  function regressive(count: number = 0) {
    setTimeout(() => {
      if (count > 0) {
        setTime(count - 1);
        return regressive(count - 1);
      }
      endTask();
    }, 1000);
  }

  return (
    <div className={style.timer}>
      <p className={style.title}>Escolhe um card e inicie o cronômetro.</p>
      <div className={style.clockWrapper}>
        <Clock time={time} />
      </div>
      <Button text="Iniciar" onClick={() => regressive(time)} />
    </div>
  );
}
