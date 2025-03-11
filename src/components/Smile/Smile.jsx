import {
  BsEmojiSunglassesFill,
  BsEmojiNeutralFill,
  BsEmojiFrownFill,
} from "react-icons/bs";
import css from "./Smile.module.css";

export default function Smile({ total }) {
  if (total >= 75) {
    return <BsEmojiSunglassesFill className={css.icon} size={20} />;
  } else if (total >= 25) {
    return <BsEmojiNeutralFill className={css.icon} size={20} />;
  } else {
    return <BsEmojiFrownFill className={css.icon} size={20} />;
  }
}
