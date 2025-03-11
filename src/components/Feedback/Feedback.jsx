import { BsEmojiSunglassesFill } from "react-icons/bs";
import Smile from "../Smile/Smile";
import css from "./Feedback.module.css";

export default function Feedback({ data: { good, neutral, bad }, total }) {
  const positiveFeedback = Math.round((good / (good + bad)) * 100);

  return (
    <div className={css.wrapper}>
      <p className={css.item}>
        <span>Good:</span> <span>{good}</span>
      </p>
      <p className={css.item}>
        <span>Neutral:</span> <span>{neutral}</span>
      </p>
      <p className={css.item}>
        <span>Bad:</span> <span>{bad}</span>
      </p>
      <p className={css.item}>
        <span>Total:</span> <span>{total}</span>
      </p>
      <p className={`${css.iconWrapper} ${css.item}`}>
        <span>Positive:</span>{" "}
        <span>
          <Smile total={positiveFeedback} />
          {good !== 0 ? positiveFeedback : "0"}%
        </span>
      </p>
    </div>
  );
}
