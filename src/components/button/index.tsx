import style from "./Button.module.scss";

interface Props {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

function Button({ text, type, onClick }: Props) {
  return (
    <button type={type} className={style.button} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
