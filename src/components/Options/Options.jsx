import css from "./Options.module.css";

export default function Option({ onClick, totalFeedback }) {
  return (
    <div className={css.wrapper}>
      <button className={css.btn} onClick={() => onClick("good")}>
        Good
      </button>
      <button className={css.btn} onClick={() => onClick("neutral")}>
        Neutral
      </button>
      <button className={css.btn} onClick={() => onClick("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={css.btn} onClick={() => onClick("reset")}>
          Reset
        </button>
      )}
    </div>
  );
}
