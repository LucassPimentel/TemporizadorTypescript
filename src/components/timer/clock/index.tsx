import style from "./clock.module.scss";

interface Props {
  time: number | undefined;
}

export default function Clock({ time = 0 }: Props) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [dozensMinute, unitMinute] = String(minutes).padStart(2, "0");
  const [dozensSeconds, unitSeconds] = String(seconds).padStart(2, "0");
  return (
    <>
      <span className={style.clockNumber}>{dozensMinute}</span>
      <span className={style.clockNumber}>{unitMinute}</span>
      <span className={style.clockSplit}>:</span>
      <span className={style.clockNumber}>{dozensSeconds}</span>
      <span className={style.clockNumber}>{unitSeconds}</span>
    </>
  );
}
